import type { Metadata } from "next";
import "./globals.css"; // Import global styles
import Header from "./components/Header"; // Import the Header component
import Footer from "./components/Footer"; // Import the Footer component

// Metadata for the application, used for SEO and browser tab title
export const metadata: Metadata = {
  title: "MyBlogs | Insights for the Modern Mind", // Updated custom title
  description: "Explore simple and actionable guides on technology, travel, and personal growth on MyBlogs.", // Updated custom description
};

// Root layout component for the Next.js application
// This component wraps all pages and provides a consistent structure.
export default function RootLayout({
  children, // React nodes representing the content of the current page
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* HTML root element with language set to English */}
      <body>
        <Header /> {/* Render the Header component at the top of every page */}
        <main> {/* Main content area */}
          {children} {/* Render the page-specific content */}
        </main>
        <Footer /> {/* Render the Footer component at the bottom of every page */}
      </body>
    </html>
  );
}
