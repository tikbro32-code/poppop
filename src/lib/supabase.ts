import { createClient } from '@supabase/supabase-js';

// Access directly so Vite can statically replace it in the browser
const supabaseUrlRaw = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_SUPABASE_URL : '';
const supabaseAnonKeyRaw = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_SUPABASE_ANON_KEY : '';

const formatSupabaseUrl = (url: string | undefined | null) => {
  if (!url) return null;
  let formattedUrl = url.trim();
  if (!formattedUrl) return null;
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    if (formattedUrl.includes('.')) {
      formattedUrl = `https://${formattedUrl}`;
    } else {
      formattedUrl = `https://${formattedUrl}.supabase.co`;
    }
  }
  try {
    new URL(formattedUrl);
    return formattedUrl;
  } catch (e) {
    return null;
  }
};

const validUrl = formatSupabaseUrl(supabaseUrlRaw);
// Default fallback URL and key so the app doesn't completely crash (but fetch will fail if real DB isn't connected)
const supabaseUrl = validUrl || 'https://mqrpvhlrtfcchvmjisej.supabase.co';
const supabaseAnonKey = supabaseAnonKeyRaw || 'sb_publishable_4fR8DTDw1i53ZUibjekYTQ_PS56Wd_m';

if (!validUrl || !supabaseAnonKeyRaw) {
  console.warn('Supabase credentials missing or invalid. Sila semak VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di Settings (API Keys).');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);