(function () {
    function onReady(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function initMenu() {
        var toggle = document.querySelector("[data-menu-toggle]");
        var nav = document.querySelector("[data-mobile-nav]");
        if (!toggle || !nav) {
            return;
        }
        toggle.addEventListener("click", function () {
            nav.classList.toggle("is-open");
        });
    }

    function initHero() {
        var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
        if (slides.length <= 1) {
            return;
        }
        var current = 0;
        var timer = null;
        function show(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle("is-active", i === current);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle("is-active", i === current);
            });
        }
        function play() {
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5200);
        }
        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                if (timer) {
                    window.clearInterval(timer);
                }
                show(i);
                play();
            });
        });
        play();
    }

    function initSearchForms() {
        var forms = Array.prototype.slice.call(document.querySelectorAll("[data-search-form]"));
        forms.forEach(function (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var input = form.querySelector("input");
                var target = form.getAttribute("data-target") || "movies.html";
                var query = input ? input.value.trim() : "";
                var url = query ? target + "?q=" + encodeURIComponent(query) : target;
                window.location.href = url;
            });
        });
    }

    function initMovieFilters() {
        var search = document.querySelector("[data-movie-search]");
        var region = document.querySelector("[data-region-filter]");
        var genre = document.querySelector("[data-genre-filter]");
        var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
        var empty = document.querySelector("[data-empty-state]");
        if (!search || cards.length === 0) {
            return;
        }
        var params = new URLSearchParams(window.location.search);
        var initialQuery = params.get("q");
        if (initialQuery) {
            search.value = initialQuery;
        }
        function normalize(value) {
            return String(value || "").trim().toLowerCase();
        }
        function apply() {
            var query = normalize(search.value);
            var regionValue = region ? normalize(region.value) : "";
            var genreValue = genre ? normalize(genre.value) : "";
            var visible = 0;
            cards.forEach(function (card) {
                var haystack = normalize(card.getAttribute("data-search"));
                var cardRegion = normalize(card.getAttribute("data-region"));
                var cardGenre = normalize(card.getAttribute("data-genre"));
                var matched = true;
                if (query && haystack.indexOf(query) === -1) {
                    matched = false;
                }
                if (regionValue && cardRegion.indexOf(regionValue) === -1) {
                    matched = false;
                }
                if (genreValue && cardGenre.indexOf(genreValue) === -1 && haystack.indexOf(genreValue) === -1) {
                    matched = false;
                }
                card.hidden = !matched;
                if (matched) {
                    visible += 1;
                }
            });
            if (empty) {
                empty.hidden = visible !== 0;
            }
        }
        [search, region, genre].forEach(function (control) {
            if (control) {
                control.addEventListener("input", apply);
                control.addEventListener("change", apply);
            }
        });
        apply();
    }

    function initImages() {
        Array.prototype.slice.call(document.querySelectorAll("img")).forEach(function (img) {
            img.addEventListener("error", function () {
                img.classList.add("is-hidden");
            });
        });
    }

    function initPlayer() {
        var video = document.getElementById("movie-video");
        var overlay = document.getElementById("play-overlay");
        var message = document.getElementById("player-message");
        var config = document.getElementById("movie-stream");
        if (!video || !overlay || !config) {
            return;
        }
        var streamUrl = "";
        var hls = null;
        var ready = false;
        try {
            streamUrl = JSON.parse(config.textContent).stream || "";
        } catch (error) {
            streamUrl = "";
        }
        function showMessage(text) {
            if (message) {
                message.textContent = text;
                message.hidden = false;
            }
        }
        function attach() {
            if (ready || !streamUrl) {
                return;
            }
            if (window.Hls && window.Hls.isSupported()) {
                hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hls.loadSource(streamUrl);
                hls.attachMedia(video);
                hls.on(window.Hls.Events.ERROR, function (event, data) {
                    if (!data || !data.fatal) {
                        return;
                    }
                    if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
                        hls.startLoad();
                    } else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
                        hls.recoverMediaError();
                    } else {
                        showMessage("视频暂时无法播放");
                    }
                });
                ready = true;
                return;
            }
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = streamUrl;
                ready = true;
                return;
            }
            video.src = streamUrl;
            ready = true;
        }
        function start() {
            attach();
            overlay.classList.add("is-hidden");
            video.controls = true;
            var result = video.play();
            if (result && typeof result.catch === "function") {
                result.catch(function () {
                    overlay.classList.remove("is-hidden");
                    showMessage("点击播放按钮开始观看");
                });
            }
        }
        overlay.addEventListener("click", start);
        video.addEventListener("click", function () {
            if (video.paused) {
                start();
            }
        });
        window.addEventListener("beforeunload", function () {
            if (hls) {
                hls.destroy();
            }
        });
    }

    onReady(function () {
        initMenu();
        initHero();
        initSearchForms();
        initMovieFilters();
        initImages();
        initPlayer();
    });
}());
