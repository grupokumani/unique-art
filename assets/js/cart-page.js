/**
 * UNIQUEART — PÁGINA DO CARRINHO
 */

function renderCartPage() {
  const listEl = document.querySelector('[data-cart-list]');
  const summaryEl = document.querySelector('[data-cart-summary]');
  const emptyEl = document.querySelector('[data-cart-empty]');
  if (!listEl || !summaryEl) return;

  const cart = getCart();

  if (!cart.length) {
    listEl.style.display = 'none';
    summaryEl.style.display = 'none';
    emptyEl.style.display = 'block';
    return;
  }

  listEl.style.display = 'block';
  summaryEl.style.display = 'block';
  emptyEl.style.display = 'none';

  listEl.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <p class="cart-item__name">${item.name}</p>
        ${item.note ? `<p class="cart-item__note">Personalização: ${item.note}</p>` : ''}
        <p class="cart-item__price">${formatMT(item.price)}</p>
      </div>
      <div class="cart-item__controls">
        <div class="qty-selector">
          <button type="button" onclick="updateCartQty(${index}, ${item.qty - 1}); renderCartPage();">−</button>
          <input type="number" value="${item.qty}" min="1" onchange="updateCartQty(${index}, parseInt(this.value)); renderCartPage();">
          <button type="button" onclick="updateCartQty(${index}, ${item.qty + 1}); renderCartPage();">+</button>
        </div>
        <button class="cart-item__remove" onclick="removeCartItem(${index}); renderCartPage();">Remover</button>
      </div>
    </div>
  `).join('');

  const total = getCartTotal();
  const quoteNotice = hasQuoteOnlyItems()
    ? '<p class="text-muted" style="font-size: var(--text-xs); margin-top: var(--space-2);">Alguns itens são "Sob consulta" — o valor final será confirmado no WhatsApp.</p>'
    : '';

  summaryEl.innerHTML = `
    <h3>Resumo</h3>
    <div class="cart-summary__row">
      <span>Itens</span>
      <span>${getCartCount()}</span>
    </div>
    <div class="cart-summary__total">
      <span>Total estimado</span>
      <span>${formatMT(total)}</span>
    </div>
    ${quoteNotice}
    <a href="https://wa.me/258833044410?text=${encodeURIComponent(buildWhatsAppOrderMessage())}"
       class="btn btn--primary" style="width:100%; margin-top: var(--space-4);" target="_blank" rel="noopener">
      Finalizar Encomenda no WhatsApp
    </a>
    <p class="text-muted" style="font-size: var(--text-xs); margin-top: var(--space-4); text-align:center;">
      Encomendas com pelo menos 3 dias de antecedência.
    </p>
  `;
}

document.addEventListener('DOMContentLoaded', renderCartPage);
window.addEventListener('cart:updated', renderCartPage);