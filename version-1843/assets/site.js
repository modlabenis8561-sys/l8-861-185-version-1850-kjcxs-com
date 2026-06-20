(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  ready(function () {
    var toggle = document.querySelector(".menu-toggle");
    var mobileNav = document.querySelector(".mobile-nav");

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        mobileNav.classList.toggle("is-open");
      });
    }

    var headerForm = document.querySelector(".header-search");
    if (headerForm) {
      headerForm.addEventListener("submit", function (event) {
        var input = headerForm.querySelector("input[name='q']");
        if (input && input.value.trim()) {
          event.preventDefault();
          window.location.href = "./search.html?q=" + encodeURIComponent(input.value.trim());
        }
      });
    }

    var hero = document.querySelector(".hero");
    if (hero) {
      var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
      var previous = hero.querySelector("[data-hero='previous']");
      var next = hero.querySelector("[data-hero='next']");
      var index = 0;

      function showSlide(nextIndex) {
        if (!slides.length) {
          return;
        }
        slides[index].classList.remove("is-active");
        index = (nextIndex + slides.length) % slides.length;
        slides[index].classList.add("is-active");
      }

      if (previous) {
        previous.addEventListener("click", function () {
          showSlide(index - 1);
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          showSlide(index + 1);
        });
      }

      if (slides.length > 1) {
        window.setInterval(function () {
          showSlide(index + 1);
        }, 5600);
      }
    }

    var filterInput = document.querySelector(".movie-filter-input");
    if (filterInput) {
      var params = new URLSearchParams(window.location.search);
      var initial = params.get("q") || "";
      if (initial) {
        filterInput.value = initial;
      }
      var cards = Array.prototype.slice.call(document.querySelectorAll(".searchable-card"));
      var empty = document.querySelector(".empty-state");

      function runFilter() {
        var query = normalize(filterInput.value);
        var shown = 0;

        cards.forEach(function (card) {
          var haystack = normalize([
            card.getAttribute("data-title"),
            card.getAttribute("data-genre"),
            card.getAttribute("data-region"),
            card.getAttribute("data-year"),
            card.getAttribute("data-type")
          ].join(" "));
          var visible = !query || haystack.indexOf(query) >= 0;
          card.style.display = visible ? "" : "none";
          if (visible) {
            shown += 1;
          }
        });

        if (empty) {
          empty.classList.toggle("is-visible", shown === 0);
        }
      }

      filterInput.addEventListener("input", runFilter);
      runFilter();
    }
  });

  window.initMoviePlayer = function (videoId, overlayId, source) {
    var video = document.getElementById(videoId);
    var overlay = document.getElementById(overlayId);
    var initialized = false;

    if (!video || !overlay || !source) {
      return;
    }

    function attachSource() {
      if (initialized) {
        return;
      }

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
      } else if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
      } else {
        video.src = source;
      }

      initialized = true;
    }

    function startPlayback() {
      attachSource();
      overlay.classList.add("is-hidden");
      video.setAttribute("controls", "controls");
      var promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(function () {});
      }
    }

    overlay.addEventListener("click", startPlayback);
    video.addEventListener("click", function () {
      if (video.paused) {
        startPlayback();
      }
    });
  };
})();
