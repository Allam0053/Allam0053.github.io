if (!self.define) {
  let e,
    a = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    a[i] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const s =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (a[s]) return;
    let o = {};
    const t = (e) => i(e, s),
      f = { module: { uri: s }, exports: o, require: t };
    a[s] = Promise.all(n.map((e) => f[e] || t(e))).then((e) => (c(...e), o));
  };
}
define(['./workbox-6316bd60'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/b2Nt80uM-Egy9xbKce2c7/_buildManifest.js',
          revision: 'd40026e8e8499260f9c8a0375d1836bd',
        },
        {
          url: '/_next/static/b2Nt80uM-Egy9xbKce2c7/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/232-beaab18f447712bd.js',
          revision: 'beaab18f447712bd',
        },
        {
          url: '/_next/static/chunks/31664189-3c54e41febee8096.js',
          revision: '3c54e41febee8096',
        },
        {
          url: '/_next/static/chunks/71-5bb4fae79e1fb68c.js',
          revision: '5bb4fae79e1fb68c',
        },
        {
          url: '/_next/static/chunks/783-60ba70f7ea0fe438.js',
          revision: '60ba70f7ea0fe438',
        },
        {
          url: '/_next/static/chunks/78e521c3-19390034046d4528.js',
          revision: '19390034046d4528',
        },
        {
          url: '/_next/static/chunks/863-59006c9eaac0af3c.js',
          revision: '59006c9eaac0af3c',
        },
        {
          url: '/_next/static/chunks/framework-4556c45dd113b893.js',
          revision: '4556c45dd113b893',
        },
        {
          url: '/_next/static/chunks/main-580c544a657bfc90.js',
          revision: '580c544a657bfc90',
        },
        {
          url: '/_next/static/chunks/pages/404-fc228a52d78ed171.js',
          revision: 'fc228a52d78ed171',
        },
        {
          url: '/_next/static/chunks/pages/_app-f9bd50eeab1b4205.js',
          revision: 'f9bd50eeab1b4205',
        },
        {
          url: '/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js',
          revision: 'a4ba2246ff8fb532',
        },
        {
          url: '/_next/static/chunks/pages/about/me-31ce9f484c3a0220.js',
          revision: '31ce9f484c3a0220',
        },
        {
          url: '/_next/static/chunks/pages/components-a9f4f5ad9daea0cd.js',
          revision: 'a9f4f5ad9daea0cd',
        },
        {
          url: '/_next/static/chunks/pages/index-1e9c04160a7efff1.js',
          revision: '1e9c04160a7efff1',
        },
        {
          url: '/_next/static/chunks/pages/projects/%5Bslug%5D-b19e7bc962a8d4ca.js',
          revision: 'b19e7bc962a8d4ca',
        },
        {
          url: '/_next/static/chunks/polyfills-0d1b80a048d4787e.js',
          revision: '40ccea369337cec877151c906f22814d',
        },
        {
          url: '/_next/static/chunks/webpack-3f1f52ba76c9632d.js',
          revision: '3f1f52ba76c9632d',
        },
        {
          url: '/_next/static/css/1fbdc1b1d2b03ef7.css',
          revision: '1fbdc1b1d2b03ef7',
        },
        {
          url: '/_next/static/css/8ccedf87e2a57d88.css',
          revision: '8ccedf87e2a57d88',
        },
        {
          url: '/_next/static/media/fa-brands-400.86c7e1fa.woff2',
          revision: '86c7e1fa',
        },
        {
          url: '/_next/static/media/fa-brands-400.f5defc2e.ttf',
          revision: 'f5defc2e',
        },
        {
          url: '/_next/static/media/fa-regular-400.3edb9004.ttf',
          revision: '3edb9004',
        },
        {
          url: '/_next/static/media/fa-regular-400.e0550912.woff2',
          revision: 'e0550912',
        },
        {
          url: '/_next/static/media/fa-solid-900.64d5644d.woff2',
          revision: '64d5644d',
        },
        {
          url: '/_next/static/media/fa-solid-900.f418d876.ttf',
          revision: 'f418d876',
        },
        {
          url: '/_next/static/media/fa-v4compatibility.7e7e1dad.ttf',
          revision: '7e7e1dad',
        },
        {
          url: '/_next/static/media/fa-v4compatibility.9765b558.woff2',
          revision: '9765b558',
        },
        {
          url: '/favicon/android-icon-144x144.png',
          revision: '3ed02b758ebbfe4fc800430e022f35a6',
        },
        {
          url: '/favicon/android-icon-192x192.png',
          revision: '46e1e2f5ec0e1c910020aee5c57bca9e',
        },
        {
          url: '/favicon/android-icon-36x36.png',
          revision: '62933c6cf5e7d3f675a73c33e52f7111',
        },
        {
          url: '/favicon/android-icon-48x48.png',
          revision: 'dc438c34ba095e3200e7ec531fcd65d2',
        },
        {
          url: '/favicon/android-icon-72x72.png',
          revision: 'fe7148232d928b33d84a3837e95fbf04',
        },
        {
          url: '/favicon/android-icon-96x96.png',
          revision: '513282af1b5942ecfeab09086ba84375',
        },
        {
          url: '/favicon/apple-icon-114x114.png',
          revision: '5f258900d06ec56044c35f1eafed932c',
        },
        {
          url: '/favicon/apple-icon-120x120.png',
          revision: '5d67a33e2fa6468b794df13076bde668',
        },
        {
          url: '/favicon/apple-icon-144x144.png',
          revision: '3ed02b758ebbfe4fc800430e022f35a6',
        },
        {
          url: '/favicon/apple-icon-152x152.png',
          revision: 'c22d827e791a494336af10cac9772431',
        },
        {
          url: '/favicon/apple-icon-180x180.png',
          revision: '1a34c4e1f1b40219cf11588535f3e6a0',
        },
        {
          url: '/favicon/apple-icon-57x57.png',
          revision: 'e38eaf63d76871b003e251782baa5ac3',
        },
        {
          url: '/favicon/apple-icon-60x60.png',
          revision: 'b6c8b330a75b958a4f7d60c6f24d22c9',
        },
        {
          url: '/favicon/apple-icon-72x72.png',
          revision: 'fe7148232d928b33d84a3837e95fbf04',
        },
        {
          url: '/favicon/apple-icon-76x76.png',
          revision: '86ea6750ea89ec3f35fcc6bd0b229d5e',
        },
        {
          url: '/favicon/apple-icon-precomposed.png',
          revision: '8b46488774a2be96d2c81e86b3f6d84a',
        },
        {
          url: '/favicon/apple-icon.png',
          revision: '8b46488774a2be96d2c81e86b3f6d84a',
        },
        {
          url: '/favicon/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8',
        },
        {
          url: '/favicon/favicon-16x16.png',
          revision: 'f725bd1365ead1702012d0ca4e693361',
        },
        {
          url: '/favicon/favicon-32x32.png',
          revision: 'e3e5d69bc640065965bd89be78125009',
        },
        {
          url: '/favicon/favicon-96x96.png',
          revision: '513282af1b5942ecfeab09086ba84375',
        },
        {
          url: '/favicon/favicon.ico',
          revision: 'b06c66a065398ce1cc5558a8a925c73f',
        },
        {
          url: '/favicon/large-og.jpg',
          revision: '54cbf4b8f396a652ed05c560e0b6d003',
        },
        {
          url: '/favicon/manifest.json',
          revision: '26afaeab0d9b250a0dd145e57afb0401',
        },
        {
          url: '/favicon/ms-icon-144x144.png',
          revision: '3ed02b758ebbfe4fc800430e022f35a6',
        },
        {
          url: '/favicon/ms-icon-150x150.png',
          revision: '7fcc2177d08a606f0fac6685a16235a7',
        },
        {
          url: '/favicon/ms-icon-310x310.png',
          revision: '2c80c067241181c38d5fcd93740d6c4b',
        },
        {
          url: '/favicon/ms-icon-70x70.png',
          revision: 'ebff944b7f1ef2b87affc5b39cdfafae',
        },
        {
          url: '/fonts/inter-var-latin.woff2',
          revision: '812b3dd29751112389e93387c4f7dd0a',
        },
        {
          url: '/icon-192x192.png',
          revision: '27242da6936ae840e1e2b0a569811f97',
        },
        {
          url: '/icon-256x256.png',
          revision: 'cbb612eb8f630e36deb46d796f3b89a6',
        },
        {
          url: '/icon-384x384.png',
          revision: '0be09a6bde59d6bea7654cb5953275df',
        },
        {
          url: '/icon-512x512.png',
          revision: 'd43dca7148863e48ad49fc4dcdb0472b',
        },
        { url: '/images/1.jpeg', revision: '3fe5b672500211d6e77497fa649aaf1e' },
        {
          url: '/images/large-og.png',
          revision: 'eb36cd888797a2c8fdebfa0c7819b353',
        },
        {
          url: '/images/new-tab.png',
          revision: 'b2001de5c7ebe41cf372e676d09014f4',
        },
        {
          url: '/images/team-2-800x800.jpg',
          revision: 'dcfcf3b77210fe85b0abc8260e6fa70e',
        },
        { url: '/manifest.json', revision: '13d38482b6eded14a3e8be7a1b78860b' },
        { url: '/robots.txt', revision: '12c1b30978435c5968e8475c0693af6d' },
        { url: '/sitemap-0.xml', revision: '45509959861e52ea94fdf8926a0352b7' },
        { url: '/sitemap.xml', revision: 'cc3697158d8075fd190419683a1b74e5' },
        {
          url: '/svg/Vercel.svg',
          revision: 'c7d8efd08fe7e7a36a602b096e779a38',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: i,
              state: n,
            }) =>
              a && 'opaqueredirect' === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
