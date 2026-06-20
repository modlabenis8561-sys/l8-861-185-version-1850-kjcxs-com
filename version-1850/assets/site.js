(function () {
  var toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(function (button) {
    button.addEventListener('click', function () {
      var panel = document.querySelector('.mobile-panel');
      if (panel) {
        panel.classList.toggle('hidden');
      }
    });
  });

  var slides = Array.prototype.slice.call(document.querySelectorAll('.visual-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.visual-dot'));
  var current = 0;

  function showSlide(index) {
    if (!slides.length) {
      return;
    }
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === current);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === current);
    });
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      showSlide(i);
    });
  });

  if (slides.length > 1) {
    setInterval(function () {
      showSlide(current + 1);
    }, 5200);
  }

  var searchInput = document.querySelector('[data-filter-input]');
  var categorySelect = document.querySelector('[data-filter-category]');
  var yearSelect = document.querySelector('[data-filter-year]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.movie-card'));
  var empty = document.querySelector('.no-results');

  function applyFilters() {
    if (!cards.length) {
      return;
    }
    var keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var category = categorySelect ? categorySelect.value : '';
    var year = yearSelect ? yearSelect.value : '';
    var visible = 0;

    cards.forEach(function (card) {
      var haystack = [
        card.dataset.title,
        card.dataset.genre,
        card.dataset.region,
        card.dataset.type,
        card.dataset.category,
        card.dataset.year
      ].join(' ').toLowerCase();
      var matchedKeyword = !keyword || haystack.indexOf(keyword) !== -1;
      var matchedCategory = !category || card.dataset.category === category;
      var matchedYear = !year || card.dataset.year === year;
      var matched = matchedKeyword && matchedCategory && matchedYear;
      card.style.display = matched ? '' : 'none';
      if (matched) {
        visible += 1;
      }
    });

    if (empty) {
      empty.style.display = visible ? 'none' : 'block';
    }
  }

  [searchInput, categorySelect, yearSelect].forEach(function (control) {
    if (control) {
      control.addEventListener('input', applyFilters);
      control.addEventListener('change', applyFilters);
    }
  });

  var params = new URLSearchParams(window.location.search);
  var query = params.get('q');
  if (query && searchInput) {
    searchInput.value = query;
  }
  applyFilters();
})();
