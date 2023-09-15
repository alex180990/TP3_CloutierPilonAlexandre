const CACHE_NAME = 'static-cache-v1.1.7';

const FILES_TO_CACHE = [
    'index.html',
    'guides_astuces.html',
    'communaute_ressources.html',

    'manifest.json',

    'images/icons/icon-144x144.png',
    'images/icons/icon-192x192.png',
    'images/icons/icon-512x512.png',
    'images/icons/logo_titre.png',
    'images/icons/logo.png',

    'images/bgi.jpg',
    'images/base.jpg',
    'images/maxresdefault.jpg',
    'images/Plateforme_de_forage.jpg',
    'images/Rover_planetaire.jpg',
    'images/Station_spatiale.jpg',
    'images/Vaisseau_de_combat.jpg',
    'images/Vaisseau_de_transport.jpg',
];


self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
        evt.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                console.log('[ServiceWorker] Pre-caching offline page');
                return cache.addAll(FILES_TO_CACHE);
            })
        );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
        evt.waitUntil(
            caches.keys().then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[ServiceWorker] Removing old cache',key);
                        return caches.delete(key);
                    }
                }));
            })
        );
    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    if (evt.request.mode !== 'navigate') {
        return;
    }
    evt.respondWith(
        fetch(evt.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
            .then((cache) => {
            return cache.match('/TP3_CloutierPilonAlexandre/offline.html');
            });
        })
    );
}); 