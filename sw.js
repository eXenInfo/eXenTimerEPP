const CACHE_NAME = 'exen-timer-cache-v2'; // Cache-Version erhöht, um Neuladen zu erzwingen
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Event: Install
// Speichert die grundlegenden App-Dateien (das "App Shell")
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching app shell');
        return cache.addAll(urlsToCache);
      })
  );
});

// Event: Activate
// Bereinigt alte Caches, wenn eine neue Version des Service Workers aktiv wird
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Event: Fetch
// Fängt alle Netzwerkanfragen ab und wendet eine Caching-Strategie an
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        // Wenn die Anfrage im Cache ist, wird sie von dort geliefert.
        // Gleichzeitig wird im Hintergrund eine neue Version vom Netzwerk geholt und für den nächsten Start gespeichert.
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // Nur gültige Antworten cachen
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(err => {
            console.error('Fetch failed; returning offline page instead.', err);
        });

        // Gibt die zwischengespeicherte Antwort sofort zurück, wenn vorhanden, andernfalls wird auf die Netzwerkanwort gewartet.
        return response || fetchPromise;
      });
    })
  );
});
