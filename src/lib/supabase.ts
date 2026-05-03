import { createClient } from '@supabase/supabase-js'; // Import Supabase client factory

// Retrieve Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Ensure that necessary configuration is provided
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided in environment variables.');
}

// Export the initialized Supabase client
// This client is intended for server-side operations (or shared singleton use where appropriate)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
