"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <div className="header">
        <h1 className="logo">
          <Link href={"/"}>
            My <span className="logospan">Blogs</span>
          </Link>
        </h1>
        <div className="links">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        {/* Mobile Menu */}
        <nav className={`mobile-nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/blogs" onClick={() => setMobileMenuOpen(false)}>
            Blogs
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    );
}