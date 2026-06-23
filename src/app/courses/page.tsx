"use client";
import { useState } from "react";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import Link from "next/link";

const categories = ["All", "Software", "Professional", "Design & Technical", "Career Development"];

const courses = [
  { name: "Full Stack Python Development", category: "Software", duration: "6 Months", level: "Beginner → Advanced", desc: "Python, Django, Flask, REST APIs, databases, deployment.", icon: "🐍" },
  { name: "Data Science & Machine Learning", category: "Software", duration: "6 Months", level: "Intermediate → Advanced", desc: "Statistical modeling, deep learning, NLP, analytics.", icon: "📊" },
  { name: "AI Automation Developer", category: "Software", duration: "5 Months", level: "Beginner → Advanced", desc: "AI/ML, RPA, automation frameworks, cloud services.", icon: "🤖" },
  { name: "Java Programming", category: "Software", duration: "5 Months", level: "Beginner → Advanced", desc: "Core Java, Spring Boot, microservices, enterprise.", icon: "☕" },
  { name: "Web Development", category: "Software", duration: "5 Months", level: "Beginner → Advanced", desc: "React, Node.js, JavaScript, HTML/CSS, MongoDB.", icon: "🌐" },
  { name: "Data Analyst", category: "Software", duration: "4 Months", level: "Beginner → Intermediate", desc: "SQL, Power BI, statistics, data visualization.", icon: "📈" },
  { name: "C Programming", category: "Software", duration: "3 Months", level: "Beginner", desc: "Fundamentals, data structures, algorithms.", icon: "⚙️" },
  { name: "Tally Prime", category: "Professional", duration: "2 Months", level: "Beginner", desc: "Accounting, GST, inventory, financial reporting.", icon: "📒" },
  { name: "SAP (FICO, MM, SD)", category: "Professional", duration: "4 Months", level: "Intermediate", desc: "ERP modules, business processes, configuration.", icon: "🏢" },
  { name: "Power BI", category: "Professional", duration: "2 Months", level: "Beginner → Intermediate", desc: "Dashboards, DAX, data modeling, reporting.", icon: "📉" },
  { name: "Advanced Excel", category: "Professional", duration: "1.5 Months", level: "Intermediate", desc: "VBA, pivot tables, automation, analysis.", icon: "📗" },
  { name: "SQL", category: "Professional", duration: "2 Months", level: "Beginner → Intermediate", desc: "Querying, optimization, stored procedures.", icon: "🗃️" },
  { name: "Oracle", category: "Professional", duration: "3 Months", level: "Intermediate", desc: "PL/SQL, database management, tuning.", icon: "🔶" },
  { name: "MySQL", category: "Professional", duration: "2 Months", level: "Beginner → Intermediate", desc: "Database design, replication, optimization.", icon: "🐬" },
  { name: "AutoCAD", category: "Design & Technical", duration: "3 Months", level: "Beginner → Intermediate", desc: "2D/3D design, drafting, industry standards.", icon: "📐" },
  { name: "MS Office", category: "Design & Technical", duration: "1.5 Months", level: "Beginner", desc: "Word, Excel, PowerPoint, productivity.", icon: "📄" },
  { name: "Digital Marketing", category: "Design & Technical", duration: "3 Months", level: "Beginner → Intermediate", desc: "SEO, Google Ads, social media, content strategy.", icon: "📱" },
  { name: "Ethical Hacking", category: "Design & Technical", duration: "4 Months", level: "Intermediate → Advanced", desc: "Penetration testing, network security, forensics.", icon: "🔒" },
  { name: "Internships & Academic Projects", category: "Career Development", duration: "Flexible", level: "All Levels", desc: "B.Tech, MCA, BCA, Degree — real industry projects.", icon: "💼" },
  { name: "Campus Recruitment Training", category: "Career Development", duration: "2 Months", level: "All Levels", desc: "Aptitude, reasoning, verbal, group discussion.", icon: "🧠" },
  { name: "Soft Skills & Interview Prep", category: "Career Development", duration: "1 Month", level: "All Levels", desc: "Communication, presentation, mock interviews.", icon: "🎤" },
];

export default function CoursesPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <section style={{ background: "#f8fafc", padding: "80px 20px 100px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>All Programs</h1>
            <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "500px", margin: "0 auto" }}>
              {courses.length} programs available. Every program includes real projects, mentorship, and placement support.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={active === cat ? "filter-btn filter-btn-active" : "filter-btn filter-btn-inactive"}>{cat}</button>
            ))}
          </div>
        </FadeIn>

        {/* Course Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
          {filtered.map((course, i) => (
            <ScaleIn key={course.name} delay={i * 0.02}>
              <div style={{ background: "#ffffff", borderRadius: "14px", padding: "24px", border: "1px solid #f1f5f9", height: "100%", transition: "all 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e0e7ff"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,70,229,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "none"; }}>
                
                {/* Top row: icon + badges */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "24px" }}>{course.icon}</span>
                    <span style={{ fontSize: "11px", color: "#4f46e5", backgroundColor: "#eef2ff", padding: "4px 10px", borderRadius: "6px", fontWeight: 600 }}>{course.level}</span>
                  </div>
                  <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>{course.duration}</span>
                </div>

                {/* Name */}
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px" }}>{course.name}</h3>
                
                {/* Description */}
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6, marginBottom: "16px" }}>{course.desc}</p>

                {/* WhatsApp Enquiry */}
                <a
                  href={`https://wa.me/919949960200?text=${encodeURIComponent(`Hi HANSA Technologies! 👋\n\nI'm interested in the *${course.name}* program.\n\nDuration: ${course.duration}\nLevel: ${course.level}\n\nPlease share details about:\n• Fee structure\n• Batch timings\n• Demo class\n\nThank you!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#25D366", textDecoration: "none", padding: "8px 14px", background: "rgba(37, 211, 102, 0.08)", borderRadius: "8px", border: "1px solid rgba(37, 211, 102, 0.15)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(37, 211, 102, 0.15)"; e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(37, 211, 102, 0.08)"; e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.15)"; }}
                >
                  💬 Enquire on WhatsApp
                </a>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* CTA Banner */}
        <FadeIn delay={0.15}>
          <div style={{ marginTop: "56px", background: "linear-gradient(135deg, #1a1a2e, #2d2b55)", borderRadius: "16px", padding: "36px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            <div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>Not sure which program to choose?</h3>
              <p style={{ fontSize: "14px", color: "#cbd5e1" }}>Get a free consultation — we&apos;ll help you pick the right path.</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Talk to Us</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
