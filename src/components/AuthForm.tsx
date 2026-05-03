'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup form
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [fullName, setFullName] = useState(''); // State for full name input (used in signup)
  const [loading, setLoading] = useState(false); // State to indicate loading status during auth operations
  const [error, setError] = useState<string | null>(null); // State to store authentication errors
  const [message, setMessage] = useState<string | null>(null); // State to store success messages (e.g., for email confirmation)
  
  const router = useRouter(); // Hook for client-side navigation
  const supabase = createClient(); // Initialize Supabase client

  // Function to handle authentication (login or signup)
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true
    setError(null); // Clear previous errors
    setMessage(null); // Clear previous messages

    try {
      if (isLogin) {
        // Handle login
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (loginError) throw loginError; // Throw error if login fails
        router.push('/'); // Redirect to homepage on successful login
        router.refresh(); // Refresh server components after navigation
      } else {
        // Handle signup
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName, // Pass full name as user data
            },
          },
        });
        if (signUpError) throw signUpError; // Throw error if signup fails
        setMessage('Check your email for the confirmation link!'); // Display success message
      }
    } catch (err: Error) {
      setError(err.message || 'An error occurred during authentication.'); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="w-full max-w-md mx-auto card shadow-large"> {/* Container for the form */}
      <div className="text-center mb-8"> {/* Header section for the form */}
        <h2 className="text-3xl mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-[var(--accents-5)]">
          {isLogin ? 'Enter your details to sign in.' : 'Join our community today.'}
        </p>
      </div>

      {/* Display error messages if any */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-medium">
          {error}
        </div>
      )}

      {/* Display success messages if any */}
      {message && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm font-medium">
          {message}
        </div>
      )}

      {/* Authentication Form */}
      <form onSubmit={handleAuth} className="space-y-4">
        {/* Full Name input - only shown during signup */}
        {!isLogin && (
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--accents-5)] mb-2">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[var(--accents-2)] bg-[var(--accents-1)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all"
              placeholder="Jane Doe"
            />
          </div>
        )}
        {/* Email Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[var(--accents-5)] mb-2">Email Address</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[var(--accents-2)] bg-[var(--accents-1)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all"
            placeholder="jane@example.com"
          />
        </div>
        {/* Password Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[var(--accents-5)] mb-2">Password</label>
          <input 
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[var(--accents-2)] bg-[var(--accents-1)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading} // Disable button while loading
          className="button-primary w-full justify-center py-4 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
        </button>
      </form>

      {/* Toggle between Sign In and Sign Up */}
      <div className="mt-8 pt-6 border-t border-[var(--accents-2)] text-center">
        <button 
          onClick={() => {
            setIsLogin(!isLogin); // Toggle the form mode
            setError(null); // Clear errors and messages on mode change
            setMessage(null);
          }}
          className="text-sm font-semibold text-[var(--stripe-blue)] hover:opacity-80 transition-opacity"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
