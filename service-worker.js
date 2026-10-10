// ============================================================================
// SERVICE WORKER CUỐI - TOÁN 2 CŨ (EPSILON EDU)
// Chỉ phục vụ thông báo chuyển sang https://epsilon-class-2.pages.dev/.
// Không tải/cache engine học, JSON hay private API. Không chuyển tài khoản.
// ============================================================================
'use strict';

const OLD_APP_CACHE_PREFIX = 'toan2-';
const CACHE_NAME = 'toan2-retirement-20261010-v1';
const APP_SCOPE = self.registration.scope;
const INDEX_URL = new URL('index.html', APP_SCOPE).href;
const MANIFEST_URL = new URL('manifest.json', APP_SCOPE).href;
const ICON_URL = new URL('icon-192.png', APP_SCOPE).href;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Trang thông báo offline là bắt buộc trước khi kích hoạt SW cuối.
    const response = await fetch(new Request(INDEX_URL, {
      cache: 'reload',
      credentials: 'same-origin'
    }));
    if (!response.ok) throw new Error('Retirement page unavailable');
    await cache.put(INDEX_URL, response);

    // Tài nguyên PWA phụ trợ: nếu không có thì không làm hỏng bản thông báo.
    await Promise.allSettled([
      cache.add(new Request(MANIFEST_URL, { cache: 'reload' })),
      cache.add(new Request(ICON_URL, { cache: 'reload' }))
    ]);

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith(OLD_APP_CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    // Không xóa cache của ứng dụng khác có thể cùng origin.
    await self.clients.claim();

    // The old Math 2 page had no controllerchange reload handler.
    // Refresh only entry-point clients of this old application once, on activation.
    const openPages = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const appRoot = new URL(APP_SCOPE);
    const indexPath = new URL(INDEX_URL).pathname;
    await Promise.allSettled(openPages.map(async (client) => {
      const page = new URL(client.url);
      if (page.origin !== appRoot.origin) return;
      if (page.pathname !== appRoot.pathname && page.pathname !== indexPath) return;
      try { await client.navigate(INDEX_URL); } catch (_) { /* tab may have closed */ }
    }));
  })());
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || request.mode !== 'navigate') return;

  const url = new URL(request.url);
  // Chỉ xử lý tài liệu của app cũ trong phạm vi đăng ký này.
  if (url.origin !== self.location.origin || !url.href.startsWith(APP_SCOPE)) return;
  const appRoot = new URL(APP_SCOPE);
  const indexPath = new URL(INDEX_URL).pathname;
  if (url.pathname !== appRoot.pathname && url.pathname !== indexPath) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      // Mọi đường dẫn mở app/PWA cũ đều nhận index chuyển tiếp mới nhất.
      const response = await fetch(new Request(INDEX_URL, {
        cache: 'no-store',
        credentials: 'same-origin'
      }));
      if (!response.ok) throw new Error('Retirement page unavailable');
      await cache.put(INDEX_URL, response.clone()).catch(() => {});
      return response;
    } catch (error) {
      // Mất mạng: chỉ mở lại trang thông báo, không trả app.js/index cũ.
      const offlinePage = await cache.match(INDEX_URL);
      return offlinePage || new Response(
        '<!doctype html><html lang="vi"><meta charset="utf-8">' +
        '<title>Toán 2 chuyển sang Lớp 2</title>' +
        '<body><h1>Toán 2 đã chuyển sang LỚP 2 – Epsilon Edu</h1>' +
        '<p>Chưa có kết nối mạng. Vui lòng thử lại khi có Internet.</p>' +
        '<p><a href="https://epsilon-class-2.pages.dev/" rel="noreferrer">Vào LỚP 2</a></p></body></html>',
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      );
    }
  })());
});
