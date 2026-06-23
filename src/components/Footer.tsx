"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #050d1a 0%, #020810 100%)", color: "#e2e8f0", padding: "80px 20px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "-150px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(0, 212, 255, 0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="glow-line" style={{ marginBottom: "60px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(3, 1fr)", gap: "40px", marginBottom: "60px" }} className="footer-grid">
          <div>
            <div style={{ marginBottom: "16px" }}>
              <img src="/logo.png" alt="Hansa" style={{ height: "80px", width: "auto", opacity: 0.9 }} />
            </div>
            <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.8, maxWidth: "300px", marginBottom: "24px" }}>
              AI-Based Software Training Institute shaping careers since 1994. Google 5-Star rated with 5,000+ successful alumni.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { href: "https://wa.me/919949960200", icon: "💬", label: "WhatsApp" },
                { href: "https://www.instagram.com/hansa_tech_official", icon: "📷", label: "Instagram" },
                { href: "https://www.linkedin.com/company/hansa-technologies-palakollu", icon: "💼", label: "LinkedIn" },
                { href: "tel:+919849127749", icon: "📞", label: "Call" },
              ].map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("https") ? "_blank" : undefined} rel={s.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0, 212, 255, 0.06)", border: "1px solid rgba(0, 212, 255, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px", transition: "all 0.2s" }}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#00d4ff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/about" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>About Us</Link>
              <Link href="/about" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>Our Journey</Link>
              <Link href="/contact" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#00d4ff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Programs</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/courses" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>Python</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>Data Science</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>AI & ML</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>All Courses</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#00d4ff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Career</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/placements" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>Placements</Link>
              <Link href="/placements" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>Internships</Link>
              <Link href="/placements" style={{ fontSize: "14px", color: "#475569", textDecoration: "none" }}>Career Guidance</Link>
            </div>
          </div>
        </div>

        <div className="glow-line" />
        <div style={{ paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: "#334155" }}>© 2024 Hansa Technologies. Transforming careers since 1994.</span>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#475569" }}>📍 Palakollu</span>
            <span style={{ fontSize: "12px", color: "#1e293b" }}>·</span>
            <span style={{ fontSize: "12px", color: "#475569" }}>📍 Penugonda</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
