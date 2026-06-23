"use client";
import { FadeIn, SlideIn } from "@/components/AnimatedText";

export default function ContactPage() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 20px 100px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", padding: "7px 16px", background: "#eef2ff", border: "1px solid #e0e7ff", borderRadius: "20px", marginBottom: "20px" }}>
              <span style={{ fontSize: "12px", color: "#4f46e5", fontWeight: 600 }}>FREE CAREER CONSULTATION</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>Get in touch</h1>
            <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "440px", margin: "0 auto" }}>Book a free consultation. We&apos;ll help you choose the right program.</p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "40px" }} className="grid-mobile-1">
          <SlideIn direction="left" delay={0.1}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px", border: "1px solid #f1f5f9", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: "18px" }} onSubmit={(e) => e.preventDefault()}>
                <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div><label style={{ fontSize: "12px", color: "#64748b", marginBottom: "7px", display: "block", fontWeight: 500 }}>Name</label><input type="text" placeholder="Your name" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1a1a2e", outline: "none" }} /></div>
                  <div><label style={{ fontSize: "12px", color: "#64748b", marginBottom: "7px", display: "block", fontWeight: 500 }}>Phone</label><input type="tel" placeholder="+91" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1a1a2e", outline: "none" }} /></div>
                </div>
                <div><label style={{ fontSize: "12px", color: "#64748b", marginBottom: "7px", display: "block", fontWeight: 500 }}>Email</label><input type="email" placeholder="you@email.com" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1a1a2e", outline: "none" }} /></div>
                <div><label style={{ fontSize: "12px", color: "#64748b", marginBottom: "7px", display: "block", fontWeight: 500 }}>Program</label><select style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#64748b", outline: "none", cursor: "pointer" }}><option value="">Select a program</option><option>Full Stack Python</option><option>Data Science & ML</option><option>AI Automation</option><option>Java</option><option>Web Development</option><option>Data Analyst</option><option>SAP</option><option>Digital Marketing</option><option>Other</option></select></div>
                <div><label style={{ fontSize: "12px", color: "#64748b", marginBottom: "7px", display: "block", fontWeight: 500 }}>Message</label><textarea rows={4} placeholder="Tell us about your goals..." style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "14px", color: "#1a1a2e", outline: "none", resize: "none" }} /></div>
                <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px", fontSize: "15px" }}>Send Message</button>
              </form>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "Phone", value: "+91 98491 27749", href: "tel:+919849127749", icon: "📞" },
                { label: "WhatsApp", value: "+91 99499 60200", href: "https://wa.me/919949960200", icon: "💬" },
                { label: "Email", value: "hansatechnologies94@gmail.com", href: "mailto:hansatechnologies94@gmail.com", icon: "✉️" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 18px", background: "#ffffff", borderRadius: "12px", border: "1px solid #f1f5f9", textDecoration: "none", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e0e7ff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f1f5f9"; }}>
                  <span style={{ fontSize: "18px" }}>{item.icon}</span>
                  <div><p style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px", fontWeight: 500 }}>{item.label}</p><p style={{ fontSize: "14px", color: "#1a1a2e", fontWeight: 500 }}>{item.value}</p></div>
                </a>
              ))}
              <div style={{ padding: "18px", background: "#ffffff", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
                <p style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px", fontWeight: 500 }}>Hours</p>
                <p style={{ fontSize: "14px", color: "#1a1a2e", fontWeight: 500 }}>Mon–Sat, 9:00 AM – 9:00 PM</p>
                <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>Sunday: Closed</p>
              </div>
              <div style={{ padding: "18px", background: "#eef2ff", borderRadius: "12px", border: "1px solid #e0e7ff" }}>
                <p style={{ fontSize: "11px", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "12px", fontWeight: 600 }}>Branches</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div><p style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a2e" }}>📍 Palakollu</p><p style={{ fontSize: "12px", color: "#64748b" }}>Near Desalamma Temple</p></div>
                  <div><p style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a2e" }}>📍 Penugonda</p><p style={{ fontSize: "12px", color: "#64748b" }}>Near Kanyaka Parameswari Temple</p></div>
                </div>
              </div>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: "center", width: "100%" }}>💬 WhatsApp Us</a>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
