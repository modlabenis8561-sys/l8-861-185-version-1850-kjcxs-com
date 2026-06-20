function initMoviePlayer(streamUrl) {
  var video = document.getElementById('movie-player');
  var overlay = document.getElementById('player-overlay');
  var started = false;
  var hls = null;

  function attachSource() {
    if (started) return;
    started = true;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
    } else if (window.Hls && window.Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
    } else {
      video.src = streamUrl;
    }
  }

  function start() {
    attachSource();
    if (overlay) overlay.hidden = true;
    var promise = video.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch(function () {});
    }
  }

  if (overlay) overlay.addEventListener('click', start);
  video.addEventListener('click', function () {
    if (!started || video.paused) start();
  });
  video.addEventListener('play', function () {
    if (overlay) overlay.hidden = true;
  });
  window.addEventListener('beforeunload', function () {
    if (hls) hls.destroy();
  });
}
