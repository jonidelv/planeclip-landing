(() => {
  // App Store link — replace APP_STORE_ID with the real Apple ID when ready
  const APP_STORE_URL = 'https://apps.apple.com/app/planeclip/idAPP_STORE_ID';

  document.querySelectorAll('[id^="appstore-link"]').forEach(el => {
    el.href = APP_STORE_URL;
  });
})();
