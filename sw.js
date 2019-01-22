const staticCache = "restaurant-rev-cache-v1"

self.addEventListener('fetch', (e) => {
     
  e.respondWith(
    caches.match(e.request) //check request for match
    .then((response) => {
      if (response) { // if data already exists
				return response;
			}
      return fetch(e.request) // if not - fetch it from network
      .then(networkResponse => { // another response
				if (networkResponse.status === 404) { // just for error catch
					return;
				}
        return caches.open(staticCache) // add it to cache
        .then(cache => {
					cache.put(e.request.url, networkResponse.clone());
					return networkResponse; //return that was fetched to the page 
				})
			})
		}).catch(error => { //return error if any
			console.log('Error:', error);
			return;
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
          'images/1.jpg', 
          'images/2.jpg',
          'images/3.jpg',
          'images/4.jpg',
          'images/5.jpg',
          'images/6.jpg',
          'images/7.jpg',
          'images/8.jpg',
          'images/9.jpg',
          'images/10.jpg',
          'images/icons-192.png',
          'images/icons-512.png',
          'data/restaurants.json',
          'css/styles.css',
          'js/dbhelper.js',
          'js/main.js',
          'js/restaurant_info.js',
          'index.html',
          'restaurant.html',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
          'manifest.json'
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