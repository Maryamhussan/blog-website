import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/lib/blog-data'; // Import the blog data array

// Blogs listing page component
export default function Blogs() {
  return (
    <div className="container py-12 md:py-32"> {/* Main container with responsive vertical padding */}
      
      {/* Page Header Section */}
      <header className="max-w-3xl mb-12 md:mb-20"> {/* Constrains header width and adds bottom margin */}
        {/* Main Heading for the blogs page */}
        <h1 className="text-4xl md:text-6xl mb-6 tracking-tighter">
          The <span className="text-[var(--stripe-blue)]">Explorer</span> Feed
        </h1>
        {/* Subheading providing context for the blog content */}
        <p className="text-xl text-[var(--accents-5)] leading-relaxed">
          The latest guides on technology, travel, and lifestyle. We keep it simple and actionable.
        </p>
      </header>

      {/* Grid Layout for Blog Cards */}
      {/* Uses responsive grid classes: 1 column on small screens, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Map over the imported blog data to render each blog post as a card */}
        {blogs.map((blog) => (
          <Link 
            key={blog.slug} // Unique key for each rendered item (using slug for reliability)
            href={`/blogs/${blog.slug}`} // Dynamic route to the individual blog post
            className="group card flex flex-col h-full" // Apply card styling, use flex column for vertical layout, and ensure cards take full height in the grid
          >
            {/* Blog Image Card */}
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-6"> {/* Image container with aspect ratio, rounded corners, and overflow hidden */}
              <Image
                src={blog.mainImage} // Source of the blog's main image
                alt={blog.title} // Alt text for accessibility, using blog title
                fill // Make the image fill its parent container
                style={{ objectFit: 'cover' }} // Ensure the image covers the container area without distortion
                className="transition-transform duration-500 group-hover:scale-105" // Adds a subtle scale effect on hover to the image
              />
              {/* Category Tag displayed on the image */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest rounded-full text-[var(--stripe-blue)]">
                  {blog.category} {/* Display the blog's category */}
                </span>
              </div>
            </div>
            
            {/* Blog Content Area */}
            <div className="flex-1 px-4"> {/* flex-1 allows this div to take up remaining space, px-4 adds horizontal padding */}
              {/* Publication Date */}
              <div className="text-xs font-semibold text-[var(--accents-4)] uppercase tracking-wider mb-3">
                {blog.date}
              </div>
              {/* Blog Title - changes color on hover */}
              <h2 className="text-2xl mb-4 group-hover:text-[var(--stripe-blue)] transition-colors">
                {blog.title}
              </h2>
              {/* Blog Description - clamped to 2 lines for consistent card height */}
              <p className="text-[var(--accents-5)] line-clamp-2 mb-6"> 
                {blog.description}
              </p>
            </div>

            {/* "Read More" Link/Button */}
            <div className="mt-auto flex items-center text-sm font-bold text-[var(--stripe-blue)] gap-1 px-4 pb-4"> {/* Aligns to bottom, adds spacing and padding */}
              Read More
              {/* Arrow icon for visual cue */}
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
