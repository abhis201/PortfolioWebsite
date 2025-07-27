import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
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