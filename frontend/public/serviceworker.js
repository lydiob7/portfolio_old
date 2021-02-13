const cacheName = 'version-1';
const self = this;

self.addEventListener('install', (event) => {
    console.log('Installing Service Worker');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(res => {
                const resClone = res.clone();
                caches.open(cacheName)
                    .then(cache => {
                        cache.put(event.request, resClone)
                    });
                return res;
            }).catch(err => caches.match(event.request).then(res => res))
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(cacheName);

    event.waitUntil(
        caches.keys()
            .then(cacheNames => Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            ))
            .catch(err => console.log('Error: ', err))
    );
});