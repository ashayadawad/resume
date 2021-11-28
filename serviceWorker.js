const staticResume = "asha-yadawad-resume-v1"
const filesToCache = [
  "/",
  "/index.html",
  "/css/bootstrap.min.css",
  "/css/font-awesome.min.css",
  "/css/style.css",
  "/js/app.js",
  "/js/jquery-2.1.4.min.js",
  "/js/bootstrap.min.js",
  "/icon-fonts/fontawesome-webfont.eot",
  "/icon-fonts/fontawesome-webfont.svg",
  "/icon-fonts/fontawesome-webfont.woff",
  "/icon-fonts/fontawesome-webfont.woff2",
  "/img/asha.jpg",
  "/img/resume-bg.jpg",
]


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(staticResume).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});