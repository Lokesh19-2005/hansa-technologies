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
    <section className="px-5 sm:px-6 py-16 sm:py-20">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <h1 className="text-[2rem] sm:text-[2.8rem] font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            All Programs
          </h1>
          <p className="text-[14px] sm:text-[15px] mb-8 sm:mb-10" style={{ color: "rgba(255,255,255,0.35)" }}>
            Every program includes real projects, mentorship, and placement support.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((course, i) => (
            <FadeIn key={course.name} delay={i * 0.02}>
              <div className="card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full" style={{ color: "#4cd964", backgroundColor: "rgba(76,217,100,0.08)" }}>{course.level}</span>
                  <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>{course.duration}</span>
                </div>
                <h3 className="text-[14px] font-semibold text-white mb-1">{course.name}</h3>
                <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>{course.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="card mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ borderColor: "rgba(76,217,100,0.15)", background: "rgba(76,217,100,0.03)" }}>
            <div>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-white mb-1">Not sure which program to choose?</h3>
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>Get a free consultation — we&apos;ll help you pick the right path.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">Talk to Us</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
