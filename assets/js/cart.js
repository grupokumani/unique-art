/**
 * UNIQUEART — CARRINHO (localStorage)
 * Guarda o carrinho no browser do cliente. A integração de pagamento
 * real (Emola/M-Pesa/Cartão) liga-se aqui mais tarde, na fase de Loja & Pagamentos.
 */

const CART_KEY = 'uniqueart_cart';

function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty });
  }

  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce((total, item) => total + item.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((total, item) => total + (item.price || 0) * item.qty, 0);
}

function formatMT(value) {
  if (value === null || value === undefined) return 'Sob consulta';
  return value.toLocaleString('pt-PT') + ' MT';
}