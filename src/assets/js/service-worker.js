let version = '1.0';

self.addEventListener("install", e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open("pacific-shores-shuttle").then(cache => {
      return cache
        .addAll([
          `/`,
          `assets/js/min/main.min.js?timestamp=${timeStamp}`,
          `assets/css/main.css?timestamp=${timeStamp}`,
          `assets/favicons/favicon.ico?timestamp=${timeStamp}`,
          `assets/img/teaser.png?timestamp=${timeStamp}`,
          `assets/img/logo-circle.svg?timestamp=${timeStamp}`
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
