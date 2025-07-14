# Environment Variables Setup Guide

## Quick Fix for Environment Variables

### 1. Create/Update your `.env` file

Create a `.env` file in the **root directory** of your project with the following content:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 2. Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project (or create a new one)
3. Go to **Settings** → **API**
4. Copy the following values:
   - **Project URL** → Use as `VITE_SUPABASE_URL`
   - **anon public** key → Use as `VITE_SUPABASE_ANON_KEY`
   - **service_role** key → Use as `SUPABASE_SERVICE_ROLE_KEY`

### 3. Restart Your Development Server

After creating/updating the `.env` file:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

### 4. Verify Environment Variables

Open your browser's developer console (F12) and go to `/blog`. You should see a message indicating whether the environment variables are set correctly.

## Common Issues & Solutions

### Issue 1: "Missing Supabase environment variables"

**Solution:**
- Make sure your `.env` file is in the **root directory** (same level as `package.json`)
- Ensure the file is named exactly `.env` (not `.env.local` or `.env.development`)
- Restart your development server after creating the file

### Issue 2: Variables are undefined

**Solution:**
- Check that your `.env` file has no spaces around the `=` sign
- Make sure there are no quotes around the values
- Verify the variable names start with `VITE_`

### Issue 3: Still getting errors after setup

**Solution:**
1. Check the browser console for specific error messages
2. Verify your Supabase project is active
3. Ensure your database tables are created (see `BLOG_SETUP.md`)

## Example `.env` file

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzQ5NjAwMCwiZXhwIjoxOTUzMDcyMDAwfQ.example
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM3NDk2MDAwLCJleHAiOjE5NTMwNzIwMDB9.example
```

## Testing

1. Start your development server: `npm run dev`
2. Open your browser and go to `http://localhost:5173/blog`
3. Check the browser console for environment variable status
4. If everything is set up correctly, you should see "✅ All environment variables are set correctly!"

## Next Steps

Once your environment variables are working:
1. Set up your Supabase database tables (see `BLOG_SETUP.md`)
2. Create some test blog posts
3. Test the blog functionality

## Troubleshooting

If you're still having issues:

1. **Check file location**: Make sure `.env` is in the root directory
2. **Check file format**: No spaces, no quotes, correct variable names
3. **Restart server**: Always restart after changing `.env`
4. **Check Supabase**: Ensure your project is active and accessible
5. **Browser cache**: Clear browser cache and reload

Need help? Check the browser console for specific error messages! 