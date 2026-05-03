'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@/lib/supabase-client';
import { User } from '@supabase/supabase-js';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container h-20 flex items-center justify-between">
        
        <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--stripe-blue)] rounded-lg rotate-12" />
          <span className="hidden xs:inline">MyBlogs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-[var(--stripe-blue)] ${
                pathname === item.path ? 'text-[var(--stripe-blue)]' : 'text-[var(--accents-5)]'
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="h-px bg-[var(--stripe-blue)] mt-0.5"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <button 
              onClick={handleSignOut}
              className="text-sm font-semibold hover:text-[var(--stripe-blue)] transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link href="/login" className="hidden sm:inline text-sm font-semibold hover:opacity-100 opacity-70">
                Sign In
              </Link>
              <Link href="/blogs" className="hidden sm:inline button-primary">
                Get Started
              </Link>
            </>
          )}
          
          <button 
            className="md:hidden p-2 text-[var(--accents-5)] hover:text-[var(--foreground)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)] border-t border-[var(--accents-2)] overflow-hidden"
          >
            <div className="container py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-semibold ${
                    pathname === item.path ? 'text-[var(--stripe-blue)]' : 'text-[var(--accents-5)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-[var(--accents-2)]">
                {user ? (
                  <button 
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-lg font-semibold text-left"
                  >
                    Sign Out
                  </button>
                ) : (
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
