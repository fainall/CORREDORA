-- ============================================================
-- GPRB - Storage para imágenes de propiedades
-- ============================================================
-- Ejecuta este script en Supabase SQL Editor → Run
-- ============================================================

-- Crear bucket público
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'properties',
  'properties',
  true,
  10485760,  -- 10 MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Policies de storage.objects para el bucket 'properties'

-- Todos pueden ver las imágenes
DROP POLICY IF EXISTS "properties_images_public_read" ON storage.objects;
CREATE POLICY "properties_images_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'properties');

-- Solo usuarios autenticados (admin) pueden subir
DROP POLICY IF EXISTS "properties_images_auth_upload" ON storage.objects;
CREATE POLICY "properties_images_auth_upload" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'properties');

-- Solo autenticados pueden actualizar/reemplazar
DROP POLICY IF EXISTS "properties_images_auth_update" ON storage.objects;
CREATE POLICY "properties_images_auth_update" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'properties');

-- Solo autenticados pueden borrar
DROP POLICY IF EXISTS "properties_images_auth_delete" ON storage.objects;
CREATE POLICY "properties_images_auth_delete" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'properties');

-- ============================================================
-- LISTO. Verifica en Storage → Buckets que exista 'properties'
-- ============================================================
