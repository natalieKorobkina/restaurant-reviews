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
          './',
          './images/1.jpg', 
          './images/2.jpg',
          './images/3.jpg',
          './images/4.jpg',
          './images/5.jpg',
          './images/6.jpg',
          './images/7.jpg',
          './images/8.jpg',
          './images/9.jpg',
          './images/10.jpg',
          "./images/icons-192.png",
          "./images/icons-512.png",
          './favicon.ico',
          './data/restaurants.json',
          './css/styles.css',
          './js/dbhelper.js',
          './js/main.js',
          './js/restaurant_info.js',
          './index.html',
          './restaurant.html',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
          './manifest.json'
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