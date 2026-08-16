/**
 * UNIQUEART — Comportamentos globais do site
 */

// Espera o header ser injetado (via include.js) antes de ligar o menu mobile
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('include:loaded', (e) => {
    if (e.detail.name === 'header') initMobileMenu();
  });

  // Ano automático no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// --- Sincronização do carrinho com o ícone no header ---
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('include:loaded', (e) => {
    if (e.detail.name === 'header' && typeof getCartCount === 'function') {
      updateCartCount(getCartCount());
    }
  });
});

window.addEventListener('cart:updated', () => {
  if (typeof getCartCount === 'function') updateCartCount(getCartCount());
});

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('site-nav--open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.classList.toggle('menu-toggle--active', isOpen);
  });
}

/**
 * Placeholder do contador do carrinho.
 * Na "Fase Loja" isto vai ler do localStorage/estado real do carrinho.
 */
function updateCartCount(count) {
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = count;
}