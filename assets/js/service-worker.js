self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('necessaryCache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/css/style.css',
          '/assets/css/responsive.css',
          '/assets/favicon/android-chrome-192x192.png',
          '/assets/favicon/android-chrome-512x512.png',
          '/assets/favicon/apple-touch-icon.png',
          '/assets/favicon/favicon-16x16.png',
          '/assets/favicon/favicon-32x32.png',
          '/assets/favicon/favicon.ico',
          '/assets/favicon/site.webmanifest',
          '/assets/images/connect-peers.svg',
          '/assets/images/discord-community.svg',
          '/assets/images/enhance-knowledge.svg',
          '/assets/images/hero-bg.svg',
          '/assets/images/hero-img.svg',
          '/assets/images/insightful-website.svg',
          '/assets/images/logo.svg',
          '/assets/images/mobile-application.svg',
          '/assets/images/more-features-bg.svg',
          '/assets/images/track-progress.svg',
          '/assets/images/worldwide-connect.svg',
          '/assets/js/script.js',
          '/assets/js/service-worker.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  