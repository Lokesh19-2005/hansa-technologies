"use client";

import { FadeIn } from "@/components/AnimatedText";
import Link from "next/link";

export default function PlacementsPage() {
  return (
    <>
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.15, color: "#ffffff", marginBottom: "20px" }}>
              From learning<br /><span style={{ color: "#4cd964" }}>to earning.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "500px" }}>
              Complete career support — from training to placement. We provide everything you need to land your first (or next) tech job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {[
            { v: "1,000+", l: "Placed" },
            { v: "200+", l: "Partners" },
            { v: "95%", l: "Rate" },
            { v: "30+", l: "Years" },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.05}>
              <div>
                <span className="stat-value" style={{ display: "block", fontSize: "28px" }}>{s.v}</span>
                <span className="stat-label">{s.l}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "24px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "40px" }}>How we help</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            {[
              { t: "Placement Assistance", d: "Dedicated cell connecting trained students with hiring companies." },
              { t: "Interview Preparation", d: "Mock interviews, technical rounds, HR prep, and GD training." },
              { t: "Resume Building", d: "ATS-optimized resumes highlighting your skills and projects." },
              { t: "CRT Training", d: "Aptitude, reasoning, and verbal ability for campus recruitment." },
              { t: "Internships", d: "Real industry exposure with mentorship and project work." },
              { t: "Career Guidance", d: "One-on-one counseling for the right career path." },
            ].map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.04}>
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "6px" }}>{s.t}</h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "24px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "40px" }}>Career transformations</h2>
          </FadeIn>
          {[
            { name: "Arun Prasad", from: "BSc Graduate", to: "Software Engineer, Cognizant" },
            { name: "Divya Lakshmi", from: "Commerce Student", to: "Data Analyst, Deloitte" },
            { name: "Kiran Reddy", from: "Mechanical Engineer", to: "Python Developer, Infosys" },
            { name: "Sneha Rao", from: "BCA Student", to: "Web Developer, TCS" },
            { name: "Venkat Rao", from: "B.Com Graduate", to: "SAP Consultant, Deloitte" },
          ].map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.04}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>{s.name}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{s.from}</span>
                  <span style={{ fontSize: "12px", color: "#4cd964" }}>→</span>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>{s.to}</span>
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.3}>
            <div style={{ marginTop: "40px" }}>
              <Link href="/contact" className="btn-primary">Start Your Journey</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
