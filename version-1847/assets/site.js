(function () {
    var menuButton = document.querySelector('[data-menu-toggle]');
    var mobileNav = document.querySelector('[data-mobile-nav]');
    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });
    }

    document.querySelectorAll('img').forEach(function (image) {
        image.addEventListener('error', function () {
            image.classList.add('image-missing');
        });
    });

    var carousel = document.querySelector('[data-carousel]');
    if (carousel) {
        var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-slide]'));
        var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-carousel-dot]'));
        var current = 0;
        var timer = null;

        function showSlide(index) {
            if (!slides.length) {
                return;
            }
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, itemIndex) {
                slide.classList.toggle('active', itemIndex === current);
            });
            dots.forEach(function (dot, itemIndex) {
                dot.classList.toggle('active', itemIndex === current);
            });
        }

        function startCarousel() {
            window.clearInterval(timer);
            timer = window.setInterval(function () {
                showSlide(current + 1);
            }, 5200);
        }

        var prev = carousel.querySelector('[data-carousel-prev]');
        var next = carousel.querySelector('[data-carousel-next]');
        if (prev) {
            prev.addEventListener('click', function () {
                showSlide(current - 1);
                startCarousel();
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                showSlide(current + 1);
                startCarousel();
            });
        }
        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                showSlide(index);
                startCarousel();
            });
        });
        showSlide(0);
        startCarousel();
    }

    var filterForm = document.querySelector('[data-filter-form]');
    if (filterForm) {
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-card]'));
        var emptyState = document.querySelector('[data-empty-state]');
        var keywordInput = filterForm.querySelector('[name="keyword"]');
        var yearSelect = filterForm.querySelector('[name="year"]');
        var typeSelect = filterForm.querySelector('[name="type"]');

        function applyFilters() {
            var keyword = (keywordInput && keywordInput.value || '').trim().toLowerCase();
            var year = yearSelect && yearSelect.value || '';
            var type = typeSelect && typeSelect.value || '';
            var visible = 0;
            cards.forEach(function (card) {
                var haystack = [card.dataset.title, card.dataset.genre, card.dataset.tags, card.dataset.type, card.dataset.year].join(' ').toLowerCase();
                var matchedKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                var matchedYear = !year || card.dataset.year === year;
                var matchedType = !type || card.dataset.type === type;
                var show = matchedKeyword && matchedYear && matchedType;
                card.style.display = show ? '' : 'none';
                if (show) {
                    visible += 1;
                }
            });
            if (emptyState) {
                emptyState.classList.toggle('show', visible === 0);
            }
        }

        filterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            applyFilters();
        });
        ['input', 'change'].forEach(function (name) {
            filterForm.addEventListener(name, applyFilters);
        });
    }

    var searchForm = document.querySelector('[data-global-search-form]');
    var resultsWrap = document.querySelector('[data-search-results]');
    if (searchForm && resultsWrap) {
        var input = searchForm.querySelector('[name="q"]');
        var params = new URLSearchParams(window.location.search);
        var currentQuery = params.get('q') || '';
        if (input) {
            input.value = currentQuery;
        }

        function createResult(item) {
            var article = document.createElement('article');
            article.className = 'movie-card';
            article.innerHTML = [
                '<a href="./' + item.file + '" class="poster-link" aria-label="' + escapeHtml(item.title) + '">',
                '<img src="' + item.cover + '" alt="' + escapeHtml(item.title) + '" loading="lazy">',
                '<span class="type-pill">' + escapeHtml(item.type) + '</span>',
                '</a>',
                '<div class="card-body">',
                '<h2><a href="./' + item.file + '">' + escapeHtml(item.title) + '</a></h2>',
                '<p class="card-meta">' + escapeHtml(item.region) + ' · ' + escapeHtml(item.year) + ' · ' + escapeHtml(item.genre) + '</p>',
                '<p class="card-desc">' + escapeHtml(item.oneLine) + '</p>',
                '<div class="tag-row">' + item.tags.slice(0, 3).map(function (tag) { return '<span>' + escapeHtml(tag) + '</span>'; }).join('') + '</div>',
                '</div>'
            ].join('');
            return article;
        }

        function escapeHtml(value) {
            return String(value).replace(/[&<>"]/g, function (char) {
                return {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;'
                }[char];
            });
        }

        function runSearch() {
            var query = (input && input.value || '').trim().toLowerCase();
            resultsWrap.innerHTML = '';
            if (!query) {
                resultsWrap.innerHTML = '<div class="empty-state show">输入关键词开始搜索</div>';
                return;
            }
            var items = (window.__MOVIE_ITEMS__ || []).filter(function (item) {
                return [item.title, item.region, item.type, item.year, item.genre, item.oneLine, item.tags.join(' ')].join(' ').toLowerCase().indexOf(query) !== -1;
            }).slice(0, 120);
            if (!items.length) {
                resultsWrap.innerHTML = '<div class="empty-state show">没有找到相关影片</div>';
                return;
            }
            items.forEach(function (item) {
                resultsWrap.appendChild(createResult(item));
            });
        }

        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            runSearch();
        });
        if (input) {
            input.addEventListener('input', runSearch);
        }
        runSearch();
    }
})();

function initMoviePlayer(streamUrl) {
    var video = document.getElementById('movieVideo');
    var button = document.getElementById('playLayer');
    var message = document.getElementById('playerMessage');
    var hlsPlayer = null;
    var ready = false;

    if (!video || !button || !streamUrl) {
        return;
    }

    function showMessage(text) {
        if (message) {
            message.textContent = text;
            message.classList.add('show');
        }
    }

    function prepareNative() {
        video.src = streamUrl;
        ready = true;
        return Promise.resolve();
    }

    function prepareHls() {
        return new Promise(function (resolve, reject) {
            if (!window.Hls || !window.Hls.isSupported()) {
                reject(new Error('unsupported'));
                return;
            }
            hlsPlayer = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hlsPlayer.loadSource(streamUrl);
            hlsPlayer.attachMedia(video);
            hlsPlayer.on(window.Hls.Events.MANIFEST_PARSED, function () {
                ready = true;
                resolve();
            });
            hlsPlayer.on(window.Hls.Events.ERROR, function (event, data) {
                if (data && data.fatal) {
                    reject(new Error('fatal'));
                }
            });
        });
    }

    function prepare() {
        if (ready) {
            return Promise.resolve();
        }
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            return prepareNative();
        }
        return prepareHls();
    }

    function playVideo() {
        prepare().then(function () {
            return video.play();
        }).then(function () {
            button.classList.add('is-hidden');
        }).catch(function () {
            showMessage('播放暂时不可用，请稍后重试');
        });
    }

    button.addEventListener('click', playVideo);
    video.addEventListener('click', function () {
        if (video.paused) {
            playVideo();
        } else {
            video.pause();
        }
    });
    video.addEventListener('play', function () {
        button.classList.add('is-hidden');
    });
    video.addEventListener('pause', function () {
        if (!video.ended) {
            button.classList.remove('is-hidden');
        }
    });
    window.addEventListener('beforeunload', function () {
        if (hlsPlayer) {
            hlsPlayer.destroy();
        }
    });
}
