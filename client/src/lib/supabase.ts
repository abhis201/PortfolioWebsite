import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug: Log all available environment variables
console.log('🔍 Environment Variables Debug:');
console.log('import.meta.env:', import.meta.env);
console.log('VITE_SUPABASE_URL:', supabaseUrl);
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Set' : '❌ Missing');

// For development, you can use placeholder values if env vars are not set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('❌ Missing Supabase environment variables!');
  console.warn('📝 Please check your .env file contains:');
  console.warn('VITE_SUPABASE_URL=your_supabase_url');
  console.warn('VITE_SUPABASE_ANON_KEY=your_anon_key');
  console.warn('💡 Make sure to restart your dev server after creating/updating .env');
  
  // In development, you can provide placeholder values to prevent crashes
  if (import.meta.env.DEV) {
    console.warn('⚠️ Using placeholder values for development. Blog functionality will not work.');
  }
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Blog types
export interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  author: string;
  published_at: string;
  updated_at: string;
  tags?: string[];
  is_published: boolean;
}

export interface BlogMedia {
  id: number;
  blog_id: number;
  media_url: string;
  media_type: 'image' | 'video' | 'file';
  caption?: string;
  order: number;
  created_at: string;
}

export interface BlogWithMedia extends Blog {
  media: BlogMedia[];
} 