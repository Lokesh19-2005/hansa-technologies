"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Courses", href: "/courses" },
  { name: "Placements", href: "/placements" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(99, 102, 241, 0.08)" : "1px solid transparent",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 4px 20px rgba(99, 102, 241, 0.06)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img src="/logo.png" alt="Hansa Technologies" style={{ height: "34px", width: "auto" }} />
        </Link>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              style={{
                fontSize: "14px",
                color: "#475569",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              {l.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="tel:+919849127749"
            style={{ fontSize: "13px", color: "#64748b", textDecoration: "none", fontWeight: 500 }}
          >
            +91 98491 27749
          </a>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "13px", padding: "8px 18px" }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            padding: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              borderTop: "1px solid rgba(99, 102, 241, 0.08)",
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: "16px",
                    color: "#1e1b4b",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {l.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary"
                style={{ textAlign: "center", marginTop: "8px" }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
