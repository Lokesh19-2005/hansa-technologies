"use client";

import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";

const categories = ["Python", "Data Science", "AI & ML", "Java", "Web Dev", "Power BI", "SAP", "Excel"];

const topCourses = [
  { name: "Full Stack Python Development", level: "Beginner → Advanced", duration: "6 Months", desc: "Python, Django, Flask, REST APIs, databases, deployment.", icon: "🐍" },
  { name: "Data Science & Machine Learning", level: "Intermediate → Advanced", duration: "6 Months", desc: "Deep learning, NLP, computer vision, predictive analytics.", icon: "📊" },
  { name: "AI Automation Developer", level: "Beginner → Advanced", duration: "5 Months", desc: "Build intelligent automation with AI/ML and RPA.", icon: "🤖" },
  { name: "Web Development", level: "Beginner → Advanced", duration: "5 Months", desc: "React, Node.js, MongoDB — full-stack modern web.", icon: "🌐" },
  { name: "Data Analyst", level: "Beginner → Intermediate", duration: "4 Months", desc: "SQL, Power BI, statistics, data visualization.", icon: "📈" },
  { name: "Java Programming", level: "Beginner → Advanced", duration: "5 Months", desc: "Spring Boot, microservices, enterprise patterns.", icon: "☕" },
];

const whyUs = [
  "30+ Years of Training Excellence",
  "Google 5-Star Rated Institute",
  "AI-Based Advanced Learning",
  "Industry-Oriented Curriculum",
  "Experienced Faculty",
  "AC Digital Classrooms",
  "Govt. Recognized Certifications",
  "One-to-One Mentorship",
  "Real-Time Projects & Internships",
  "Placement Assistance",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "radial-gradient(ellipse at 25% 20%, rgba(56, 189, 248, 0.07) 0%, transparent 50%), radial-gradient(ellipse at 75% 80%, rgba(52, 211, 153, 0.04) 0%, transparent 50%), #030712", padding: "110px 20px 90px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px", background: "rgba(56, 189, 248, 0.06)", border: "1px solid rgba(56, 189, 248, 0.12)", borderRadius: "20px", marginBottom: "32px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
                <span style={{ fontSize: "12px", color: "#38bdf8", fontWeight: 500, letterSpacing: "0.04em" }}>GOOGLE 5-STAR RATED · AI-BASED TRAINING · SINCE 1994</span>
              </div>

              <h1 style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "24px", color: "#ffffff" }}>
                Learn • Build •{" "}
                <span style={{ background: "linear-gradient(135deg, #38bdf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Get Placed
                </span>
              </h1>

              <p style={{ fontSize: "17px", color: "#64748b", lineHeight: 1.8, marginBottom: "36px", maxWidth: "540px" }}>
                Master in-demand skills in Python, AI, Data Science & more. Practical training, real projects, internships, and dedicated placement support. Online & Offline programs available.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "44px" }}>
                <Link href="/courses" className="btn-primary">Explore Programs</Link>
                <Link href="/contact" className="btn-secondary">Book Free Consultation</Link>
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
      <section style={{ borderTop: "1px solid rgba(56, 189, 248, 0.06)", borderBottom: "1px solid rgba(56, 189, 248, 0.06)", padding: "28px 20px", background: "rgba(15, 23, 42, 0.4)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "40px" }}>
          {[
            { v: "30+", l: "Years" },
            { v: "5,000+", l: "Students" },
            { v: "1,000+", l: "Placements" },
            { v: "5★", l: "Google Rating" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <span className="stat-value" style={{ display: "block" }}>{s.v}</span>
              <span className="stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "100px 20px", background: "#030712" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Why Choose Hansa Technologies?</h2>
              <p style={{ fontSize: "15px", color: "#475569", maxWidth: "500px", margin: "0 auto" }}>Over 30 years of trust, quality, and proven results.</p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
            {whyUs.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", background: "rgba(15, 23, 42, 0.5)", borderRadius: "12px", border: "1px solid rgba(56, 189, 248, 0.04)" }}>
                  <span style={{ color: "#34d399", fontSize: "16px" }}>✓</span>
                  <span style={{ fontSize: "14px", color: "#cbd5e1", fontWeight: 500 }}>{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Find your path */}
      <section style={{ padding: "100px 20px", background: "radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.03) 0%, transparent 50%), #0f172a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Find your path</h2>
              <p style={{ fontSize: "15px", color: "#475569" }}>Choose the track that matches your goals.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { title: "Starting Fresh", desc: "Zero experience? Step-by-step training from scratch to job-ready.", cta: "Beginner Programs →", color: "#38bdf8" },
              { title: "Career Switch", desc: "Moving into tech? Accelerated programs for career changers.", cta: "Career Tracks →", color: "#34d399" },
              { title: "Upskill", desc: "Already in tech? Level up with AI, data science & advanced skills.", cta: "Advanced Courses →", color: "#a78bfa" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <Link href="/courses" style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <div style={{ background: "rgba(15, 23, 42, 0.6)", borderRadius: "16px", padding: "32px", height: "100%", border: "1px solid rgba(148, 163, 184, 0.06)", transition: "all 0.35s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${p.color}30`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, boxShadow: `0 0 10px ${p.color}`, marginBottom: "20px" }} />
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#e2e8f0", marginBottom: "10px" }}>{p.title}</h3>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, marginBottom: "18px" }}>{p.desc}</p>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: p.color }}>{p.cta}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section style={{ padding: "100px 20px", background: "#030712" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Popular Programs</h2>
                <p style={{ fontSize: "15px", color: "#475569" }}>Projects + Mentorship + Placement Support included.</p>
              </div>
              <Link href="/courses" style={{ fontSize: "14px", fontWeight: 600, color: "#38bdf8", textDecoration: "none" }}>View All →</Link>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {topCourses.map((course, i) => (
              <ScaleIn key={course.name} delay={i * 0.05}>
                <Link href="/courses" className="card" style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <span style={{ fontSize: "22px" }}>{course.icon}</span>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "11px", color: "#38bdf8", backgroundColor: "rgba(56, 189, 248, 0.08)", padding: "3px 10px", borderRadius: "10px", fontWeight: 500 }}>{course.level}</span>
                      <span style={{ fontSize: "11px", color: "#475569" }}>{course.duration}</span>
                    </div>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#e2e8f0", marginBottom: "6px" }}>{course.name}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>{course.desc}</p>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "100px 20px", background: "rgba(15, 23, 42, 0.3)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Success Stories</h2>
              <p style={{ fontSize: "15px", color: "#475569" }}>Real students, real placements.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "16px" }}>
            {[
              { text: "From zero coding to TCS in 8 months. The practical approach made all the difference.", name: "Sai Krishna", role: "Full Stack Developer, TCS" },
              { text: "Placed at Infosys within a month of completion. Mentors are genuinely invested.", name: "Priya Reddy", role: "Data Analyst, Infosys" },
              { text: "World-class quality in our small town. Interview prep was exceptional.", name: "Venkat Rao", role: "SAP Consultant, Deloitte" },
              { text: "Career switch from mechanical to IT. Python course gave me everything I needed.", name: "Kiran Reddy", role: "Python Developer, Infosys" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.07}>
                <div style={{ background: "rgba(15, 23, 42, 0.6)", borderRadius: "16px", padding: "28px", border: "1px solid rgba(148, 163, 184, 0.05)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "20px" }}>&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#e2e8f0" }}>{t.name}</p>
                    <p style={{ fontSize: "12px", color: "#38bdf8", fontWeight: 500 }}>{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modes */}
      <section style={{ padding: "80px 20px", background: "#030712" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>Training Modes</h2>
              <p style={{ fontSize: "15px", color: "#475569" }}>Learn the way that suits you best.</p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            <ScaleIn>
              <div style={{ background: "rgba(15, 23, 42, 0.5)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(56, 189, 248, 0.06)", textAlign: "center" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>🏫</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "8px" }}>Offline Training</h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>Practical classroom training with direct faculty interaction in AC digital classrooms with modern labs.</p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div style={{ background: "rgba(15, 23, 42, 0.5)", borderRadius: "16px", padding: "32px", border: "1px solid rgba(52, 211, 153, 0.06)", textAlign: "center" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>💻</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "8px" }}>Online Training</h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>Live instructor-led sessions accessible from anywhere. Same quality, flexible schedule.</p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 20px", textAlign: "center", background: "radial-gradient(ellipse at 50% 50%, rgba(56, 189, 248, 0.06) 0%, transparent 60%), #0f172a" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "16px", color: "#ffffff" }}>Ready to start?</h2>
            <p style={{ fontSize: "16px", color: "#475569", marginBottom: "36px" }}>Join 5,000+ students who transformed their careers. Free consultation available.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
              <Link href="/contact" className="btn-primary">Get Started Free</Link>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
