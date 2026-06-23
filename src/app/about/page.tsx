"use client";

import { FadeIn, ScaleIn } from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(56, 189, 248, 0.06) 0%, transparent 50%), #030712", padding: "100px 20px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px", background: "rgba(56, 189, 248, 0.06)", border: "1px solid rgba(56, 189, 248, 0.12)", borderRadius: "20px", marginBottom: "24px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
              <span style={{ fontSize: "12px", color: "#38bdf8", fontWeight: 500 }}>EST. 1994 · 30+ YEARS OF EXCELLENCE</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#ffffff", marginBottom: "20px" }}>
              Shaping careers<br /><span style={{ background: "linear-gradient(135deg, #38bdf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>since 1994.</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, maxWidth: "600px" }}>
              Hansa Technologies is a Google 5-Star Rated AI-Based Software Training Institute. We specialize in transforming beginners into industry-ready professionals through practical training, real-time projects, internships, career guidance, and placement support. Our mission is to bridge the gap between academic learning and industry requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "#0f172a", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          <ScaleIn>
            <div style={{ background: "rgba(56, 189, 248, 0.04)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(56, 189, 248, 0.08)" }}>
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>🎯</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "10px" }}>Our Mission</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>Bridge the gap between academic learning and industry requirements by providing high-quality, job-oriented training programs with one-to-one mentorship.</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.1}>
            <div style={{ background: "rgba(52, 211, 153, 0.04)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(52, 211, 153, 0.08)" }}>
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>🔭</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "10px" }}>Our Vision</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>Be the most trusted software training institute in India — known for producing professionals who drive innovation at top companies worldwide.</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      <section style={{ background: "#030712", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn><h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "48px", textAlign: "center" }}>Our Journey</h2></FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "19px", top: "0", bottom: "0", width: "1px", background: "linear-gradient(180deg, rgba(56, 189, 248, 0.3), rgba(56, 189, 248, 0.03))" }} />
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
                  <div style={{ position: "absolute", left: "14px", top: "24px", width: "12px", height: "12px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 10px rgba(56, 189, 248, 0.5)" }} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#38bdf8", width: "48px", flexShrink: 0 }}>{item.year}</span>
                  <span style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>{item.event}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f172a", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn><h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "48px", textAlign: "center" }}>What We Stand For</h2></FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {[
              { t: "Excellence", d: "Highest standards in curriculum and outcomes.", icon: "💎" },
              { t: "Innovation", d: "AI-based methodology and modern tools.", icon: "🚀" },
              { t: "Student First", d: "Every decision for career growth.", icon: "🎓" },
              { t: "Integrity", d: "Honest guidance and commitment.", icon: "🤝" },
            ].map((v, i) => (
              <ScaleIn key={v.t} delay={i * 0.07}>
                <div style={{ background: "rgba(15, 23, 42, 0.6)", borderRadius: "14px", padding: "24px", border: "1px solid rgba(148, 163, 184, 0.05)", textAlign: "center", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.2)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>{v.icon}</div>
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#e2e8f0", marginBottom: "6px" }}>{v.t}</h4>
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
