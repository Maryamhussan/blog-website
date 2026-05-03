import Image from 'next/image';
import { notFound } from 'next/navigation'; // Used to render a 404 page if a blog is not found
import { blogs } from '@/lib/blog-data'; // Import blog data for dynamic rendering
import CommentSection from '@/components/CommentSection'; // Import the CommentSection component

// Generate static paths for all blog posts at build time
// This is crucial for static site generation and SEO.
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug, // Each blog slug will be a route parameter
  }));
}

// BlogPost component: dynamically renders a single blog post based on its slug
export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the blog post data matching the slug from the URL parameters
  const blog = blogs.find((b) => b.slug === params.slug);

  // If no blog is found for the given slug, render a 404 page
  if (!blog) {
    notFound();
  }

  // Render the blog post content
  return (
    <article className="container py-32"> {/* Article container with generous vertical padding */}
      
      {/* Blog Post Header */}
      <header className="max-w-3xl mx-auto mb-16 text-center"> {/* Centered header with max width */}
        {/* Metadata: Category, Date */}
        <div className="flex items-center justify-center gap-2 mb-6 text-sm font-bold uppercase tracking-widest text-[var(--stripe-blue)]">
          <span>{blog.category}</span> {/* Display blog category */}
          <span className="text-[var(--accents-2)]">•</span> {/* Separator */}
          <span className="text-[var(--accents-4)]">{blog.date}</span> {/* Display publication date */}
        </div>
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl mb-8 leading-tight"> {/* Responsive heading size */}
          {blog.title} {/* Display blog title */}
        </h1>
        {/* Description */}
        <p className="text-lg md:text-xl text-[var(--accents-5)] leading-relaxed">
          {blog.description} {/* Display blog description */}
        </p>
      </header>

      {/* Main Image for the Blog Post */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--border-radius-lg)] overflow-hidden mb-20 shadow-large"> {/* Responsive aspect ratio, rounded corners, overflow hidden, bottom margin, and shadow */}
        <Image
          src={blog.mainImage} // Source of the main image
          alt={blog.title} // Alt text for accessibility
          fill // Make the image fill its parent container
          style={{ objectFit: 'cover' }} // Ensure image covers the area without distortion
          priority // Prioritize loading this image
        />
      </div>

      {/* Blog Content Sections */}
      <div className="max-w-2xl mx-auto"> {/* Centered content area with max width */}
        {/* Map over each section of the blog post */}
        {blog.sections.map((section, index) => (
          <div key={index} className="mb-12"> {/* Unique key for each section */}
            {/* Section Title, if present */}
            {section.title && (
              <h2 className="text-3xl mb-6 mt-12"> {/* Heading for the section */}
                {section.title}
              </h2>
            )}
            
            {/* Render Paragraph Section */}
            {section.type === 'paragraph' && (
              <p className="text-lg text-[var(--accents-6)] leading-loose"> {/* Paragraph styling */}
                {section.content} {/* Display paragraph content */}
              </p>
            )}

            {/* Render List Section */}
            {section.type === 'list' && (
              <ul className="space-y-4"> {/* List with vertical spacing */}
                {/* Map over list items */}
                {section.items?.map((item, i) => (
                  <li key={i} className="flex gap-4 text-lg text-[var(--accents-6)]"> {/* List item with spacing */}
                    <span className="text-[var(--stripe-blue)] font-bold">•</span> {/* Bullet point */}
                    <span>{item}</span> {/* Display list item */}
                  </li>
                ))}
              </ul>
            )}

            {/* Render Image Section */}
            {section.type === 'image' && (
              <div className="relative w-full aspect-video rounded-[var(--border-radius)] overflow-hidden my-12 shadow-medium"> {/* Image container with aspect ratio, rounded corners, margins, and shadow */}
                <Image
                  src={section.src || ''} // Image source, fallback to empty string
                  alt={section.alt || ''} // Alt text, fallback to empty string
                  fill // Make image fill parent
                  style={{ objectFit: 'cover' }} // Ensure image covers container
                />
              </div>
            )}
          </div>
        ))}

        {/* Separator before comments section */}
        <hr className="my-20 border-[var(--accents-2)]" />
        
        {/* Comments Section */}
        <div className="bg-[var(--accents-1)] rounded-[var(--border-radius-lg)] p-12"> {/* Styled container for comments */}
          <h3 className="text-2xl mb-8">Comments</h3> {/* Comments heading */}
          <CommentSection blogId={blog.id} /> {/* Render CommentSection component, passing blog ID */}
        </div>
      </div>
    </article>
  );
}
