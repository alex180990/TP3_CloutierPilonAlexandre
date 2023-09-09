const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
    'offline.html',
];


self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE).catch((error) => {
                console.error('[ServiceWorker] Failed to cache files:', error);
            });
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
console.log('[ServiceWorker] Activate');
//Remove previous cached data from disk.
self.clients.claim();
});
self.addEventListener('fetch', (evt) => {
console.log('[ServiceWorker] Fetch', evt.request.url);
//Add fetch event handler here.
});