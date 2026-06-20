import { H as Hls } from './hls-vendor-dru42stk.js';

const attached = new WeakMap();

function prepare(video) {
  const stream = video.getAttribute('data-stream');
  if (!stream || attached.has(video)) {
    return;
  }

  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = stream;
    attached.set(video, true);
    return;
  }

  if (Hls && Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true
    });
    hls.loadSource(stream);
    hls.attachMedia(video);
    attached.set(video, hls);
  }
}

function play(video, cover) {
  prepare(video);
  if (cover) {
    cover.classList.add('is-hidden');
  }
  const result = video.play();
  if (result && typeof result.catch === 'function') {
    result.catch(function () {
      if (cover) {
        cover.classList.remove('is-hidden');
      }
    });
  }
}

document.querySelectorAll('.movie-player').forEach(function (video) {
  const shell = video.closest('.player-shell');
  const cover = shell ? shell.querySelector('.player-cover') : null;

  if (cover) {
    cover.addEventListener('click', function () {
      play(video, cover);
    });
  }

  video.addEventListener('click', function () {
    if (!attached.has(video)) {
      play(video, cover);
    }
  });

  video.addEventListener('play', function () {
    if (cover) {
      cover.classList.add('is-hidden');
    }
  });
});
