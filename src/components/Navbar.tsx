"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 24px",
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
            style={{ height: "100px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "32px" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#374151",
                fontSize: "15px",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "20px" }}
        >
          <a
            href="tel:+919849127749"
            style={{
              color: "#374151",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 500,
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 98491 27749
          </a>
          <Link href="/contact/" className="btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
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
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
            padding: "16px 24px 24px",
            borderTop: "1px solid #e5e7eb",
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
                padding: "12px 0",
                color: "#374151",
                fontSize: "16px",
                fontWeight: 500,
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="tel:+919849127749"
              style={{ color: "#374151", fontSize: "14px", fontWeight: 500 }}
            >
              📞 +91 98491 27749
            </a>
            <Link
              href="/contact/"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
              style={{ textAlign: "center", padding: "12px 20px" }}
            >
              Free Counseling
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
