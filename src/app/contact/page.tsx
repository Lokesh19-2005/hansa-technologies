"use client";

import FadeIn from "@/components/AnimatedText";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max" style={{ textAlign: "center" }}>
          <FadeIn>
            <span style={{ display: "inline-block", padding: "8px 16px", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "20px", color: "#60A5FA", fontSize: "13px", fontWeight: 500, marginBottom: "24px" }}>
              We are here to help
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "16px", lineHeight: "1.1" }}>
              Contact <span style={{ color: "#2563EB" }}>Us</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: "16px", color: "#CBD5E1", maxWidth: "560px", margin: "0 auto" }}>
              Get in touch for free career counseling, course details, or any queries
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px" }}>
            {/* Form */}
            <FadeIn>
              <div className="card">
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>Send Us a Message</h3>
                <p style={{ color: "#94A3B8", fontSize: "14px", marginBottom: "24px" }}>Fill out the form and we will get back within 24 hours</p>
                <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "16px" }}>
                    <input type="text" placeholder="First Name" style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none" }} />
                    <input type="text" placeholder="Last Name" style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none" }} />
                  </div>
                  <input type="email" placeholder="Email Address" style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none" }} />
                  <input type="tel" placeholder="Phone Number" style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none" }} />
                  <select style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#94A3B8", fontSize: "14px", outline: "none" }}>
                    <option value="">Interested Course</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="python">Python Programming</option>
                    <option value="datascience">Data Science & ML</option>
                    <option value="ai">AI & Deep Learning</option>
                    <option value="java">Java Development</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea placeholder="Your Message (optional)" rows={4} style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none", resize: "vertical" }} />
                  <button type="submit" className="btn-primary" style={{ width: "100%" }}>Submit Enquiry</button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div>
                {/* Quick Contact */}
                <div style={{ marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>Quick Contact</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <a href="tel:+919849127749" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>📞</div>
                      <div>
                        <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>Call Us</p>
                        <p style={{ color: "#2563EB", fontSize: "14px" }}>+91 98491 27749</p>
                      </div>
                    </a>
                    <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(37,211,102,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>💬</div>
                      <div>
                        <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>WhatsApp</p>
                        <p style={{ color: "#25D366", fontSize: "14px" }}>+91 99499 60200</p>
                      </div>
                    </a>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>✉️</div>
                      <div>
                        <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>Email</p>
                        <p style={{ color: "#CBD5E1", fontSize: "14px" }}>info@hansatechnologies.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div style={{ marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "16px" }}>Business Hours</h3>
                  <div style={{ padding: "20px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>Monday - Friday</span>
                      <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>9:00 AM - 7:00 PM</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>Saturday</span>
                      <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>9:00 AM - 5:00 PM</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>Sunday</span>
                      <span style={{ color: "#94A3B8", fontSize: "14px" }}>By Appointment Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, marginBottom: "12px" }}>Our Branches</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Visit us at our convenient locations</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
            <FadeIn>
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>📍</div>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>Palakollu Branch</h3>
                <p style={{ fontSize: "14px", color: "#CBD5E1", marginBottom: "4px" }}>Near Desalamma Temple</p>
                <p style={{ fontSize: "14px", color: "#CBD5E1", marginBottom: "12px" }}>Palakollu, West Godavari, AP</p>
                <a href="tel:+919849127749" style={{ color: "#2563EB", fontSize: "14px", fontWeight: 500, display: "block", marginBottom: "12px" }}>
                  +91 98491 27749
                </a>
                <a
                  href="https://maps.google.com/?q=Hansa+Technologies+Palakollu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94A3B8", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  Get Directions <span>↗</span>
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>📍</div>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>Penugonda Branch</h3>
                <p style={{ fontSize: "14px", color: "#CBD5E1", marginBottom: "4px" }}>Near Kanyaka Parameswari Temple</p>
                <p style={{ fontSize: "14px", color: "#CBD5E1", marginBottom: "12px" }}>Penugonda, West Godavari, AP</p>
                <a href="tel:+919849127749" style={{ color: "#2563EB", fontSize: "14px", fontWeight: 500, display: "block", marginBottom: "12px" }}>
                  +91 98491 27749
                </a>
                <a
                  href="https://maps.google.com/?q=Hansa+Technologies+Penugonda"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94A3B8", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  Get Directions <span>↗</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ background: "#0E1A2B", padding: "0 24px 60px" }}>
        <div className="container-max">
          <FadeIn>
            <div className="image-placeholder" style={{ height: "300px", width: "100%", borderRadius: "16px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px", opacity: 0.4 }}>🗺️</div>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>Interactive Map Coming Soon</p>
                <a
                  href="https://maps.google.com/?q=Hansa+Technologies+Palakollu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563EB", fontSize: "14px", marginTop: "8px", display: "inline-block" }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
