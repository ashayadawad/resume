const staticDevCoffee = "asha-yadawad-resume-v1"
const assets = [
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


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })