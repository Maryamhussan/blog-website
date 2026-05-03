export default function Contact() {
  return (
    // Main container for the contact page, with relative positioning and mesh gradient background
    <div className="relative overflow-hidden">
      <div className="mesh-gradient opacity-10" />
      
      <div className="container py-32"> {/* Container for content with vertical padding */}
        <div className="max-w-4xl mx-auto"> {/* Constrains content width and centers it */}
          {/* Header section with page title and description */}
          <header className="mb-16 text-center">
            {/* Tagline */}
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[var(--accents-1)] border border-[var(--accents-2)] rounded-full text-[var(--stripe-blue)]">
              Get in Touch
            </span>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tighter">
              Let&apos;s <span className="text-[var(--stripe-blue)]">Connect</span>
            </h1>
            {/* Subheading */}
            <p className="text-xl text-[var(--accents-5)] leading-relaxed max-w-2xl mx-auto">
              Have a question, a project idea, or just want to say hi? I&apos;d love to hear from you.
            </p>
          </header>

          {/* Grid for contact information and form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: Contact Details */}
            <div className="md:col-span-1 space-y-8"> {/* Vertical spacing between details */}
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-[var(--accents-5)] mb-4">Email</h4> {/* Section title */}
                <p className="text-lg font-medium">hello@myblogs.com</p> {/* Email address */}
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-[var(--accents-5)] mb-4">Social</h4> {/* Section title */}
                <div className="flex flex-col gap-2"> {/* Vertical flex for social links */}
                  {/* Social Media Links */}
                  <a href="#" className="text-lg font-medium hover:text-[var(--stripe-blue)] transition-colors">LinkedIn</a>
                  <a href="#" className="text-lg font-medium hover:text-[var(--stripe-blue)] transition-colors">Instagram</a>
                  <a href="#" className="text-lg font-medium hover:text-[var(--stripe-blue)] transition-colors">Twitter</a>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Form */}
            <div className="md:col-span-2 card shadow-large"> {/* Card styling for the form */}
              <form className="space-y-6"> {/* Form with vertical spacing */}
                {/* Name and Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[var(--accents-5)] mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-[var(--accents-2)] bg-[var(--accents-1)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[var(--accents-5)] mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-[var(--accents-2)] bg-[var(--accents-1)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>
                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[var(--accents-5)] mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-[var(--accents-2)] bg-[var(--accents-1)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[var(--accents-5)] mb-2">Message</label>
                  <textarea 
                    rows={5} // Minimum 5 rows for the textarea
                    className="w-full px-4 py-3 rounded-lg border border-[var(--accents-2)] bg-[var(--accents-1)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all resize-none"
                    placeholder="Tell me more about your thoughts..."
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button type="submit" className="button-primary w-full justify-center py-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
