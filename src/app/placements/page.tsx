"use client";

import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import Link from "next/link";

export default function PlacementsPage() {
  return (
    <>
      <section style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(0, 255, 170, 0.05) 0%, transparent 50%), #050d1a", padding: "100px 24px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(0, 255, 170, 0.06)", border: "1px solid rgba(0, 255, 170, 0.2)", borderRadius: "20px", marginBottom: "24px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ffaa", boxShadow: "0 0 8px #00ffaa" }} />
              <span style={{ fontSize: "12px", color: "#00ffaa", fontWeight: 500 }}>95% PLACEMENT RATE</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#ffffff", marginBottom: "20px" }}>
              From learning<br />
              <span style={{ background: "linear-gradient(135deg, #00d4ff, #00ffaa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>to earning.</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, maxWidth: "520px" }}>
              Complete career support — from training to placement. We provide everything you need to land your first (or next) tech job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "#0a1628", padding: "56px 24px", borderTop: "1px solid rgba(0, 212, 255, 0.06)", borderBottom: "1px solid rgba(0, 212, 255, 0.06)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px", textAlign: "center" }}>
          {[
            { v: "1,000+", l: "Students Placed", icon: "🎯" },
            { v: "200+", l: "Hiring Partners", icon: "🏢" },
            { v: "95%", l: "Placement Rate", icon: "📈" },
            { v: "30+", l: "Year Track Record", icon: "⭐" },
          ].map((s, i) => (
            <ScaleIn key={s.l} delay={i * 0.08}>
              <div>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "8px" }}>{s.icon}</span>
                <span style={{ display: "block", fontSize: "28px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, background: "linear-gradient(135deg, #00d4ff, #00ffaa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.v}</span>
                <span style={{ fontSize: "11px", color: "#475569", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      <section style={{ background: "#050d1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px", textAlign: "center" }}>How we help</h2>
            <p style={{ fontSize: "15px", color: "#475569", marginBottom: "48px", textAlign: "center" }}>End-to-end career support designed to get you hired.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
            {[
              { t: "Placement Assistance", d: "Dedicated cell connecting trained students with companies hiring for relevant roles.", icon: "🤝" },
              { t: "Interview Preparation", d: "Mock interviews, technical rounds practice, HR prep, and group discussion training.", icon: "🎤" },
              { t: "Resume Building", d: "Professional, ATS-optimized resumes that highlight your skills and projects effectively.", icon: "📄" },
              { t: "CRT Training", d: "Aptitude, logical reasoning, and verbal ability — everything for campus recruitment.", icon: "🧠" },
              { t: "Internships", d: "Real industry exposure with mentorship, project work, and experience certificates.", icon: "💼" },
              { t: "Career Guidance", d: "One-on-one counseling to help you identify and pursue the right career path.", icon: "🧭" },
            ].map((s, i) => (
              <ScaleIn key={s.t} delay={i * 0.06}>
                <div
                  style={{ background: "rgba(10, 22, 40, 0.6)", borderRadius: "14px", padding: "24px", border: "1px solid rgba(148, 163, 184, 0.06)", height: "100%", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span style={{ fontSize: "24px", display: "block", marginBottom: "12px" }}>{s.icon}</span>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2e8f0", marginBottom: "8px" }}>{s.t}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0a1628", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px", textAlign: "center" }}>Career transformations</h2>
            <p style={{ fontSize: "15px", color: "#475569", marginBottom: "48px", textAlign: "center" }}>Real students, real placements.</p>
          </FadeIn>
          <div style={{ background: "rgba(10, 22, 40, 0.6)", borderRadius: "16px", padding: "8px", border: "1px solid rgba(0, 212, 255, 0.06)" }}>
            {[
              { name: "Arun Prasad", from: "BSc Graduate", to: "Software Engineer, Cognizant" },
              { name: "Divya Lakshmi", from: "Commerce Student", to: "Data Analyst, Deloitte" },
              { name: "Kiran Reddy", from: "Mechanical Engineer", to: "Python Developer, Infosys" },
              { name: "Sneha Rao", from: "BCA Student", to: "Web Developer, TCS" },
              { name: "Venkat Rao", from: "B.Com Graduate", to: "SAP Consultant, Deloitte" },
            ].map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.06}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: i < 4 ? "1px solid rgba(148, 163, 184, 0.06)" : "none", gap: "12px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#e2e8f0" }}>{s.name}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "12px", color: "#475569", backgroundColor: "rgba(148, 163, 184, 0.06)", padding: "3px 10px", borderRadius: "8px" }}>{s.from}</span>
                    <span style={{ fontSize: "14px", color: "#00d4ff" }}>→</span>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#00ffaa", backgroundColor: "rgba(0, 255, 170, 0.06)", padding: "3px 10px", borderRadius: "8px" }}>{s.to}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{ marginTop: "48px", textAlign: "center" }}>
              <Link href="/contact" className="btn-primary">Start Your Journey</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
