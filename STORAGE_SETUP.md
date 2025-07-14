# Supabase Storage Setup for Blog Media

## Setting up Storage Bucket for Blog Images

### 1. Create Storage Bucket

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Storage** in the left sidebar
4. Click **Create a new bucket**
5. Set the following:
   - **Name**: `blog-media`
   - **Public bucket**: ✅ Check this (so images can be accessed publicly)
   - **File size limit**: 50MB (or your preferred limit)
   - **Allowed MIME types**: `image/*` (or leave empty for all types)

### 2. Set Storage Policies

After creating the bucket, you need to set up Row Level Security (RLS) policies:

#### For Public Read Access:
```sql
-- Allow public read access to blog-media bucket
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-media');
```

#### For Authenticated Uploads (Optional):
```sql
-- Allow authenticated users to upload to blog-media bucket
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'blog-media' 
    AND auth.role() = 'authenticated'
  );
```

#### For Public Uploads (If you want anyone to upload):
```sql
-- Allow public uploads to blog-media bucket
CREATE POLICY "Public uploads" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'blog-media');
```

### 3. Test the Setup

1. Go to your blog editor at `/admin`
2. Try uploading an image
3. Check that the image appears in your Supabase Storage dashboard
4. Verify the image URL is accessible publicly

## Features Included

### ✅ **Rich Blog Editor**
- **Title & Slug**: Auto-generates SEO-friendly URLs
- **Excerpt**: Brief description for blog listings
- **Featured Image**: Main image for the blog post
- **Author**: Blog post author information
- **Tags**: Categorize your blog posts
- **Content**: Rich text editor with HTML support

### ✅ **Image Upload System**
- **Drag & Drop**: Easy image upload interface
- **Progress Bar**: Visual upload progress
- **Media Library**: Manage uploaded images
- **Insert into Content**: Click to insert images into your blog content
- **Supabase Storage**: Images stored securely in `blog-media` bucket

### ✅ **Content Tools**
- **Bold/Italic**: Text formatting buttons
- **Lists**: Bullet and numbered lists
- **Quotes**: Blockquote formatting
- **Links**: Add hyperlinks
- **HTML Support**: Full HTML content support

### ✅ **Preview System**
- **Live Preview**: See how your blog post will look
- **Toggle Preview**: Show/hide preview panel
- **Responsive Design**: Preview matches final blog layout

### ✅ **Publishing Controls**
- **Draft/Published**: Toggle post visibility
- **Auto-save**: Form data persists during editing
- **Validation**: Required field validation

## Usage

### Creating a Blog Post

1. **Go to Admin Panel**: Visit `/admin`
2. **Fill Basic Info**: Title, excerpt, author, tags
3. **Upload Images**: Use the media library to upload images
4. **Write Content**: Use the rich text editor with formatting tools
5. **Insert Images**: Click the image icon to insert uploaded images
6. **Preview**: Toggle preview to see the final result
7. **Publish**: Set publish status and save

### Image Management

1. **Upload**: Click "Upload Image" to select files
2. **View Library**: See all uploaded images in the sidebar
3. **Insert**: Click the image icon to insert into content
4. **Remove**: Delete images from the library if needed

### Content Formatting

- **Bold**: `<strong>text</strong>`
- **Italic**: `<em>text</em>`
- **Lists**: `<ul><li>item</li></ul>`
- **Quotes**: `<blockquote>quote</blockquote>`
- **Links**: `<a href="url">text</a>`

## Storage Structure

```
blog-media/
├── 1703123456789-abc123.jpg
├── 1703123456790-def456.png
└── 1703123456791-ghi789.webp
```

## Security Notes

- **Public Bucket**: Images are publicly accessible
- **File Types**: Only image files are accepted
- **File Size**: Limited to prevent abuse
- **Unique Names**: Files get unique timestamps to prevent conflicts

## Troubleshooting

### Upload Issues
- Check bucket permissions
- Verify file size limits
- Ensure bucket is public

### Image Not Displaying
- Check the image URL in browser
- Verify bucket is public
- Check file permissions

### Storage Quota
- Monitor your Supabase storage usage
- Consider image compression for large files
- Set appropriate file size limits

## Next Steps

1. **Set up the storage bucket** following the steps above
2. **Test the blog editor** at `/admin`
3. **Create your first blog post** with images
4. **View your blog** at `/blog`

The blog editor is now fully functional with image upload capabilities! 