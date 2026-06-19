"use client";

import { useState } from "react";
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

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f4f4f5" }}>
      <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Hansa Technologies" style={{ height: "32px", width: "auto" }} />
        </Link>

        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {links.map((l) => (
            <Link key={l.name} href={l.href} style={{ fontSize: "14px", color: "#71717a", textDecoration: "none", transition: "color 0.2s" }}>
              {l.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="tel:+919849127749" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>+91 98491 27749</a>
          <Link href="/contact" className="btn-dark" style={{ fontSize: "13px", padding: "8px 16px" }}>Get Started</Link>
        </div>

        <button onClick={() => setOpen(!open)} style={{ padding: "8px", background: "none", border: "none", cursor: "pointer" }} className="md:hidden" aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#18181b" strokeWidth="1.5">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{ borderTop: "1px solid #f4f4f5", backgroundColor: "#ffffff" }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {links.map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: "15px", color: "#52525b", textDecoration: "none" }}>
                  {l.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-dark" style={{ textAlign: "center", marginTop: "8px" }}>
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
