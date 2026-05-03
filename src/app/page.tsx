'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Homepage component: Completely redesigned for a cohesive and well-proportioned flow
export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="mesh-gradient opacity-10" />
      
      {/* Hero Section - The primary focus of the page */}
      <section className="min-h-[80vh] flex items-center justify-center container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[var(--accents-1)] border border-[var(--accents-2)] rounded-full text-[var(--stripe-blue)]">
            Welcome to MyBlogs
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl mb-8 tracking-tighter max-w-4xl">
            Insights for the <span className="text-[var(--stripe-blue)]">Modern</span> Mind.
          </h1>
          
          <p className="text-lg md:text-2xl text-[var(--accents-5)] mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Discover simple yet powerful guides on technology, travel, and personal growth. We make complex ideas easy to understand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/blogs" className="button-primary text-lg px-8 py-4 justify-center">
              Explore Blogs
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Elegant Feature Section - Clearly separated by layout rather than just spacing */}
      <section className="bg-[var(--accents-1)] border-y border-[var(--accents-2)]">
        <div className="container py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 bg-[var(--background)] rounded-[var(--border-radius-lg)] border border-[var(--accents-2)] shadow-small">
              <div className="text-4xl mb-6">💡</div>
              <h3 className="text-xl font-bold mb-4">Clear Insights</h3>
              <p className="text-[var(--accents-5)] leading-relaxed">We break down complex topics into simple, actionable guides that anyone can follow.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-[var(--background)] rounded-[var(--border-radius-lg)] border border-[var(--accents-2)] shadow-small">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4">Modern Trends</h3>
              <p className="text-[var(--accents-5)] leading-relaxed">Stay ahead of the curve with our curated look at the latest in technology and lifestyle.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-[var(--background)] rounded-[var(--border-radius-lg)] border border-[var(--accents-2)] shadow-small">
              <div className="text-4xl mb-6">💎</div>
              <h3 className="text-xl font-bold mb-4">Quality Content</h3>
              <p className="text-[var(--accents-5)] leading-relaxed">Every article is carefully crafted to be both professional and easy to read.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
