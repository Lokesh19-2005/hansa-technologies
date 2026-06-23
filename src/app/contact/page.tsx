"use client";

import { FadeIn, SlideIn } from "@/components/AnimatedText";

export default function ContactPage() {
  return (
    <section style={{ backgroundColor: "#fafbff", padding: "80px 24px 100px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.15)", borderRadius: "20px", marginBottom: "20px" }}>
              <span style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600 }}>Free Career Consultation</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1e1b4b", marginBottom: "12px" }}>Get in touch</h1>
            <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "440px", margin: "0 auto" }}>
              Book a free career consultation. We&apos;ll help you choose the right program.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "48px" }} className="grid-mobile-1">
          <SlideIn direction="left" delay={0.1}>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid rgba(99, 102, 241, 0.06)", boxShadow: "0 4px 20px rgba(99, 102, 241, 0.04)" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontSize: "13px", color: "#475569", marginBottom: "8px", display: "block", fontWeight: 500 }}>Name</label>
                    <input type="text" placeholder="Your name" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1e1b4b", outline: "none" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", color: "#475569", marginBottom: "8px", display: "block", fontWeight: 500 }}>Phone</label>
                    <input type="tel" placeholder="+91" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1e1b4b", outline: "none" }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: "13px", color: "#475569", marginBottom: "8px", display: "block", fontWeight: 500 }}>Email</label>
                  <input type="email" placeholder="you@email.com" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1e1b4b", outline: "none" }} />
                </div>
                <div>
                  <label style={{ fontSize: "13px", color: "#475569", marginBottom: "8px", display: "block", fontWeight: 500 }}>Interested Program</label>
                  <select style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#64748b", outline: "none", cursor: "pointer" }}>
                    <option value="">Select a program</option>
                    <option>Full Stack Python</option>
                    <option>Data Science & ML</option>
                    <option>AI Automation</option>
                    <option>Java</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "13px", color: "#475569", marginBottom: "8px", display: "block", fontWeight: 500 }}>Message</label>
                  <textarea rows={4} placeholder="Tell us about your goals..." style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1e1b4b", outline: "none", resize: "none" }} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px 24px", fontSize: "15px" }}>Send Message</button>
              </form>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { label: "Phone", value: "+91 98491 27749", href: "tel:+919849127749", icon: "📞" },
                { label: "WhatsApp", value: "+91 99499 60200", href: "https://wa.me/919949960200", icon: "💬" },
                { label: "Email", value: "hansatechnologies94@gmail.com", href: "mailto:hansatechnologies94@gmail.com", icon: "✉️" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid rgba(99, 102, 241, 0.06)", textDecoration: "none", transition: "all 0.2s" }}>
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px", fontWeight: 600 }}>{item.label}</p>
                    <p style={{ fontSize: "14px", color: "#1e1b4b", fontWeight: 500 }}>{item.value}</p>
                  </div>
                </a>
              ))}

              <div style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid rgba(99, 102, 241, 0.06)" }}>
                <p style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px", fontWeight: 600 }}>Hours</p>
                <p style={{ fontSize: "14px", color: "#1e1b4b", fontWeight: 500 }}>Mon–Sat, 9:00 AM – 9:00 PM</p>
                <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>Sunday closed</p>
              </div>

              <div style={{ padding: "20px", background: "linear-gradient(135deg, #eef2ff, #e0e7ff)", borderRadius: "14px", border: "1px solid rgba(99, 102, 241, 0.1)" }}>
                <p style={{ fontSize: "11px", color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px", fontWeight: 600 }}>Our Branches</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#1e1b4b", marginBottom: "2px" }}>📍 Palakollu Branch</p>
                    <p style={{ fontSize: "12px", color: "#64748b" }}>Near Desalamma Temple</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#1e1b4b", marginBottom: "2px" }}>📍 Penugonda Branch</p>
                    <p style={{ fontSize: "12px", color: "#64748b" }}>Near Kanyaka Parameswari Temple</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center", padding: "12px", fontSize: "13px", fontWeight: 600, color: "#6366f1", border: "1px solid rgba(99, 102, 241, 0.2)", borderRadius: "12px", textDecoration: "none", backgroundColor: "rgba(99, 102, 241, 0.04)" }}>
                  💬 WhatsApp
                </a>
                <a href="tel:+919849127749" className="btn-primary" style={{ flex: 1, textAlign: "center", fontSize: "13px", borderRadius: "12px" }}>
                  📞 Call Now
                </a>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
