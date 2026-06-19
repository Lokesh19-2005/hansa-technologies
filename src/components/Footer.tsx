"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060810", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "40px", marginBottom: "60px" }}>
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#4cd964", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/about" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>About Us</Link>
              <Link href="/about" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Our Journey</Link>
              <Link href="/contact" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#4cd964", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Programs</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/courses" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Python</Link>
              <Link href="/courses" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Data Science</Link>
              <Link href="/courses" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>AI & ML</Link>
              <Link href="/courses" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>All Courses</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#4cd964", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Career</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/placements" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Placements</Link>
              <Link href="/placements" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Internships</Link>
              <Link href="/placements" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Career Guidance</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "#4cd964", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Connect</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>WhatsApp</a>
              <a href="https://www.instagram.com/hansa_tech_official" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Instagram</a>
              <a href="tel:+919849127749" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>+91 98491 27749</a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo.png" alt="Hansa" style={{ height: "24px", width: "auto", opacity: 0.6 }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>© 2024 Hansa Technologies. Since 1994.</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>Palakollu</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.1)" }}>·</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>Penugonda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
