const staticResume = "asha-yadawad-resume-v2"
const filesToCache = [
  "/",
  "/index.html",
  "/css/bootstrap.min.css",
  "/css/font-awesome.min.css",
  "/css/style.css",
  "/js/jquery-2.1.4.min.js",
  "/js/bootstrap.min.js",
  "/icon-fonts/fontawesome-webfont.eot",
  "/icon-fonts/fontawesome-webfont.svg",
  "/icon-fonts/fontawesome-webfont.woff",
  "/icon-fonts/fontawesome-webfont.woff2",
  "/img/asha.jpg",
  "/img/resume-bg.jpg",
]


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticResume).then(function(cache) {
      console.log("service worker running");
      return cache.addAll(filesToCache);
    })
   );
});

self.addEventListener('fetch', function(event){
  event.respondWith(async function () {
     var cache = await caches.open(staticResume);
     var cachedResponsePromise = await cache.match(event.request);
     var networkResponsePromise = fetch(event.request);
     event.waitUntil(async function () {
        var networkResponse = await networkResponsePromise;
        await cache.put(event.request, networkResponse.clone());
     }());
     return cachedResponsePromise || networkResponsePromise;
   }());
});