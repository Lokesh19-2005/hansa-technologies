"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

const courses = [
  {
    category: "Software Training",
    color: "#2563EB",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
    ),
    items: ["Full Stack Python Development", "Data Analyst", "AI Automation Development", "Data Science & Machine Learning", "Java Programming", "C Programming", "Web Development"],
  },
  {
    category: "Professional Courses",
    color: "#22C55E",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
    ),
    items: ["Tally Prime", "SAP (FICO, MM, SD)", "Power BI", "Advanced Excel", "SQL", "Oracle", "MySQL"],
  },
  {
    category: "Design & Technical",
    color: "#A855F7",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
    ),
    items: ["AutoCAD", "MS Office", "Digital Marketing", "Ethical Hacking"],
  },
  {
    category: "Career Development",
    color: "#F59E0B",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
    ),
    items: ["Internships", "Academic Projects (B.Tech, MCA, BCA, Degree)", "Campus Recruitment Training (CRT)", "Soft Skills Training", "Industrial Training", "Placement Assistance"],
  },
];

export default function CoursesPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px", background: "#08111F" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <span style={{ display: "inline-block", padding: "8px 16px", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "20px", color: "#60A5FA", fontSize: "13px", fontWeight: 500, marginBottom: "24px" }}>
              25+ Industry-Ready Courses
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "16px", lineHeight: 1.1 }}>
              Our Training <span style={{ color: "#2563EB" }}>Programs</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: "16px", color: "#CBD5E1", maxWidth: "560px", margin: "0 auto" }}>
              Industry-aligned courses with hands-on projects, expert mentorship, and placement support
            </p>
          </FadeIn>
        </div>
      </section>

      {/* All Programs */}
      <section style={{ padding: "80px 24px", background: "#0E1A2B" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px" }}>
            {courses.map((cat, catIdx) => (
              <FadeIn key={cat.category} delay={catIdx * 0.08}>
                <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px", height: "100%", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: "140px", height: "140px", background: `radial-gradient(circle, ${cat.color}10 0%, transparent 70%)`, borderRadius: "50%" }} />
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${cat.color}15`, border: `1px solid ${cat.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: cat.color }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "20px" }}>{cat.category}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {cat.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                        <span style={{ color: "#CBD5E1", fontSize: "14px" }}>{item}</span>
                        <span style={{ marginLeft: "auto", fontSize: "11px", color: "#64748B", background: "rgba(255,255,255,0.04)", padding: "2px 8px", borderRadius: "8px" }}>Placement</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#08111F" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", padding: "56px 32px", background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(14,26,43,0.8) 100%)", borderRadius: "24px", border: "1px solid rgba(37,99,235,0.15)" }}>
              <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, marginBottom: "16px", color: "#FFFFFF" }}>
                Not Sure Which Course is Right for You?
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "480px", margin: "0 auto 28px" }}>
                Get a free career counseling session. Our experts will help you choose the best path.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
                <Link href="/contact/" className="btn-primary">Free Career Counseling</Link>
                <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
