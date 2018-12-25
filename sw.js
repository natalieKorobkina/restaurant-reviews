const staticCache = "restaurant-rev-cache-v1"

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
    .then(function (response) {
      return response || fetch(e.request)
    })
  );
});

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(staticCache)
    .then(function(cache) {
      return cache.addAll(
        [
          'img/1.jpg', 
          'img/2.jpg',
          'img/3.jpg',
          'img/4.jpg',
          'img/5.jpg',
          'img/6.jpg',
          'img/7.jpg',
          'img/8.jpg',
          'img/9.jpg',
          'img/10.jpg',
          'favicon.ico',
          'data/restaurants.json',
          'css/styles.css',
          'js/dbhelper.js',
          'js/main.js',
          'js/restaurant_info.js',
          './',
          'index.html',
          'restaurant.html',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
        ]
      );
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('restaurant-rev-') && cacheName !== staticCache
        }).map(function(cacheName) {
            return caches.delete(cacheName);
        })
      );
    })
  );
});