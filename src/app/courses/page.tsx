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
    <section style={{ background: "#f8fafc", padding: "80px 20px 100px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", padding: "7px 16px", background: "#eef2ff", border: "1px solid #e0e7ff", borderRadius: "20px", marginBottom: "20px" }}>
              <span style={{ fontSize: "12px", color: "#4f46e5", fontWeight: 600 }}>{courses.length} Programs Available</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>All Programs</h1>
            <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "520px", margin: "0 auto 40px" }}>Every program includes real projects, mentorship, and placement support. Online & Offline available.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "48px", justifyContent: "center" }}>
            {categories.map((cat) => (<button key={cat} onClick={() => setActive(cat)} className={active === cat ? "filter-btn filter-btn-active" : "filter-btn filter-btn-inactive"}>{cat}</button>))}
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "14px" }}>
          {filtered.map((course, i) => (
            <ScaleIn key={course.name} delay={i * 0.03}>
              <div style={{ background: "#ffffff", borderRadius: "14px", padding: "24px", border: "1px solid #f1f5f9", transition: "all 0.3s", height: "100%" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e0e7ff"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(79,70,229,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "20px" }}>{course.icon}</span>
                  <span style={{ fontSize: "11px", color: "#4f46e5", backgroundColor: "#eef2ff", padding: "3px 10px", borderRadius: "10px", fontWeight: 500 }}>{course.level}</span>
                  <span style={{ fontSize: "11px", color: "#94a3b8" }}>{course.duration}</span>
                </div>
                <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a2e", marginBottom: "5px" }}>{course.name}</h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>{course.desc}</p>
              </div>
            </ScaleIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: "56px", background: "linear-gradient(135deg, #1a1a2e, #2d2b55)", borderRadius: "16px", padding: "36px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            <div><h3 style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>Not sure which program to choose?</h3><p style={{ fontSize: "14px", color: "#cbd5e1" }}>Get a free consultation — we&apos;ll help you pick the right path.</p></div>
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Talk to Us</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
