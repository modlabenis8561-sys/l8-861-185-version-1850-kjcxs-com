(function () {
  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function text(value) {
    return String(value || '').replace(/[&<>"]/g, function (match) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[match];
    });
  }

  ready(function () {
    var menuButton = document.querySelector('.menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav');

    if (menuButton && mobileNav) {
      menuButton.addEventListener('click', function () {
        mobileNav.classList.toggle('is-open');
      });
    }

    var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
    var currentSlide = 0;

    function showSlide(next) {
      if (!slides.length) {
        return;
      }
      currentSlide = (next + slides.length) % slides.length;
      slides.forEach(function (slide, index) {
        slide.classList.toggle('is-active', index === currentSlide);
      });
      dots.forEach(function (dot, index) {
        dot.classList.toggle('is-active', index === currentSlide);
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        showSlide(index);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        showSlide(currentSlide + 1);
      }, 5200);
    }

    var localFilter = document.querySelector('.local-filter');
    if (localFilter) {
      localFilter.addEventListener('input', function () {
        var keyword = localFilter.value.trim().toLowerCase();
        Array.prototype.slice.call(document.querySelectorAll('.movie-card')).forEach(function (card) {
          var haystack = (card.getAttribute('data-filter') || card.textContent || '').toLowerCase();
          card.style.display = haystack.indexOf(keyword) >= 0 ? '' : 'none';
        });
      });
    }

    var searchPanel = document.querySelector('.search-panel');
    var searchInput = document.getElementById('global-search-input');
    var searchResults = document.getElementById('global-search-results');
    var searchButtons = Array.prototype.slice.call(document.querySelectorAll('.site-search-toggle'));
    var searchCloseButtons = Array.prototype.slice.call(document.querySelectorAll('.search-panel-close'));

    function openSearch() {
      if (!searchPanel) {
        return;
      }
      searchPanel.classList.add('is-open');
      searchPanel.setAttribute('aria-hidden', 'false');
      if (searchInput) {
        window.setTimeout(function () {
          searchInput.focus();
        }, 40);
      }
    }

    function closeSearch() {
      if (!searchPanel) {
        return;
      }
      searchPanel.classList.remove('is-open');
      searchPanel.setAttribute('aria-hidden', 'true');
    }

    function renderSearch() {
      if (!searchInput || !searchResults || !window.MOVIE_SEARCH_DATA) {
        return;
      }
      var keyword = searchInput.value.trim().toLowerCase();
      if (!keyword) {
        searchResults.innerHTML = '<p>输入关键词后即可查看匹配影片。</p>';
        return;
      }
      var items = window.MOVIE_SEARCH_DATA.filter(function (item) {
        return item.search.indexOf(keyword) >= 0;
      }).slice(0, 24);

      if (!items.length) {
        searchResults.innerHTML = '<p>暂无匹配影片，换一个关键词试试。</p>';
        return;
      }

      searchResults.innerHTML = items.map(function (item) {
        return '<a class="search-result" href="' + text(item.url) + '">' +
          '<img src="' + text(item.cover) + '" alt="' + text(item.title) + '">' +
          '<span><h3>' + text(item.title) + '</h3>' +
          '<p>' + text(item.year) + ' · ' + text(item.region) + ' · ' + text(item.genre) + '</p>' +
          '<p>' + text(item.oneLine) + '</p></span></a>';
      }).join('');
    }

    searchButtons.forEach(function (button) {
      button.addEventListener('click', openSearch);
    });

    searchCloseButtons.forEach(function (button) {
      button.addEventListener('click', closeSearch);
    });

    if (searchInput) {
      searchInput.addEventListener('input', renderSearch);
      renderSearch();
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeSearch();
      }
    });
  });
})();
