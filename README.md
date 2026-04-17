# GPRB - Gestión Inmobiliaria Industrial

Plataforma web profesional para la gestión y publicación de propiedades industriales en Chile.

## Características Principales

### 🏢 Gestión de Propiedades Industriales
- **8 categorías**: Departamentos, Casas, Oficinas, Bodegas, Industriales, Locales, Parcelas y Terrenos
- **Campos completos de especificaciones técnicas**:
  - Superficie total y útil (m²)
  - Estacionamientos y número de privados
  - Altura, soporte de piso, remolques de plataforma
  - Tipo de bodega y antigüedad
  - Servicios: internet, agua, gas, luz, telefonía
  - Comodidades: aire acondicionado, báscula, calefacción, generador, ventilación
  - Seguridad: alarma, sistema contra incendios, conserjería

### 💰 Moneda Local
- Todos los precios en **CLP (Pesos Chilenos)**
- Formato de número localizado para el mercado chileno

### 🎨 Interfaz Moderna con Efectos AI
- **Slider interactivo** en portada (autoplay y navegación manual)
- **Animaciones fluidas**: fadeUp, slideIn, pulse, float, glow
- **Gradientes dinámicos** en botones y tarjetas
- **Parallax y transformaciones** en hover
- **Responsive design** mobile-first

### 👨‍💼 Dashboard Administrativo
Acceso con usuario: `admin` | Contraseña: `admin123`

#### Secciones:
1. **Portada** - Edita imagen, título y subtítulo del slider
2. **Propiedades** - Tabla completa con búsqueda y filtros
3. **Agregar** - Formulario extenso con todos los campos industriales

### 🔐 Autenticación
- Login seguro con validación
- Sesión por navegador (sessionStorage)
- Protección de rutas administrativas
- Botón mostrar/ocultar contraseña

### 🔍 Búsqueda y Filtros
- Búsqueda por texto (título, ubicación, tipo)
- Filtros por: categoría, tipo de operación (venta/arriendo), rango de precio
- Búsqueda avanzada desde la portada

### 📱 Datos de Contacto GPRB
- **Dirección**: Antonio Bellet 193, Of.1210, Providencia
- **Teléfono**: +56 9 4170 9793
- **Email**: giancarlo@gprb.cl
- **Especialidad**: Gestión Inmobiliaria Industrial

## Estructura del Proyecto

```
Nueva carpeta (6)/
├── index.html          # Página principal (todas las secciones)
├── css/
│   └── styles.css      # Estilos con animaciones AI y responsividad
├── js/
│   └── app.js          # Lógica de la aplicación
├── img/
│   └── logo-gprb.png   # Logo (usa imagen placeholder)
└── README.md           # Este archivo
```

## Instalación y Uso

1. **Descargar archivos** - Copia la carpeta completa a tu servidor web
2. **Abrir index.html** - En navegador (Chrome, Firefox, Safari, Edge)
3. **Sin dependencias** - Funciona 100% con JavaScript vanilla + localStorage
4. **Storage local** - Los datos se guardan en el navegador (localStorage)

## Funcionalidades Detalles

### Página de Inicio
- Slider automático con 3 diapositivas (editable desde admin)
- Barra de búsqueda integrada
- Estadísticas de propiedades
- Propiedades destacadas
- 8 categorías de inmuebles

### Catálogo de Propiedades
- Grid responsive (1-3 columnas según pantalla)
- Cards con imagen, precio, ubicación y características
- Filtros avanzados
- Detalle completo de cada propiedad con galería

### Dashboard Administrativo
- **Estadísticas**: Total, en venta, en arriendo, categorías únicas
- **Búsqueda rápida** en propiedades
- **Edición en línea** - Click en editar carga el formulario
- **Eliminación** con confirmación modal
- **Slider editor** - Personaliza la portada sin código

### Formulario de Propiedad (18+ campos)
Divide en secciones:
1. Información básica (título, categoría, operación, precio, ubicación)
2. Características principales (superficies, estacionamientos, detalles técnicos)
3. Imágenes (URL principal y galería)
4. Descripción (hasta 50,000 caracteres)
5. Servicios (checkboxes: internet, agua, gas, luz, teléfono)
6. Comodidades (AC, báscula, calefacción, generador, ventilación)
7. Seguridad (alarma, incendios, conserjería)
8. Contacto (nombre agente, teléfono, email)

## Almacenamiento de Datos

- **localStorage**: Persiste propiedades y configuración del slider
- **sessionStorage**: Guarda sesión de administrador (se borra al cerrar navegador)
- **Sin servidor**: 100% client-side, ideal para demostración

## Características Técnicas

### CSS/Animaciones
```css
- Transiciones cúbicas (cubic-bezier)
- Gradientes lineales dinámicos
- Box-shadow variables para profundidad
- Transformaciones 3D en hover
- Media queries responsive
```

### JavaScript
```js
- Vanilla JS (sin frameworks)
- LocalStorage API para persistencia
- Session management con sessionStorage
- Modulación por funciones
- Event delegation
```

### Colores Brand GPRB
```
Primario: #00c896 (Verde éxito)
Secundario: #ff6b35 (Naranja energia)
Terciario: #9b59b6 (Púrpura)
Oscuro: #0d1b2a (Azul profundo)
```

## SEO y Rendimiento

- ✅ Meta tags básicos
- ✅ Responsive design
- ✅ Sin dependencias externas (excepto iconos Font Awesome)
- ✅ Carga rápida (todos los assets locales o CDN)
- ✅ Accesibilidad básica

## Mejoras Futuras

- [ ] Backend con API (Node.js, Python, etc.)
- [ ] Base de datos (PostgreSQL, MongoDB)
- [ ] Autenticación con OAuth
- [ ] Subida de imágenes real
- [ ] Email de notificaciones
- [ ] Integración con mapas (Google Maps API)
- [ ] Sistema de favoritos
- [ ] Historial de búsquedas
- [ ] Reportes y analíticas
- [ ] PWA (Progressive Web App)

## Navegadores Soportados

- Chrome/Chromium (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Mobile: iOS Safari, Chrome Mobile

## Soporte

Para soporte técnico, contacta a:
- 📞 +56 9 4170 9793
- 📧 giancarlo@gprb.cl

---

**Creado para GPRB - Gestión Inmobiliaria Industrial**
**Año 2026 - Todos los derechos reservados**
# CORREDORA
