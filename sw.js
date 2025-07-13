const CACHE_NAME = 'exen-timer-cache-v3'; // Version erhöht, um Update zu erzwingen
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './vendor/tone.js',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install-Event: Speichert die App-Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate-Event: Bereinigt alte Caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch-Event: Liefert aus dem Cache, wenn verfügbar
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Wenn die Anfrage im Cache ist, wird sie von dort geliefert.
        if (response) {
          return response;
        }
        // Wenn nicht, wird sie normal über das Netzwerk angefragt.
        return fetch(event.request);
      })
  );
});
