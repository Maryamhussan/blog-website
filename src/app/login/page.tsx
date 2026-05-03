import AuthForm from "@/components/AuthForm"; // Import the reusable authentication form component

// Login page component
export default function LoginPage() {
  return (
    // Main container for the login page, using flexbox to center content, with padding top.
    // Includes a mesh gradient background for visual appeal.
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="mesh-gradient opacity-10" /> {/* Subtle mesh gradient background */}
      
      {/* Centered content area */}
      <div className="container relative z-10"> {/* z-10 ensures content is above the background gradient */}
        <div className="max-w-md mx-auto"> {/* Constrain width and center the AuthForm */}
          <AuthForm /> {/* Render the AuthForm component */}
        </div>
      </div>

      {/* Decorative blurred element for background depth */}
      {/* This element adds a visual flourish behind the content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--stripe-blue)] opacity-5 blur-[120px] -z-10 rounded-full" />
    </div>
  );
}
