let version = '1.0';

self.addEventListener("install", e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open("pacific-shores-shuttle").then(cache => {
      return cache
        .addAll([
          `/`,
          `assets/favicons/favicon.ico?timestamp=${timeStamp}`,
          `assets/js/service-worker.min.js?timestamp=${timeStamp}`
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request, {
        ignoreSearch: true
      })
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
