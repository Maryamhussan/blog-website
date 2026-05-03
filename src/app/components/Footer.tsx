import Link from 'next/link';
import Image from 'next/image';

// Footer component for the website
export default function Footer() {
  return (
    // Footer element with background color, top border, and vertical padding
    <footer className="bg-[var(--accents-1)] border-t border-[var(--accents-2)] py-20 mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12"> {/* Grid layout for footer sections */}
        
        {/* Column 1: Logo and Description */}
        <div className="col-span-1 md:col-span-1">
          {/* Logo Link */}
          <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-tighter flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-[var(--stripe-blue)] rounded-lg rotate-12" /> {/* Logo accent */}
            <span>MyBlogs</span> {/* Logo text */}
          </Link>
          {/* Description paragraph */}
          <p className="text-sm text-[var(--accents-5)] max-w-xs">
            Exploring insights, trends, and guides across a variety of engaging topics. Built with Next.js and Stripe-inspired design.
          </p>
        </div>

        {/* Column 2: Content Links */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-[var(--accents-6)]">Content</h4> {/* Section title */}
          <ul className="space-y-2 text-sm text-[var(--accents-5)]"> {/* List of links */}
            <li><Link href="/blogs" className="hover:text-[var(--foreground)]">All Blogs</Link></li>
            <li><Link href="/blogs?category=Technology" className="hover:text-[var(--foreground)]">Technology</Link></li>
            <li><Link href="/blogs?category=Travel" className="hover:text-[var(--foreground)]">Travel</Link></li>
            <li><Link href="/blogs?category=Education" className="hover:text-[var(--foreground)]">Education</Link></li>
          </ul>
        </div>

        {/* Column 3: Company Links */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-[var(--accents-6)]">Company</h4> {/* Section title */}
          <ul className="space-y-2 text-sm text-[var(--accents-5)]"> {/* List of links */}
            <li><Link href="/about" className="hover:text-[var(--foreground)]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--foreground)]">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--foreground)]">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--foreground)]">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Media Links */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-[var(--accents-6)]">Social</h4> {/* Section title */}
          <div className="flex gap-4"> {/* Flex container for social icons */}
            <Link href="#" className="hover:opacity-100 opacity-60">
              <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-100 opacity-60">
              <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-100 opacity-60">
              <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-100 opacity-60">
              <Image src="/icons/gmail.png" alt="Gmail" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section: Copyright and region/language selectors */}
      <div className="container mt-20 pt-8 border-t border-[var(--accents-2)] flex justify-between items-center text-xs text-[var(--accents-4)]">
        <p>© 2026 MyBlogs Inc. All rights reserved.</p> {/* Copyright notice */}
        <div className="flex gap-6"> {/* Region and language selectors */}
          <span>United States</span>
          <span>English</span>
        </div>
      </div>
    </footer>
  );
}
