-- ============================================================
-- GPRB - Esquema de base de datos Supabase
-- ============================================================
-- Ejecuta este script completo en:
-- Supabase Dashboard → SQL Editor → New Query → pegar → Run
-- ============================================================

-- ---------- 1. TABLA: properties ----------
CREATE TABLE IF NOT EXISTS public.properties (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  operation TEXT NOT NULL CHECK (operation IN ('venta', 'arriendo')),
  price BIGINT NOT NULL,
  currency TEXT DEFAULT 'CLP',
  bedrooms INT DEFAULT 0,
  bathrooms INT DEFAULT 0,
  parking INT DEFAULT 0,
  area_total NUMERIC,
  area_useful NUMERIC,
  location TEXT,
  address TEXT,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  amenities JSONB DEFAULT '[]'::jsonb,
  images JSONB DEFAULT '[]'::jsonb,
  agent_name TEXT,
  agent_phone TEXT,
  agent_email TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_properties_category ON public.properties(category);
CREATE INDEX IF NOT EXISTS idx_properties_operation ON public.properties(operation);
CREATE INDEX IF NOT EXISTS idx_properties_published ON public.properties(published);

-- ---------- 2. TABLA: slider_slides ----------
CREATE TABLE IF NOT EXISTS public.slider_slides (
  id BIGSERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  title TEXT,
  subtitle TEXT,
  "order" INT DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ---------- 3. TABLA: contact_messages ----------
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  category TEXT,
  operation TEXT,
  message TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.slider_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- properties: lectura pública, escritura solo autenticados
DROP POLICY IF EXISTS "properties_select_public" ON public.properties;
CREATE POLICY "properties_select_public" ON public.properties
  FOR SELECT USING (published = true);

DROP POLICY IF EXISTS "properties_all_authenticated" ON public.properties;
CREATE POLICY "properties_all_authenticated" ON public.properties
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- slider_slides: lectura pública, escritura autenticados
DROP POLICY IF EXISTS "slides_select_public" ON public.slider_slides;
CREATE POLICY "slides_select_public" ON public.slider_slides
  FOR SELECT USING (active = true);

DROP POLICY IF EXISTS "slides_all_authenticated" ON public.slider_slides;
CREATE POLICY "slides_all_authenticated" ON public.slider_slides
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- contact_messages: insert público, lectura/escritura solo autenticados
DROP POLICY IF EXISTS "messages_insert_public" ON public.contact_messages;
CREATE POLICY "messages_insert_public" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "messages_select_authenticated" ON public.contact_messages;
CREATE POLICY "messages_select_authenticated" ON public.contact_messages
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "messages_update_authenticated" ON public.contact_messages;
CREATE POLICY "messages_update_authenticated" ON public.contact_messages
  FOR UPDATE TO authenticated USING (true);

-- ============================================================
-- SEED DATA (3 propiedades + 3 slides de ejemplo)
-- ============================================================

INSERT INTO public.properties (title, category, operation, price, bedrooms, bathrooms, parking, area_total, area_useful, location, description, images, agent_name, agent_phone, agent_email, featured)
VALUES
  ('Bodega Industrial Premium Quilicura', 'bodega', 'arriendo', 3500000, 0, 2, 15, 1200, 1000, 'Quilicura, Santiago', 'Amplia bodega industrial con excelente ubicación, altura libre 10m, soporte piso 5 ton/m².', '["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"]'::jsonb, 'Giancarlo', '+56 9 4170 9793', 'giancarlo@gprb.cl', true),
  ('Galpón Industrial Pudahuel', 'galpon', 'venta', 180000000, 0, 3, 20, 2500, 2200, 'Pudahuel, Santiago', 'Galpón de gran magnitud ideal para centro logístico, con oficinas y báscula.', '["https://images.unsplash.com/photo-1601599963565-b7f49deb4b68?w=800"]'::jsonb, 'Giancarlo', '+56 9 4170 9793', 'giancarlo@gprb.cl', true),
  ('Terreno Industrial San Bernardo', 'terreno', 'venta', 450000000, 0, 0, 0, 5000, 5000, 'San Bernardo, Santiago', 'Terreno industrial con todas las factibilidades, excelente conectividad.', '["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"]'::jsonb, 'Giancarlo', '+56 9 4170 9793', 'giancarlo@gprb.cl', true)
ON CONFLICT DO NOTHING;

INSERT INTO public.slider_slides (image_url, title, subtitle, "order")
VALUES
  ('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600', 'Bodegas Industriales Premium', 'Soluciones logísticas de primer nivel en Santiago', 1),
  ('https://images.unsplash.com/photo-1601599963565-b7f49deb4b68?w=1600', 'Galpones y Naves Industriales', 'Espacios diseñados para tu operación', 2),
  ('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600', 'Terrenos Industriales', 'Ubicaciones estratégicas con factibilidades', 3)
ON CONFLICT DO NOTHING;

-- ============================================================
-- LISTO. Verifica en Table Editor que las 3 tablas existan.
-- ============================================================
