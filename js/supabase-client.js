// ============================================================
// GPRB - Cliente Supabase
// ============================================================

const SUPABASE_URL = 'https://kydvxkiqcjztrcetunaj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LK4SQOUBg1FtwNQ23znzHw_wNy7hFnd';

// Inicializar cliente (global)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'gprb-auth'
  }
});

// ============================================================
// PROPERTIES
// ============================================================
async function sbGetProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('sbGetProperties', error); return []; }
  return data || [];
}

async function sbCreateProperty(prop) {
  const { data, error } = await supabase.from('properties').insert(prop).select().single();
  if (error) { console.error('sbCreateProperty', error); throw error; }
  return data;
}

async function sbUpdateProperty(id, prop) {
  const { data, error } = await supabase
    .from('properties')
    .update({ ...prop, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) { console.error('sbUpdateProperty', error); throw error; }
  return data;
}

async function sbDeleteProperty(id) {
  const { error } = await supabase.from('properties').delete().eq('id', id);
  if (error) { console.error('sbDeleteProperty', error); throw error; }
  return true;
}

// ============================================================
// SLIDER
// ============================================================
async function sbGetSlides() {
  const { data, error } = await supabase
    .from('slider_slides')
    .select('*')
    .eq('active', true)
    .order('order', { ascending: true });
  if (error) { console.error('sbGetSlides', error); return []; }
  return data || [];
}

async function sbUpsertSlide(slide) {
  const { data, error } = await supabase
    .from('slider_slides')
    .upsert(slide)
    .select()
    .single();
  if (error) { console.error('sbUpsertSlide', error); throw error; }
  return data;
}

async function sbDeleteSlide(id) {
  const { error } = await supabase.from('slider_slides').delete().eq('id', id);
  if (error) { console.error('sbDeleteSlide', error); throw error; }
  return true;
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
// AUTH (admin)
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

async function sbGetUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

function sbOnAuthChange(callback) {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null, event);
  });
}

// Exponer en window para uso desde app.js
window.GPRB_SB = {
  supabase,
  // properties
  getProperties: sbGetProperties,
  createProperty: sbCreateProperty,
  updateProperty: sbUpdateProperty,
  deleteProperty: sbDeleteProperty,
  // slides
  getSlides: sbGetSlides,
  upsertSlide: sbUpsertSlide,
  deleteSlide: sbDeleteSlide,
  // messages
  sendContactMessage: sbSendContactMessage,
  getContactMessages: sbGetContactMessages,
  // auth
  signIn: sbSignIn,
  signOut: sbSignOut,
  getUser: sbGetUser,
  onAuthChange: sbOnAuthChange
};
