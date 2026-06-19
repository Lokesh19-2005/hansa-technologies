"use client";

import Link from "next/link";
import { FadeIn } from "@/components/AnimatedText";

const categories = ["Python", "Data Science", "AI & ML", "Java", "Web Dev", "Power BI", "Excel", "SAP"];

const topCourses = [
  { name: "Full Stack Python Development", level: "Beginner → Advanced", duration: "6 Months", desc: "Master Python, Django, APIs, databases, and deployment." },
  { name: "Data Science & Machine Learning", level: "Intermediate → Advanced", duration: "6 Months", desc: "Deep learning, NLP, computer vision, and predictive analytics." },
  { name: "AI Automation Developer", level: "Beginner → Advanced", duration: "5 Months", desc: "Build intelligent automation with AI/ML and RPA." },
  { name: "Web Development", level: "Beginner → Advanced", duration: "5 Months", desc: "React, Node.js, MongoDB — full-stack modern web." },
  { name: "Data Analyst", level: "Beginner → Intermediate", duration: "4 Months", desc: "SQL, Power BI, statistics, data visualization." },
  { name: "Java Programming", level: "Beginner → Advanced", duration: "5 Months", desc: "Spring Boot, microservices, enterprise patterns." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", padding: "120px 24px 100px", overflow: "hidden" }}>
        {/* Background gradient orbs */}
        <div style={{ position: "absolute", top: "-200px", left: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(76,217,100,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-200px", right: "-100px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(52,199,89,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
        
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <FadeIn>
            <div style={{ maxWidth: "650px" }}>
              <img src="/logo.png" alt="Hansa Technologies" style={{ height: "140px", marginBottom: "40px" }} />

              <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "24px", color: "#ffffff" }}>
                Learn software skills<br />
                <span style={{ color: "#4cd964" }}>that get you hired.</span>
              </h1>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px" }}>
                Master in-demand skills in Python, AI, Data Science, and more through practical training, real projects, and dedicated placement support.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
                <Link href="/courses" className="btn-primary">Start Learning</Link>
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
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "32px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <FadeIn>
            <div style={{ display: "flex", gap: "48px" }}>
              {[
                { v: "30+", l: "Years" },
                { v: "5,000+", l: "Students" },
                { v: "1,000+", l: "Placed" },
                { v: "5★", l: "Google" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <span className="stat-value" style={{ display: "block" }}>{s.v}</span>
                  <span className="stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>AI-BASED TRAINING · SINCE 1994</span>
        </div>
      </section>

      {/* Find your path */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "32px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "8px" }}>
              Find your path
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", marginBottom: "48px" }}>Choose the track that matches your goals.</p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {[
              { title: "I'm starting fresh", desc: "Zero experience? We take you from basics to job-ready with hands-on projects and mentorship.", cta: "Explore Beginner Programs →" },
              { title: "I want to switch careers", desc: "Working in another field? Our accelerated programs are designed for career changers moving into tech.", cta: "View Career Tracks →" },
              { title: "I want to upskill", desc: "Already in tech? Level up with AI, data science, and advanced programming to stay ahead of the curve.", cta: "Browse Advanced Courses →" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <Link href="/courses" className="card-muted" style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff", marginBottom: "10px" }}>{p.title}</h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, marginBottom: "20px" }}>{p.desc}</p>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#4cd964" }}>{p.cta}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section style={{ padding: "100px 24px", backgroundColor: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px" }}>
              <div>
                <h2 style={{ fontSize: "32px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "8px" }}>Popular Programs</h2>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>Every program includes projects, mentorship & placement support.</p>
              </div>
              <Link href="/courses" style={{ fontSize: "13px", fontWeight: 500, color: "#4cd964", textDecoration: "none" }}>View All →</Link>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
            {topCourses.map((course, i) => (
              <FadeIn key={course.name} delay={i * 0.05}>
                <Link href="/courses" className="card" style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                    <span style={{ fontSize: "11px", color: "#4cd964", backgroundColor: "rgba(76,217,100,0.08)", padding: "3px 10px", borderRadius: "12px" }}>{course.level}</span>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", padding: "3px 0" }}>{course.duration}</span>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", marginBottom: "8px" }}>{course.name}</h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>{course.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "32px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "48px" }}>Student success stories</h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {[
              { text: "From zero coding knowledge to a developer role at TCS in 8 months. The practical approach made all the difference.", name: "Sai Krishna", role: "Full Stack Developer, TCS" },
              { text: "Got placed at Infosys within a month of course completion. The mentors are genuinely invested in your success.", name: "Priya Reddy", role: "Data Analyst, Infosys" },
              { text: "World-class training quality in our small town. Interview prep and placement support were exceptional.", name: "Venkat Rao", role: "SAP Consultant, Deloitte" },
              { text: "Career switch from mechanical engineering to IT. The Python course gave me everything I needed.", name: "Kiran Reddy", role: "Python Developer, Infosys" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <div className="card">
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>{t.name}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(76,217,100,0.05) 0%, transparent 60%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <FadeIn>
            <h2 style={{ fontSize: "32px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "12px" }}>Ready to transform your career?</h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", marginBottom: "36px", maxWidth: "400px", margin: "0 auto 36px" }}>Join 5,000+ students who built successful careers. Free consultation available.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/contact" className="btn-primary">Get Started Free</Link>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
