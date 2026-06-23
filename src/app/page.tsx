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
      <section className="bg-hero" style={{ color: "#ffffff", padding: "100px 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ maxWidth: "680px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  background: "rgba(99, 102, 241, 0.15)",
                  border: "1px solid rgba(99, 102, 241, 0.25)",
                  borderRadius: "20px",
                  marginBottom: "28px",
                }}
              >
                <span style={{ fontSize: "12px" }}>⭐</span>
                <span style={{ fontSize: "12px", color: "#c7d2fe", fontWeight: 500 }}>Google 5-Star Rated · Since 1994</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "24px",
                }}
              >
                Learn software skills
                <br />
                <span style={{ background: "linear-gradient(135deg, #a5b4fc, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  that get you hired.
                </span>
              </h1>

              <p style={{ fontSize: "17px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "36px", maxWidth: "520px" }}>
                Master in-demand skills in Python, AI, Data Science, and more through practical training, real projects, and dedicated placement support.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px" }}>
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
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "32px 24px" }}>
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
            <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>AI-Based Training Institute · Palakollu & Penugonda</span>
          </FadeIn>
        </div>
      </section>

      {/* Find your path */}
      <section style={{ backgroundColor: "#fafbff", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: "12px", color: "#1e1b4b" }}>Find your path</h2>
              <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "480px", margin: "0 auto" }}>Choose the track that matches your goals. We&apos;ll guide you every step of the way.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "🚀 I'm starting fresh", desc: "Zero experience? We'll take you from basics to job-ready with step-by-step courses and hands-on projects.", cta: "Explore Beginner Programs →", gradient: "linear-gradient(135deg, #eef2ff, #e0e7ff)" },
              { title: "🔄 I want to switch careers", desc: "Already working but want to move into tech? Our accelerated programs are designed for career changers.", cta: "View Career Tracks →", gradient: "linear-gradient(135deg, #f0fdf4, #dcfce7)" },
              { title: "⚡ I want to upskill", desc: "Already in tech? Level up with AI, data science, and advanced programming to stay ahead.", cta: "Browse Advanced Courses →", gradient: "linear-gradient(135deg, #fefce8, #fef3c7)" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <Link href="/courses" style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <div
                    style={{
                      background: p.gradient,
                      borderRadius: "20px",
                      padding: "32px",
                      height: "100%",
                      border: "1px solid rgba(99, 102, 241, 0.06)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 12px 40px rgba(99, 102, 241, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1e1b4b", marginBottom: "10px" }}>{p.title}</h3>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, marginBottom: "20px" }}>{p.desc}</p>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>{p.cta}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="bg-section-alt" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1e1b4b", marginBottom: "8px" }}>Popular Programs</h2>
                <p style={{ fontSize: "15px", color: "#64748b" }}>Every program includes projects, mentorship & placement support.</p>
              </div>
              <Link href="/courses" style={{ fontSize: "14px", fontWeight: 600, color: "#6366f1", textDecoration: "none" }}>View All →</Link>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {topCourses.map((course, i) => (
              <ScaleIn key={course.name} delay={i * 0.06}>
                <Link href="/courses" className="card" style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "24px" }}>{course.icon}</span>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ fontSize: "11px", color: "#6366f1", backgroundColor: "rgba(99, 102, 241, 0.08)", padding: "3px 10px", borderRadius: "12px", fontWeight: 500 }}>{course.level}</span>
                      <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 500 }}>{course.duration}</span>
                    </div>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1e1b4b", marginBottom: "8px" }}>{course.name}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>{course.desc}</p>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#ffffff", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1e1b4b", marginBottom: "12px" }}>Student success stories</h2>
              <p style={{ fontSize: "15px", color: "#64748b" }}>Real transformations, real careers.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { text: "From zero coding knowledge to a developer role at TCS in 8 months. The practical approach made all the difference.", name: "Sai Krishna", role: "Full Stack Developer, TCS" },
              { text: "Got placed at Infosys within a month of course completion. The mentors are genuinely invested in your success.", name: "Priya Reddy", role: "Data Analyst, Infosys" },
              { text: "World-class training quality in our small town. Interview prep and placement support were exceptional.", name: "Venkat Rao", role: "SAP Consultant, Deloitte" },
              { text: "Career switch from mechanical engineering to IT. The Python course gave me everything I needed.", name: "Kiran Reddy", role: "Python Developer, Infosys" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div
                  style={{
                    background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
                    borderRadius: "20px",
                    padding: "28px",
                    border: "1px solid rgba(99, 102, 241, 0.06)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "24px", marginBottom: "16px", opacity: 0.6 }}>✦</div>
                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>&ldquo;{t.text}&rdquo;</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#1e1b4b" }}>{t.name}</p>
                    <p style={{ fontSize: "12px", color: "#6366f1", fontWeight: 500 }}>{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta" style={{ color: "#ffffff", padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "16px" }}>
              Ready to start your learning journey?
            </h2>
            <p style={{ fontSize: "16px", color: "#a5b4fc", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
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
