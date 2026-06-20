"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses/", label: "Programs" },
    { href: "/placements/", label: "Placements" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.04)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Hansa Technologies"
            width={200}
            height={100}
            style={{ height: "80px", width: "auto", transform: "scale(1.15)", transformOrigin: "left center", filter: "brightness(1.1) contrast(1.05)" }}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "8px" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#374151",
                fontSize: "14px",
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; e.currentTarget.style.background = "rgba(37,99,235,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.background = "transparent"; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "16px" }}
        >
          <a
            href="tel:+919849127749"
            style={{
              color: "#374151",
              fontSize: "13px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 12px",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.03)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 98491 27749
          </a>
          <Link
            href="/contact/"
            style={{
              padding: "10px 22px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#ffffff",
              background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
              borderRadius: "10px",
              boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
              transition: "all 0.3s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,99,235,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Free Counseling
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#1f2937",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "8px",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            padding: "12px 24px 24px",
            borderTop: "1px solid rgba(0,0,0,0.04)",
            background: "#ffffff",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "14px 12px",
                color: "#374151",
                fontSize: "15px",
                fontWeight: 500,
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="tel:+919849127749"
              style={{ color: "#374151", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98491 27749
            </a>
            <Link
              href="/contact/"
              onClick={() => setMobileOpen(false)}
              style={{
                textAlign: "center",
                padding: "14px 20px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
                background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
                borderRadius: "10px",
                boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
              }}
            >
              Free Counseling
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
