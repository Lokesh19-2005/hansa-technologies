"use client";

import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";

const categories = ["Python", "Data Science", "AI & ML", "Java", "Web Dev", "Power BI", "Excel", "SAP"];

const topCourses = [
  { name: "Full Stack Python Development", level: "Beginner → Advanced", duration: "6 Months", desc: "Master Python, Django, APIs, databases, and deployment.", icon: "🐍" },
  { name: "Data Science & Machine Learning", level: "Intermediate → Advanced", duration: "6 Months", desc: "Deep learning, NLP, computer vision, and predictive analytics.", icon: "📊" },
  { name: "AI Automation Developer", level: "Beginner → Advanced", duration: "5 Months", desc: "Build intelligent automation with AI/ML and RPA.", icon: "🤖" },
  { name: "Web Development", level: "Beginner → Advanced", duration: "5 Months", desc: "React, Node.js, MongoDB — full-stack modern web.", icon: "🌐" },
  { name: "Data Analyst", level: "Beginner → Intermediate", duration: "4 Months", desc: "SQL, Power BI, statistics, data visualization.", icon: "📈" },
  { name: "Java Programming", level: "Beginner → Advanced", duration: "5 Months", desc: "Spring Boot, microservices, enterprise patterns.", icon: "☕" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero" style={{ padding: "120px 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(0, 212, 255, 0.06)", border: "1px solid rgba(0, 212, 255, 0.15)", borderRadius: "20px", marginBottom: "32px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ffaa", boxShadow: "0 0 8px #00ffaa" }} />
                <span style={{ fontSize: "12px", color: "#00d4ff", fontWeight: 500, letterSpacing: "0.05em" }}>GOOGLE 5-STAR RATED · SINCE 1994</span>
              </div>

              <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "24px", color: "#ffffff" }}>
                Learn software skills
                <br />
                <span style={{ background: "linear-gradient(135deg, #00d4ff, #00ffaa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  that get you hired.
                </span>
              </h1>

              <p style={{ fontSize: "17px", color: "#64748b", lineHeight: 1.8, marginBottom: "40px", maxWidth: "520px" }}>
                Master in-demand skills in Python, AI, Data Science, and more through practical training, real projects, and dedicated placement support.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "48px" }}>
                <Link href="/courses" className="btn-primary">Start Learning</Link>
                <Link href="/contact" className="btn-outline">Book Free Consultation</Link>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {categories.map((cat) => (
                  <Link key={cat} href="/courses" className="pill">{cat}</Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid rgba(0, 212, 255, 0.08)", borderBottom: "1px solid rgba(0, 212, 255, 0.08)", padding: "32px 24px", background: "rgba(10, 22, 40, 0.5)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
              {[
                { v: "30+", l: "Years" },
                { v: "5,000+", l: "Students" },
                { v: "1,000+", l: "Placements" },
                { v: "5★", l: "Rating" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <span className="stat-value" style={{ display: "block" }}>{s.v}</span>
                  <span className="stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span style={{ fontSize: "12px", color: "#334155", fontWeight: 500 }}>AI-Based Training Institute · Palakollu & Penugonda</span>
          </FadeIn>
        </div>
      </section>

      {/* Find your path */}
      <section style={{ padding: "120px 24px", background: "#050d1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, marginBottom: "12px", color: "#ffffff" }}>Find your path</h2>
              <p style={{ fontSize: "15px", color: "#475569", maxWidth: "480px", margin: "0 auto" }}>Choose the track that matches your goals. We&apos;ll guide you every step of the way.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "I'm starting fresh", desc: "Zero experience? We'll take you from basics to job-ready with step-by-step courses and hands-on projects.", cta: "Explore Beginner Programs →", color: "#00d4ff" },
              { title: "I want to switch careers", desc: "Already working but want to move into tech? Our accelerated programs are designed for career changers.", cta: "View Career Tracks →", color: "#00ffaa" },
              { title: "I want to upskill", desc: "Already in tech? Level up with AI, data science, and advanced programming to stay ahead.", cta: "Browse Advanced Courses →", color: "#7c3aed" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <Link href="/courses" style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <div
                    style={{
                      background: "rgba(10, 22, 40, 0.6)",
                      borderRadius: "16px",
                      padding: "32px",
                      height: "100%",
                      border: `1px solid ${p.color}15`,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.borderColor = `${p.color}40`;
                      e.currentTarget.style.boxShadow = `0 0 40px ${p.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = `${p.color}15`;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, boxShadow: `0 0 12px ${p.color}`, marginBottom: "20px" }} />
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#e2e8f0", marginBottom: "10px" }}>{p.title}</h3>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, marginBottom: "20px" }}>{p.desc}</p>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: p.color }}>{p.cta}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="bg-section-alt" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Popular Programs</h2>
                <p style={{ fontSize: "15px", color: "#475569" }}>Every program includes projects, mentorship & placement support.</p>
              </div>
              <Link href="/courses" style={{ fontSize: "14px", fontWeight: 600, color: "#00d4ff", textDecoration: "none" }}>View All →</Link>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
            {topCourses.map((course, i) => (
              <ScaleIn key={course.name} delay={i * 0.06}>
                <Link href="/courses" className="card" style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "24px" }}>{course.icon}</span>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ fontSize: "11px", color: "#00d4ff", backgroundColor: "rgba(0, 212, 255, 0.08)", padding: "3px 10px", borderRadius: "12px", fontWeight: 500 }}>{course.level}</span>
                      <span style={{ fontSize: "11px", color: "#475569", fontWeight: 500 }}>{course.duration}</span>
                    </div>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2e8f0", marginBottom: "8px" }}>{course.name}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>{course.desc}</p>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "120px 24px", background: "#050d1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Student success stories</h2>
              <p style={{ fontSize: "15px", color: "#475569" }}>Real transformations, real careers.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { text: "From zero coding knowledge to a developer role at TCS in 8 months. The practical approach made all the difference.", name: "Sai Krishna", role: "Full Stack Developer, TCS" },
              { text: "Got placed at Infosys within a month of course completion. The mentors are genuinely invested in your success.", name: "Priya Reddy", role: "Data Analyst, Infosys" },
              { text: "World-class training quality in our small town. Interview prep and placement support were exceptional.", name: "Venkat Rao", role: "SAP Consultant, Deloitte" },
              { text: "Career switch from mechanical engineering to IT. The Python course gave me everything I needed.", name: "Kiran Reddy", role: "Python Developer, Infosys" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div
                  style={{
                    background: "rgba(10, 22, 40, 0.6)",
                    borderRadius: "16px",
                    padding: "28px",
                    border: "1px solid rgba(148, 163, 184, 0.06)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.15)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.06)"; }}
                >
                  <div>
                    <div style={{ fontSize: "18px", marginBottom: "16px", color: "#00d4ff", opacity: 0.5 }}>✦</div>
                    <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "20px" }}>&ldquo;{t.text}&rdquo;</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#e2e8f0" }}>{t.name}</p>
                    <p style={{ fontSize: "12px", color: "#00d4ff", fontWeight: 500 }}>{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta" style={{ padding: "120px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "16px", color: "#ffffff" }}>
              Ready to start your journey?
            </h2>
            <p style={{ fontSize: "16px", color: "#475569", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}>
              Join 5,000+ students who transformed their careers. Free consultation available.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
              <Link href="/contact" className="btn-primary">Get Started Free</Link>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
