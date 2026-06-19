"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#18181b", color: "#ffffff", padding: "64px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#d4d4d8", marginBottom: "16px" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/about" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>About Us</Link>
              <Link href="/about" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Our Journey</Link>
              <Link href="/contact" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#d4d4d8", marginBottom: "16px" }}>Programs</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/courses" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Python</Link>
              <Link href="/courses" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Data Science</Link>
              <Link href="/courses" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>AI & ML</Link>
              <Link href="/courses" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>All Courses</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#d4d4d8", marginBottom: "16px" }}>Career</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/placements" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Placements</Link>
              <Link href="/placements" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Internships</Link>
              <Link href="/placements" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Career Guidance</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#d4d4d8", marginBottom: "16px" }}>Connect</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>WhatsApp</a>
              <a href="https://www.instagram.com/hansa_tech_official" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>Instagram</a>
              <a href="tel:+919849127749" style={{ fontSize: "13px", color: "#71717a", textDecoration: "none" }}>+91 98491 27749</a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "24px", borderTop: "1px solid #27272a", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/logo.png" alt="Hansa" style={{ height: "20px", width: "auto", opacity: 0.7 }} />
            <span style={{ fontSize: "12px", color: "#71717a" }}>© 2024 Hansa Technologies. Since 1994.</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "11px", color: "#52525b" }}>Palakollu</span>
            <span style={{ fontSize: "11px", color: "#3f3f46" }}>·</span>
            <span style={{ fontSize: "11px", color: "#52525b" }}>Penugonda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
