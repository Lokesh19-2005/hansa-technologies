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
        backgroundColor: scrolled ? "rgba(3, 7, 18, 0.95)" : "rgba(3, 7, 18, 0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(56, 189, 248, 0.08)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.png" alt="Hansa Technologies" style={{ height: "80px", width: "auto" }} />
        </Link>

        {/* Desktop */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {links.map((l) => (
            <Link key={l.name} href={l.href}
              style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >{l.name}</Link>
          ))}
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:+919849127749" style={{ fontSize: "13px", color: "#475569", textDecoration: "none", fontWeight: 500 }}>+91 98491 27749</a>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "13px", padding: "9px 20px" }}>Get Started</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="mobile-menu-btn" aria-label="Menu"
          style={{ padding: "8px", background: "none", border: "none", cursor: "pointer", display: "none" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: "1px solid rgba(56, 189, 248, 0.06)", background: "rgba(3, 7, 18, 0.98)", backdropFilter: "blur(20px)" }}>
            <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {links.map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setOpen(false)}
                  style={{ fontSize: "17px", color: "#e2e8f0", textDecoration: "none", fontWeight: 500, padding: "10px 0", borderBottom: "1px solid rgba(148, 163, 184, 0.06)" }}>{l.name}</Link>
              ))}
              <a href="tel:+919849127749" style={{ fontSize: "14px", color: "#64748b", textDecoration: "none", padding: "10px 0" }}>📞 +91 98491 27749</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary" style={{ textAlign: "center", marginTop: "8px", padding: "14px" }}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
