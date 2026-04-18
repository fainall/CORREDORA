// ===================== DATA =====================
const STORAGE_KEY = 'gprb_properties';
const SLIDER_KEY = 'gprb_slider';
const AUTH_KEY = 'gprb_auth';
const FAVS_KEY = 'gprb_favorites';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

const FALLBACK_IMG = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e8ecef' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%2399a3ad' text-anchor='middle' dy='.3em'%3EImagen no disponible%3C/text%3E%3C/svg%3E";

const defaultProperties = [
  {
    id: 1,
    title: 'Bodega Industrial Providencia',
    type: 'Bodega',
    status: 'Venta',
    price: 85000000,
    location: 'Providencia, Santiago',
    address: 'Av. Providencia 1500',
    area: 450,
    usableArea: 400,
    bathrooms: 2,
    parking: 4,
    warehouseType: 'Cerrada',
    privateRooms: 0,
    age: 5,
    height: 6,
    floorSupport: 5,
    platforms: 'Si',
    pricePerM2: 188888,
    propertyCode: 'BDG-001',
    image: 'https://images.unsplash.com/photo-1553531889-e6cf91d13ab6?w=800&q=80',
    gallery: [],
    description: 'Bodega industrial cerrada con excelentes caracteristicas. Piso de hormigon resistente, acceso de carga y descarga, oficinas internas. Ubicacion estrategica en Providencia.',
    services: ['Internet', 'Agua', 'Luz'],
    amenities: ['Aire', 'Generador'],
    security: ['Alarma', 'Incendio'],
    agentName: 'Giancarlo GPRB',
    agentPhone: '+56 9 4170 9793',
    agentEmail: 'giancarlo@gprb.cl'
  },
  {
    id: 2,
    title: 'Oficina Ejecutiva Centro',
    type: 'Oficina',
    status: 'Arriendo',
    price: 2500000,
    location: 'Centro, Santiago',
    address: 'Ahumada 250',
    area: 120,
    usableArea: 110,
    bathrooms: 2,
    parking: 2,
    warehouseType: null,
    privateRooms: 3,
    age: 8,
    height: 3,
    floorSupport: 3,
    platforms: 'No',
    pricePerM2: 20833333,
    propertyCode: 'OFC-001',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [],
    description: 'Moderna oficina ejecutiva con acabados premium. Climatizacion central, vista a la ciudad, zonas colaborativas y privadas.',
    services: ['Internet', 'Agua', 'Gas', 'Luz', 'Telefonica'],
    amenities: ['Aire', 'Calefaccion'],
    security: ['Alarma', 'Conserjeria'],
    agentName: 'Giancarlo GPRB',
    agentPhone: '+56 9 4170 9793',
    agentEmail: 'giancarlo@gprb.cl'
  },
  {
    id: 3,
    title: 'Terreno Industrial Zona Franca',
    type: 'Terreno',
    status: 'Venta',
    price: 250000000,
    location: 'Zona Franca, Valparaiso',
    address: 'Km 11 Ruta 5 Sur',
    area: 5000,
    usableArea: 4500,
    bathrooms: 1,
    parking: 10,
    warehouseType: 'Abierta',
    privateRooms: 0,
    age: 2,
    height: 8,
    floorSupport: 10,
    platforms: 'Si',
    pricePerM2: 50000000,
    propertyCode: 'TRR-001',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
    gallery: [],
    description: 'Amplio terreno industrial en zona franca con excelente acceso logistico. Ideal para plantas manufactureras, distribuidoras o centros de acopio.',
    services: ['Agua', 'Luz'],
    amenities: ['Generador'],
    security: ['Alarma'],
    agentName: 'Giancarlo GPRB',
    agentPhone: '+56 9 4170 9793',
    agentEmail: 'giancarlo@gprb.cl'
  }
];

const defaultSlider = {
  slides: [
    {
      bgUrl: 'https://images.unsplash.com/photo-1553531889-e6cf91d13ab6?w=1400&q=80',
      tag: 'Bienvenido a GPRB',
      title: 'Gestión Inmobiliaria Industrial',
      subtitle: 'Las mejores soluciones en propiedades industriales de Chile'
    },
    {
      bgUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
      tag: 'Amplio Catálogo',
      title: 'Bodegas, Oficinas y Terrenos',
      subtitle: 'Más de 8 categorías de inmuebles para tu negocio'
    },
    {
      bgUrl: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1400&q=80',
      tag: 'Cobertura Nacional',
      title: 'Asesoría Profesional',
      subtitle: 'Expertos en el mercado inmobiliario industrial chileno'
    }
  ]
};

// ===== In-memory caches (hidratados desde Supabase en init) =====
let _propertiesCache = [...defaultProperties];
let _sliderCache = JSON.parse(JSON.stringify(defaultSlider));

function getProperties() {
  return _propertiesCache;
}

function getSliderData() {
  return _sliderCache;
}

// Loaders async: llaman a Supabase y actualizan el cache + re-render
async function loadPropertiesFromSB() {
  if (!window.GPRB_SB) return;
  try {
    const rows = await window.GPRB_SB.getProperties();
    if (rows && rows.length > 0) _propertiesCache = rows;
  } catch (e) { console.warn('loadPropertiesFromSB', e); }
}

async function loadSliderFromSB() {
  if (!window.GPRB_SB) return;
  try {
    const rows = await window.GPRB_SB.getSlides();
    if (rows && rows.length > 0) _sliderCache = { slides: rows };
  } catch (e) { console.warn('loadSliderFromSB', e); }
}

// ===================== FAVORITES =====================
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAVS_KEY) || '[]'); }
  catch (e) { return []; }
}

function toggleFavorite(id, event) {
  if (event) { event.stopPropagation(); event.preventDefault(); }
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx > -1) {
    favs.splice(idx, 1);
    showToast('Eliminado de favoritos');
  } else {
    favs.push(id);
    showToast('Agregado a favoritos');
  }
  localStorage.setItem(FAVS_KEY, JSON.stringify(favs));
  document.querySelectorAll(`[data-fav-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', favs.includes(id));
  });
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

// ===================== AUTH (Supabase) =====================
let _currentUser = null;

function isLoggedIn() {
  return !!_currentUser;
}

async function handleLogin(e) {
  e.preventDefault();
  const userInput = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;
  // El campo "user" ahora acepta email. Si no lleva @, asumir email admin legado.
  const email = userInput.includes('@') ? userInput : `${userInput}@gprb.cl`;

  try {
    const { user } = await window.GPRB_SB.signIn(email, pass);
    _currentUser = user;
    updateAuthUI();
    showPage('dashboard');
    showToast('Bienvenido, ' + (user.email || 'Administrador'));
    document.getElementById('loginForm').reset();
    hideLoginError();
  } catch (err) {
    showLoginError(err.message || 'Credenciales incorrectas');
  }
}

async function logout() {
  try { await window.GPRB_SB.signOut(); } catch (e) { console.warn(e); }
  _currentUser = null;
  updateAuthUI();
  showPage('home');
  showToast('Sesion cerrada correctamente');
}

function updateAuthUI() {
  const logged = isLoggedIn();
  const setDisplay = (id, show, val = '') => {
    const el = document.getElementById(id);
    if (el) el.style.display = show ? val : 'none';
  };
  setDisplay('navAdmin', !logged, 'inline-flex');
  setDisplay('navDashboard', logged, '');
  setDisplay('navLogout', logged, '');
  setDisplay('btnAddProp', logged, 'inline-flex');
  setDisplay('mobileAdmin', !logged, '');
  setDisplay('mobileDashboard', logged, '');
  setDisplay('mobileLogout', logged, '');
}

function showLoginError(msg) {
  const el = document.getElementById('loginError');
  document.getElementById('loginErrorMsg').textContent = msg;
  el.style.display = 'flex';
}

function hideLoginError() {
  document.getElementById('loginError').style.display = 'none';
}

function togglePassword() {
  const input = document.getElementById('loginPass');
  const icon = document.getElementById('eyeIcon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

// ===================== SLIDER =====================
let currentSlide = 0;
let sliderInterval = null;

function initSlider() {
  renderSlider();
  startSliderAutoplay();
  attachSliderKeyboard();
}

function renderSlider() {
  const data = getSliderData();
  const container = document.getElementById('sliderSlidesContainer');
  const dotsContainer = document.getElementById('sliderDots');

  container.innerHTML = data.slides.map((s, i) => `
    <div class="slider-slide${i === 0 ? ' active' : ''}" role="group" aria-roledescription="slide" aria-label="Slide ${i + 1} de ${data.slides.length}">
      <div class="slider-bg" style="background-image:url('${escapeAttr(s.bgUrl)}')"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <span class="hero-tag">${escapeHtml(s.tag || 'GPRB')}</span>
          <h1>${formatHeroTitle(s.title)}</h1>
          <p>${escapeHtml(s.subtitle)}</p>
        </div>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = data.slides.map((_, i) =>
    `<button type="button" class="slider-dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${i}); resetSliderAutoplay();" aria-label="Ir al slide ${i + 1}" role="tab"></button>`
  ).join('');

  currentSlide = 0;
}

function formatHeroTitle(title) {
  // Highlight the last word in italic/orange for visual pop (like "Dream House.")
  const parts = String(title || '').trim().split(' ');
  if (parts.length < 2) return escapeHtml(title);
  const last = parts.pop();
  return `${escapeHtml(parts.join(' '))} <span class="accent">${escapeHtml(last)}</span>`;
}

function changeSlide(dir) {
  const slides = document.querySelectorAll('.slider-slide');
  if (slides.length === 0) return;
  goToSlide((currentSlide + dir + slides.length) % slides.length);
  resetSliderAutoplay();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slider-slide');
  const dots = document.querySelectorAll('.slider-dot');

  if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

  currentSlide = index;

  if (slides[currentSlide]) slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function startSliderAutoplay() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    const slides = document.querySelectorAll('.slider-slide');
    if (slides.length > 1) goToSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

function resetSliderAutoplay() {
  clearInterval(sliderInterval);
  startSliderAutoplay();
}

function attachSliderKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (currentPage !== 'home') return;
    if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
  });
}

function renderSliderEditor() {
  const data = getSliderData();
  const container = document.getElementById('sliderEditorForms');
  if (!container) return;
  container.innerHTML = data.slides.map((s, i) => `
    <div class="slide-editor-card">
      <h4><span class="slide-num">${i + 1}</span> Slide ${i + 1}</h4>
      <div class="form-grid">
        <div class="form-group full-width">
          <label>URL de la Imagen</label>
          <input type="url" data-slide-idx="${i}" data-slide-field="bgUrl" value="${escapeAttr(s.bgUrl)}" placeholder="https://...">
        </div>
        <div class="form-group">
          <label>Etiqueta (chip)</label>
          <input type="text" data-slide-idx="${i}" data-slide-field="tag" value="${escapeAttr(s.tag || '')}" maxlength="40">
        </div>
        <div class="form-group">
          <label>Título</label>
          <input type="text" data-slide-idx="${i}" data-slide-field="title" value="${escapeAttr(s.title)}" maxlength="100">
        </div>
        <div class="form-group full-width">
          <label>Subtítulo</label>
          <input type="text" data-slide-idx="${i}" data-slide-field="subtitle" value="${escapeAttr(s.subtitle)}" maxlength="150">
        </div>
      </div>
    </div>
  `).join('');
}

async function saveSliderChanges() {
  const data = getSliderData();
  document.querySelectorAll('[data-slide-idx]').forEach(input => {
    const idx = parseInt(input.dataset.slideIdx);
    const field = input.dataset.slideField;
    if (data.slides[idx]) data.slides[idx][field] = input.value.trim();
  });
  try {
    const saved = await window.GPRB_SB.saveSlides(data.slides);
    _sliderCache = { slides: saved };
    renderSlider();
    startSliderAutoplay();
    showToast('Portada actualizada correctamente');
  } catch (e) {
    showToast('Error al guardar: ' + (e.message || 'intenta de nuevo'));
  }
}

// ===================== NAVIGATION =====================
let currentPage = 'home';

function showPage(page, data) {
  if (page === 'dashboard' && !isLoggedIn()) {
    showPage('login');
    return;
  }

  document.querySelectorAll('[id^="page-"]').forEach(el => el.classList.add('page-hidden'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.remove('page-hidden');

  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  currentPage = page;
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'home') renderHome();
  if (page === 'listings') renderListings();
  if (page === 'detail' && data) renderDetail(data);
  if (page === 'dashboard') renderDashboard();
}

function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  const btn = document.querySelector('.menu-toggle i');
  nav.classList.toggle('open');
  const isOpen = nav.classList.contains('open');
  document.body.classList.toggle('menu-open', isOpen);
  if (btn) btn.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
}

function closeMenu() {
  const nav = document.getElementById('mobileNav');
  if (nav && nav.classList.contains('open')) toggleMenu();
}

// ===================== RENDER PROPERTY CARD =====================
function formatPrice(prop) {
  const amount = `$${(prop.price || 0).toLocaleString('es-CL')} CLP`;
  return prop.status === 'Arriendo' ? `${amount}/mes` : amount;
}

function createPropertyCard(prop) {
  const statusBadge = prop.status === 'Venta'
    ? '<span class="badge badge-sale">Venta</span>'
    : '<span class="badge badge-rent">Arriendo</span>';

  const priceText = formatPrice(prop);
  const favActive = isFavorite(prop.id) ? ' active' : '';

  const features = [];
  if (prop.area > 0) features.push(`<span class="card-feature"><i class="fas fa-ruler-combined"></i> ${prop.area}m²</span>`);
  if (prop.parking > 0) features.push(`<span class="card-feature"><i class="fas fa-car"></i> ${prop.parking}</span>`);
  if (prop.bathrooms > 0) features.push(`<span class="card-feature"><i class="fas fa-bath"></i> ${prop.bathrooms}</span>`);

  const card = document.createElement('div');
  card.className = 'property-card';
  card.innerHTML = `
    <div class="card-image">
      <img src="${escapeAttr(prop.image)}" alt="${escapeAttr(prop.title)}" loading="lazy" onerror="imgFallback(this)">
      <button type="button" class="card-fav${favActive}" data-fav-id="${prop.id}" aria-label="Agregar a favoritos" title="Favorito"><i class="fas fa-heart"></i></button>
      <div class="card-badges">
        ${statusBadge}
        <span class="badge badge-type">${escapeHtml(prop.type)}</span>
      </div>
      <div class="card-price">${priceText}</div>
    </div>
    <div class="card-body">
      <h3>${escapeHtml(prop.title)}</h3>
      <div class="card-location"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(prop.location)}</div>
      <div class="card-features">${features.join('')}</div>
    </div>
  `;
  const favBtn = card.querySelector('.card-fav');
  favBtn.addEventListener('click', (e) => toggleFavorite(prop.id, e));
  card.addEventListener('click', (e) => {
    if (e.target.closest('.card-fav')) return;
    showPage('detail', prop.id);
  });
  return card;
}

// ===================== RENDER PAGES =====================
function renderHome() {
  const props = getProperties();
  const grid = document.getElementById('featuredGrid');
  grid.innerHTML = '';
  props.slice(0, 6).forEach(p => grid.appendChild(createPropertyCard(p)));

  document.getElementById('statTotal').textContent = props.length;

  const typeMap = {
    'Departamento': 'catDep',
    'Casa': 'catCasa',
    'Oficina': 'catOfi',
    'Bodega': 'catBod',
    'Industrial': 'catInd',
    'Local': 'catLoc',
    'Parcela': 'catPar',
    'Terreno': 'catTer'
  };

  Object.entries(typeMap).forEach(([type, id]) => {
    const count = props.filter(p => p.type === type).length;
    const el = document.getElementById(id);
    if (el) el.textContent = count;
  });
}

function renderListings(filteredProps) {
  const props = filteredProps || getProperties();
  const grid = document.getElementById('listingsGrid');
  grid.innerHTML = '';

  document.getElementById('noResults').style.display = props.length === 0 ? 'block' : 'none';
  props.forEach(p => grid.appendChild(createPropertyCard(p)));
  document.getElementById('resultsCount').textContent = `${props.length} resultado${props.length !== 1 ? 's' : ''}`;
}

function renderDetail(propId) {
  const props = getProperties();
  const prop = props.find(p => p.id === propId);
  if (!prop) return;

  const priceText = `$${prop.price.toLocaleString('es-CL')} CLP${prop.status === 'Arriendo' ? '/mes' : ''}`;
  const galleryImages = [prop.image, ...(prop.gallery || [])].filter(Boolean);
  const mainImg = galleryImages[0] || '';
  const thumbs = [1,2,3,4].map(i => galleryImages[i] || mainImg);
  const totalPhotos = galleryImages.length;
  const agentInitial = prop.agentName ? prop.agentName.charAt(0).toUpperCase() : 'G';

  document.getElementById('propertyDetail').innerHTML = `
    <div class="detail-hero">
      <div class="detail-gallery-modern">
        <div class="dgm-main">
          <img src="${escapeHtml(mainImg)}" alt="${escapeHtml(prop.title)}" onerror="imgFallback(this)" onclick="openLightbox(0, ${prop.id})">
        </div>
        <div class="dgm-grid">
          ${thumbs.map((src, i) => `
            <div class="dgm-thumb${i === 3 && totalPhotos > 5 ? ' dgm-thumb-more' : ''}">
              <img src="${escapeHtml(src)}" alt="Foto ${i+2}" onerror="imgFallback(this)" onclick="openLightbox(${i+1}, ${prop.id})">
              ${i === 3 && totalPhotos > 5 ? `<div class="dgm-more-overlay" onclick="openLightbox(${i+1}, ${prop.id})"><i class="fas fa-images"></i><span>+${totalPhotos - 4} fotos</span></div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="detail-content">
      <div class="container">
        <a class="detail-back" onclick="showPage('listings')"><i class="fas fa-arrow-left"></i> Volver</a>
        <div class="detail-grid">
          <div class="detail-main">
            <h1>${escapeHtml(prop.title)}</h1>
            <div class="detail-location"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(prop.location)}</div>
            <div class="detail-price-tag">${priceText}</div>
            <div class="detail-features">
              ${prop.area > 0 ? `<div class="detail-feature"><i class="fas fa-ruler-combined"></i><strong>${prop.area}m²</strong><span>Total</span></div>` : ''}
              ${prop.usableArea > 0 ? `<div class="detail-feature"><i class="fas fa-square"></i><strong>${prop.usableArea}m²</strong><span>Util</span></div>` : ''}
              ${prop.parking > 0 ? `<div class="detail-feature"><i class="fas fa-car"></i><strong>${prop.parking}</strong><span>Estacionamientos</span></div>` : ''}
              ${prop.bathrooms > 0 ? `<div class="detail-feature"><i class="fas fa-bath"></i><strong>${prop.bathrooms}</strong><span>Banos</span></div>` : ''}
            </div>
            <div class="detail-section">
              <h2>Descripcion</h2>
              <p>${escapeHtml(prop.description)}</p>
            </div>
            ${prop.services && prop.services.length > 0 ? `
            <div class="detail-section">
              <h2>Servicios</h2>
              <div class="detail-amenities">
                ${prop.services.map(s => `<div class="detail-amenity"><i class="fas fa-check-circle"></i> ${escapeHtml(s)}</div>`).join('')}
              </div>
            </div>` : ''}
            ${prop.amenities && prop.amenities.length > 0 ? `
            <div class="detail-section">
              <h2>Comodidades</h2>
              <div class="detail-amenities">
                ${prop.amenities.map(a => `<div class="detail-amenity"><i class="fas fa-check-circle"></i> ${escapeHtml(a)}</div>`).join('')}
              </div>
            </div>` : ''}

            ${(prop.address || prop.location) ? `
            <div class="detail-section detail-section-map">
              <h2><i class="fas fa-map-marker-alt"></i> Ubicación</h2>
              <div class="detail-map-address">
                <i class="fas fa-building"></i>
                <span>${escapeHtml(prop.address || prop.location)}, ${escapeHtml(prop.location || '')}</span>
                <a href="https://www.google.com/maps/search/${encodeURIComponent((prop.address || '') + ' ' + (prop.location || ''))}" target="_blank" rel="noopener" class="btn-map-ext">
                  <i class="fas fa-external-link-alt"></i> Ver en Google Maps
                </a>
              </div>
              <div class="detail-map-wrap">
                <iframe
                  src="https://maps.google.com/maps?q=${encodeURIComponent((prop.address || prop.location) + ', Chile')}&output=embed&z=15&hl=es"
                  width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" title="Mapa ubicación propiedad">
                </iframe>
              </div>
            </div>` : ''}
          </div>
          <div class="detail-sidebar">
            ${prop.agentName ? `
            <div class="sidebar-card">
              <h3>Agente</h3>
              <div class="agent-info">
                <div class="agent-avatar">${agentInitial}</div>
                <h4>${escapeHtml(prop.agentName)}</h4>
                ${prop.agentPhone ? `<div class="agent-detail"><i class="fas fa-phone"></i> <a href="tel:${escapeAttr(prop.agentPhone)}">${escapeHtml(prop.agentPhone)}</a></div>` : ''}
                ${prop.agentEmail ? `<div class="agent-detail"><i class="fas fa-envelope"></i> <a href="mailto:${escapeAttr(prop.agentEmail)}">${escapeHtml(prop.agentEmail)}</a></div>` : ''}
              </div>
              ${prop.agentPhone ? `
              <a href="https://wa.me/${cleanPhone(prop.agentPhone)}?text=${encodeURIComponent('Hola, me interesa la propiedad: ' + prop.title + (prop.propertyCode ? ' (Código: ' + prop.propertyCode + ')' : '') + '. ¿Podría darme más información?')}"
                 target="_blank" rel="noopener" class="btn-whatsapp-detail">
                <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
              </a>` : ''}
            </div>` : ''}
            <div class="sidebar-card">
              <h3>Contactar</h3>
              <form class="contact-form" onsubmit="handleContact(event)">
                <input type="text" placeholder="Tu nombre" required>
                <input type="email" placeholder="Tu email" required>
                <input type="tel" placeholder="Tu telefono">
                <textarea rows="4" placeholder="Consulta sobre: ${escapeAttr(prop.title)}..."></textarea>
                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
                  <i class="fas fa-paper-plane"></i> Enviar Consulta
                </button>
              </form>
              <div class="sidebar-wa-divider">
                <span>o contáctanos directo</span>
              </div>
              <a href="https://wa.me/${cleanPhone(prop.agentPhone || '56941709793')}?text=${encodeURIComponent('Hola, vi la propiedad «' + prop.title + '» en GPRB y me gustaría más información.')}"
                 target="_blank" rel="noopener" class="btn-whatsapp-alt">
                <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
              </a>
            </div>
            <div class="sidebar-card">
              <h3>Detalles</h3>
              <div class="agent-detail"><i class="fas fa-tag"></i> <strong>Tipo:</strong>&nbsp;${escapeHtml(prop.type)}</div>
              <div class="agent-detail"><i class="fas fa-handshake"></i> <strong>Estado:</strong>&nbsp;${prop.status}</div>
              <div class="agent-detail"><i class="fas fa-hashtag"></i> <strong>Codigo:</strong>&nbsp;${prop.propertyCode}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===================== DASHBOARD =====================
function renderDashboard() {
  if (!isLoggedIn()) return;
  const props = getProperties();

  document.getElementById('dashTotal').textContent = props.length;
  document.getElementById('dashSale').textContent = props.filter(p => p.status === 'Venta').length;
  document.getElementById('dashRent').textContent = props.filter(p => p.status === 'Arriendo').length;
  const uniqueTypes = new Set(props.map(p => p.type));
  document.getElementById('dashTypes').textContent = uniqueTypes.size;

  renderSliderEditor();
  renderDashList();
  loadMessagesBadge();
}

async function loadMessagesBadge() {
  if (!window.GPRB_SB) return;
  try {
    const msgs = await window.GPRB_SB.getContactMessages();
    const badge = document.getElementById('msgTabBadge');
    if (badge) {
      badge.textContent = msgs.length;
      badge.style.display = msgs.length > 0 ? 'inline-flex' : 'none';
    }
  } catch (e) { /* silencioso */ }
}

function renderDashList() {
  const props = getProperties();
  const search = (document.getElementById('dashSearch').value || '').toLowerCase();
  const filter = document.getElementById('dashFilter').value;

  let filtered = props;
  if (search) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(search) ||
      p.location.toLowerCase().includes(search) ||
      p.type.toLowerCase().includes(search)
    );
  }
  if (filter) filtered = filtered.filter(p => p.status === filter);

  const tbody = document.getElementById('dashTableBody');
  const noResults = document.getElementById('dashNoResults');

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    noResults.style.display = 'block';
    document.querySelector('.dash-table-wrapper').style.display = 'none';
    return;
  }

  noResults.style.display = 'none';
  document.querySelector('.dash-table-wrapper').style.display = 'block';

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td><img src="${escapeHtml(p.image)}" alt="" onerror="imgFallback(this)"></td>
      <td><strong>${escapeHtml(p.title)}</strong></td>
      <td>${escapeHtml(p.type)}</td>
      <td><span class="table-badge ${p.status === 'Venta' ? 'sale' : 'rent'}">${p.status}</span></td>
      <td><strong>$${p.price.toLocaleString('es-CL')}</strong></td>
      <td>${escapeHtml(p.location)}</td>
      <td>
        <div class="table-actions">
          <button class="table-btn view" title="Ver" onclick="showPage('detail', ${p.id})"><i class="fas fa-eye"></i></button>
          <button class="table-btn edit" title="Editar" onclick="editProperty(${p.id})"><i class="fas fa-edit"></i></button>
          <button class="table-btn delete" title="Eliminar" onclick="confirmDelete(${p.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function switchDashTab(tab) {
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('dashPanelSliderEdit').style.display = tab === 'sliderEdit' ? 'block' : 'none';
  document.getElementById('dashPanelList').style.display = tab === 'list' ? 'block' : 'none';
  document.getElementById('dashPanelAdd').style.display = tab === 'add' ? 'block' : 'none';
  document.getElementById('dashPanelMessages').style.display = tab === 'messages' ? 'block' : 'none';

  const tabs = document.querySelectorAll('.dash-tab');
  const tabIndex = tab === 'sliderEdit' ? 0 : tab === 'list' ? 1 : tab === 'add' ? 2 : 3;
  if (tabs[tabIndex]) tabs[tabIndex].classList.add('active');

  if (tab === 'add') resetForm();
  if (tab === 'messages') renderMessagesPanel();
}

// ===================== IMAGE UPLOADER STATE =====================
// Gallery items: { kind: 'url'|'file', value: string|File, previewUrl: string }
let _mainImageState = null; // { kind: 'url'|'file', value, previewUrl }
let _galleryItems = [];

function handleMainImageChange(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    showToast('La imagen no puede superar 10MB');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    _mainImageState = { kind: 'file', value: file, previewUrl: reader.result };
    document.getElementById('mainImagePreview').src = reader.result;
    document.getElementById('mainUploaderEmpty').style.display = 'none';
    document.getElementById('mainUploaderPreview').style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function setMainImageFromUrl(url) {
  if (!url) { clearMainImage(); return; }
  _mainImageState = { kind: 'url', value: url, previewUrl: url };
  document.getElementById('mainImagePreview').src = url;
  document.getElementById('mainUploaderEmpty').style.display = 'none';
  document.getElementById('mainUploaderPreview').style.display = 'block';
  document.getElementById('fImage').value = url;
}

function clearMainImage() {
  _mainImageState = null;
  document.getElementById('fMainImageFile').value = '';
  document.getElementById('fImage').value = '';
  document.getElementById('mainImagePreview').src = '';
  document.getElementById('mainUploaderEmpty').style.display = 'flex';
  document.getElementById('mainUploaderPreview').style.display = 'none';
}

function handleGalleryChange(e) {
  const files = Array.from(e.target.files || []);
  for (const file of files) {
    if (file.size > 10 * 1024 * 1024) { showToast(`"${file.name}" supera 10MB, se omite`); continue; }
    const reader = new FileReader();
    reader.onload = () => {
      _galleryItems.push({ kind: 'file', value: file, previewUrl: reader.result });
      renderGalleryPreview();
    };
    reader.readAsDataURL(file);
  }
  e.target.value = ''; // reset input to allow re-selecting same file
}

function setGalleryFromUrls(urls) {
  _galleryItems = (urls || []).map(u => ({ kind: 'url', value: u, previewUrl: u }));
  renderGalleryPreview();
}

function renderGalleryPreview() {
  const grid = document.getElementById('galleryPreviewGrid');
  if (!grid) return;
  grid.innerHTML = _galleryItems.map((it, i) => `
    <div class="gallery-preview-item">
      <img src="${escapeAttr(it.previewUrl)}" alt="Imagen ${i + 1}" onerror="imgFallback(this)">
      <button type="button" class="btn-remove-item" onclick="removeGalleryItem(${i})" title="Quitar">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join('');
}

function removeGalleryItem(idx) {
  _galleryItems.splice(idx, 1);
  renderGalleryPreview();
}

function resetImageUploaders() {
  clearMainImage();
  _galleryItems = [];
  renderGalleryPreview();
}

// ===================== PROPERTY FORM (ADMIN) =====================
function saveProperty(e) {
  e.preventDefault();
  if (!isLoggedIn()) return;

  const form = e.target;
  const props = getProperties();
  const editId = document.getElementById('editId').value;

  const services = [];
  form.querySelectorAll('input[name="services"]:checked').forEach(cb => services.push(cb.value));

  const amenities = [];
  form.querySelectorAll('input[name="amenities"]:checked').forEach(cb => amenities.push(cb.value));

  const security = [];
  form.querySelectorAll('input[name="security"]:checked').forEach(cb => security.push(cb.value));

  // --- Imagen principal ---
  if (!_mainImageState) {
    showToast('Debes seleccionar una imagen principal');
    return;
  }

  const propData = {
    title: document.getElementById('fTitle').value.trim(),
    type: document.getElementById('fType').value,
    status: document.getElementById('fStatus').value,
    price: parseFloat(document.getElementById('fPrice').value),
    location: document.getElementById('fLocation').value.trim(),
    address: document.getElementById('fAddress').value.trim(),
    area: parseInt(document.getElementById('fArea').value) || 0,
    usableArea: parseInt(document.getElementById('fUsableArea').value) || 0,
    bathrooms: parseInt(document.getElementById('fBathrooms').value) || 0,
    parking: parseInt(document.getElementById('fParking').value) || 0,
    warehouseType: document.getElementById('fWarehouseType').value || null,
    privateRooms: parseInt(document.getElementById('fPrivateRooms').value) || 0,
    age: parseInt(document.getElementById('fAge').value) || null,
    height: parseFloat(document.getElementById('fHeight').value) || null,
    floorSupport: parseFloat(document.getElementById('fFloorSupport').value) || null,
    platforms: document.getElementById('fPlatforms').value || 'No',
    pricePerM2: parseFloat(document.getElementById('fPricePerM2').value) || 0,
    propertyCode: document.getElementById('fPropertyCode').value.trim(),
    image: '', // se llena tras subir
    gallery: [], // se llena tras subir
    description: document.getElementById('fDesc').value.trim(),
    services: services,
    amenities: amenities,
    security: security,
    agentName: document.getElementById('fAgent').value.trim(),
    agentPhone: document.getElementById('fPhone').value.trim(),
    agentEmail: document.getElementById('fEmail').value.trim()
  };

  (async () => {
    const submitBtn = document.getElementById('formSubmitBtn');
    const btnOriginal = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subiendo imágenes...'; }

    try {
      // 1. Imagen principal
      let mainUrl = '';
      if (_mainImageState.kind === 'url') {
        mainUrl = _mainImageState.value;
      } else {
        mainUrl = await window.GPRB_SB.uploadImage(_mainImageState.value);
      }
      propData.image = mainUrl;

      // 2. Galería: upload pendientes, mantener URLs existentes
      if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';
      const galleryUrls = [];
      for (const it of _galleryItems) {
        if (it.kind === 'url') galleryUrls.push(it.value);
        else {
          try { galleryUrls.push(await window.GPRB_SB.uploadImage(it.value)); }
          catch (e) { console.warn('skip', e); }
        }
      }
      propData.gallery = galleryUrls;

      // 3. Guardar en DB
      if (editId) {
        const updated = await window.GPRB_SB.updateProperty(parseInt(editId), propData);
        const idx = _propertiesCache.findIndex(p => p.id === updated.id);
        if (idx !== -1) _propertiesCache[idx] = updated;
        showToast('Propiedad actualizada exitosamente');
      } else {
        const created = await window.GPRB_SB.createProperty(propData);
        _propertiesCache.unshift(created);
        showToast('Propiedad publicada exitosamente');
      }
      resetForm();
      switchDashTab('list');
      renderDashboard();
    } catch (err) {
      showToast('Error al guardar: ' + (err.message || 'intenta de nuevo'));
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = btnOriginal; }
    }
  })();
}

function editProperty(id) {
  if (!isLoggedIn()) return;
  const props = getProperties();
  const prop = props.find(p => p.id === id);
  if (!prop) return;

  document.getElementById('editId').value = prop.id;
  document.getElementById('fTitle').value = prop.title || '';
  document.getElementById('fType').value = prop.type || '';
  document.getElementById('fStatus').value = prop.status || 'Venta';
  document.getElementById('fPrice').value = prop.price || '';
  document.getElementById('fLocation').value = prop.location || '';
  document.getElementById('fAddress').value = prop.address || '';
  document.getElementById('fArea').value = prop.area || '';
  document.getElementById('fUsableArea').value = prop.usableArea || '';
  document.getElementById('fBathrooms').value = prop.bathrooms || '';
  document.getElementById('fParking').value = prop.parking || '';
  document.getElementById('fWarehouseType').value = prop.warehouseType || '';
  document.getElementById('fPrivateRooms').value = prop.privateRooms || '';
  document.getElementById('fAge').value = prop.age || '';
  document.getElementById('fHeight').value = prop.height || '';
  document.getElementById('fFloorSupport').value = prop.floorSupport || '';
  document.getElementById('fPlatforms').value = prop.platforms || '';
  document.getElementById('fPricePerM2').value = prop.pricePerM2 || '';
  document.getElementById('fPropertyCode').value = prop.propertyCode || '';
  // Imagen principal y galería → cargar previews
  setMainImageFromUrl(prop.image || '');
  setGalleryFromUrls(prop.gallery || []);
  document.getElementById('fDesc').value = prop.description || '';
  document.getElementById('fAgent').value = prop.agentName || '';
  document.getElementById('fPhone').value = prop.agentPhone || '';
  document.getElementById('fEmail').value = prop.agentEmail || '';

  document.querySelectorAll('input[name="services"]').forEach(cb => cb.checked = (prop.services || []).includes(cb.value));
  document.querySelectorAll('input[name="amenities"]').forEach(cb => cb.checked = (prop.amenities || []).includes(cb.value));
  document.querySelectorAll('input[name="security"]').forEach(cb => cb.checked = (prop.security || []).includes(cb.value));

  document.getElementById('formSubmitBtn').innerHTML = '<i class="fas fa-save"></i> Guardar Cambios';
  switchDashTab('add');
}

function resetForm() {
  const form = document.getElementById('propertyForm');
  if (!form) return;
  form.reset();
  document.getElementById('editId').value = '';
  document.getElementById('formSubmitBtn').innerHTML = '<i class="fas fa-plus-circle"></i> Publicar';
  form.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  resetImageUploaders();
}

// ===================== DELETE =====================
let pendingDeleteId = null;

function confirmDelete(id) {
  const props = getProperties();
  const prop = props.find(p => p.id === id);
  if (!prop) return;

  pendingDeleteId = id;
  document.getElementById('confirmTitle').textContent = 'Eliminar Propiedad';
  document.getElementById('confirmMsg').textContent = `¿Eliminar "${prop.title}"?`;
  document.getElementById('confirmModal').style.display = 'flex';
}

async function confirmAction() {
  if (pendingDeleteId !== null) {
    const id = pendingDeleteId;
    try {
      await window.GPRB_SB.deleteProperty(id);
      _propertiesCache = _propertiesCache.filter(p => p.id !== id);
      showToast('Propiedad eliminada');
    } catch (err) {
      showToast('Error al eliminar: ' + (err.message || 'intenta de nuevo'));
    }
    pendingDeleteId = null;
    closeModal();
    renderDashboard();
  }
}

function closeModal() {
  document.getElementById('confirmModal').style.display = 'none';
  pendingDeleteId = null;
}

// ===================== FILTERS =====================
function applyFilters() {
  let props = getProperties();
  const type = document.getElementById('filterType').value;
  const status = document.getElementById('filterStatus').value;
  const priceRange = document.getElementById('filterPrice').value;
  const search = document.getElementById('filterSearch').value.toLowerCase();

  if (type) props = props.filter(p => p.type === type);
  if (status) props = props.filter(p => p.status === status);
  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number);
    props = props.filter(p => p.price >= min && p.price <= max);
  }
  if (search) {
    const terms = search.split(/\s+/).filter(Boolean);
    props = props.filter(p => {
      const haystack = `${p.title} ${p.location} ${p.type} ${p.address || ''}`.toLowerCase();
      return terms.every(t => haystack.includes(t));
    });
  }
  renderListings(props);
}

function filterByType(type) {
  showPage('listings');
  setTimeout(() => {
    document.getElementById('filterType').value = type;
    applyFilters();
  }, 100);
}

function filterByStatus(status) {
  showPage('listings');
  setTimeout(() => {
    document.getElementById('filterStatus').value = status;
    applyFilters();
  }, 100);
}

// ===================== HERO SEARCH TABS =====================
function switchSearchTab(tab) {
  document.querySelectorAll('.search-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  const typeSelect = document.getElementById('heroType');
  if (typeSelect) typeSelect.value = tab === 'all' ? '' : tab;
}

function toggleHeaderSearch() {
  const input = document.getElementById('heroSearch');
  if (input) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => input.focus(), 400);
  }
}

// ===================== HERO SEARCH =====================
function performHeroSearch() {
  const query = document.getElementById('heroSearch').value;
  const type = document.getElementById('heroType').value;
  const status = document.getElementById('heroStatus').value;
  const location = document.getElementById('heroLocation') ? document.getElementById('heroLocation').value : '';
  const combinedQuery = [query, location].filter(Boolean).join(' ').trim();

  showPage('listings');
  setTimeout(() => {
    document.getElementById('filterSearch').value = combinedQuery;
    document.getElementById('filterType').value = type;
    document.getElementById('filterStatus').value = status;
    applyFilters();
  }, 100);
}

// ===================== CONTACT =====================
async function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  // Intenta obtener campos tanto por name como por id
  const get = (k, altId) => {
    const v = fd.get(k);
    if (v != null && String(v).trim() !== '') return String(v).trim();
    const el = altId ? document.getElementById(altId) : null;
    return el ? el.value.trim() : '';
  };
  const msg = {
    name: get('name', 'ccName') || get('cName'),
    email: get('email', 'ccEmail') || get('cEmail'),
    phone: get('phone', 'ccPhone') || get('cPhone'),
    category: get('category', 'ccCategory'),
    operation: get('operation', 'ccOperation'),
    message: get('message', 'ccMessage') || get('cMessage')
  };
  if (!msg.name || !msg.email) {
    showToast('Completa nombre y email');
    return;
  }
  try {
    await window.GPRB_SB.sendContactMessage(msg);
    showToast('Mensaje enviado correctamente. Te contactaremos pronto.');
    form.reset();
  } catch (err) {
    showToast('Error al enviar: ' + (err.message || 'intenta de nuevo'));
  }
}

// ===================== TOAST =====================
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===================== UTILITY =====================
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

function escapeAttr(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================== LIGHTBOX =====================
let _lightboxImages = [];
let _lightboxIndex = 0;

function openLightbox(index, propId) {
  const prop = getProperties().find(p => p.id === propId);
  if (!prop) return;
  _lightboxImages = [prop.image, ...(prop.gallery || [])].filter(Boolean);
  _lightboxIndex = index;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  renderLightbox();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.style.display = 'none';
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  _lightboxIndex = (_lightboxIndex + dir + _lightboxImages.length) % _lightboxImages.length;
  renderLightbox();
}

function renderLightbox() {
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  if (img) { img.src = _lightboxImages[_lightboxIndex]; img.onerror = () => imgFallback(img); }
  if (counter) counter.textContent = `${_lightboxIndex + 1} / ${_lightboxImages.length}`;
}

function imgFallback(img) {
  img.onerror = null;
  img.src = FALLBACK_IMG;
}

// ===================== MESSAGES INBOX =====================
async function renderMessagesPanel() {
  const inbox = document.getElementById('messagesInbox');
  if (!inbox) return;
  inbox.innerHTML = '<div class="msgs-loading"><i class="fas fa-spinner fa-spin"></i> Cargando mensajes...</div>';

  try {
    const messages = await window.GPRB_SB.getContactMessages();

    // Actualizar badge
    const badge = document.getElementById('msgTabBadge');
    if (badge) {
      badge.textContent = messages.length;
      badge.style.display = messages.length > 0 ? 'inline-flex' : 'none';
    }

    if (!messages || messages.length === 0) {
      inbox.innerHTML = `
        <div class="no-results">
          <i class="fas fa-inbox"></i>
          <h3>Sin mensajes</h3>
          <p>Aún no has recibido consultas de clientes.</p>
        </div>`;
      return;
    }

    inbox.innerHTML = `
      <div class="msgs-header">
        <h3><i class="fas fa-inbox"></i> Bandeja de Entrada</h3>
        <span class="msgs-count">${messages.length} mensaje${messages.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="msgs-list">
        ${messages.map((m, i) => renderMessageCard(m, i)).join('')}
      </div>`;
  } catch (e) {
    inbox.innerHTML = `
      <div class="no-results">
        <i class="fas fa-exclamation-triangle"></i>
        <h3>Error al cargar</h3>
        <p>No se pudieron obtener los mensajes. Intenta de nuevo.</p>
        <button class="btn btn-outline" onclick="renderMessagesPanel()" style="margin-top:12px;">
          <i class="fas fa-sync-alt"></i> Reintentar
        </button>
      </div>`;
  }
}

function renderMessageCard(m, i) {
  const initial = (m.name || '?').charAt(0).toUpperCase();
  const date = m.created_at
    ? new Date(m.created_at).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    : '';
  const msgText = m.message || '';
  const preview = msgText.length > 120 ? msgText.substring(0, 120) + '…' : msgText;
  const hasMore = msgText.length > 120;

  const colorIndex = initial.charCodeAt(0) % 5;
  const avatarColors = ['#00c896', '#ff6b35', '#6c5ce7', '#0984e3', '#e17055'];
  const avatarColor = avatarColors[colorIndex];

  return `
    <div class="msg-card">
      <div class="msg-avatar" style="background:${avatarColor}">${initial}</div>
      <div class="msg-body">
        <div class="msg-top">
          <div class="msg-meta">
            <strong class="msg-name">${escapeHtml(m.name || 'Sin nombre')}</strong>
            ${m.category ? `<span class="msg-tag">${escapeHtml(m.category)}</span>` : ''}
            ${m.operation ? `<span class="msg-tag msg-tag-op">${escapeHtml(m.operation)}</span>` : ''}
          </div>
          <span class="msg-date"><i class="fas fa-clock"></i> ${date}</span>
        </div>
        <div class="msg-contacts">
          ${m.email ? `<a href="mailto:${escapeAttr(m.email)}" class="msg-contact-link" title="Enviar email"><i class="fas fa-envelope"></i> ${escapeHtml(m.email)}</a>` : ''}
          ${m.phone ? `<a href="tel:${escapeAttr(m.phone)}" class="msg-contact-link" title="Llamar"><i class="fas fa-phone"></i> ${escapeHtml(m.phone)}</a>` : ''}
          ${m.phone ? `<a href="https://wa.me/${cleanPhone(m.phone)}?text=${encodeURIComponent('Hola ' + (m.name || '') + ', gracias por contactarte con GPRB.')}" target="_blank" rel="noopener" class="msg-contact-link msg-wa-link" title="WhatsApp"><i class="fab fa-whatsapp"></i> WhatsApp</a>` : ''}
        </div>
        <div class="msg-text">
          <span class="msg-preview" id="msgPrev${i}">${escapeHtml(preview)}</span>
          ${hasMore ? `<span class="msg-full" id="msgFull${i}" style="display:none">${escapeHtml(msgText)}</span>` : ''}
          ${hasMore ? `<button class="msg-toggle" onclick="toggleMsgExpand(${i})"><i class="fas fa-chevron-down" id="msgIcon${i}"></i> Ver más</button>` : ''}
        </div>
      </div>
    </div>`;
}

function toggleMsgExpand(i) {
  const prev = document.getElementById('msgPrev' + i);
  const full = document.getElementById('msgFull' + i);
  const icon = document.getElementById('msgIcon' + i);
  const btn = icon ? icon.closest('.msg-toggle') : null;
  if (!prev || !full) return;
  const isOpen = full.style.display !== 'none';
  prev.style.display = isOpen ? '' : 'none';
  full.style.display = isOpen ? 'none' : '';
  if (icon) icon.className = isOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
  if (btn) btn.innerHTML = `<i class="fas fa-chevron-${isOpen ? 'down' : 'up'}" id="msgIcon${i}"></i> ${isOpen ? 'Ver más' : 'Ver menos'}`;
}

// ===================== UTILITY: CLEAN PHONE =====================
function cleanPhone(phone) {
  if (!phone) return '56941709793';
  const digits = String(phone).replace(/\D/g, '');
  if (digits.startsWith('56') && digits.length >= 10) return digits;
  if (digits.startsWith('9') && digits.length === 9) return '56' + digits;
  if (digits.length >= 8) return '56' + digits;
  return '56941709793';
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Hidratar sesión de Supabase (si había login previo persistido)
  if (window.GPRB_SB) {
    try {
      const session = await window.GPRB_SB.getSession();
      _currentUser = session?.user || null;
    } catch (e) { console.warn('getSession', e); }

    // Escuchar cambios de auth (token refresh, logout en otra pestaña, etc.)
    window.GPRB_SB.onAuthChange((user) => {
      _currentUser = user;
      updateAuthUI();
    });
  }

  updateAuthUI();
  initBackToTop();

  // 2. Render inmediato con datos por defecto para no bloquear UI
  initSlider();
  renderHome();

  // 3. Cargar datos reales desde Supabase y re-renderizar
  if (window.GPRB_SB) {
    await Promise.all([loadPropertiesFromSB(), loadSliderFromSB()]);
    renderSlider();
    if (currentPage === 'home') renderHome();
    if (currentPage === 'listings') renderListings();
    if (currentPage === 'dashboard') renderDashboard();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'confirmModal') closeModal();
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (lb && lb.style.display !== 'none') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNav(1);
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    return;
  }
  if (e.key === 'Escape') {
    if (document.getElementById('confirmModal').style.display === 'flex') closeModal();
  }
});

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}
