import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables for API');
}

const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseServiceKey || 'placeholder-key'
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    switch (req.method) {
      case 'GET':
        return await handleGet(req, res);
      case 'POST':
        return await handlePost(req, res);
      case 'PUT':
        return await handlePut(req, res);
      case 'DELETE':
        return await handleDelete(req, res);
      default:
        res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Blog API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse) {
  const { slug } = req.query;

  if (slug) {
    // Get single blog post
    const { data: blog, error: blogError } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (blogError) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Get associated media
    const { data: media, error: mediaError } = await supabase
      .from('blog_media')
      .select('*')
      .eq('blog_id', blog.id)
      .order('order', { ascending: true });

    if (mediaError) {
      return res.status(500).json({ error: 'Failed to fetch media' });
    }

    return res.status(200).json({
      ...blog,
      media: media || []
    });
  } else {
    // Get all published blog posts
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch blogs' });
    }

    return res.status(200).json(blogs);
  }
}

async function handlePost(req: VercelRequest, res: VercelResponse) {
  const { title, slug, content, excerpt, featuredImage, author, tags, isPublished, media } = req.body;

  // Validate required fields
  if (!title || !slug || !content || !author) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check if slug already exists
  const { data: existingBlog } = await supabase
    .from('blogs')
    .select('id')
    .eq('slug', slug)
    .single();

  if (existingBlog) {
    return res.status(409).json({ error: 'Blog post with this slug already exists' });
  }

  // Insert blog post
  const { data: blog, error: blogError } = await supabase
    .from('blogs')
    .insert({
      title,
      slug,
      content,
      excerpt,
      featured_image: featuredImage,
      author,
      tags,
      is_published: isPublished ?? true
    })
    .select()
    .single();

  if (blogError) {
    return res.status(500).json({ error: 'Failed to create blog post' });
  }

  // Insert media if provided
  if (media && media.length > 0) {
    const mediaData = media.map((item: any, index: number) => ({
      blog_id: blog.id,
      media_url: item.url,
      media_type: item.type,
      caption: item.caption,
      order: index
    }));

    const { error: mediaError } = await supabase
      .from('blog_media')
      .insert(mediaData);

    if (mediaError) {
      console.error('Media insertion error:', mediaError);
      // Don't fail the entire request if media insertion fails
    }
  }

  return res.status(201).json(blog);
}

async function handlePut(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  const updateData = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Blog ID is required' });
  }

  const { data: blog, error } = await supabase
    .from('blogs')
    .update({
      ...updateData,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: 'Failed to update blog post' });
  }

  return res.status(200).json(blog);
}

async function handleDelete(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Blog ID is required' });
  }

  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: 'Failed to delete blog post' });
  }

  return res.status(204).end();
} 