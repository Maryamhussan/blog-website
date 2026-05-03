import Image from "next/image";

// About page component
export default function About() {
  return (
    <div className="relative overflow-hidden"> {/* Main container with relative positioning and hidden overflow */}
      {/* Adds a subtle mesh gradient background effect */}
      <div className="mesh-gradient opacity-10" />
      
      <div className="container py-32"> {/* Container for content with vertical padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> {/* Responsive grid for content, aligning items center */}
          
          {/* Left column: Text content */}
          <div>
            {/* Tagline */}
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[var(--accents-1)] border border-[var(--accents-2)] rounded-full text-[var(--stripe-blue)]">
              Our Story
            </span>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl mb-8 tracking-tighter">
              Hi, I&apos;m <span className="text-[var(--stripe-blue)]"> Maryam Hussain</span>
            </h1>
            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--accents-7)] mb-8 leading-tight">
              I am a graphic designer and developer focused on making technology simple and accessible for everyone.
            </h2>
            {/* Descriptive paragraphs about the author's journey and blog purpose */}
            <div className="space-y-6 text-lg text-[var(--accents-5)] leading-relaxed">
              <p>
                I started this blog to share what I&apos;ve learned about technology, marketing, and personal growth. My goal is to help you navigate the modern world with ease and confidence.
              </p>
              <p>
                Throughout my career, I have always been driven by a love for learning. I believe that even the most complex ideas can be explained in a way that is clear and inspiring.
              </p>
              <p>
                On this site, you will find guides that are easy to follow and insights that are ready to use. Whether you are a beginner or an expert, I hope you find something here that sparks your curiosity and helps you grow.
              </p>
            </div>
          </div>
          
          {/* Right column: Profile Image */}
          <div className="relative"> {/* Wrapper for image and decorative elements */}
            {/* Decorative background gradient */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--stripe-blue)] to-[var(--stripe-purple)] rounded-[var(--border-radius-lg)] opacity-20 blur-2xl" />
            {/* Profile Image */}
            <div className="relative aspect-[4/5] rounded-[var(--border-radius-lg)] overflow-hidden shadow-large border border-[var(--accents-2)]">
              <Image
                src="/profile.webp" // Image source
                alt=" Maryam Hussain" // Alt text for accessibility
                fill // Make image fill its parent container
                style={{ objectFit: 'cover' }} // Ensure image covers the area without distortion
                className="hover:scale-105 transition-transform duration-700" // Hover effect for scale and smooth transition
              />
            </div>
            {/* Decorative blue shape */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--stripe-blue)] rounded-2xl -z-10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
