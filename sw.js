const CACHE_NAME = "sardinesim-v2_1";

const urlsToCache = [
  "./",
  "./index.html",
  "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
