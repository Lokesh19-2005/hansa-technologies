"use client";

import { FadeIn } from "@/components/AnimatedText";

export default function ContactPage() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <FadeIn>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#18181b", marginBottom: "10px" }}>
            Get in touch
          </h1>
          <p style={{ fontSize: "15px", color: "#71717a", marginBottom: "48px", maxWidth: "400px" }}>
            Book a free career consultation. We&apos;ll help you choose the right program.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "56px" }}>
          {/* Form */}
          <FadeIn delay={0.1}>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#a1a1aa", marginBottom: "6px", display: "block" }}>Name</label>
                  <input type="text" placeholder="Your name" style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", backgroundColor: "#fafafa", border: "none", fontSize: "14px", color: "#18181b", outline: "none" }} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "#a1a1aa", marginBottom: "6px", display: "block" }}>Phone</label>
                  <input type="tel" placeholder="+91" style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", backgroundColor: "#fafafa", border: "none", fontSize: "14px", color: "#18181b", outline: "none" }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "#a1a1aa", marginBottom: "6px", display: "block" }}>Email</label>
                <input type="email" placeholder="you@email.com" style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", backgroundColor: "#fafafa", border: "none", fontSize: "14px", color: "#18181b", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "#a1a1aa", marginBottom: "6px", display: "block" }}>Interested Program</label>
                <select style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", backgroundColor: "#fafafa", border: "none", fontSize: "14px", color: "#71717a", outline: "none" }}>
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
                <label style={{ fontSize: "12px", color: "#a1a1aa", marginBottom: "6px", display: "block" }}>Message</label>
                <textarea rows={3} placeholder="Tell us about your goals..." style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", backgroundColor: "#fafafa", border: "none", fontSize: "14px", color: "#18181b", outline: "none", resize: "none" }} />
              </div>
              <button type="submit" className="btn-dark" style={{ width: "fit-content" }}>Send Message</button>
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={{ fontSize: "11px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Phone</p>
                <a href="tel:+919849127749" style={{ fontSize: "14px", color: "#18181b", textDecoration: "none" }}>+91 98491 27749</a>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>WhatsApp</p>
                <a href="https://wa.me/919949960200" style={{ fontSize: "14px", color: "#18181b", textDecoration: "none" }}>+91 99499 60200</a>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Email</p>
                <a href="mailto:hansatechnologies94@gmail.com" style={{ fontSize: "14px", color: "#18181b", textDecoration: "none" }}>hansatechnologies94@gmail.com</a>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Hours</p>
                <p style={{ fontSize: "14px", color: "#18181b" }}>Mon–Sat, 9:00 AM – 9:00 PM</p>
                <p style={{ fontSize: "12px", color: "#a1a1aa" }}>Sunday closed</p>
              </div>

              <div style={{ marginTop: "16px", paddingTop: "20px", borderTop: "1px solid #f4f4f5" }}>
                <div style={{ marginBottom: "12px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#18181b", marginBottom: "2px" }}>Palakollu Branch</p>
                  <p style={{ fontSize: "12px", color: "#a1a1aa" }}>Near Desalamma Temple</p>
                </div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#18181b", marginBottom: "2px" }}>Penugonda Branch</p>
                  <p style={{ fontSize: "12px", color: "#a1a1aa" }}>Near Kanyaka Parameswari Temple</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center", padding: "10px", fontSize: "12px", fontWeight: 500, color: "#18181b", border: "1px solid #e4e4e7", borderRadius: "8px", textDecoration: "none" }}>
                  WhatsApp
                </a>
                <a href="tel:+919849127749" className="btn-dark" style={{ flex: 1, textAlign: "center", fontSize: "12px" }}>
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
