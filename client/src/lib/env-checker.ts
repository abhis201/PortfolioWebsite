// Environment variable checker for debugging
export function checkEnvVars() {
  const envVars = {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  };

  console.log('Environment Variables Check:');
  console.log('VITE_SUPABASE_URL:', envVars.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing');
  console.log('VITE_SUPABASE_ANON_KEY:', envVars.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');

  if (!envVars.VITE_SUPABASE_URL || !envVars.VITE_SUPABASE_ANON_KEY) {
    console.error('❌ Missing required environment variables!');
    console.error('Please check your .env file and ensure it contains:');
    console.error('VITE_SUPABASE_URL=your_supabase_project_url');
    console.error('VITE_SUPABASE_ANON_KEY=your_supabase_anon_key');
    return false;
  }

  console.log('✅ All environment variables are set correctly!');
  return true;
} 