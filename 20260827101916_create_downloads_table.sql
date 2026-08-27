/*
# Create downloads table for VidoPro video download history

1. New Tables
- `downloads`
  - `id` (uuid, primary key)
  - `url` (text, not null) - the source video URL
  - `platform` (text, not null) - youtube, instagram, facebook, twitter, or tiktok
  - `title` (text, not null) - video title
  - `thumbnail` (text) - thumbnail image URL
  - `duration` (text) - video duration display string
  - `quality` (text, not null) - selected download quality (e.g. 1080p)
  - `status` (text, not null, default 'completed') - download status
  - `file_size` (text) - display string for file size
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `downloads`.
- Single-tenant no-auth app: allow anon + authenticated full CRUD since download history is intentionally shared/public on this device.
*/

CREATE TABLE IF NOT EXISTS downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  platform text NOT NULL,
  title text NOT NULL,
  thumbnail text,
  duration text,
  quality text NOT NULL,
  status text NOT NULL DEFAULT 'completed',
  file_size text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_downloads" ON downloads;
CREATE POLICY "anon_select_downloads" ON downloads FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_downloads" ON downloads;
CREATE POLICY "anon_insert_downloads" ON downloads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_downloads" ON downloads;
CREATE POLICY "anon_update_downloads" ON downloads FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_downloads" ON downloads;
CREATE POLICY "anon_delete_downloads" ON downloads FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS downloads_created_at_idx ON downloads (created_at DESC);
