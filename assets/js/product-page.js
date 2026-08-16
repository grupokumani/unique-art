/**
 * UNIQUEART — PÁGINA DE PRODUTO INDIVIDUAL
 * Lê o ?id= da URL e desenha o produto correspondente a partir de PRODUCTS.
 */

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderProductDetail() {
  const container = document.querySelector('[data-product-detail]');
  if (!container) return;

  const id = getProductIdFromUrl();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    container.innerHTML = '<p class="text-muted">Produto não encontrado. <a href="/loja/">Voltar à loja</a>.</p>';
    return;
  }

  document.title = `${product.name} — UniqueArt`;

  container.innerHTML = `
    <img class="product-detail__image" src="${product.image}" alt="${product.name}">

    <div class="product-detail__info">
      <span class="badge">${product.categoryLabel}</span>
      <h1>${product.name}</h1>
      <p class="product-detail__price">${formatMT(product.price)}</p>
      <p class="product-detail__description">${product.description}</p>

      <div class="field" style="max-width: 420px;">
        <label for="note">Personalização (opcional)</label>
        <textarea id="note" rows="3" placeholder="Ex: nome, cores, mensagem especial..."></textarea>
      </div>

      <div class="product-detail__actions">
        <div class="qty-selector">
          <button type="button" data-qty-decrease>−</button>
          <input type="number" id="qty" value="1" min="1">
          <button type="button" data-qty-increase>+</button>
        </div>

        <button class="btn btn--primary" id="add-to-cart-btn">Adicionar ao Carrinho</button>

        <a href="https://wa.me/258833044410?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre: ' + product.name)}"
           class="btn btn--secondary" target="_blank" rel="noopener">Perguntar no WhatsApp</a>
      </div>

      <p class="product-detail__notice">Encomendas feitas com pelo menos 3 dias de antecedência. Horário: Segunda a Sábado, 08:00–17:00.</p>
    </div>
  `;

  initQtySelector();
  initAddToCartButton(product.id);
}

function initQtySelector() {
  const input = document.getElementById('qty');
  document.querySelector('[data-qty-decrease]').addEventListener('click', () => {
    input.value = Math.max(1, parseInt(input.value || 1) - 1);
  });
  document.querySelector('[data-qty-increase]').addEventListener('click', () => {
    input.value = parseInt(input.value || 1) + 1;
  });
}

function initAddToCartButton(productId) {
  const btn = document.getElementById('add-to-cart-btn');
  btn.addEventListener('click', () => {
    const qty = parseInt(document.getElementById('qty').value || 1);
    const note = document.getElementById('note').value.trim();
    addToCart(productId, qty, note);

    btn.textContent = 'Adicionado ✓';
    setTimeout(() => { btn.textContent = 'Adicionar ao Carrinho'; }, 1800);
  });
}

document.addEventListener('DOMContentLoaded', renderProductDetail);