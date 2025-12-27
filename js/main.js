// ===== main.js =====
document.addEventListener('DOMContentLoaded', () => {
  // Re-init WOW.js (fallback jika common.js belum init)
  if (typeof WOW !== 'undefined' && !window.wowInitialized) {
    new WOW().init();
    window.wowInitialized = true;
  }

  // Counter fallback (animasi 0 → angka)
  document.querySelectorAll('.counter-title').forEach(el => {
    const target = parseInt(el.getAttribute('data-to')) || 0;
    const speed = parseInt(el.getAttribute('data-speed')) || 60;
    const duration = target / speed; // ms per 1 angka
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      el.textContent = current.toLocaleString();
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      }
    }, duration);
  });
});