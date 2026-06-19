"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#060D1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ padding: "60px 24px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "48px" }}>
          {/* Column 1 - Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Hansa Technologies"
              width={140}
              height={70}
              style={{ height: "45px", width: "auto", marginBottom: "16px" }}
            />
            <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7", marginTop: "12px" }}>
              AI-Based Software Training Institute empowering students with industry-ready skills since 1994.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <a
                href="https://www.instagram.com/hansa_tech_official"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "#122033",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#CBD5E1",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                aria-label="Instagram"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Programs */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>Programs</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Full Stack Development", "AI & Machine Learning", "Data Science & Analytics", "Python Programming", "Java Development", "Cloud Computing"].map((item) => (
                <Link
                  key={item}
                  href="/courses/"
                  style={{ color: "#CBD5E1", fontSize: "14px" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "About Us", href: "/about/" },
                { label: "Placements", href: "/placements/" },
                { label: "Contact", href: "/contact/" },
                { label: "Careers", href: "/contact/" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ color: "#CBD5E1", fontSize: "14px" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>Phone</p>
                <a href="tel:+919849127749" style={{ color: "#2563EB", fontSize: "13px" }}>+91 98491 27749</a>
              </div>
              <div>
                <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>WhatsApp</p>
                <a href="https://wa.me/919949960200" style={{ color: "#25D366", fontSize: "13px" }}>+91 99499 60200</a>
              </div>
              <div>
                <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>Email</p>
                <a href="mailto:hansatechnologies94@gmail.com" style={{ color: "#2563EB", fontSize: "13px" }}>hansatechnologies94@gmail.com</a>
              </div>
              <div>
                <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>Instagram</p>
                <a href="https://www.instagram.com/hansa_tech_official" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C", fontSize: "13px" }}>@hansa_tech_official</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p style={{ color: "#64748B", fontSize: "13px" }}>
            © {new Date().getFullYear()} Hansa Technologies. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/about/" style={{ color: "#64748B", fontSize: "13px" }}>Privacy Policy</Link>
            <Link href="/about/" style={{ color: "#64748B", fontSize: "13px" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
