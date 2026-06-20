(function () {
  var params = new URLSearchParams(window.location.search);
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var hint = document.getElementById('search-hint');
  var q = params.get('q') || '';
  if (input) input.value = q;

  function card(movie) {
    var tags = movie.tags.slice(0, 3).map(function (tag) {
      return '<span class="px-2 py-1 rounded-full bg-red-50 text-red-600 text-xs">' + escapeHtml(tag) + '</span>';
    }).join('');
    return '<article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all card-lift">'
      + '<a href="' + movie.url + '" class="group block">'
      + '<div class="cover-wide"><img src="' + movie.image + '" alt="' + escapeHtml(movie.title) + '" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"></div>'
      + '<div class="p-5"><div class="flex items-center justify-between mb-2"><span class="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs rounded-full">' + escapeHtml(movie.category) + '</span><span class="text-yellow-500 font-bold">' + movie.rating + '</span></div>'
      + '<h2 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">' + escapeHtml(movie.title) + '</h2>'
      + '<p class="text-gray-600 text-sm line-clamp-2 mb-4">' + escapeHtml(movie.oneLine) + '</p>'
      + '<div class="flex flex-wrap gap-2 mb-4">' + tags + '</div>'
      + '<div class="flex items-center justify-between text-sm text-gray-500"><span>' + escapeHtml(movie.year) + ' · ' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.type) + '</span></div>'
      + '</div></a></article>';
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function (ch) {
      return ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'})[ch];
    });
  }

  function run() {
    var keyword = (input && input.value ? input.value : '').trim().toLowerCase();
    var data = window.MOVIE_CATALOG || MOVIE_CATALOG || [];
    var results = data;
    if (keyword) {
      results = data.filter(function (movie) {
        return [movie.title, movie.year, movie.region, movie.type, movie.genre, movie.category, movie.tags.join(' '), movie.oneLine].join(' ').toLowerCase().indexOf(keyword) !== -1;
      });
    } else {
      results = data.slice().sort(function (a, b) {
        return b.views - a.views;
      }).slice(0, 24);
    }
    list.innerHTML = results.slice(0, 96).map(card).join('');
    if (hint) hint.textContent = keyword ? '已为你筛选相关影片' : '展示热门影片，可输入标题、类型、地区或标签继续筛选';
  }

  if (input) input.addEventListener('input', run);
  run();
})();
