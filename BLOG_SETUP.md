# Blog Setup Guide

This guide will help you set up the blog functionality with Supabase integration.

## Prerequisites

1. A Supabase account and project
2. Node.js and npm/yarn installed

## Setup Steps

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. Go to your project dashboard
3. Navigate to Settings > API to get your project URL and keys

### 3. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Database Schema

Run the following SQL in your Supabase SQL editor to create the blog tables:

```sql
-- Create blogs table
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author VARCHAR(100) NOT NULL,
  published_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  tags TEXT[],
  is_published TEXT DEFAULT 'true'
);

-- Create blog_media table
CREATE TABLE blog_media (
  id SERIAL PRIMARY KEY,
  blog_id INTEGER REFERENCES blogs(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  media_type VARCHAR(50) NOT NULL,
  caption TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_published ON blogs(is_published);
CREATE INDEX idx_blogs_published_at ON blogs(published_at);
CREATE INDEX idx_blog_media_blog_id ON blog_media(blog_id);
CREATE INDEX idx_blog_media_order ON blog_media("order");
```

### 5. Row Level Security (RLS)

Enable RLS and create policies for the blog tables:

```sql
-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_media ENABLE ROW LEVEL SECURITY;

-- Create policies for blogs table
CREATE POLICY "Public blogs are viewable by everyone" ON blogs
  FOR SELECT USING (is_published = 'true');

CREATE POLICY "Users can insert blogs" ON blogs
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can update their own blogs" ON blogs
  FOR UPDATE USING (true);

CREATE POLICY "Users can delete their own blogs" ON blogs
  FOR DELETE USING (true);

-- Create policies for blog_media table
CREATE POLICY "Public blog media is viewable by everyone" ON blog_media
  FOR SELECT USING (true);

CREATE POLICY "Users can insert blog media" ON blog_media
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can update blog media" ON blog_media
  FOR UPDATE USING (true);

CREATE POLICY "Users can delete blog media" ON blog_media
  FOR DELETE USING (true);
```

### 6. Storage Setup (Optional)

If you want to upload images directly to Supabase storage:

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `blog-media`
3. Set the bucket to public
4. Create a storage policy:

```sql
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-media');

CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'blog-media' AND auth.role() = 'authenticated');
```

## Usage

### Adding Blog Posts

You can add blog posts through:

1. **Supabase Dashboard**: Directly insert records in the blogs table
2. **API**: Use the `/api/blog` endpoint
3. **Supabase Client**: Use the Supabase client in your application

### Example Blog Post

```json
{
  "title": "Getting Started with React",
  "slug": "getting-started-with-react",
  "content": "<h1>Introduction</h1><p>React is a powerful JavaScript library...</p>",
  "excerpt": "Learn the basics of React development",
  "featured_image": "https://example.com/image.jpg",
  "author": "Abhishek S.",
  "tags": ["React", "JavaScript", "Frontend"],
  "is_published": true
}
```

### Features

- ✅ Responsive blog listing page
- ✅ Individual blog post pages
- ✅ Media gallery support
- ✅ Tag system
- ✅ Reading time estimation
- ✅ SEO-friendly URLs
- ✅ Beautiful animations
- ✅ Mobile-responsive design

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

The blog will be available at `/blog` and individual posts at `/blog/[slug]`.

## Deployment

1. Set up your environment variables in your deployment platform
2. Deploy your application
3. Ensure your Supabase project is properly configured

## Troubleshooting

- **CORS Issues**: Make sure your Supabase project allows requests from your domain
- **RLS Errors**: Ensure you've set up the correct policies
- **Media Not Loading**: Check that your media URLs are accessible
- **Environment Variables**: Verify all required environment variables are set 