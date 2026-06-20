document.addEventListener("DOMContentLoaded", function () {
  var mobileToggle = document.querySelector(".mobile-toggle");
  var mobilePanel = document.querySelector(".mobile-panel");

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener("click", function () {
      mobilePanel.classList.toggle("is-open");
    });
  }

  document.querySelectorAll(".search-form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      var input = form.querySelector('input[name="q"]');
      if (!input || input.value.trim() === "") {
        event.preventDefault();
      }
    });
  });

  initHero();
  initCatalogFilter();
  initSearchPage();
  initPlayer();
});

function initHero() {
  var hero = document.querySelector("[data-hero]");
  if (!hero) {
    return;
  }

  var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
  var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
  var thumbs = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-thumb]"));
  var previous = hero.querySelector("[data-hero-prev]");
  var next = hero.querySelector("[data-hero-next]");
  var index = 0;
  var timer = null;

  function show(nextIndex) {
    if (!slides.length) {
      return;
    }

    index = (nextIndex + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === index);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("is-active", dotIndex === index);
    });
    thumbs.forEach(function (thumb, thumbIndex) {
      thumb.classList.toggle("is-active", thumbIndex === index);
    });
  }

  function start() {
    window.clearInterval(timer);
    timer = window.setInterval(function () {
      show(index + 1);
    }, 5200);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      show(Number(dot.getAttribute("data-hero-dot")) || 0);
      start();
    });
  });

  if (previous) {
    previous.addEventListener("click", function () {
      show(index - 1);
      start();
    });
  }

  if (next) {
    next.addEventListener("click", function () {
      show(index + 1);
      start();
    });
  }

  show(0);
  start();
}

function initCatalogFilter() {
  var catalog = document.querySelector("[data-catalog]");
  if (!catalog) {
    return;
  }

  var keywordInput = catalog.querySelector("[data-filter-keyword]");
  var typeSelect = catalog.querySelector("[data-filter-type]");
  var yearSelect = catalog.querySelector("[data-filter-year]");
  var sortSelect = catalog.querySelector("[data-filter-sort]");
  var grid = catalog.querySelector("[data-catalog-grid]");
  var cards = Array.prototype.slice.call(catalog.querySelectorAll(".movie-card"));

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function applyFilters() {
    var keyword = normalize(keywordInput && keywordInput.value);
    var type = typeSelect ? typeSelect.value : "";
    var year = yearSelect ? yearSelect.value : "";

    cards.forEach(function (card) {
      var haystack = normalize([
        card.getAttribute("data-title"),
        card.getAttribute("data-type"),
        card.getAttribute("data-year"),
        card.getAttribute("data-tags")
      ].join(" "));
      var typeMatches = !type || card.getAttribute("data-type") === type;
      var yearMatches = !year || card.getAttribute("data-year") === year;
      var keywordMatches = !keyword || haystack.indexOf(keyword) !== -1;
      card.hidden = !(typeMatches && yearMatches && keywordMatches);
    });
  }

  function applySort() {
    if (!grid || !sortSelect) {
      return;
    }

    var value = sortSelect.value;
    var sorted = cards.slice();

    if (value === "latest") {
      sorted.sort(function (a, b) {
        return String(b.getAttribute("data-year")).localeCompare(String(a.getAttribute("data-year")), "zh-Hans-CN");
      });
    }

    if (value === "title") {
      sorted.sort(function (a, b) {
        return String(a.getAttribute("data-title")).localeCompare(String(b.getAttribute("data-title")), "zh-Hans-CN");
      });
    }

    sorted.forEach(function (card) {
      grid.appendChild(card);
    });
  }

  [keywordInput, typeSelect, yearSelect].forEach(function (control) {
    if (control) {
      control.addEventListener("input", applyFilters);
      control.addEventListener("change", applyFilters);
    }
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      applySort();
      applyFilters();
    });
  }
}

function initSearchPage() {
  var results = document.getElementById("search-results");
  if (!results || typeof SEARCH_INDEX === "undefined") {
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var query = (params.get("q") || "").trim();
  var heading = document.getElementById("search-heading");
  var summary = document.getElementById("search-summary");
  var pageInput = document.querySelector(".search-page-form input[name='q']");

  if (pageInput) {
    pageInput.value = query;
  }

  if (!query) {
    renderSearchResults(SEARCH_INDEX.slice(0, 24));
    return;
  }

  var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  var matched = SEARCH_INDEX.filter(function (item) {
    var text = [
      item.title,
      item.year,
      item.region,
      item.type,
      item.category,
      item.oneLine,
      (item.tags || []).join(" ")
    ].join(" ").toLowerCase();

    return terms.every(function (term) {
      return text.indexOf(term) !== -1;
    });
  }).slice(0, 80);

  if (heading) {
    heading.textContent = "搜索：" + query;
  }

  if (summary) {
    summary.textContent = matched.length ? "已按关键词匹配相关作品。" : "没有找到完全匹配的作品，可尝试更短关键词。";
  }

  renderSearchResults(matched);

  function renderSearchResults(items) {
    results.innerHTML = "";

    if (!items.length) {
      var empty = document.createElement("div");
      empty.className = "story-card";
      empty.textContent = "暂无匹配结果";
      results.appendChild(empty);
      return;
    }

    items.forEach(function (item) {
      var article = document.createElement("article");
      article.className = "movie-card";
      article.innerHTML = [
        '<a href="' + escapeHtml(item.href) + '" class="poster-link" aria-label="观看 ' + escapeHtml(item.title) + '">',
        '<div class="poster-wrap">',
        '<img src="' + escapeHtml(item.cover) + '" alt="' + escapeHtml(item.title) + '" loading="lazy" onerror="this.style.display=\'none\'">',
        '<span class="poster-gradient"></span>',
        '<span class="type-pill">' + escapeHtml(item.category) + '</span>',
        '</div>',
        '</a>',
        '<div class="card-body">',
        '<div class="meta-row"><span>' + escapeHtml(item.year) + '</span><span>' + escapeHtml(item.region) + '</span><span>' + escapeHtml(item.type) + '</span></div>',
        '<h3><a href="' + escapeHtml(item.href) + '">' + escapeHtml(item.title) + '</a></h3>',
        '<p>' + escapeHtml(item.oneLine) + '</p>',
        '<div class="tag-row">' + (item.tags || []).slice(0, 3).map(function (tag) { return '<span>' + escapeHtml(tag) + '</span>'; }).join("") + '</div>',
        '</div>'
      ].join("");
      results.appendChild(article);
    });
  }
}

function initPlayer() {
  var video = document.getElementById("video-player");
  var overlay = document.querySelector("[data-play-overlay]");

  if (!video || typeof playerSource === "undefined") {
    return;
  }

  var hlsInstance = null;
  var attached = false;

  function attachSource() {
    if (attached) {
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = playerSource;
    } else if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new Hls({ enableWorker: true, lowLatencyMode: true });
      hlsInstance.loadSource(playerSource);
      hlsInstance.attachMedia(video);
    } else {
      video.src = playerSource;
    }

    attached = true;
  }

  function playVideo() {
    attachSource();

    if (overlay) {
      overlay.classList.add("is-hidden");
    }

    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }

  if (overlay) {
    overlay.addEventListener("click", playVideo);
  }

  video.addEventListener("play", function () {
    if (overlay) {
      overlay.classList.add("is-hidden");
    }
  });

  video.addEventListener("click", function () {
    if (video.paused) {
      playVideo();
    }
  });

  window.addEventListener("beforeunload", function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
