document.addEventListener('DOMContentLoaded', () => {
  const models = Array.from(document.querySelectorAll('.model'));
  const cartPanel = document.querySelector('.cart-panel');
  const cartList = document.querySelector('.cart-items');
  const cartEmpty = document.querySelector('.cart-empty');
  const cartCount = document.querySelector('.cart-count');

  const sidebar = document.getElementById('sidebar');
  const sidebarName = sidebar.querySelector('.sidebar-name');
  const sidebarDesc = sidebar.querySelector('.sidebar-desc');
  const sidebarMedia = sidebar.querySelector('.sidebar-media');
  const sidebarQtyEl = sidebar.querySelector('.sidebar-qty');
  const sidebarInc = sidebar.querySelector('.qty-increase');
  const sidebarDec = sidebar.querySelector('.qty-decrease');
  const sidebarAdd = sidebar.querySelector('.sidebar-add');
  const sidebarClose = sidebar.querySelector('.sidebar-close');

  let currentModel = null;

  function loadCart() { return JSON.parse(localStorage.getItem('cart') || '{}'); }
  function saveCart(c) { localStorage.setItem('cart', JSON.stringify(c)); }

  function renderCart() {
    const cart = loadCart();
    if (!cartList || !cartEmpty || !cartCount) return; // no cart view on this page
    cartList.innerHTML = '';
    const keys = Object.keys(cart);
    if (keys.length === 0) {
      cartEmpty.style.display = 'block';
      cartCount.textContent = '0';
      return;
    }
    cartEmpty.style.display = 'none';
    let totalItems = 0;
    keys.forEach(k => {
      const item = cart[k];
      totalItems += item.qty;
      const li = document.createElement('li');
      li.className = 'cart-item';
      const thumb = item.image ? `<img src="${item.image}" alt="${item.name}">` : (item.placeholder || '');
      li.innerHTML = `
        <div class="cart-thumb">${thumb}</div>
        <div class="cart-meta"><strong>${item.name}</strong><div class="cart-qty">Cantidad: ${item.qty}</div></div>
        <div class="cart-actions"><button class="btn remove" data-model="${k}">Eliminar</button></div>
      `;
      cartList.appendChild(li);
    });
    cartCount.textContent = String(totalItems);
  }

  function openSidebar(modelEl) {
    currentModel = modelEl;
    const name = modelEl.dataset.name || 'Sin nombre';
    const desc = modelEl.dataset.desc || '';
    const img = modelEl.dataset.image || '';
    sidebarName.textContent = name;
    sidebarDesc.textContent = desc;
    sidebarQtyEl.textContent = String(loadCart()[modelEl.dataset.model]?.qty || 1);
    if (img) sidebarMedia.innerHTML = `<img src="${img}" alt="${name}">`;
    else sidebarMedia.innerHTML = modelEl.querySelector('.card-media').innerHTML;
    sidebar.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    currentModel = null;
  }

  function changeSidebarQty(delta) {
    const cur = parseInt(sidebarQtyEl.textContent || '1', 10) + delta;
    const qty = isNaN(cur) ? 1 : Math.max(1, cur);
    sidebarQtyEl.textContent = String(qty);
  }

  // Card click opens sidebar
  models.forEach(m => {
    const sel = m.querySelector('.select');
    m.addEventListener('click', (e) => {
      // open sidebar only when clicking card or select button
      if (e.target.closest('.btn')) return; // let button handlers act separately
      openSidebar(m);
    });
    if (sel) sel.addEventListener('click', (e) => { e.stopPropagation(); openSidebar(m); });
    m.addEventListener('keydown', e => { if (e.key === 'Enter') openSidebar(m); });
  });

  // Sidebar controls
  if (sidebarInc) sidebarInc.addEventListener('click', () => changeSidebarQty(1));
  if (sidebarDec) sidebarDec.addEventListener('click', () => changeSidebarQty(-1));
  if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
  if (sidebarAdd) sidebarAdd.addEventListener('click', () => {
    if (!currentModel) return;
    const id = currentModel.dataset.model;
    const name = currentModel.dataset.name || 'Sin nombre';
    const image = currentModel.dataset.image || '';
    const qty = parseInt(sidebarQtyEl.textContent || '1', 10) || 1;
    const cart = loadCart();
    cart[id] = { id, name, qty, image };
    // placeholder for models without image
    if (!image) cart[id].placeholder = currentModel.querySelector('.card-media').innerHTML;
    saveCart(cart);
    renderCart();
    closeSidebar();
  });

  // Cart list remove (delegation)
  if (cartList) {
    cartList.addEventListener('click', e => {
      if (e.target.matches('.remove')) {
        const id = e.target.dataset.model;
        const cart = loadCart();
        delete cart[id];
        saveCart(cart);
        renderCart();
      }
    });
  }

  // Header cart button (go to dedicated cart page)
  const headerContainer = document.querySelector('.site-header .container');
  if (headerContainer) {
    const link = document.createElement('a');
    link.className = 'btn cart-link';
    link.href = 'cart.html';
    link.setAttribute('aria-label', 'Ver carrito');
    link.innerHTML = `
      <span class="cart-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="20" r="1" fill="currentColor"/>
          <circle cx="18" cy="20" r="1" fill="currentColor"/>
        </svg>
      </span>
      <span class="sr-only">Ver carrito</span>
    `;
    headerContainer.appendChild(link);
  }

  // Clear and checkout
  const clearBtn = document.querySelector('.cart-clear');
  const checkoutBtn = document.querySelector('.cart-checkout');
  if (clearBtn) clearBtn.addEventListener('click', () => { localStorage.removeItem('cart'); renderCart(); });
  if (checkoutBtn) checkoutBtn.addEventListener('click', () => { alert('Funcionalidad de pago no implementada en la plantilla.'); });

  // Initialize UI from localStorage
  const initialCart = loadCart();
  // set any card data-quantity if present in storage
  models.forEach(m => {
    const id = m.dataset.model;
    const qty = initialCart[id]?.qty || 0;
    m.dataset.quantity = qty;
  });
  renderCart();
});
