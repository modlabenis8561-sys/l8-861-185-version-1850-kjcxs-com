(function () {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobilePanel = document.querySelector('[data-mobile-panel]');

    if (menuToggle && mobilePanel) {
        menuToggle.addEventListener('click', function () {
            const open = mobilePanel.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    document.querySelectorAll('[data-search-form]').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const input = form.querySelector('input[name="q"]');
            const query = input ? input.value.trim() : '';
            const target = form.getAttribute('action') || './search.html';
            window.location.href = query ? target + '?q=' + encodeURIComponent(query) : target;
        });
    });

    const hero = document.querySelector('[data-hero]');
    if (hero) {
        const slides = Array.from(hero.querySelectorAll('.hero-slide'));
        const dots = Array.from(hero.querySelectorAll('[data-hero-dot]'));
        let index = 0;
        let timer = null;
        const show = function (next) {
            if (!slides.length) {
                return;
            }
            index = (next + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle('is-active', i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle('is-active', i === index);
            });
        };
        const start = function () {
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5600);
        };
        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                if (timer) {
                    window.clearInterval(timer);
                }
                show(i);
                start();
            });
        });
        show(0);
        start();
    }

    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';
    const filterInput = document.querySelector('[data-filter-input]');
    if (filterInput && query) {
        filterInput.value = query;
    }

    const filterGrid = document.querySelector('[data-filter-grid]');
    if (filterGrid) {
        const cards = Array.from(filterGrid.querySelectorAll('[data-card]'));
        const region = document.querySelector('[data-filter-region]');
        const type = document.querySelector('[data-filter-type]');
        const year = document.querySelector('[data-filter-year]');
        const apply = function () {
            const keyword = (filterInput ? filterInput.value : '').trim().toLowerCase();
            const regionValue = region ? region.value : '';
            const typeValue = type ? type.value : '';
            const yearValue = year ? year.value : '';
            cards.forEach(function (card) {
                const text = card.getAttribute('data-search') || '';
                const matchKeyword = !keyword || text.indexOf(keyword) !== -1;
                const matchRegion = !regionValue || card.getAttribute('data-region') === regionValue;
                const matchType = !typeValue || card.getAttribute('data-type') === typeValue;
                const matchYear = !yearValue || card.getAttribute('data-year') === yearValue;
                card.classList.toggle('is-hidden', !(matchKeyword && matchRegion && matchType && matchYear));
            });
        };
        [filterInput, region, type, year].forEach(function (control) {
            if (control) {
                control.addEventListener('input', apply);
                control.addEventListener('change', apply);
            }
        });
        apply();
    }

    document.addEventListener('error', function (event) {
        const target = event.target;
        if (target && target.tagName === 'IMG') {
            target.classList.add('image-missing');
        }
    }, true);

    let hlsLoading = false;
    let hlsCallbacks = [];

    const loadHls = function (callback) {
        if (window.Hls) {
            callback();
            return;
        }
        hlsCallbacks.push(callback);
        if (hlsLoading) {
            return;
        }
        hlsLoading = true;
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js';
        script.onload = function () {
            hlsLoading = false;
            const queue = hlsCallbacks.slice();
            hlsCallbacks = [];
            queue.forEach(function (fn) {
                fn();
            });
        };
        script.onerror = function () {
            hlsLoading = false;
            hlsCallbacks = [];
        };
        document.head.appendChild(script);
    };

    const startVideo = function (player) {
        const video = player.querySelector('video');
        const overlay = player.querySelector('.player-overlay');
        if (!video) {
            return;
        }
        const stream = video.getAttribute('data-stream');
        if (!stream) {
            return;
        }
        if (overlay) {
            overlay.classList.add('is-hidden');
        }
        if (video.getAttribute('data-ready') === 'yes') {
            video.play().catch(function () {});
            return;
        }
        video.setAttribute('data-ready', 'yes');
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = stream;
            video.play().catch(function () {});
            return;
        }
        loadHls(function () {
            if (window.Hls && window.Hls.isSupported()) {
                const hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                hls.loadSource(stream);
                hls.attachMedia(video);
                hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
                    video.play().catch(function () {});
                });
            } else {
                video.src = stream;
                video.play().catch(function () {});
            }
        });
    };

    document.querySelectorAll('[data-player]').forEach(function (player) {
        const overlay = player.querySelector('.player-overlay');
        const video = player.querySelector('video');
        if (overlay) {
            overlay.addEventListener('click', function () {
                startVideo(player);
            });
        }
        if (video) {
            video.addEventListener('click', function () {
                if (!video.getAttribute('data-ready')) {
                    startVideo(player);
                }
            });
            video.addEventListener('play', function () {
                if (overlay) {
                    overlay.classList.add('is-hidden');
                }
            });
        }
    });
})();
