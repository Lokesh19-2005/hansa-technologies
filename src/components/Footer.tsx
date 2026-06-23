"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0f0f23 0%, #1a1a3e 100%)",
        color: "#ffffff",
        padding: "80px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "48px",
            marginBottom: "60px",
          }}
          className="grid-mobile-1"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <img src="/logo.png" alt="Hansa" style={{ height: "28px", width: "auto", opacity: 0.9 }} />
            </div>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, maxWidth: "300px", marginBottom: "24px" }}>
              AI-Based Software Training Institute shaping careers since 1994. Google 5-Star rated with 5,000+ successful alumni.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://wa.me/919949960200"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
                title="WhatsApp"
              >
                💬
              </a>
              <a
                href="https://www.instagram.com/hansa_tech_official"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
                title="Instagram"
              >
                📷
              </a>
              <a
                href="tel:+919849127749"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
                title="Call"
              >
                📞
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#c7d2fe", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/about" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>About Us</Link>
              <Link href="/about" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Our Journey</Link>
              <Link href="/contact" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#c7d2fe", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Programs</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Python</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Data Science</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>AI & ML</Link>
              <Link href="/courses" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>All Courses</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#c7d2fe", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Career</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/placements" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Placements</Link>
              <Link href="/placements" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Internships</Link>
              <Link href="/placements" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>Career Guidance</Link>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(99, 102, 241, 0.15)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "13px", color: "#64748b" }}>
            © 2024 Hansa Technologies. Transforming careers since 1994.
          </span>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>📍 Palakollu</span>
            <span style={{ fontSize: "12px", color: "#475569" }}>·</span>
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>📍 Penugonda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
