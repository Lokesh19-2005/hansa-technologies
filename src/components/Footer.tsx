"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a2e", color: "#e2e8f0", padding: "80px 20px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr repeat(3, 1fr)", gap: "40px", marginBottom: "56px" }} className="footer-grid">
          <div>
            <div style={{ background: "#ffffff", borderRadius: "12px", padding: "8px 12px", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <img src="/logo.png" alt="Hansa Technologies" style={{ height: "56px", width: "auto", objectFit: "contain", display: "block" }} />
            </div>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.8, maxWidth: "320px", marginBottom: "20px" }}>
              Google 5-Star Rated AI-Based Software Training Institute. Transforming beginners into professionals since 1994.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid rgba(79, 70, 229, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" }}>💬</a>
              <a href="https://www.instagram.com/hansa_tech_official" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid rgba(79, 70, 229, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" }}>📷</a>
              <a href="tel:+919849127749" title="Call" style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid rgba(79, 70, 229, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" }}>📞</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#a5b4fc", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/about" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>About Us</Link>
              <Link href="/about" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Our Journey</Link>
              <Link href="/contact" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#a5b4fc", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Programs</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Python</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Data Science</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>AI & ML</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>All Courses</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#a5b4fc", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Career</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/placements" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Placements</Link>
              <Link href="/placements" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Internships</Link>
              <Link href="/placements" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>CRT Training</Link>
              <a href="https://www.instagram.com/hansa_tech_official" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>📷 Instagram</a>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(148, 163, 184, 0.1)", marginBottom: "24px" }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: "#64748b" }}>© 2024 Hansa Technologies · hansatechsolutions.com</span>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>📍 Palakollu</span>
            <span style={{ fontSize: "12px", color: "#475569" }}>·</span>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>📍 Penugonda</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
