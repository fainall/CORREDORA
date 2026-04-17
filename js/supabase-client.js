// ============================================================
// GPRB - Cliente Supabase
// ============================================================

const SUPABASE_URL = 'https://kydvxkiqcjztrcetunaj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LK4SQOUBg1FtwNQ23znzHw_wNy7hFnd';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, storageKey: 'gprb-auth' }
});

// ============================================================
// MAPPERS: DB (snake_case) ↔ APP (camelCase)
// ============================================================
function propFromDb(r) {
  if (!r) return null;
  return {
    id: r.id,
    title: r.title,
    type: r.type,
    status: r.status,
    price: Number(r.price),
    location: r.location,
    address: r.address,
    area: r.area != null ? Number(r.area) : null,
    usableArea: r.usable_area != null ? Number(r.usable_area) : null,
    bathrooms: r.bathrooms || 0,
    parking: r.parking || 0,
    warehouseType: r.warehouse_type,
    privateRooms: r.private_rooms || 0,
    age: r.age,
    height: r.height != null ? Number(r.height) : null,
    floorSupport: r.floor_support != null ? Number(r.floor_support) : null,
    platforms: r.platforms,
    pricePerM2: r.price_per_m2 != null ? Number(r.price_per_m2) : null,
    propertyCode: r.property_code,
    image: r.image,
    gallery: Array.isArray(r.gallery) ? r.gallery : [],
    description: r.description,
    services: Array.isArray(r.services) ? r.services : [],
    amenities: Array.isArray(r.amenities) ? r.amenities : [],
    security: Array.isArray(r.security) ? r.security : [],
    agentName: r.agent_name,
    agentPhone: r.agent_phone,
    agentEmail: r.agent_email,
    featured: !!r.featured,
    published: r.published !== false
  };
}

function propToDb(p) {
  const out = {
    title: p.title,
    type: p.type,
    status: p.status,
    price: p.price,
    location: p.location,
    address: p.address,
    area: p.area,
    usable_area: p.usableArea,
    bathrooms: p.bathrooms,
    parking: p.parking,
    warehouse_type: p.warehouseType,
    private_rooms: p.privateRooms,
    age: p.age,
    height: p.height,
    floor_support: p.floorSupport,
    platforms: p.platforms,
    price_per_m2: p.pricePerM2,
    property_code: p.propertyCode,
    image: p.image,
    gallery: p.gallery || [],
    description: p.description,
    services: p.services || [],
    amenities: p.amenities || [],
    security: p.security || [],
    agent_name: p.agentName,
    agent_phone: p.agentPhone,
    agent_email: p.agentEmail,
    featured: !!p.featured
  };
  // Quitar undefined para no romper UPDATE
  Object.keys(out).forEach(k => out[k] === undefined && delete out[k]);
  return out;
}

function slideFromDb(r) {
  if (!r) return null;
  return {
    id: r.id,
    bgUrl: r.bg_url,
    tag: r.tag,
    title: r.title,
    subtitle: r.subtitle,
    sortOrder: r.sort_order || 0
  };
}

function slideToDb(s) {
  const out = {
    bg_url: s.bgUrl,
    tag: s.tag,
    title: s.title,
    subtitle: s.subtitle,
    sort_order: s.sortOrder != null ? s.sortOrder : 0,
    active: true
  };
  if (s.id != null) out.id = s.id;
  return out;
}

// ============================================================
// PROPERTIES
// ============================================================
async function sbGetProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('sbGetProperties', error); return []; }
  return (data || []).map(propFromDb);
}

async function sbCreateProperty(prop) {
  const payload = propToDb(prop);
  const { data, error } = await supabase.from('properties').insert(payload).select().single();
  if (error) { console.error('sbCreateProperty', error); throw error; }
  return propFromDb(data);
}

async function sbUpdateProperty(id, prop) {
  const payload = propToDb(prop);
  payload.updated_at = new Date().toISOString();
  const { data, error } = await supabase
    .from('properties')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  if (error) { console.error('sbUpdateProperty', error); throw error; }
  return propFromDb(data);
}

async function sbDeleteProperty(id) {
  const { error } = await supabase.from('properties').delete().eq('id', id);
  if (error) { console.error('sbDeleteProperty', error); throw error; }
  return true;
}

// ============================================================
// SLIDES
// ============================================================
async function sbGetSlides() {
  const { data, error } = await supabase
    .from('slider_slides')
    .select('*')
    .eq('active', true)
    .order('sort_order', { ascending: true });
  if (error) { console.error('sbGetSlides', error); return []; }
  return (data || []).map(slideFromDb);
}

async function sbSaveSlides(slides) {
  // Reemplazo completo: borrar todas y re-insertar
  const { error: delErr } = await supabase.from('slider_slides').delete().neq('id', 0);
  if (delErr) { console.error('sbSaveSlides delete', delErr); throw delErr; }
  const payload = (slides || []).map((s, i) => ({ ...slideToDb(s), sort_order: i + 1 }));
  payload.forEach(p => { delete p.id; });
  if (payload.length === 0) return [];
  const { data, error } = await supabase.from('slider_slides').insert(payload).select();
  if (error) { console.error('sbSaveSlides insert', error); throw error; }
  return (data || []).map(slideFromDb);
}

// ============================================================
// CONTACT MESSAGES
// ============================================================
async function sbSendContactMessage(msg) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert(msg)
    .select()
    .single();
  if (error) { console.error('sbSendContactMessage', error); throw error; }
  return data;
}

async function sbGetContactMessages() {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('sbGetContactMessages', error); return []; }
  return data || [];
}

// ============================================================
// AUTH
// ============================================================
async function sbSignIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function sbSignOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

async function sbGetSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

function sbOnAuthChange(cb) {
  return supabase.auth.onAuthStateChange((event, session) => cb(session?.user || null, event));
}

// Exponer globalmente
window.GPRB_SB = {
  supabase,
  getProperties: sbGetProperties,
  createProperty: sbCreateProperty,
  updateProperty: sbUpdateProperty,
  deleteProperty: sbDeleteProperty,
  getSlides: sbGetSlides,
  saveSlides: sbSaveSlides,
  sendContactMessage: sbSendContactMessage,
  getContactMessages: sbGetContactMessages,
  signIn: sbSignIn,
  signOut: sbSignOut,
  getSession: sbGetSession,
  onAuthChange: sbOnAuthChange
};
