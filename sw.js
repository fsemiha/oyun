const CACHE_NAME = 'siber-macera-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './scoreboard.html',
  './assets/Asset 4.svg',
  './assets/Asset 5.svg',
  './assets/Asset 6.svg',
  './assets/Asset 9.svg',
  './assets/Asset 10.svg',
  './assets/Asset 11.svg',
  './assets/Asset 12.svg',
  './assets/Asset 13.svg',
  './assets/Asset 14.svg',
  './assets/Asset 15.svg',
  './assets/Asset 21.svg',
  './assets/Asset 22.svg',
  './assets/Asset 23.svg',
  './assets/Asset 26.svg',
  './assets/Asset 27.svg',
  './assets/Asset 28.svg',
  './assets/Asset 29.svg',
  './assets/Asset 30.svg',
  './assets/Asset 31.svg',
  './assets/Asset 32.svg',
  './assets/Asset 33.svg',
  './assets/Asset 34.svg',
  './assets/Asset 35.svg',
  './assets/Asset 36.svg',
  './assets/Asset 43.svg',
  './assets/Asset 46.svg',
  './assets/Asset 60.svg',
  './assets/Asset 61.svg',
  './assets/oyungirisekranı.svg',
  './assets/oltalamatestinegec.svg',
  './fonts/Gilmer Regular.otf',
  './fonts/Gilmer Light.otf',
  './fonts/Gilmer Bold.otf',
  './fonts/conthrax-sb.otf'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache açıldı');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 