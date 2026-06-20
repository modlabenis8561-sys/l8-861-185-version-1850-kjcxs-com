(function () {
function initPlayer(options) {
  var video = document.querySelector(options.video);
  var button = document.querySelector(options.button);
  var cover = document.querySelector(options.cover);
  var stream = options.stream;
  var hls = null;
  var prepared = false;

  if (!video || !button || !stream) {
    return;
  }

  function attachStream() {
    if (prepared) {
      return;
    }
    prepared = true;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = stream;
    } else if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(stream);
      hls.attachMedia(video);
    } else {
      video.src = stream;
    }
  }

  function start() {
    attachStream();
    if (cover) {
      cover.classList.add('is-hidden');
    }
    var promise = video.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch(function () {});
    }
  }

  button.addEventListener('click', start);
  video.addEventListener('click', function () {
    if (video.paused) {
      start();
    } else {
      video.pause();
    }
  });
  video.addEventListener('play', function () {
    if (cover) {
      cover.classList.add('is-hidden');
    }
  });
  video.addEventListener('ended', function () {
    if (cover) {
      cover.classList.remove('is-hidden');
    }
  });
  window.addEventListener('pagehide', function () {
    if (hls) {
      hls.destroy();
    }
  });
}

window.initPlayer = initPlayer;
})();
