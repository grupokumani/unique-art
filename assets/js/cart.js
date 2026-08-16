/**
 * UNIQUEART — CARRINHO (localStorage)
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

/**
 * Adiciona um produto ao carrinho.
 * Se já existir o mesmo produto COM a mesma nota, apenas soma a quantidade.
 * Se a nota for diferente, cria uma linha separada (personalizações distintas).
 */
function addToCart(productId, qty = 1, note = '') {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId && item.note === note);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty, note });
  }

  saveCart(cart);
}

function updateCartQty(index, qty) {
  const cart = getCart();
  if (!cart[index]) return;
  if (qty < 1) {
    cart.splice(index, 1);
  } else {
    cart[index].qty = qty;
  }
  saveCart(cart);
}

function removeCartItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce((total, item) => total + item.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((total, item) => total + (item.price || 0) * item.qty, 0);
}

function hasQuoteOnlyItems() {
  return getCart().some(item => item.price === null || item.price === undefined);
}

function formatMT(value) {
  if (value === null || value === undefined) return 'Sob consulta';
  return value.toLocaleString('pt-PT') + ' MT';
}

/**
 * Monta a mensagem de WhatsApp com o resumo completo do carrinho.
 */
function buildWhatsAppOrderMessage() {
  const cart = getCart();
  if (!cart.length) return 'Olá! Gostaria de fazer uma encomenda.';

  let msg = 'Olá! Gostaria de fazer a seguinte encomenda:\n\n';
  cart.forEach(item => {
    msg += `• ${item.qty}x ${item.name} — ${formatMT(item.price)}\n`;
    if (item.note) msg += `   Personalização: ${item.note}\n`;
  });

  const total = getCartTotal();
  msg += `\nTotal estimado: ${formatMT(total)}`;
  if (hasQuoteOnlyItems()) msg += ' (+ itens sob consulta)';
  msg += '\n\nAguardo confirmação. Obrigado!';

  return msg;
}