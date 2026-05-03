import { createBrowserClient } from '@supabase/ssr';

// Function to create a Supabase client for browser-side operations.
// This is used in client components (like React components) that need to interact with Supabase.
export function createClient() {
  // Use environment variables for Supabase URL and Anon Key.
  // The '!' asserts that these variables are definitely defined, which should be guaranteed by .env.local.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
