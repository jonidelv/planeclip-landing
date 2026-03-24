(() => {
  // App Store link — replace APP_STORE_ID with the real Apple ID when ready
  const APP_STORE_URL = 'https://apps.apple.com/us/app/planeclip-your-flights-live/id6760560214';

  document.querySelectorAll('[id^="appstore-link"]').forEach(el => {
    el.href = APP_STORE_URL;
  });

  // Scroll reveal animations
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // Hero elements: animate immediately with stagger
  const heroReveals = document.querySelectorAll('.hero .reveal');
  heroReveals.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.12}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('reveal--visible');
      });
    });
  });

  // Everything else: IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => {
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
})();
