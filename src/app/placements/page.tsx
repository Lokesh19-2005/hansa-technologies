"use client";

import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import Link from "next/link";

export default function PlacementsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #fafbff 0%, #eef2ff 100%)", padding: "100px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-80px", right: "-60px", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.2)", borderRadius: "20px", marginBottom: "24px" }}>
              <span style={{ fontSize: "12px", color: "#16a34a", fontWeight: 600 }}>95% Placement Rate</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#1e1b4b", marginBottom: "20px" }}>
              From learning<br /><span style={{ color: "#6366f1" }}>to earning.</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, maxWidth: "520px" }}>
              Complete career support — from training to placement. We provide everything you need to land your first (or next) tech job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "56px 24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px", textAlign: "center" }}>
          {[
            { v: "1,000+", l: "Students Placed", icon: "🎯" },
            { v: "200+", l: "Hiring Partners", icon: "🏢" },
            { v: "95%", l: "Placement Rate", icon: "📈" },
            { v: "30+", l: "Year Track Record", icon: "⭐" },
          ].map((s, i) => (
            <ScaleIn key={s.l} delay={i * 0.08}>
              <div>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "8px" }}>{s.icon}</span>
                <span style={{ display: "block", fontSize: "28px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#6366f1" }}>{s.v}</span>
                <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.l}</span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#fafbff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1e1b4b", marginBottom: "12px", textAlign: "center" }}>How we help</h2>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "48px", textAlign: "center" }}>End-to-end career support designed to get you hired.</p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
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
                  style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid rgba(99, 102, 241, 0.06)", height: "100%", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.2)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(99, 102, 241, 0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.06)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>{s.icon}</span>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1e1b4b", marginBottom: "8px" }}>{s.t}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1e1b4b", marginBottom: "12px", textAlign: "center" }}>Career transformations</h2>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "48px", textAlign: "center" }}>Real students, real placements.</p>
          </FadeIn>
          <div style={{ background: "linear-gradient(135deg, #f8fafc, #eef2ff)", borderRadius: "20px", padding: "8px", border: "1px solid rgba(99, 102, 241, 0.06)" }}>
            {[
              { name: "Arun Prasad", from: "BSc Graduate", to: "Software Engineer, Cognizant" },
              { name: "Divya Lakshmi", from: "Commerce Student", to: "Data Analyst, Deloitte" },
              { name: "Kiran Reddy", from: "Mechanical Engineer", to: "Python Developer, Infosys" },
              { name: "Sneha Rao", from: "BCA Student", to: "Web Developer, TCS" },
              { name: "Venkat Rao", from: "B.Com Graduate", to: "SAP Consultant, Deloitte" },
            ].map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.06}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: i < 4 ? "1px solid rgba(99, 102, 241, 0.06)" : "none", gap: "12px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1e1b4b" }}>{s.name}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "12px", color: "#94a3b8", backgroundColor: "rgba(148, 163, 184, 0.1)", padding: "3px 10px", borderRadius: "8px" }}>{s.from}</span>
                    <span style={{ fontSize: "14px", color: "#6366f1" }}>→</span>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#6366f1", backgroundColor: "rgba(99, 102, 241, 0.08)", padding: "3px 10px", borderRadius: "8px" }}>{s.to}</span>
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
