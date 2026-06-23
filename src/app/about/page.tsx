"use client";

import { FadeIn, ScaleIn } from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "#f8fafc", padding: "100px 20px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px", background: "#eef2ff", border: "1px solid #e0e7ff", borderRadius: "20px", marginBottom: "24px" }}>
              <span style={{ fontSize: "12px", color: "#4f46e5", fontWeight: 600 }}>EST. 1994 · 30+ YEARS OF EXCELLENCE</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#1a1a2e", marginBottom: "20px" }}>
              Shaping careers<br /><span style={{ color: "#4f46e5" }}>since 1994.</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, maxWidth: "600px" }}>
              Hansa Technologies is a Google 5-Star Rated AI-Based Software Training Institute. We specialize in transforming beginners into industry-ready professionals through practical training, real-time projects, internships, career guidance, and placement support.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          <ScaleIn>
            <div style={{ background: "#eef2ff", borderRadius: "16px", padding: "32px" }}>
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>🎯</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Our Mission</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>Bridge the gap between academic learning and industry requirements by providing high-quality, job-oriented training programs with one-to-one mentorship.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.1}>
            <div style={{ background: "#f0fdf4", borderRadius: "16px", padding: "32px" }}>
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>🔭</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Our Vision</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>Be the most trusted software training institute in India — known for producing professionals who drive innovation at top companies worldwide.</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn><h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "48px", textAlign: "center" }}>Our Journey</h2></FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "19px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #c7d2fe, #e0e7ff)" }} />
            {[
              { year: "1994", event: "Founded in Palakollu with a vision for quality software education." },
              { year: "2005", event: "Crossed 1,000 trained students with strong placement results." },
              { year: "2010", event: "Fully digital classrooms and modern computer labs launched." },
              { year: "2015", event: "Second branch opened in Penugonda to serve more students." },
              { year: "2018", event: "Introduced AI-based learning and Data Science programs." },
              { year: "2024", event: "30 years complete. 5,000+ alumni. Google 5-star rated." },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.06}>
                <div style={{ display: "flex", gap: "20px", padding: "18px 0", paddingLeft: "46px", position: "relative" }}>
                  <div style={{ position: "absolute", left: "13px", top: "24px", width: "14px", height: "14px", borderRadius: "50%", background: "#4f46e5", boxShadow: "0 0 0 4px #eef2ff" }} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#4f46e5", width: "48px", flexShrink: 0 }}>{item.year}</span>
                  <span style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{item.event}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn><h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "48px", textAlign: "center" }}>What We Stand For</h2></FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {[
              { t: "Excellence", d: "Highest standards in curriculum and outcomes.", icon: "💎" },
              { t: "Innovation", d: "AI-based methodology and modern tools.", icon: "🚀" },
              { t: "Student First", d: "Every decision for career growth.", icon: "🎓" },
              { t: "Integrity", d: "Honest guidance and commitment.", icon: "🤝" },
            ].map((v, i) => (
              <ScaleIn key={v.t} delay={i * 0.07}>
                <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "24px", border: "1px solid #f1f5f9", textAlign: "center", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e0e7ff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(79,70,229,0.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>{v.icon}</div>
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px" }}>{v.t}</h4>
                  <p style={{ fontSize: "12px", color: "#64748b", lineHeight: 1.6 }}>{v.d}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
