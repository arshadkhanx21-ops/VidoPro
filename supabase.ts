import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Download = {
  id: string;
  url: string;
  platform: string;
  title: string;
  thumbnail: string | null;
  duration: string | null;
  quality: string;
  status: string;
  file_size: string | null;
  created_at: string;
};
