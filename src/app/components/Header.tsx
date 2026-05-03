'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

const navItems = [
...
// Header component: displays navigation and branding
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
...

  // Effect hook to fetch user session on mount and listen for auth state changes
  useEffect(() => {
    const getUser = async () => {
      // Fetch current user session
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user); // Set user state
    };
    getUser(); // Call getUser on component mount

    // Subscribe to authentication state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null); // Update user state based on session changes
    });

    // Cleanup subscription on component unmount
    return () => subscription.unsubscribe();
  }, [supabase.auth]); // Dependency array includes supabase.auth to ensure effect runs if auth object changes (though unlikely)

  // Handles user sign-out process
  const handleSignOut = async () => {
    await supabase.auth.signOut(); // Sign out from Supabase
    router.push('/'); // Redirect to homepage
    router.refresh(); // Refresh server components to reflect logged-out state
  };

  return (
    // Header element with fixed positioning, glassmorphism effect, and high z-index
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container h-20 flex items-center justify-between"> {/* Container for header content */}
        
        {/* Logo Link */}
        <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--stripe-blue)] rounded-lg rotate-12" /> {/* Animated logo element */}
          <span className="hidden xs:inline">MyBlogs</span> {/* Show 'MyBlogs' text on small screens and up */}
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              // Apply styling based on active path, with hover effects
              className={`text-sm font-medium transition-colors hover:text-[var(--stripe-blue)] ${
                pathname === item.path ? 'text-[var(--stripe-blue)]' : 'text-[var(--accents-5)]'
              }`}
            >
              {item.name}
              {/* Active link indicator animation */}
              {pathname === item.path && (
                <motion.div
                  layoutId="activeNav" // Unique ID for layout animation
                  className="h-px bg-[var(--stripe-blue)] mt-0.5"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }} // Spring animation for smooth indicator movement
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons (Sign In/Get Started or Sign Out) */}
        <div className="flex items-center gap-4">
          {user ? (
            // If user is logged in, show Sign Out button
            <button 
              onClick={handleSignOut}
              className="text-sm font-semibold hover:text-[var(--stripe-blue)] transition-colors"
            >
              Sign Out
            </button>
          ) : (
            // If user is not logged in, show Sign In and Get Started buttons
            <>
              <Link href="/login" className="hidden sm:inline text-sm font-semibold hover:opacity-100 opacity-70">
                Sign In
              </Link>
              <Link href="/blogs" className="hidden sm:inline button-primary">
                Get Started
              </Link>
            </>
          )}
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 text-[var(--accents-5)] hover:text-[var(--foreground)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu visibility
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Conditionally render the menu icon (close 'X' or hamburger) */}
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Conditionally rendered */}
      <AnimatePresence> {/* Manages animations for components that are added/removed from the DOM */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Initial animation state: hidden and collapsed
            animate={{ opacity: 1, height: 'auto' }} // Animated state: visible and expanded
            exit={{ opacity: 0, height: 0 }} // Exit animation state: hidden and collapsed
            className="md:hidden bg-[var(--background)] border-t border-[var(--accents-2)] overflow-hidden" // Styling for the mobile menu container
          >
            <div className="container py-8 flex flex-col gap-6"> {/* Content wrapper for mobile menu */}
              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu when a link is clicked
                  className={`text-lg font-semibold ${
                    pathname === item.path ? 'text-[var(--stripe-blue)]' : 'text-[var(--accents-5)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Action Buttons (Sign In/Get Started or Sign Out) */}
              <div className="flex flex-col gap-4 pt-4 border-t border-[var(--accents-2)]">
                {user ? (
                  // If user is logged in, show Sign Out button in mobile menu
                  <button 
                    onClick={() => {
                      handleSignOut(); // Call sign out function
                      setIsMobileMenuOpen(false); // Close mobile menu
                    }}
                    className="text-lg font-semibold text-left"
                  >
                    Sign Out
                  </button>
                ) : (
                  // If user is not logged in, show Sign In and Get Started in mobile menu
                  <>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">Sign In</Link>
                    <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="button-primary justify-center">Get Started</Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
