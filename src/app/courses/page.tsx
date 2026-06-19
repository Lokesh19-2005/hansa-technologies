"use client";

import { useState } from "react";
import { FadeIn } from "@/components/AnimatedText";
import Link from "next/link";

const categories = ["All", "Software", "Professional", "Design & Technical"];

const courses = [
  { name: "Full Stack Python Development", category: "Software", duration: "6 Months", level: "Beginner → Advanced", desc: "Python, Django, Flask, REST APIs, databases, deployment." },
  { name: "Data Science & Machine Learning", category: "Software", duration: "6 Months", level: "Intermediate → Advanced", desc: "Statistical modeling, deep learning, NLP, analytics." },
  { name: "AI Automation Developer", category: "Software", duration: "5 Months", level: "Beginner → Advanced", desc: "AI/ML, RPA, automation frameworks, cloud services." },
  { name: "Java Programming", category: "Software", duration: "5 Months", level: "Beginner → Advanced", desc: "Core Java, Spring Boot, microservices, enterprise." },
  { name: "Web Development", category: "Software", duration: "5 Months", level: "Beginner → Advanced", desc: "React, Node.js, JavaScript, HTML/CSS, MongoDB." },
  { name: "Data Analyst", category: "Software", duration: "4 Months", level: "Beginner → Intermediate", desc: "SQL, Power BI, statistics, data visualization." },
  { name: "C Programming", category: "Software", duration: "3 Months", level: "Beginner", desc: "Fundamentals, data structures, algorithms." },
  { name: "Tally Prime", category: "Professional", duration: "2 Months", level: "Beginner", desc: "Accounting, GST, inventory, financial reporting." },
  { name: "SAP", category: "Professional", duration: "4 Months", level: "Intermediate", desc: "ERP modules, business processes, configuration." },
  { name: "Power BI", category: "Professional", duration: "2 Months", level: "Beginner → Intermediate", desc: "Dashboards, DAX, data modeling, reporting." },
  { name: "Advanced Excel", category: "Professional", duration: "1.5 Months", level: "Intermediate", desc: "VBA, pivot tables, automation, analysis." },
  { name: "SQL", category: "Professional", duration: "2 Months", level: "Beginner → Intermediate", desc: "Querying, optimization, stored procedures." },
  { name: "Oracle", category: "Professional", duration: "3 Months", level: "Intermediate", desc: "PL/SQL, database management, tuning." },
  { name: "MySQL", category: "Professional", duration: "2 Months", level: "Beginner → Intermediate", desc: "Database design, replication, optimization." },
  { name: "AutoCAD", category: "Design & Technical", duration: "3 Months", level: "Beginner → Intermediate", desc: "2D/3D design, drafting, industry standards." },
  { name: "MS Office", category: "Design & Technical", duration: "1.5 Months", level: "Beginner", desc: "Word, Excel, PowerPoint, productivity." },
  { name: "Digital Marketing", category: "Design & Technical", duration: "3 Months", level: "Beginner → Intermediate", desc: "SEO, Google Ads, social media, content strategy." },
  { name: "Ethical Hacking", category: "Design & Technical", duration: "4 Months", level: "Intermediate → Advanced", desc: "Penetration testing, network security, forensics." },
];

export default function CoursesPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <FadeIn>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
            All Programs
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.35)", marginBottom: "36px" }}>
            Every program includes real projects, mentorship, and placement support.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={active === cat ? "filter-btn filter-btn-active" : "filter-btn filter-btn-inactive"}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "12px" }}>
          {filtered.map((course, i) => (
            <FadeIn key={course.name} delay={i * 0.02}>
              <div className="card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", color: "#4cd964", backgroundColor: "rgba(76,217,100,0.08)", padding: "3px 10px", borderRadius: "12px" }}>{course.level}</span>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>{course.duration}</span>
                </div>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "6px" }}>{course.name}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{course.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="card" style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", borderColor: "rgba(76,217,100,0.15)", background: "rgba(76,217,100,0.03)" }}>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>Not sure which program to choose?</h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>Get a free consultation — we&apos;ll help you pick the right path.</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Talk to Us</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
