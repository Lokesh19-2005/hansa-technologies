"use client";

import { FadeIn } from "@/components/AnimatedText";
import Link from "next/link";

export default function PlacementsPage() {
  return (
    <>
      <section className="px-5 sm:px-6 py-16 sm:py-24">
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <h1 className="text-[2rem] sm:text-[2.8rem] font-bold leading-[1.15] text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              From learning<br /><span style={{ color: "#4cd964" }}>to earning.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] leading-relaxed max-w-[500px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Complete career support — from training to placement. We provide everything you need to land your first (or next) tech job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[700px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { v: "1,000+", l: "Placed" },
            { v: "200+", l: "Partners" },
            { v: "95%", l: "Rate" },
            { v: "30+", l: "Years" },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.05}>
              <div>
                <span className="stat-value block text-[22px] sm:text-[28px]">{s.v}</span>
                <span className="stat-label">{s.l}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-white mb-8 sm:mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>How we help</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                  <h3 className="text-[14px] font-semibold text-white mb-1.5">{s.t}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-white mb-8 sm:mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Career transformations</h2>
          </FadeIn>
          {[
            { name: "Arun Prasad", from: "BSc Graduate", to: "Software Engineer, Cognizant" },
            { name: "Divya Lakshmi", from: "Commerce Student", to: "Data Analyst, Deloitte" },
            { name: "Kiran Reddy", from: "Mechanical Engineer", to: "Python Developer, Infosys" },
            { name: "Sneha Rao", from: "BCA Student", to: "Web Developer, TCS" },
            { name: "Venkat Rao", from: "B.Com Graduate", to: "SAP Consultant, Deloitte" },
          ].map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.04}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-[14px] font-medium text-white">{s.name}</span>
                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>{s.from}</span>
                  <span className="text-[12px]" style={{ color: "#4cd964" }}>→</span>
                  <span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{s.to}</span>
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">Start Your Journey</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
