"use client";

import { FadeIn, ScaleIn } from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, #fafbff 0%, #eef2ff 100%)",
          padding: "100px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                background: "rgba(99, 102, 241, 0.08)",
                border: "1px solid rgba(99, 102, 241, 0.15)",
                borderRadius: "20px",
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600 }}>Est. 1994 · 30+ Years</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#1e1b4b", marginBottom: "20px" }}>
              Shaping careers
              <br />
              <span style={{ color: "#6366f1" }}>since 1994.</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, maxWidth: "560px" }}>
              Hansa Technologies is a Google 5-Star rated AI-based software training institute. For over 30 years, we&apos;ve transformed beginners into industry-ready professionals through practical training, real projects, and dedicated placement support.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          <ScaleIn>
            <div style={{ background: "linear-gradient(135deg, #eef2ff, #e0e7ff)", borderRadius: "20px", padding: "32px", border: "1px solid rgba(99, 102, 241, 0.1)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>🎯</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e1b4b", marginBottom: "12px" }}>Our Mission</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
                Empower individuals with industry-relevant skills through practical, AI-enhanced training that builds confident, job-ready professionals.
              </p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.1}>
            <div style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "32px", border: "1px solid rgba(34, 197, 94, 0.1)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>🔭</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e1b4b", marginBottom: "12px" }}>Our Vision</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
                Be the most trusted software training institute in India — known for producing professionals who drive innovation at top companies.
              </p>
            </div>
          </ScaleIn>
        </div>
      </section>

      <section className="bg-section-alt" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1e1b4b", marginBottom: "48px", textAlign: "center" }}>Our Journey</h2>
          </FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "20px", top: "0", bottom: "0", width: "2px", background: "linear-gradient(180deg, #c7d2fe, #e0e7ff)", borderRadius: "1px" }} />
            {[
              { year: "1994", event: "Founded in Palakollu with a vision for quality software education." },
              { year: "2005", event: "Crossed 1,000 trained students with strong placement results." },
              { year: "2010", event: "Fully digital classrooms and modern computer labs launched." },
              { year: "2015", event: "Second branch opened in Penugonda to serve more students." },
              { year: "2018", event: "Introduced AI-based learning and Data Science programs." },
              { year: "2024", event: "30 years complete. 5,000+ alumni. Google 5-star rated." },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.06}>
                <div style={{ display: "flex", gap: "24px", padding: "20px 0", paddingLeft: "48px", position: "relative" }}>
                  <div style={{ position: "absolute", left: "13px", top: "26px", width: "16px", height: "16px", borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.15)" }} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#6366f1", width: "50px", flexShrink: 0 }}>{item.year}</span>
                  <span style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>{item.event}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1e1b4b", marginBottom: "48px", textAlign: "center" }}>What We Stand For</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { t: "Excellence", d: "Highest standards in curriculum, teaching, and outcomes.", icon: "💎" },
              { t: "Innovation", d: "Evolving with AI, industry trends, and modern methodology.", icon: "🚀" },
              { t: "Student First", d: "Every decision centered around career growth and results.", icon: "🎓" },
              { t: "Integrity", d: "Honest guidance and genuine commitment to every student.", icon: "🤝" },
            ].map((v, i) => (
              <ScaleIn key={v.t} delay={i * 0.07}>
                <div
                  style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #e2e8f0", textAlign: "center", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(99, 102, 241, 0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{v.icon}</div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#1e1b4b", marginBottom: "8px" }}>{v.t}</h4>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>{v.d}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
