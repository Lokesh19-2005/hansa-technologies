"use client";

import { FadeIn, ScaleIn } from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(0, 212, 255, 0.06) 0%, transparent 50%), #050d1a", padding: "100px 24px 80px", position: "relative" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(0, 212, 255, 0.06)", border: "1px solid rgba(0, 212, 255, 0.15)", borderRadius: "20px", marginBottom: "24px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ffaa", boxShadow: "0 0 8px #00ffaa" }} />
              <span style={{ fontSize: "12px", color: "#00d4ff", fontWeight: 500, letterSpacing: "0.05em" }}>EST. 1994 · 30+ YEARS</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#ffffff", marginBottom: "20px" }}>
              Shaping careers<br />
              <span style={{ background: "linear-gradient(135deg, #00d4ff, #00ffaa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>since 1994.</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, maxWidth: "560px" }}>
              Hansa Technologies is a Google 5-Star rated AI-based software training institute. For over 30 years, we&apos;ve transformed beginners into industry-ready professionals through practical training, real projects, and dedicated placement support.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "#0a1628", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <ScaleIn>
            <div style={{ background: "rgba(0, 212, 255, 0.04)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(0, 212, 255, 0.1)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>🎯</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "12px" }}>Our Mission</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>Empower individuals with industry-relevant skills through practical, AI-enhanced training that builds confident, job-ready professionals.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.1}>
            <div style={{ background: "rgba(0, 255, 170, 0.04)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(0, 255, 170, 0.1)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>🔭</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "12px" }}>Our Vision</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>Be the most trusted software training institute in India — known for producing professionals who drive innovation at top companies.</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      <section style={{ background: "#050d1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "48px", textAlign: "center" }}>Our Journey</h2>
          </FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "20px", top: "0", bottom: "0", width: "1px", background: "linear-gradient(180deg, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.05))" }} />
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
                  <div style={{ position: "absolute", left: "15px", top: "26px", width: "12px", height: "12px", borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 10px rgba(0, 212, 255, 0.5), 0 0 0 3px rgba(0, 212, 255, 0.15)" }} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#00d4ff", width: "50px", flexShrink: 0 }}>{item.year}</span>
                  <span style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>{item.event}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0a1628", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "48px", textAlign: "center" }}>What We Stand For</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { t: "Excellence", d: "Highest standards in curriculum, teaching, and outcomes.", icon: "💎", color: "#00d4ff" },
              { t: "Innovation", d: "Evolving with AI, industry trends, and modern methodology.", icon: "🚀", color: "#00ffaa" },
              { t: "Student First", d: "Every decision centered around career growth and results.", icon: "🎓", color: "#7c3aed" },
              { t: "Integrity", d: "Honest guidance and genuine commitment to every student.", icon: "🤝", color: "#f59e0b" },
            ].map((v, i) => (
              <ScaleIn key={v.t} delay={i * 0.07}>
                <div
                  style={{ background: "rgba(10, 22, 40, 0.6)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(148, 163, 184, 0.06)", textAlign: "center", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${v.color}30`; e.currentTarget.style.boxShadow = `0 0 30px ${v.color}08`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.06)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{v.icon}</div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#e2e8f0", marginBottom: "8px" }}>{v.t}</h4>
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
