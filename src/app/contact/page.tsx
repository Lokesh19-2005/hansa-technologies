"use client";

import { useState } from "react";
import FadeIn from "@/components/AnimatedText";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I'm ${formData.name}. I'm interested in ${formData.course || "your courses"}. ${formData.message}`;
    window.open(`https://wa.me/919848824481?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
              <span style={{
                display: "inline-block", padding: "8px 16px",
                background: "rgba(37, 99, 235, 0.1)", border: "1px solid rgba(37, 99, 235, 0.3)",
                borderRadius: "20px", color: "#60A5FA", fontSize: "13px", fontWeight: 500, marginBottom: "24px",
              }}>
                Get In Touch
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "20px" }}>
                Start Your Journey Today
              </h1>
              <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8" }}>
                Book a free counseling session and let our experts guide you to the right career path.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="section-padding" style={{ background: "#0E1A2B", paddingTop: "40px" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "32px" }}>
            {/* Form */}
            <div style={{ gridColumn: "span 1" }} className="lg:col-span-2">
              <FadeIn>
                <div className="card" style={{ padding: "36px" }}>
                  <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", marginBottom: "24px" }}>
                    Free Career Counseling
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "16px", marginBottom: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", color: "#94A3B8", marginBottom: "6px" }}>Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: "100%", padding: "12px 16px", borderRadius: "8px",
                            background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF", fontSize: "14px", outline: "none",
                            fontFamily: "var(--font-body)",
                          }}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", color: "#94A3B8", marginBottom: "6px" }}>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: "100%", padding: "12px 16px", borderRadius: "8px",
                            background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF", fontSize: "14px", outline: "none",
                            fontFamily: "var(--font-body)",
                          }}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "16px", marginBottom: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", color: "#94A3B8", marginBottom: "6px" }}>Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: "100%", padding: "12px 16px", borderRadius: "8px",
                            background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF", fontSize: "14px", outline: "none",
                            fontFamily: "var(--font-body)",
                          }}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", color: "#94A3B8", marginBottom: "6px" }}>Interested Course</label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          style={{
                            width: "100%", padding: "12px 16px", borderRadius: "8px",
                            background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)",
                            color: "#CBD5E1", fontSize: "14px", outline: "none",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          <option value="">Select a course</option>
                          <option value="Full Stack Development">Full Stack Development</option>
                          <option value="Java Full Stack">Java Full Stack</option>
                          <option value="Python Programming">Python Programming</option>
                          <option value="AI & Machine Learning">AI & Machine Learning</option>
                          <option value="Data Science">Data Science</option>
                          <option value="Cloud Computing">Cloud Computing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontSize: "13px", color: "#94A3B8", marginBottom: "6px" }}>Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: "100%", padding: "12px 16px", borderRadius: "8px",
                          background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)",
                          color: "#FFFFFF", fontSize: "14px", outline: "none", resize: "vertical",
                          fontFamily: "var(--font-body)",
                        }}
                        placeholder="Tell us about your goals..."
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px" }}>
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div>
              <FadeIn delay={0.1}>
                <div className="card" style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>Contact Info</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ fontSize: "18px" }}>📞</span>
                      <div>
                        <p style={{ fontSize: "13px", color: "#94A3B8" }}>Phone</p>
                        <a href="tel:+919848824481" style={{ fontSize: "14px", color: "#FFFFFF", fontWeight: 500 }}>+91 98488 24481</a>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ fontSize: "18px" }}>💬</span>
                      <div>
                        <p style={{ fontSize: "13px", color: "#94A3B8" }}>WhatsApp</p>
                        <a href="https://wa.me/919848824481" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#FFFFFF", fontWeight: 500 }}>Chat with us</a>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ fontSize: "18px" }}>✉️</span>
                      <div>
                        <p style={{ fontSize: "13px", color: "#94A3B8" }}>Email</p>
                        <p style={{ fontSize: "14px", color: "#FFFFFF", fontWeight: 500 }}>info@hansatech.in</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ fontSize: "18px" }}>⏰</span>
                      <div>
                        <p style={{ fontSize: "13px", color: "#94A3B8" }}>Hours</p>
                        <p style={{ fontSize: "14px", color: "#FFFFFF", fontWeight: 500 }}>Mon-Sat: 9AM - 7PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="card" style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>📍 Palakollu Branch</h3>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", marginBottom: "8px" }}>Near Desalamma Temple, Palakollu</p>
                  <a
                    href="https://maps.google.com/?q=Hansa+Technologies+Palakollu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2563EB", fontSize: "13px", fontWeight: 500 }}
                  >
                    Get Directions →
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="card">
                  <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>📍 Penugonda Branch</h3>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", marginBottom: "8px" }}>Near Kanyaka Parameswari Temple, Penugonda</p>
                  <a
                    href="https://maps.google.com/?q=Hansa+Technologies+Penugonda"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2563EB", fontSize: "13px", fontWeight: 500 }}
                  >
                    Get Directions →
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
