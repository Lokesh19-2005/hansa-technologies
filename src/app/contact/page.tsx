"use client";

import { FadeIn } from "@/components/AnimatedText";

export default function ContactPage() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <FadeIn>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
            Get in touch
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.35)", marginBottom: "56px", maxWidth: "400px" }}>
            Book a free career consultation. We&apos;ll help you choose the right program.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "56px" }}>
          {/* Form */}
          <FadeIn delay={0.1}>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "8px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>Name</label>
                  <input type="text" placeholder="Your name" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "#ffffff", outline: "none" }} />
                </div>
                <div>
                  <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "8px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>Phone</label>
                  <input type="tel" placeholder="+91" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "#ffffff", outline: "none" }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "8px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</label>
                <input type="email" placeholder="you@email.com" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "#ffffff", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "8px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>Program</label>
                <select style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "rgba(255,255,255,0.4)", outline: "none" }}>
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
                <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "8px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label>
                <textarea rows={3} placeholder="Tell us about your goals..." style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "#ffffff", outline: "none", resize: "none" }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "fit-content", marginTop: "4px" }}>Send Message</button>
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Phone</p>
                <a href="tel:+919849127749" style={{ fontSize: "14px", color: "#ffffff", textDecoration: "none" }}>+91 98491 27749</a>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>WhatsApp</p>
                <a href="https://wa.me/919949960200" style={{ fontSize: "14px", color: "#ffffff", textDecoration: "none" }}>+91 99499 60200</a>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Email</p>
                <a href="mailto:hansatechnologies94@gmail.com" style={{ fontSize: "14px", color: "#ffffff", textDecoration: "none" }}>hansatechnologies94@gmail.com</a>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Hours</p>
                <p style={{ fontSize: "14px", color: "#ffffff" }}>Mon–Sat, 9:00 AM – 9:00 PM</p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Sunday closed</p>
              </div>

              <div style={{ marginTop: "16px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ marginBottom: "16px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#ffffff", marginBottom: "4px" }}>Palakollu Branch</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Near Desalamma Temple</p>
                </div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#ffffff", marginBottom: "4px" }}>Penugonda Branch</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Near Kanyaka Parameswari Temple</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ flex: 1, textAlign: "center", fontSize: "12px", padding: "10px" }}>
                  WhatsApp
                </a>
                <a href="tel:+919849127749" className="btn-primary" style={{ flex: 1, textAlign: "center", fontSize: "12px", padding: "10px" }}>
                  Call Now
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
