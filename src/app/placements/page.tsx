"use client";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import Link from "next/link";

export default function PlacementsPage() {
  return (
    <>
      <section style={{ background: "#f8fafc", padding: "100px 20px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "20px", marginBottom: "24px" }}>
              <span style={{ fontSize: "12px", color: "#16a34a", fontWeight: 600 }}>95% PLACEMENT RATE</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#1a1a2e", marginBottom: "20px" }}>
              From learning<br /><span style={{ color: "#4f46e5" }}>to earning.</span>
            </h1>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, maxWidth: "540px" }}>Complete career support — training, internships, interview prep, resume building, and placement assistance.</p>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "56px 20px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "24px", textAlign: "center" }}>
          {[{ v: "1,000+", l: "Students Placed" }, { v: "200+", l: "Hiring Partners" }, { v: "95%", l: "Placement Rate" }, { v: "30+", l: "Year Track Record" }].map((s, i) => (
            <ScaleIn key={s.l} delay={i * 0.07}><div><span className="stat-value" style={{ display: "block" }}>{s.v}</span><span className="stat-label">{s.l}</span></div></ScaleIn>
          ))}
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn><h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "48px", textAlign: "center" }}>How we help</h2></FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "14px" }}>
            {[
              { t: "Placement Assistance", d: "Dedicated placement cell connecting students with hiring companies.", icon: "🤝" },
              { t: "Interview Preparation", d: "Mock interviews, technical rounds, HR prep, group discussions.", icon: "🎤" },
              { t: "Resume Building", d: "ATS-optimized resumes highlighting skills and projects.", icon: "📄" },
              { t: "CRT Training", d: "Aptitude, reasoning, verbal — campus recruitment ready.", icon: "🧠" },
              { t: "Internships", d: "Real industry exposure with mentorship and certificates.", icon: "💼" },
              { t: "Career Guidance", d: "One-on-one counseling for the right career path.", icon: "🧭" },
            ].map((s, i) => (
              <ScaleIn key={s.t} delay={i * 0.05}>
                <div style={{ background: "#ffffff", borderRadius: "14px", padding: "24px", border: "1px solid #f1f5f9", height: "100%", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e0e7ff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <span style={{ fontSize: "24px", display: "block", marginBottom: "12px" }}>{s.icon}</span>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px" }}>{s.t}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn><h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "48px", textAlign: "center" }}>Career Transformations</h2></FadeIn>
          <div style={{ background: "#f8fafc", borderRadius: "16px", padding: "8px", border: "1px solid #f1f5f9" }}>
            {[
              { name: "Arun Prasad", from: "BSc Graduate", to: "Software Engineer, Cognizant" },
              { name: "Divya Lakshmi", from: "Commerce Student", to: "Data Analyst, Deloitte" },
              { name: "Kiran Reddy", from: "Mechanical Engineer", to: "Python Developer, Infosys" },
              { name: "Sneha Rao", from: "BCA Student", to: "Web Developer, TCS" },
              { name: "Venkat Rao", from: "B.Com Graduate", to: "SAP Consultant, Deloitte" },
            ].map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.05}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: i < 4 ? "1px solid #f1f5f9" : "none", gap: "10px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a2e" }}>{s.name}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12px", color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 10px", borderRadius: "6px" }}>{s.from}</span>
                    <span style={{ color: "#4f46e5", fontSize: "13px" }}>→</span>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#4f46e5", backgroundColor: "#eef2ff", padding: "2px 10px", borderRadius: "6px" }}>{s.to}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}><div style={{ marginTop: "48px", textAlign: "center" }}><Link href="/contact" className="btn-primary">Start Your Journey</Link></div></FadeIn>
        </div>
      </section>
    </>
  );
}
