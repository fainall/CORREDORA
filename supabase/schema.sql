-- ============================================================
-- GPRB - Esquema de base de datos Supabase
-- ============================================================
-- Ejecuta este script completo en:
-- Supabase Dashboard → SQL Editor → New Query → pegar → Run
-- ============================================================

-- Reset (opcional, comentar si ya tenías datos)
DROP TABLE IF EXISTS public.properties CASCADE;
DROP TABLE IF EXISTS public.slider_slides CASCADE;
DROP TABLE IF EXISTS public.contact_messages CASCADE;

-- ---------- 1. TABLA: properties ----------
CREATE TABLE public.properties (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  price BIGINT NOT NULL,
  location TEXT,
  address TEXT,
  area NUMERIC,
  usable_area NUMERIC,
  bathrooms INT DEFAULT 0,
  parking INT DEFAULT 0,
  warehouse_type TEXT,
  private_rooms INT DEFAULT 0,
  age INT,
  height NUMERIC,
  floor_support NUMERIC,
  platforms TEXT,
  price_per_m2 NUMERIC,
  property_code TEXT,
  image TEXT,
  gallery JSONB DEFAULT '[]'::jsonb,
  description TEXT,
  services JSONB DEFAULT '[]'::jsonb,
  amenities JSONB DEFAULT '[]'::jsonb,
  security JSONB DEFAULT '[]'::jsonb,
  agent_name TEXT,
  agent_phone TEXT,
  agent_email TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_properties_type ON public.properties(type);
CREATE INDEX idx_properties_status ON public.properties(status);
CREATE INDEX idx_properties_published ON public.properties(published);

-- ---------- 2. TABLA: slider_slides ----------
CREATE TABLE public.slider_slides (
  id BIGSERIAL PRIMARY KEY,
  bg_url TEXT NOT NULL,
  tag TEXT,
  title TEXT,
  subtitle TEXT,
  sort_order INT DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ---------- 3. TABLA: contact_messages ----------
CREATE TABLE public.contact_messages (
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

-- properties
CREATE POLICY "properties_select_public" ON public.properties
  FOR SELECT USING (published = true);
CREATE POLICY "properties_all_authenticated" ON public.properties
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- slider_slides
CREATE POLICY "slides_select_public" ON public.slider_slides
  FOR SELECT USING (active = true);
CREATE POLICY "slides_all_authenticated" ON public.slider_slides
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- contact_messages
CREATE POLICY "messages_insert_public" ON public.contact_messages
  FOR INSERT WITH CHECK (true);
CREATE POLICY "messages_select_authenticated" ON public.contact_messages
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "messages_update_authenticated" ON public.contact_messages
  FOR UPDATE TO authenticated USING (true);

-- ============================================================
-- SEED DATA
-- ============================================================

INSERT INTO public.properties
  (title, type, status, price, location, address, area, usable_area, bathrooms, parking,
   warehouse_type, private_rooms, age, height, floor_support, platforms, price_per_m2, property_code,
   image, gallery, description, services, amenities, security,
   agent_name, agent_phone, agent_email, featured)
VALUES
  ('Bodega Industrial Providencia', 'Bodega', 'Venta', 85000000, 'Providencia, Santiago', 'Av. Providencia 1500',
   450, 400, 2, 4, 'Cerrada', 0, 5, 6, 5, 'Si', 188888, 'BDG-001',
   'https://images.unsplash.com/photo-1553531889-e6cf91d13ab6?w=800&q=80', '[]'::jsonb,
   'Bodega industrial cerrada con excelentes caracteristicas. Piso de hormigon resistente, acceso de carga y descarga, oficinas internas. Ubicacion estrategica en Providencia.',
   '["Internet","Agua","Luz"]'::jsonb, '["Aire","Generador"]'::jsonb, '["Alarma","Incendio"]'::jsonb,
   'Giancarlo GPRB', '+56 9 4170 9793', 'giancarlo@gprb.cl', true),

  ('Oficina Ejecutiva Centro', 'Oficina', 'Arriendo', 2500000, 'Centro, Santiago', 'Ahumada 250',
   120, 110, 2, 2, NULL, 3, 8, 3, 3, 'No', 20833333, 'OFC-001',
   'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', '[]'::jsonb,
   'Moderna oficina ejecutiva con acabados premium. Climatizacion central, vista a la ciudad, zonas colaborativas y privadas.',
   '["Internet","Agua","Gas","Luz","Telefonica"]'::jsonb, '["Aire","Calefaccion"]'::jsonb, '["Alarma","Conserjeria"]'::jsonb,
   'Giancarlo GPRB', '+56 9 4170 9793', 'giancarlo@gprb.cl', true),

  ('Terreno Industrial Zona Franca', 'Terreno', 'Venta', 250000000, 'Zona Franca, Valparaiso', 'Km 11 Ruta 5 Sur',
   5000, 4500, 1, 10, 'Abierta', 0, 2, 8, 10, 'Si', 50000000, 'TRR-001',
   'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80', '[]'::jsonb,
   'Amplio terreno industrial en zona franca con excelente acceso logistico. Ideal para plantas manufactureras, distribuidoras o centros de acopio.',
   '["Agua","Luz"]'::jsonb, '["Generador"]'::jsonb, '["Alarma"]'::jsonb,
   'Giancarlo GPRB', '+56 9 4170 9793', 'giancarlo@gprb.cl', true);

INSERT INTO public.slider_slides (bg_url, tag, title, subtitle, sort_order)
VALUES
  ('https://images.unsplash.com/photo-1553531889-e6cf91d13ab6?w=1400&q=80', 'Bienvenido a GPRB', 'Gestión Inmobiliaria Industrial', 'Las mejores soluciones en propiedades industriales de Chile', 1),
  ('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80', 'Amplio Catálogo', 'Bodegas, Oficinas y Terrenos', 'Más de 8 categorías de inmuebles para tu negocio', 2),
  ('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1400&q=80', 'Cobertura Nacional', 'Asesoría Profesional', 'Expertos en el mercado inmobiliario industrial chileno', 3);

-- ============================================================
-- LISTO. Verifica en Table Editor que las 3 tablas existan con datos.
-- ============================================================
