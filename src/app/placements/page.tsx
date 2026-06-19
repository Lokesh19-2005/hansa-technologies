"use client";

import { FadeIn } from "@/components/AnimatedText";
import Link from "next/link";

export default function PlacementsPage() {
  return (
    <>
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2, color: "#18181b", marginBottom: "20px" }}>
              From learning to earning.
            </h1>
            <p style={{ fontSize: "15px", color: "#71717a", lineHeight: 1.7, maxWidth: "500px" }}>
              Complete career support — from training to placement. We provide everything you need to land your first (or next) tech job.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#fafafa", padding: "48px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px" }}>
          {[
            { v: "1,000+", l: "Students Placed" },
            { v: "200+", l: "Hiring Partners" },
            { v: "95%", l: "Placement Rate" },
            { v: "30+", l: "Year Track Record" },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.05}>
              <div>
                <span style={{ display: "block", fontSize: "24px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#18181b" }}>{s.v}</span>
                <span style={{ fontSize: "12px", color: "#a1a1aa" }}>{s.l}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#ffffff", padding: "64px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "22px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#18181b", marginBottom: "40px" }}>How we help</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            {[
              { t: "Placement Assistance", d: "Dedicated cell connecting trained students with companies hiring for relevant roles." },
              { t: "Interview Preparation", d: "Mock interviews, technical rounds practice, HR prep, and group discussion training." },
              { t: "Resume Building", d: "Professional, ATS-optimized resumes that highlight your skills and projects effectively." },
              { t: "CRT Training", d: "Aptitude, logical reasoning, and verbal ability — everything for campus recruitment." },
              { t: "Internships", d: "Real industry exposure with mentorship, project work, and experience certificates." },
              { t: "Career Guidance", d: "One-on-one counseling to help you identify and pursue the right career path." },
            ].map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.04}>
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#18181b", marginBottom: "6px" }}>{s.t}</h3>
                  <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.6 }}>{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section style={{ backgroundColor: "#fafafa", padding: "64px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "22px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#18181b", marginBottom: "40px" }}>Career transformations</h2>
          </FadeIn>
          {[
            { name: "Arun Prasad", from: "BSc Graduate", to: "Software Engineer, Cognizant" },
            { name: "Divya Lakshmi", from: "Commerce Student", to: "Data Analyst, Deloitte" },
            { name: "Kiran Reddy", from: "Mechanical Engineer", to: "Python Developer, Infosys" },
            { name: "Sneha Rao", from: "BCA Student", to: "Web Developer, TCS" },
            { name: "Venkat Rao", from: "B.Com Graduate", to: "SAP Consultant, Deloitte" },
          ].map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.04}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid #e4e4e7" }}>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#18181b" }}>{s.name}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", color: "#a1a1aa" }}>{s.from}</span>
                  <span style={{ fontSize: "12px", color: "#d4d4d8" }}>→</span>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#52525b" }}>{s.to}</span>
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.3}>
            <div style={{ marginTop: "40px" }}>
              <Link href="/contact" className="btn-dark">Start Your Journey</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
