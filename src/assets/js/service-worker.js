let version = '1.0';
// let filesToCache = [];
let timeStamp = Date.now();

self.addEventListener('install', event => {
  event.waitUntil(
    // pre-fetch the app resources
    caches.open('pacific-shores-shuttle').then(cache => {
      return cache.addAll([
          `/`,
          `assets/favicons/favicon.ico?timestamp=${timeStamp}`,
          `assets/img/stops/1200.jpg?timestamp=${timeStamp}`,
          `assets/img/stops/1400.jpg?timestamp=${timeStamp}`,
          `assets/img/stops/1700.jpg?timestamp=${timeStamp}`,
          `assets/img/stops/1900.jpg?timestamp=${timeStamp}`,
          `assets/img/stops/caltrain.png?timestamp=${timeStamp}`,
          `assets/img/map.png?timestamp=${timeStamp}`,
          `assets/img/logo.svg?timestamp=${timeStamp}`
        ])
        .then(() => self.skipWaiting());
    })
  );
});

// add an activate event handler
self.addEventListener('activate', event => {
  // event.waitUntil(
  //   caches.keys().then(function(keylist) {

  //   });
  // )
  event.waitUntil(self.clients.claim());
});

// add a fetch event handler
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {
      ignoreSearch: true
    }).then(response => {
      return response || fetch(event.request);
    })
  );
});
