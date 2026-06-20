(function () {
  window.initMoviePlayer = function (sourceUrl) {
    var video = document.querySelector('[data-player-video]');
    var cover = document.querySelector('.player-cover');
    var startButtons = Array.prototype.slice.call(document.querySelectorAll('[data-player-start]'));
    var started = false;
    var hlsInstance = null;

    function playVideo() {
      var result = video.play();
      if (result && typeof result.catch === 'function') {
        result.catch(function () {});
      }
    }

    function bindSource() {
      if (!video || started) {
        return;
      }
      started = true;
      if (cover) {
        cover.classList.add('is-hidden');
      }
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = sourceUrl;
        video.addEventListener('loadedmetadata', playVideo, { once: true });
        playVideo();
        return;
      }
      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({ enableWorker: true });
        hlsInstance.loadSource(sourceUrl);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, playVideo);
        return;
      }
      video.src = sourceUrl;
      playVideo();
    }

    startButtons.forEach(function (button) {
      button.addEventListener('click', bindSource);
    });

    if (cover) {
      cover.addEventListener('click', bindSource);
    }

    if (video) {
      video.addEventListener('click', function () {
        if (!started) {
          bindSource();
          return;
        }
        if (video.paused) {
          playVideo();
        } else {
          video.pause();
        }
      });
    }

    window.addEventListener('pagehide', function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  };
})();
