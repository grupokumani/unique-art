/**
 * UNIQUEART — MOTOR DE CATÁLOGO
 * Desenha cards de produto a partir de PRODUCTS (products-data.js).
 * Usado tanto na Loja (todos os produtos + filtros) como nas páginas de categoria.
 */

function renderProductCard(product) {
  return `
    <div class="card product-card">
      <img class="card__image" src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="card__body">
        <span class="badge">${product.categoryLabel}</span>
        <h3 class="card__title">${product.name}</h3>
        <p class="card__price">${formatMT(product.price)}</p>
        <div class="product-card__actions">
          <button class="btn btn--primary btn--sm" onclick="addToCart('${product.id}')">Adicionar ao Carrinho</button>
          <a href="https://wa.me/258833044410?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre: ' + product.name)}"
             class="btn btn--secondary btn--sm" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(products, containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = products.length
    ? products.map(renderProductCard).join('')
    : '<p class="text-muted">Nenhum produto encontrado nesta categoria.</p>';
}

/**
 * Inicializa uma grelha de categoria única (usado nas páginas /produtos/{categoria}.html)
 * — lê o atributo data-category do próprio container.
 */
function initCategoryGrid() {
  const grid = document.querySelector('[data-product-grid]');
  if (!grid) return;

  const category = grid.getAttribute('data-category');
  const filtered = category ? PRODUCTS.filter(p => p.category === category) : PRODUCTS;
  renderProducts(filtered, grid);
}

/**
 * Inicializa a Loja completa, com separadores de filtro por categoria.
 */
function initShopGrid() {
  const grid = document.querySelector('[data-product-grid]');
  const tabs = document.querySelectorAll('[data-filter-tab]');
  if (!grid) return;

  renderProducts(PRODUCTS, grid);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('filter-tab--active'));
      tab.classList.add('filter-tab--active');

      const category = tab.getAttribute('data-filter-tab');
      const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
      renderProducts(filtered, grid);
    });
  });
}