(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('[data-search-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      var input = form.querySelector('input[name="q"]');
      if (!input || !input.value.trim()) {
        event.preventDefault();
        input && input.focus();
      }
    });
  });

  var slides = Array.prototype.slice.call(document.querySelectorAll('[data-hero-slide]'));
  var thumbs = Array.prototype.slice.call(document.querySelectorAll('[data-hero-thumb]'));
  var current = 0;
  function showSlide(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === current);
    });
    thumbs.forEach(function (thumb, i) {
      thumb.classList.toggle('is-active', i === current);
    });
  }
  thumbs.forEach(function (thumb, index) {
    thumb.addEventListener('click', function () {
      showSlide(index);
    });
  });
  if (slides.length) {
    showSlide(0);
    setInterval(function () {
      showSlide(current + 1);
    }, 5200);
  }

  document.querySelectorAll('[data-filter-form]').forEach(function (form) {
    var scope = document.querySelector(form.getAttribute('data-filter-form')) || document;
    var cards = Array.prototype.slice.call(scope.querySelectorAll('.movie-card'));
    var empty = document.querySelector('[data-filter-empty]');
    var run = function () {
      var keyword = (form.querySelector('[name="keyword"]') || {}).value || '';
      var year = (form.querySelector('[name="year"]') || {}).value || '';
      var type = (form.querySelector('[name="type"]') || {}).value || '';
      keyword = keyword.trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (card) {
        var haystack = [card.dataset.title, card.dataset.tags, card.dataset.region, card.dataset.genre].join(' ').toLowerCase();
        var ok = true;
        if (keyword && haystack.indexOf(keyword) === -1) ok = false;
        if (year && card.dataset.year !== year) ok = false;
        if (type && card.dataset.type !== type) ok = false;
        card.hidden = !ok;
        if (ok) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    };
    form.addEventListener('input', run);
    form.addEventListener('change', run);
    form.addEventListener('reset', function () {
      setTimeout(run, 0);
    });
    run();
  });
})();
