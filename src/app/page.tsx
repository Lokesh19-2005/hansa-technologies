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
      <section style={{ backgroundColor: "#18181b", color: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ maxWidth: "600px" }}>
              <img src="/logo.png" alt="Hansa Technologies" style={{ height: "100px", marginBottom: "32px" }} />

              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Learn software skills that get you hired.
              </h1>

              <p style={{ fontSize: "16px", color: "#a1a1aa", lineHeight: 1.6, marginBottom: "32px" }}>
                Master in-demand skills in Python, AI, Data Science, and more through practical training, real projects, and dedicated placement support.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
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
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #f4f4f5", padding: "24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <FadeIn>
            <div style={{ display: "flex", gap: "40px" }}>
              {[
                { v: "30+", l: "Years" },
                { v: "5,000+", l: "Students Trained" },
                { v: "1,000+", l: "Placements" },
                { v: "5★", l: "Google Rating" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <span className="stat-value" style={{ display: "block" }}>{s.v}</span>
                  <span className="stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <span style={{ fontSize: "12px", color: "#a1a1aa" }}>AI-Based Training Institute · Since 1994</span>
        </div>
      </section>

      {/* Find your path */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "26px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, marginBottom: "8px", color: "#18181b" }}>Find your path</h2>
            <p style={{ fontSize: "14px", color: "#71717a", marginBottom: "40px" }}>Choose the track that matches your goals.</p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { title: "I'm starting fresh", desc: "Zero experience? We'll take you from basics to job-ready with step-by-step courses and hands-on projects.", cta: "Explore Beginner Programs →" },
              { title: "I want to switch careers", desc: "Already working but want to move into tech? Our accelerated programs are designed for career changers.", cta: "View Career Tracks →" },
              { title: "I want to upskill", desc: "Already in tech? Level up with AI, data science, and advanced programming to stay ahead.", cta: "Browse Advanced Courses →" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <Link href="/courses" className="card-muted" style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#18181b", marginBottom: "8px" }}>{p.title}</h3>
                  <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.6, marginBottom: "16px" }}>{p.desc}</p>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#18181b" }}>{p.cta}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section style={{ backgroundColor: "#fafafa", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
              <div>
                <h2 style={{ fontSize: "26px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#18181b", marginBottom: "8px" }}>Popular Programs</h2>
                <p style={{ fontSize: "14px", color: "#71717a" }}>Every program includes projects, mentorship & placement support.</p>
              </div>
              <Link href="/courses" style={{ fontSize: "13px", fontWeight: 500, color: "#18181b", textDecoration: "none" }}>View All →</Link>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {topCourses.map((course, i) => (
              <FadeIn key={course.name} delay={i * 0.05}>
                <Link href="/courses" className="card" style={{ display: "block", textDecoration: "none", height: "100%" }}>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "11px", color: "#a1a1aa", backgroundColor: "#f4f4f5", padding: "2px 8px", borderRadius: "4px" }}>{course.level}</span>
                    <span style={{ fontSize: "11px", color: "#a1a1aa" }}>{course.duration}</span>
                  </div>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#18181b", marginBottom: "6px" }}>{course.name}</h3>
                  <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.5 }}>{course.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "26px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#18181b", marginBottom: "40px" }}>Student success stories</h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { text: "From zero coding knowledge to a developer role at TCS in 8 months. The practical approach made all the difference.", name: "Sai Krishna", role: "Full Stack Developer, TCS" },
              { text: "Got placed at Infosys within a month of course completion. The mentors are genuinely invested in your success.", name: "Priya Reddy", role: "Data Analyst, Infosys" },
              { text: "World-class training quality in our small town. Interview prep and placement support were exceptional.", name: "Venkat Rao", role: "SAP Consultant, Deloitte" },
              { text: "Career switch from mechanical engineering to IT. The Python course gave me everything I needed.", name: "Kiran Reddy", role: "Python Developer, Infosys" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <div style={{ backgroundColor: "#fafafa", borderRadius: "12px", padding: "24px" }}>
                  <p style={{ fontSize: "14px", color: "#52525b", lineHeight: 1.6, marginBottom: "16px" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#18181b" }}>{t.name}</p>
                  <p style={{ fontSize: "12px", color: "#a1a1aa" }}>{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#18181b", color: "#ffffff", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "26px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, marginBottom: "12px" }}>Ready to start your learning journey?</h2>
            <p style={{ fontSize: "14px", color: "#a1a1aa", marginBottom: "32px" }}>Join 5,000+ students who transformed their careers. Free consultation available.</p>
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
