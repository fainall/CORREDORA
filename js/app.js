// ===================== DATA =====================
const STORAGE_KEY = 'gprb_properties';
const SLIDER_KEY = 'gprb_slider';
const AUTH_KEY = 'gprb_auth';
const FAVS_KEY = 'gprb_favorites';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

const FALLBACK_IMG = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e8ecef' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%2399a3ad' text-anchor='middle' dy='.3em'%3EImagen no disponible%3C/text%3E%3C/svg%3E";

const defaultProperties = [
  // ── ARRIENDOS (precios en UF) ──────────────────────────────────────
  {
    id: 2,
    title: 'Galpón Industrial Pudahuel',
    type: 'Galpon',
    status: 'Arriendo',
    price: 120,
    priceUnit: 'UF',
    gastosComunes: 8,
    gastosComunesUnit: 'UF',
    location: 'Pudahuel, Santiago',
    address: 'Av. Americo Vespucio Norte 1240',
    area: 1200,
    areaBodega: 1050,
    areaOficina: 120,
    areaAltillo: null,
    usableArea: 1050,
    bathrooms: 3,
    parking: 8,
    portones: 3,
    andenes: 2,
    warehouseType: 'Cerrada',
    privateRooms: 2,
    age: 6,
    height: 9,
    floorSupport: 8,
    pricePerM2: 0.1,
    propertyCode: 'IND-001',
    portalCode: null,
    featured: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80'
    ],
    description: '• Piso de hormigón reforzado H-30 con sello epóxico\n• Altura al hombro 9 m.t.\n• 3 portones automáticos tipo seccional para camiones\n• 2 andenes de carga con rampa niveladora\n• Oficinas administrativas integradas 120 m²\n• Iluminación LED industrial de alta eficiencia\n• Acceso directo Ruta 68 y Aeropuerto AMB (5 min)\n• Sistema contra incendio NFPA certificado\n• Parque industrial privado con portería 24/7',
    services: ['Internet', 'Agua', 'Luz', 'Gas', 'AndenCargaComun'],
    amenities: ['Aire', 'Generador', 'Montacargas'],
    security: ['CCTV24h', 'CercoElectrico', 'SensorIncendio', 'Alarma'],
    videoUrl: null
  },
  {
    id: 11,
    title: 'Bodega Refrigerada Quilicura',
    type: 'Bodega',
    status: 'Arriendo',
    price: 155,
    priceUnit: 'UF',
    gastosComunes: 10,
    gastosComunesUnit: 'UF',
    location: 'Quilicura, Santiago',
    address: 'Av. El Salto 5380, Quilicura',
    area: 980,
    areaBodega: 900,
    areaOficina: 60,
    areaAltillo: null,
    usableArea: 900,
    bathrooms: 2,
    parking: 6,
    portones: 2,
    andenes: 1,
    warehouseType: 'Cerrada',
    privateRooms: 1,
    age: 3,
    height: 7,
    floorSupport: 6,
    pricePerM2: 0.158,
    propertyCode: 'BOD-002',
    portalCode: null,
    featured: true,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    ],
    description: '• Cámara frigorífica de última generación con redundancia\n• Temperatura controlada entre -25°C y +10°C\n• Pisos epóxicos antideslizantes certificados HACCP\n• Certificación sanitaria vigente SEREMI\n• Sistema de refrigeración industrial redundante\n• 1 andén de carga refrigerado con cortina de aire\n• Parque industrial privado cerrado con acceso Ruta 5 Norte\n• Vigilancia 24/7 con CCTV y guardia permanente',
    services: ['Internet', 'Agua', 'Luz', 'AndenCargaComun', 'BanosPublicos'],
    amenities: ['Aire', 'Generador', 'Bascula'],
    security: ['CCTV24h', 'CircuitoCerrado', 'RedHumeda', 'SensorIncendio', 'Alarma'],
    videoUrl: null
  },
  {
    id: 4,
    title: 'Oficina Ejecutiva Providencia',
    type: 'Oficina',
    status: 'Arriendo',
    price: 50,
    priceUnit: 'UF',
    gastosComunes: 5,
    gastosComunesUnit: 'UF',
    location: 'Providencia, Santiago',
    address: 'Antonio Bellet 193, Of. 1210',
    area: 145,
    areaBodega: null,
    areaOficina: 115,
    areaAltillo: null,
    usableArea: 130,
    bathrooms: 2,
    parking: 2,
    portones: null,
    andenes: null,
    warehouseType: null,
    privateRooms: 4,
    age: 10,
    height: 3,
    floorSupport: 3,
    pricePerM2: 0.345,
    propertyCode: 'OFI-003',
    portalCode: null,
    featured: false,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80'
    ],
    description: '• Edificio clase A con certificación LEED\n• 4 salas privadas + sala de reuniones equipada\n• Recepción con mesón ejecutivo\n• Cocina ejecutiva y comedor\n• Climatización central con control individual\n• A pasos Metro Manuel Montt (200 m)\n• 2 estacionamientos propios incluidos\n• Gimnasio y casino en el edificio',
    services: ['Internet', 'Agua', 'Luz', 'Gas', 'Telefonica', 'CasinoAlimentacion', 'BanosPublicos'],
    amenities: ['Aire', 'Calefaccion'],
    security: ['CCTV24h', 'CircuitoCerrado', 'Alarma'],
    videoUrl: null
  },
  // ── VENTAS (precios en UF) ─────────────────────────────────────────
  {
    id: 1,
    title: 'Terreno Industrial Lampa',
    type: 'Terreno',
    status: 'Venta',
    price: 11940,
    priceUnit: 'UF',
    gastosComunes: null,
    gastosComunesUnit: 'UF',
    location: 'Lampa, Región Metropolitana',
    address: 'Ruta 57 Km 28, Parque Industrial Lampa',
    area: 8500,
    areaBodega: null,
    areaOficina: null,
    areaAltillo: null,
    usableArea: 8000,
    bathrooms: 0,
    parking: 20,
    portones: null,
    andenes: null,
    warehouseType: 'Abierta',
    privateRooms: 0,
    age: 1,
    height: null,
    floorSupport: null,
    pricePerM2: 1.4,
    propertyCode: 'TER-004',
    portalCode: null,
    featured: true,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
    ],
    description: '• Uso de suelo I2 (industrial exclusivo)\n• Terreno plano, 100% urbanizado\n• Acceso directo Ruta 57 (Colina–Los Andes)\n• Factibilidad de agua, luz trifásica y alcantarillado industrial\n• Acceso a camiones de doble tracción\n• Parque Industrial Lampa — polo logístico en expansión\n• A 28 km del centro de Santiago\n• Certificado libre de pasivos ambientales',
    services: ['Luz', 'Agua'],
    amenities: [],
    security: ['CercoElectrico'],
    videoUrl: null
  },
  {
    id: 3,
    title: 'Galpón con Oficinas Maipú',
    type: 'Galpon',
    status: 'Venta',
    price: 7960,
    priceUnit: 'UF',
    gastosComunes: null,
    gastosComunesUnit: 'UF',
    location: 'Maipú, Santiago',
    address: 'Av. Pajaritos 7800, Maipú',
    area: 2200,
    areaBodega: 1900,
    areaOficina: 300,
    areaAltillo: null,
    usableArea: 1900,
    bathrooms: 4,
    parking: 15,
    portones: 3,
    andenes: 2,
    warehouseType: 'Cerrada',
    privateRooms: 6,
    age: 8,
    height: 10,
    floorSupport: 10,
    pricePerM2: 3.62,
    propertyCode: 'IND-005',
    portalCode: null,
    featured: true,
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
    ],
    description: '• Nave principal 1.900 m² — altura al hombro 10 m.t.\n• Estructura metálica en excelente estado\n• 3 portones automáticos tipo seccional para camiones\n• 2 andenes de carga con rampa niveladora\n• Piso hormigón H-30 con sellador epóxico\n• Cuerpo de oficinas 300 m² — 6 salas privadas\n• Sala de reuniones, baños ejecutivos y casino\n• Uso I1/I2 — acceso Autopista del Sol y Vespucio Sur',
    services: ['Luz', 'Agua', 'Gas', 'Internet', 'AndenCargaComun', 'CasinoAlimentacion'],
    amenities: ['GruaPuente', 'Montacargas', 'Generador'],
    security: ['CCTV24h', 'CercoElectrico', 'RedHumeda', 'SistemaIncendio', 'Alarma'],
    videoUrl: null
  },
  {
    id: 5,
    title: 'Local Comercial Santiago Centro',
    type: 'Local Comercial',
    status: 'Venta',
    price: 2363,
    priceUnit: 'UF',
    gastosComunes: null,
    gastosComunesUnit: 'UF',
    location: 'Santiago Centro',
    address: 'Morandé 835, Santiago',
    area: 280,
    areaBodega: null,
    areaOficina: 240,
    areaAltillo: null,
    usableArea: 260,
    bathrooms: 2,
    parking: 2,
    portones: null,
    andenes: null,
    warehouseType: null,
    privateRooms: 2,
    age: 15,
    height: 4,
    floorSupport: 4,
    pricePerM2: 8.44,
    propertyCode: 'LOC-006',
    portalCode: null,
    featured: false,
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80'
    ],
    description: '• Local de esquina con altísimo flujo peatonal\n• Planta libre 240 m² con techos de 4 metros\n• Vitrinas panorámicas en dos fachadas\n• Dos accesos independientes\n• Bodega subterránea 40 m²\n• Instalaciones eléctricas trifásicas\n• Climatización central con sistema VRF\n• A metros Metro Baquedano y eje Alameda\n• Excelente estado de conservación',
    services: ['Internet', 'Agua', 'Luz', 'Gas', 'Telefonica', 'BanosPublicos'],
    amenities: ['Aire', 'Calefaccion'],
    security: ['CCTV24h', 'CircuitoCerrado', 'Alarma'],
    videoUrl: null
  }
];

const defaultSlider = {
  slides: [
    {
      bgUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=85',
      tag: 'Bienvenido a GPRB',
      title: 'Gestión Inmobiliaria Industrial',
      subtitle: 'Las mejores soluciones en propiedades industriales de Chile'
    },
    {
      bgUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85',
      tag: 'Amplio Catálogo',
      title: 'Bodegas, Oficinas y Terrenos',
      subtitle: 'Más de 8 categorías de inmuebles para tu negocio'
    },
    {
      bgUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=85',
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
    if (rows && rows.length > 0) {
      // Defaults take priority for their own IDs;
      // SB contributes only entries with IDs not covered by defaults.
      const defaultIds = new Set(defaultProperties.map(p => p.id));
      const sbExtras = rows.filter(r => !defaultIds.has(r.id));
      _propertiesCache = [...defaultProperties, ...sbExtras];
    }
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

  // Update static hero background from first slide
  if (data.slides && data.slides.length > 0) {
    const heroBg = document.getElementById('heroBg');
    if (heroBg) heroBg.style.backgroundImage = `url('${escapeAttr(data.slides[0].bgUrl)}')`;
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) heroTitle.innerHTML = formatHeroTitle(data.slides[0].title);
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) heroSubtitle.textContent = data.slides[0].subtitle || '';
  }

  // Legacy slider containers (used by dashboard editor preview)
  if (container) {
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
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = data.slides.map((_, i) =>
      `<button type="button" class="slider-dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${i}); resetSliderAutoplay();" aria-label="Ir al slide ${i + 1}" role="tab"></button>`
    ).join('');
  }

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
  const data = getSliderData();
  const total = data.slides ? data.slides.length : 1;
  goToSlide((currentSlide + dir + total) % total);
  resetSliderAutoplay();
}

function goToSlide(index) {
  // Update dots
  const dots = document.querySelectorAll('.slider-dot');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = index;
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');

  // Fade-swap hero background: fade out → swap image → fade in
  const data = getSliderData();
  if (!data.slides || !data.slides[index]) return;
  const url = data.slides[index].bgUrl;
  const bg  = document.getElementById('heroBg');
  if (bg) {
    clearTimeout(goToSlide._t);
    bg.style.opacity = '0';
    goToSlide._t = setTimeout(() => {
      bg.style.backgroundImage = `url('${escapeAttr(url)}')`;
      bg.style.opacity = '1';
    }, 700);
  }
  // Update hero text
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.innerHTML = formatHeroTitle(data.slides[index].title);
  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) heroSubtitle.textContent = data.slides[index].subtitle || '';
}

function startSliderAutoplay() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    const data = getSliderData();
    const total = data.slides ? data.slides.length : 0;
    if (total > 1) goToSlide((currentSlide + 1) % total);
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

// ===================== SLIDE IMAGE STATES =====================
// Array of { kind: 'url'|'file', value, previewUrl } per slide index
let _slideImageStates = [];

function initSlideImageState(idx, bgUrl) {
  _slideImageStates[idx] = bgUrl
    ? { kind: 'url', value: bgUrl, previewUrl: bgUrl }
    : null;
}

function handleSlideImageChange(e, idx) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) { showToast('La imagen no puede superar 10MB'); return; }
  const reader = new FileReader();
  reader.onload = () => {
    _slideImageStates[idx] = { kind: 'file', value: file, previewUrl: reader.result };
    renderSlideImagePreview(idx);
  };
  reader.readAsDataURL(file);
}

function setSlideImageFromUrl(idx, url) {
  if (!url) return;
  _slideImageStates[idx] = { kind: 'url', value: url, previewUrl: url };
  renderSlideImagePreview(idx);
}

function clearSlideImage(idx) {
  _slideImageStates[idx] = null;
  const fileInput = document.getElementById(`slideImgFile_${idx}`);
  if (fileInput) fileInput.value = '';
  renderSlideImagePreview(idx);
}

function promptSlideImageUrl(idx) {
  const current = _slideImageStates[idx];
  const url = window.prompt('Pega la URL de la imagen de fondo:', current && current.kind === 'url' ? current.value : '');
  if (url && url.trim()) setSlideImageFromUrl(idx, url.trim());
}

function renderSlideImagePreview(idx) {
  const state = _slideImageStates[idx];
  const emptyEl  = document.getElementById(`slideUploaderEmpty_${idx}`);
  const previewEl = document.getElementById(`slideUploaderPreview_${idx}`);
  const imgEl    = document.getElementById(`slidePreviewImg_${idx}`);
  if (!emptyEl || !previewEl || !imgEl) return;
  if (state && state.previewUrl) {
    emptyEl.style.display = 'none';
    previewEl.style.display = 'block';
    imgEl.src = state.previewUrl;
  } else {
    emptyEl.style.display = 'flex';
    previewEl.style.display = 'none';
    imgEl.src = '';
  }
}

function initSlideUploaderDragDrop(idx) {
  const uploader = document.getElementById(`slideUploader_${idx}`);
  if (!uploader) return;
  uploader.addEventListener('dragover', e => { e.preventDefault(); uploader.classList.add('drag-over'); });
  uploader.addEventListener('dragleave', e => { if (!uploader.contains(e.relatedTarget)) uploader.classList.remove('drag-over'); });
  uploader.addEventListener('drop', e => {
    e.preventDefault();
    uploader.classList.remove('drag-over');
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > 10 * 1024 * 1024) { showToast('La imagen no puede superar 10MB'); return; }
      const reader = new FileReader();
      reader.onload = () => {
        _slideImageStates[idx] = { kind: 'file', value: file, previewUrl: reader.result };
        renderSlideImagePreview(idx);
      };
      reader.readAsDataURL(file);
    } else {
      const text = e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('text/uri-list');
      if (text && /^https?:\/\//i.test(text)) setSlideImageFromUrl(idx, text.trim());
    }
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
          <label>Imagen de Fondo</label>
          <div class="img-uploader slide-img-uploader" id="slideUploader_${i}">
            <input type="file" id="slideImgFile_${i}" accept="image/*" style="display:none"
              onchange="handleSlideImageChange(event, ${i})">
            <div class="img-uploader-empty" id="slideUploaderEmpty_${i}"
              onclick="document.getElementById('slideImgFile_${i}').click()"
              style="min-height:140px;">
              <i class="fas fa-cloud-upload-alt"></i>
              <span>Haz clic o arrastra una imagen aquí</span>
              <small>JPG, PNG, WEBP — máx 10MB</small>
            </div>
            <div class="img-uploader-preview slide-img-preview" id="slideUploaderPreview_${i}" style="display:none">
              <img id="slidePreviewImg_${i}" alt="Preview slide ${i + 1}">
              <div class="img-uploader-actions">
                <button type="button" class="btn-img-change"
                  onclick="document.getElementById('slideImgFile_${i}').click()">
                  <i class="fas fa-sync-alt"></i> Cambiar
                </button>
                <button type="button" class="btn-img-remove" onclick="clearSlideImage(${i})">
                  <i class="fas fa-trash"></i> Quitar
                </button>
              </div>
            </div>
          </div>
          <div class="uploader-alt-row">
            <span>o también:</span>
            <button type="button" class="btn-url-input" onclick="promptSlideImageUrl(${i})">
              <i class="fas fa-link"></i> Pegar URL
            </button>
          </div>
        </div>

        <div class="form-group">
          <label>Etiqueta (chip)</label>
          <input type="text" data-slide-idx="${i}" data-slide-field="tag"
            value="${escapeAttr(s.tag || '')}" maxlength="40" placeholder="Ej: Bodega Industrial">
        </div>
        <div class="form-group">
          <label>Título</label>
          <input type="text" data-slide-idx="${i}" data-slide-field="title"
            value="${escapeAttr(s.title)}" maxlength="100" placeholder="Título principal del hero">
        </div>
        <div class="form-group full-width">
          <label>Subtítulo</label>
          <input type="text" data-slide-idx="${i}" data-slide-field="subtitle"
            value="${escapeAttr(s.subtitle)}" maxlength="150" placeholder="Descripción breve">
        </div>
      </div>
    </div>
  `).join('');

  // Init states and drag-drop for each slide
  data.slides.forEach((s, i) => {
    initSlideImageState(i, s.bgUrl);
    renderSlideImagePreview(i);
    setTimeout(() => initSlideUploaderDragDrop(i), 50);
  });
}

async function saveSliderChanges() {
  const data = getSliderData();

  // Read text fields
  document.querySelectorAll('[data-slide-idx]').forEach(input => {
    const idx = parseInt(input.dataset.slideIdx);
    const field = input.dataset.slideField;
    if (data.slides[idx]) data.slides[idx][field] = input.value.trim();
  });

  const btn = document.querySelector('#dashPanelSliderEdit .btn-primary');
  const btnOriginal = btn ? btn.innerHTML : '';
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subiendo imágenes...'; }

  try {
    // Upload any new files and resolve bgUrls
    for (let i = 0; i < data.slides.length; i++) {
      const state = _slideImageStates[i];
      if (!state) continue;
      if (state.kind === 'file') {
        if (btn) btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Subiendo slide ${i + 1}...`;
        data.slides[i].bgUrl = await window.GPRB_SB.uploadImage(state.value);
        // Update state to url so re-renders work
        _slideImageStates[i] = { kind: 'url', value: data.slides[i].bgUrl, previewUrl: data.slides[i].bgUrl };
      } else if (state.kind === 'url') {
        data.slides[i].bgUrl = state.value;
      }
    }

    if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';
    const saved = await window.GPRB_SB.saveSlides(data.slides);
    _sliderCache = { slides: saved };
    renderSlider();
    startSliderAutoplay();
    showToast('Portada actualizada correctamente');
  } catch (e) {
    showToast('Error al guardar: ' + (e.message || 'intenta de nuevo'));
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = btnOriginal; }
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
  if (page === 'detail' && data) renderDetailAsync(data);
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
function animateCounter(el, target, duration = 1200) {
  if (!el) return;
  const start = performance.now();
  const from = 0;
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (target - from) * ease);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function renderHome() {
  const props = getProperties();

  // Sección Destacadas
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    featuredGrid.innerHTML = '';
    props.slice(0, 6).forEach(p => featuredGrid.appendChild(createPropertyCard(p)));
  }

  // Sección Arriendo
  const arriendoGrid = document.getElementById('arriendoGrid');
  const arriendoEmpty = document.getElementById('arriendoEmpty');
  const arriendoProps = props.filter(p => p.status === 'Arriendo');
  if (arriendoGrid) {
    arriendoGrid.innerHTML = '';
    arriendoProps.slice(0, 6).forEach(p => arriendoGrid.appendChild(createPropertyCard(p)));
  }
  if (arriendoEmpty) arriendoEmpty.style.display = arriendoProps.length === 0 ? 'flex' : 'none';
  const sectionArriendo = document.getElementById('sectionArriendo');
  if (sectionArriendo) sectionArriendo.style.display = arriendoProps.length === 0 ? 'none' : '';

  // Sección Venta
  const ventaGrid = document.getElementById('ventaGrid');
  const ventaEmpty = document.getElementById('ventaEmpty');
  const ventaProps = props.filter(p => p.status === 'Venta');
  if (ventaGrid) {
    ventaGrid.innerHTML = '';
    ventaProps.slice(0, 6).forEach(p => ventaGrid.appendChild(createPropertyCard(p)));
  }
  if (ventaEmpty) ventaEmpty.style.display = ventaProps.length === 0 ? 'flex' : 'none';
  const sectionVenta = document.getElementById('sectionVenta');
  if (sectionVenta) sectionVenta.style.display = ventaProps.length === 0 ? 'none' : '';

  // Stats
  const statEl = document.getElementById('statTotal');
  animateCounter(statEl, props.length);
}

function renderListings(filteredProps) {
  const props = filteredProps || getProperties();
  const grid = document.getElementById('listingsGrid');
  grid.innerHTML = '';

  document.getElementById('noResults').style.display = props.length === 0 ? 'block' : 'none';
  props.forEach(p => grid.appendChild(createPropertyCard(p)));
  document.getElementById('resultsCount').textContent = `${props.length} resultado${props.length !== 1 ? 's' : ''}`;
}

async function renderDetailAsync(propId) {
  await fetchUFValue();
  renderDetail(propId);
}

function renderDetail(propId) {
  const props = getProperties();
  const prop = props.find(p => p.id === propId);
  if (!prop) return;

  const priceParts = buildPriceText(prop);
  const priceText = priceParts.main;
  const priceSubText = priceParts.sub;
  const galleryImages = [prop.image, ...(prop.gallery || [])].filter(Boolean);
  const mainImg = galleryImages[0] || '';
  // 5 thumbs visible + 1 counter slot (index 5)
  const THUMB_COUNT = 5;
  const thumbs = Array.from({length: THUMB_COUNT}, (_, i) => galleryImages[i + 1] || mainImg);
  const totalPhotos = galleryImages.length;
  const hiddenCount = totalPhotos - (THUMB_COUNT + 1); // photos beyond what's shown
  const statusLabel = prop.status === 'Venta' ? 'Venta' : 'Arriendo';

  // Labels de servicios (mapa valor → texto legible)
  const SERVICE_LABELS = {
    'Internet': 'Acceso a Internet', 'Agua': 'Agua Corriente', 'Gas': 'Gas Natural',
    'Luz': 'Luz Eléctrica', 'Telefonica': 'Línea Telefónica',
    'AndenCargaComun': 'Andén de Carga/Descarga Uso Común',
    'CasinoAlimentacion': 'Casino de Alimentación',
    'BanosPublicos': 'Baños de Uso Público'
  };
  const SECURITY_LABELS = {
    'Alarma': 'Alarma', 'CCTV24h': 'CCTV 24 hrs.', 'CircuitoCerrado': 'Circuito Cerrado',
    'CercoElectrico': 'Cerco Eléctrico Perimetral', 'RedHumeda': 'Red Húmeda',
    'SensorIncendio': 'Sensor de Incendio Interior Bodega',
    'SistemaIncendio': 'Sistema Contra Incendio',
    'Incendio': 'Sistema Contra Incendio', 'Conserjeria': 'Conserjería'
  };
  const labelOf = (map, v) => map[v] || v;

  const videoEmbed = getVideoEmbedUrl(prop.videoUrl);
  const gastosStr = prop.gastosComunes
    ? `${prop.gastosComunesUnit === 'UF' ? 'UF ' : '$'}${prop.gastosComunes.toLocaleString('es-CL')} ${prop.gastosComunesUnit === 'CLP' ? 'CLP' : ''}`
    : null;

  document.getElementById('propertyDetail').innerHTML = `
    <div class="detail-hero">
      <div class="container">
        <div class="detail-header-row">
          <div class="detail-header-left">
            <a class="detail-back-top" onclick="showPage('listings')"><i class="fas fa-arrow-left"></i> Volver</a>
            <h1 class="detail-title-top">${escapeHtml(prop.title)}
              ${prop.featured ? '<span class="detail-badge-featured">Destacado</span>' : ''}
            </h1>
            <div class="detail-location-top"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(prop.location)}</div>
          </div>
          <div class="detail-header-right">
            <div class="detail-price-top">${priceText}</div>
            ${priceSubText ? `<div class="detail-price-sub">${priceSubText}</div>` : ''}
            <span class="detail-status-badge ${prop.status === 'Venta' ? 'sale' : 'rent'}">${statusLabel}</span>
          </div>
        </div>
      </div>

      <div class="detail-gallery-modern">
        <div class="dgm-main">
          <img src="${escapeHtml(mainImg)}" alt="${escapeHtml(prop.title)}" onerror="imgFallback(this)" onclick="openLightbox(0, ${prop.id})">
        </div>
        <div class="dgm-grid">
          ${thumbs.map((src, i) => `
            <div class="dgm-thumb">
              <img src="${escapeHtml(src)}" alt="Foto ${i+2}" onerror="imgFallback(this)" onclick="openLightbox(${i+1}, ${prop.id})">
            </div>
          `).join('')}
          <div class="dgm-thumb dgm-thumb-more">
            <img src="${escapeHtml(galleryImages[THUMB_COUNT + 1] || mainImg)}" alt="Más fotos" onerror="imgFallback(this)">
            <div class="dgm-more-overlay" onclick="openLightbox(${THUMB_COUNT}, ${prop.id})">
              <span class="dgm-more-count">+${Math.max(hiddenCount, totalPhotos > THUMB_COUNT + 1 ? totalPhotos - THUMB_COUNT : 0)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-content">
      <div class="container">
        <div class="detail-grid">
          <div class="detail-main">
            <div class="detail-price-tag">
              ${priceText}
              ${priceSubText ? `<span class="detail-price-clp">${priceSubText}</span>` : ''}
            </div>
            ${gastosStr ? `<div class="detail-gastos">Gastos comunes: <strong>${gastosStr}</strong></div>` : ''}

            <div class="detail-features">
              ${prop.areaBodega > 0 ? `<div class="detail-feature"><i class="fas fa-warehouse"></i><strong>${prop.areaBodega.toLocaleString('es-CL')}m²</strong><span>Bodega</span></div>` : ''}
              ${prop.areaOficina > 0 ? `<div class="detail-feature"><i class="fas fa-briefcase"></i><strong>${prop.areaOficina.toLocaleString('es-CL')}m²</strong><span>Oficina</span></div>` : ''}
              ${prop.areaAltillo > 0 ? `<div class="detail-feature"><i class="fas fa-layer-group"></i><strong>${prop.areaAltillo.toLocaleString('es-CL')}m²</strong><span>Altillo</span></div>` : ''}
              ${prop.area > 0 ? `<div class="detail-feature"><i class="fas fa-ruler-combined"></i><strong>${prop.area.toLocaleString('es-CL')}m²</strong><span>Total</span></div>` : ''}
              ${prop.parking > 0 ? `<div class="detail-feature"><i class="fas fa-car"></i><strong>${prop.parking}</strong><span>Estac.</span></div>` : ''}
              ${prop.bathrooms > 0 ? `<div class="detail-feature"><i class="fas fa-bath"></i><strong>${prop.bathrooms}</strong><span>Baños</span></div>` : ''}
              ${prop.portones > 0 ? `<div class="detail-feature"><i class="fas fa-door-open"></i><strong>${prop.portones}</strong><span>Portones</span></div>` : ''}
              ${prop.andenes > 0 ? `<div class="detail-feature"><i class="fas fa-truck-loading"></i><strong>${prop.andenes}</strong><span>Andenes</span></div>` : ''}
            </div>

            <div class="detail-section detail-specs-table">
              <h2>Ficha Técnica</h2>
              <div class="specs-grid">
                ${prop.type ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-tag"></i> Tipo:</span><span class="spec-val">${escapeHtml(prop.type)}</span></div>` : ''}
                ${prop.warehouseType ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-warehouse"></i> Tipo bodega:</span><span class="spec-val">${escapeHtml(prop.warehouseType)}</span></div>` : ''}
                ${prop.height > 0 ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-arrows-alt-v"></i> Altura al hombro:</span><span class="spec-val">${prop.height} m.t.</span></div>` : ''}
                ${prop.floorSupport > 0 ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-layer-group"></i> Soporte piso:</span><span class="spec-val">${prop.floorSupport} t/m²</span></div>` : ''}
                ${prop.age > 0 ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-calendar"></i> Antigüedad:</span><span class="spec-val">${prop.age} año${prop.age !== 1 ? 's' : ''}</span></div>` : ''}
                ${prop.privateRooms > 0 ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-door-closed"></i> Privados:</span><span class="spec-val">${prop.privateRooms}</span></div>` : ''}
                ${prop.pricePerM2 > 0 ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-calculator"></i> Precio/m²:</span><span class="spec-val">UF ${formatUF(prop.pricePerM2)}</span></div>` : ''}
                ${prop.propertyCode ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-hashtag"></i> Cód. propiedad:</span><span class="spec-val">${escapeHtml(prop.propertyCode)}</span></div>` : ''}
                ${prop.portalCode ? `<div class="spec-row"><span class="spec-label"><i class="fas fa-globe"></i> Cód. portal:</span><span class="spec-val">${escapeHtml(prop.portalCode)}</span></div>` : ''}
              </div>
            </div>

            <div class="detail-section">
              <h2>Descripción</h2>
              <div class="detail-description">${renderDescription(prop.description)}</div>
            </div>

            ${prop.services && prop.services.length > 0 ? `
            <div class="detail-section">
              <h2>Servicios</h2>
              <div class="detail-amenities">
                ${prop.services.map(s => `<div class="detail-amenity"><i class="fas fa-check-circle"></i> ${escapeHtml(labelOf(SERVICE_LABELS, s))}</div>`).join('')}
              </div>
            </div>` : ''}

            ${prop.amenities && prop.amenities.length > 0 ? `
            <div class="detail-section">
              <h2>Comodidades y Equipamiento</h2>
              <div class="detail-amenities">
                ${prop.amenities.map(a => `<div class="detail-amenity"><i class="fas fa-check-circle"></i> ${escapeHtml(a)}</div>`).join('')}
              </div>
            </div>` : ''}

            ${prop.security && prop.security.length > 0 ? `
            <div class="detail-section">
              <h2>Seguridad</h2>
              <div class="detail-amenities">
                ${prop.security.map(s => `<div class="detail-amenity"><i class="fas fa-shield-alt"></i> ${escapeHtml(labelOf(SECURITY_LABELS, s))}</div>`).join('')}
              </div>
            </div>` : ''}

            ${videoEmbed ? `
            <div class="detail-section">
              <h2><i class="fas fa-video"></i> Video Corporativo</h2>
              <div class="detail-video-wrap">
                <iframe src="${escapeAttr(videoEmbed)}" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen loading="lazy" title="Video propiedad"></iframe>
              </div>
            </div>` : ''}

            ${(prop.address || prop.location) ? `
            <div class="detail-section detail-section-map">
              <h2><i class="fas fa-map-marker-alt"></i> Ubicación</h2>
              <div class="detail-map-address">
                <i class="fas fa-building"></i>
                <span>${escapeHtml(prop.address || prop.location)}${prop.address && prop.location ? ', ' + escapeHtml(prop.location) : ''}</span>
                <a href="https://www.google.com/maps/search/${encodeURIComponent((prop.address || '') + ' ' + (prop.location || '') + ' Chile')}" target="_blank" rel="noopener" class="btn-map-ext">
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
            <div class="sidebar-card">
              <h3>Consultar</h3>
              <form class="contact-form" onsubmit="handleContact(event)">
                <input type="text" placeholder="Tu nombre" required>
                <input type="email" placeholder="Tu email" required>
                <input type="tel" placeholder="Tu teléfono">
                <textarea rows="4" placeholder="Consulta sobre: ${escapeAttr(prop.title)}..."></textarea>
                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
                  <i class="fas fa-paper-plane"></i> Enviar Consulta
                </button>
              </form>
              <div class="sidebar-wa-divider"><span>o contáctanos directo</span></div>
              <a href="https://wa.me/56941709793?text=${encodeURIComponent('Hola GPRB, estoy interesado en la propiedad «' + prop.title + '»' + (prop.propertyCode ? ' (Código: ' + prop.propertyCode + ')' : '') + '. ¿Podría entregarme más información?')}"
                 target="_blank" rel="noopener" class="btn-whatsapp-alt">
                <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
              </a>
            </div>
            <div class="sidebar-card">
              <h3>Detalles</h3>
              <div class="agent-detail"><i class="fas fa-tag"></i> <strong>Tipo:</strong>&nbsp;${escapeHtml(prop.type)}</div>
              <div class="agent-detail"><i class="fas fa-handshake"></i> <strong>Operación:</strong>&nbsp;${prop.status}</div>
              ${prop.propertyCode ? `<div class="agent-detail"><i class="fas fa-hashtag"></i> <strong>Código:</strong>&nbsp;${escapeHtml(prop.propertyCode)}</div>` : ''}
              ${prop.portalCode ? `<div class="agent-detail"><i class="fas fa-globe"></i> <strong>Portal:</strong>&nbsp;${escapeHtml(prop.portalCode)}</div>` : ''}
              ${prop.area > 0 ? `<div class="agent-detail"><i class="fas fa-ruler-combined"></i> <strong>Superficie:</strong>&nbsp;${prop.area.toLocaleString('es-CL')} m²</div>` : ''}
              ${gastosStr ? `<div class="agent-detail"><i class="fas fa-receipt"></i> <strong>Gastos com.:</strong>&nbsp;${gastosStr}</div>` : ''}
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

  if (tab === 'add') { resetForm(); setTimeout(initImageUploaderDragDrop, 50); }
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
  // Toggle hint visibility
  const hint = document.getElementById('galleryHint');
  if (hint) hint.style.display = _galleryItems.length === 0 ? 'flex' : 'none';
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

// ===================== DRAG & DROP + URL PASTE =====================
function initImageUploaderDragDrop() {
  // --- Main image uploader ---
  const mainUploader = document.getElementById('mainUploader');
  if (mainUploader) {
    mainUploader.addEventListener('dragover', e => { e.preventDefault(); mainUploader.classList.add('drag-over'); });
    mainUploader.addEventListener('dragleave', e => { if (!mainUploader.contains(e.relatedTarget)) mainUploader.classList.remove('drag-over'); });
    mainUploader.addEventListener('drop', e => {
      e.preventDefault();
      mainUploader.classList.remove('drag-over');
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        if (file.size > 10 * 1024 * 1024) { showToast('La imagen no puede superar 10MB'); return; }
        const reader = new FileReader();
        reader.onload = () => {
          _mainImageState = { kind: 'file', value: file, previewUrl: reader.result };
          document.getElementById('mainImagePreview').src = reader.result;
          document.getElementById('mainUploaderEmpty').style.display = 'none';
          document.getElementById('mainUploaderPreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        // Check if a URL was dropped
        const text = e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('text/uri-list');
        if (text && /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)/i.test(text)) {
          setMainImageFromUrl(text.trim());
        }
      }
    });
    // Paste URL via clipboard on the uploader empty area
    document.getElementById('mainUploaderEmpty') && document.getElementById('mainUploaderEmpty').addEventListener('paste', e => {
      const text = (e.clipboardData || window.clipboardData).getData('text');
      if (text && /^https?:\/\//i.test(text)) { setMainImageFromUrl(text.trim()); e.preventDefault(); }
    });
  }

  // --- Gallery uploader ---
  const galleryUploader = document.getElementById('galleryUploader');
  if (galleryUploader) {
    galleryUploader.addEventListener('dragover', e => { e.preventDefault(); galleryUploader.classList.add('drag-over'); });
    galleryUploader.addEventListener('dragleave', e => { if (!galleryUploader.contains(e.relatedTarget)) galleryUploader.classList.remove('drag-over'); });
    galleryUploader.addEventListener('drop', e => {
      e.preventDefault();
      galleryUploader.classList.remove('drag-over');
      const files = Array.from(e.dataTransfer.files || []).filter(f => f.type.startsWith('image/'));
      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) { showToast(`"${file.name}" supera 10MB, se omite`); continue; }
        const reader = new FileReader();
        reader.onload = () => { _galleryItems.push({ kind: 'file', value: file, previewUrl: reader.result }); renderGalleryPreview(); };
        reader.readAsDataURL(file);
      }
    });
  }
}

// URL manual para imagen principal
function promptMainImageUrl() {
  const url = window.prompt('Pega la URL de la imagen:', _mainImageState && _mainImageState.kind === 'url' ? _mainImageState.value : '');
  if (url && url.trim()) setMainImageFromUrl(url.trim());
}

// URL manual para galería
function addGalleryUrl() {
  const url = window.prompt('Pega la URL de la imagen a agregar:');
  if (url && url.trim()) {
    _galleryItems.push({ kind: 'url', value: url.trim(), previewUrl: url.trim() });
    renderGalleryPreview();
  }
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
    price: parseDecimalInput(document.getElementById('fPrice').value),
    priceUnit: document.getElementById('fPriceUnit')?.value || 'UF',
    gastosComunes: parseDecimalInput(document.getElementById('fGastos')?.value) || null,
    gastosComunesUnit: document.getElementById('fGastosUnit')?.value || 'UF',
    location: document.getElementById('fLocation').value.trim(),
    address: document.getElementById('fAddress').value.trim(),
    area: parseDecimalInput(document.getElementById('fArea').value) || 0,
    areaBodega: parseDecimalInput(document.getElementById('fAreaBodega')?.value) || null,
    areaOficina: parseDecimalInput(document.getElementById('fAreaOficina')?.value) || null,
    areaAltillo: parseDecimalInput(document.getElementById('fAreaAltillo')?.value) || null,
    usableArea: parseDecimalInput(document.getElementById('fArea').value) || 0, // usar área total como usable si no hay otro
    bathrooms: parseInt(document.getElementById('fBathrooms').value) || 0,
    parking: parseInt(document.getElementById('fParking').value) || 0,
    portones: parseInt(document.getElementById('fPortones')?.value) || null,
    andenes: parseInt(document.getElementById('fAndenes')?.value) || null,
    warehouseType: document.getElementById('fWarehouseType').value || null,
    privateRooms: parseInt(document.getElementById('fPrivateRooms').value) || 0,
    age: parseInt(document.getElementById('fAge').value) || null,
    height: parseDecimalInput(document.getElementById('fHeight').value) || null,
    floorSupport: parseDecimalInput(document.getElementById('fFloorSupport').value) || null,
    platforms: null, // eliminado: ahora se usa portones/andenes
    pricePerM2: parseDecimalInput(document.getElementById('fPricePerM2').value) || null,
    propertyCode: document.getElementById('fPropertyCode').value.trim(),
    portalCode: document.getElementById('fPortalCode')?.value.trim() || null,
    image: '', // se llena tras subir
    gallery: [], // se llena tras subir
    description: document.getElementById('fDesc').value.trim(),
    videoUrl: document.getElementById('fVideoUrl')?.value.trim() || null,
    services: services,
    amenities: amenities,
    security: security
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
  document.getElementById('fStatus').value = prop.status || 'Arriendo';
  // Precio con soporte UF/CLP y coma
  if (document.getElementById('fPriceUnit')) document.getElementById('fPriceUnit').value = prop.priceUnit || 'UF';
  document.getElementById('fPrice').value = prop.price != null ? String(prop.price).replace('.', ',') : '';
  // Gastos comunes
  if (document.getElementById('fGastosUnit')) document.getElementById('fGastosUnit').value = prop.gastosComunesUnit || 'UF';
  if (document.getElementById('fGastos')) document.getElementById('fGastos').value = prop.gastosComunes != null ? String(prop.gastosComunes).replace('.', ',') : '';
  document.getElementById('fLocation').value = prop.location || '';
  document.getElementById('fAddress').value = prop.address || '';
  // m² con coma
  if (document.getElementById('fAreaBodega')) document.getElementById('fAreaBodega').value = prop.areaBodega != null ? String(prop.areaBodega).replace('.', ',') : '';
  if (document.getElementById('fAreaOficina')) document.getElementById('fAreaOficina').value = prop.areaOficina != null ? String(prop.areaOficina).replace('.', ',') : '';
  if (document.getElementById('fAreaAltillo')) document.getElementById('fAreaAltillo').value = prop.areaAltillo != null ? String(prop.areaAltillo).replace('.', ',') : '';
  document.getElementById('fArea').value = prop.area != null ? String(prop.area).replace('.', ',') : '';
  document.getElementById('fBathrooms').value = prop.bathrooms || '';
  document.getElementById('fParking').value = prop.parking || '';
  if (document.getElementById('fPortones')) document.getElementById('fPortones').value = prop.portones || '';
  if (document.getElementById('fAndenes')) document.getElementById('fAndenes').value = prop.andenes || '';
  document.getElementById('fWarehouseType').value = prop.warehouseType || '';
  document.getElementById('fPrivateRooms').value = prop.privateRooms || '';
  document.getElementById('fAge').value = prop.age || '';
  document.getElementById('fHeight').value = prop.height != null ? String(prop.height).replace('.', ',') : '';
  document.getElementById('fFloorSupport').value = prop.floorSupport != null ? String(prop.floorSupport).replace('.', ',') : '';
  document.getElementById('fPricePerM2').value = prop.pricePerM2 != null ? String(prop.pricePerM2).replace('.', ',') : '';
  document.getElementById('fPropertyCode').value = prop.propertyCode || '';
  if (document.getElementById('fPortalCode')) document.getElementById('fPortalCode').value = prop.portalCode || '';
  // Imagen principal y galería → cargar previews
  setMainImageFromUrl(prop.image || '');
  setGalleryFromUrls(prop.gallery || []);
  document.getElementById('fDesc').value = prop.description || '';
  if (document.getElementById('fVideoUrl')) document.getElementById('fVideoUrl').value = prop.videoUrl || '';

  document.querySelectorAll('input[name="services"]').forEach(cb => cb.checked = (prop.services || []).includes(cb.value));
  document.querySelectorAll('input[name="amenities"]').forEach(cb => cb.checked = (prop.amenities || []).includes(cb.value));
  document.querySelectorAll('input[name="security"]').forEach(cb => cb.checked = (prop.security || []).includes(cb.value));
  updatePriceLabel();
  updateUFConversion();
  updateGastosConversion();

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
  // Limpiar hints de conversión
  const h1 = document.getElementById('ufConversionHint');
  const h2 = document.getElementById('gastosConversionHint');
  if (h1) { h1.textContent = ''; h1.style.display = 'none'; }
  if (h2) { h2.textContent = ''; h2.style.display = 'none'; }
  updatePriceLabel();
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

// Touch swipe support for lightbox — document-level (más confiable en mobile)
let _lbTouchStartX = 0;
let _lbTouchStartY = 0;

function _lbOnTouchStart(e) {
  _lbTouchStartX = e.touches[0].clientX;
  _lbTouchStartY = e.touches[0].clientY;
}

function _lbOnTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - _lbTouchStartX;
  const dy = e.changedTouches[0].clientY - _lbTouchStartY;
  // Solo swipe horizontal con al menos 40px de desplazamiento
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    lightboxNav(dx < 0 ? 1 : -1);
  }
}

function openLightbox(index, propId) {
  const prop = getProperties().find(p => p.id === propId);
  if (!prop) return;
  _lightboxImages = [prop.image, ...(prop.gallery || [])].filter(Boolean);
  _lightboxIndex = index;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // Registrar swipe a nivel document
  document.addEventListener('touchstart', _lbOnTouchStart, { passive: true });
  document.addEventListener('touchend', _lbOnTouchEnd, { passive: true });
  renderLightbox();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.style.display = 'none';
  document.body.style.overflow = '';
  document.removeEventListener('touchstart', _lbOnTouchStart);
  document.removeEventListener('touchend', _lbOnTouchEnd);
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

// ===================== THEME =====================
function initTheme() {
  // Siempre modo claro
  document.body.classList.add('light-mode');
  localStorage.removeItem('gprb-theme');
}

function toggleTheme() { /* modo oscuro eliminado */ }
function applyTheme() { document.body.classList.add('light-mode'); }

// ===================== UF CONVERSION =====================
let _ufValue = null; // valor UF del día, cargado asincrónicamente

async function fetchUFValue() {
  if (_ufValue) return _ufValue;
  try {
    const res = await fetch('https://mindicador.cl/api/uf');
    const data = await res.json();
    _ufValue = data.serie?.[0]?.valor || null;
  } catch (e) {
    console.warn('No se pudo obtener UF:', e);
    _ufValue = null;
  }
  return _ufValue;
}

function formatUF(uf) {
  if (uf == null) return '';
  // Acepta coma o punto como separador decimal
  const num = parseFloat(String(uf).replace(',', '.'));
  return isNaN(num) ? '' : num.toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function parseDecimalInput(val) {
  // Permite coma o punto como separador decimal
  if (val == null || val === '') return null;
  return parseFloat(String(val).replace(',', '.')) || null;
}

function ufToCLP(ufAmount) {
  if (!_ufValue || !ufAmount) return null;
  return Math.round(ufAmount * _ufValue);
}

function formatCLPCompact(clp) {
  if (clp == null) return '';
  if (clp >= 1000000) return `$${(clp / 1000000).toFixed(1).replace('.', ',')} M`;
  if (clp >= 1000) return `$${(clp / 1000).toFixed(0)} K`;
  return `$${clp.toLocaleString('es-CL')}`;
}

function buildPriceText(prop) {
  const isRent = prop.status === 'Arriendo';
  const unit = prop.priceUnit || (isRent ? 'UF' : 'CLP');
  const suffix = isRent ? '/mes' : '';
  if (unit === 'UF') {
    const ufStr = formatUF(prop.price);
    const clp = ufToCLP(prop.price);
    const clpStr = clp ? ` ≈ ${clp.toLocaleString('es-CL')} CLP` : '';
    return { main: `UF ${ufStr}${suffix}`, sub: clpStr };
  }
  return { main: `$${prop.price.toLocaleString('es-CL')} CLP${suffix}`, sub: '' };
}

async function updateUFConversion() {
  const uf = await fetchUFValue();
  const hint = document.getElementById('ufConversionHint');
  if (!hint) return;
  const unit = document.getElementById('fPriceUnit')?.value;
  const raw = document.getElementById('fPrice')?.value;
  const val = parseDecimalInput(raw);
  if (unit === 'UF' && val && uf) {
    const clp = Math.round(val * uf);
    hint.textContent = `≈ $${clp.toLocaleString('es-CL')} CLP (UF ${uf.toLocaleString('es-CL')} hoy)`;
    hint.style.display = 'block';
  } else {
    hint.textContent = '';
    hint.style.display = 'none';
  }
}

async function updateGastosConversion() {
  const uf = await fetchUFValue();
  const hint = document.getElementById('gastosConversionHint');
  if (!hint) return;
  const unit = document.getElementById('fGastosUnit')?.value;
  const raw = document.getElementById('fGastos')?.value;
  const val = parseDecimalInput(raw);
  if (unit === 'UF' && val && uf) {
    const clp = Math.round(val * uf);
    hint.textContent = `≈ $${clp.toLocaleString('es-CL')} CLP`;
    hint.style.display = 'block';
  } else {
    hint.textContent = '';
    hint.style.display = 'none';
  }
}

function updatePriceLabel() {
  const status = document.getElementById('fStatus')?.value;
  const unit = document.getElementById('fPriceUnit')?.value || 'UF';
  const label = document.getElementById('fPriceLabel');
  if (!label) return;
  const suffix = status === 'Arriendo' ? '/mes' : '';
  label.textContent = `Precio (${unit}${suffix}) *`;
}

function getVideoEmbedUrl(url) {
  if (!url) return null;
  // YouTube: watch?v= or youtu.be/
  let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  // Vimeo: vimeo.com/XXXXXXX
  match = url.match(/vimeo\.com\/(\d+)/);
  if (match) return `https://player.vimeo.com/video/${match[1]}`;
  return null;
}

function renderDescription(text) {
  if (!text) return '';
  // Convertir líneas que empiezan con • o - en <li>
  const lines = text.split('\n');
  const items = lines.filter(l => /^\s*[•\-\*]\s+/.test(l));
  if (items.length === 0) {
    // Párrafo simple, escapar HTML
    return `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p>`;
  }
  // Mezcla de texto y lista
  let html = '';
  let inList = false;
  for (const line of lines) {
    const isBullet = /^\s*[•\-\*]\s+/.test(line);
    if (isBullet) {
      if (!inList) { html += '<ul class="desc-list">'; inList = true; }
      html += `<li>${escapeHtml(line.replace(/^\s*[•\-\*]\s+/, ''))}</li>`;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      if (line.trim()) html += `<p>${escapeHtml(line)}</p>`;
    }
  }
  if (inList) html += '</ul>';
  return html;
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
  // 0. Aplicar tema guardado ANTES de cualquier render (evita flash)
  initTheme();

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
  updatePriceLabel();

  // Pre-cargar valor UF del día (no bloquea)
  fetchUFValue();

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
