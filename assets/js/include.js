/**
 * UNIQUEART — Sistema de includes (sem framework, sem Node)
 * Injeta header.html e footer.html em qualquer página que tenha
 * os elementos <div data-include="header"></div> / "footer"
 */
document.addEventListener('DOMContentLoaded', () => {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(el => {
    const name = el.getAttribute('data-include');
    fetch(`/assets/partials/${name}.html`)
      .then(res => {
        if (!res.ok) throw new Error(`Não foi possível carregar ${name}.html`);
        return res.text();
      })
      .then(html => {
        el.innerHTML = html;
        el.dispatchEvent(new CustomEvent('include:loaded', { detail: { name } }));
      })
      .catch(err => console.error(err));
  });
});