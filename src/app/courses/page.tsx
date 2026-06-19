"use client";

import { useState } from "react";
import FadeIn from "@/components/AnimatedText";

const categories = ["All", "Development", "AI & Data", "Professional"];

const courses = [
  { title: "Full Stack Web Development", category: "Development", duration: "6 Months", desc: "Master React, Node.js, MongoDB, and modern web technologies to build complete applications.", icon: "🌐" },
  { title: "Java Full Stack", category: "Development", duration: "5 Months", desc: "Enterprise-grade development with Java, Spring Boot, Hibernate, and Angular.", icon: "☕" },
  { title: "Python Programming", category: "Development", duration: "3 Months", desc: "From basics to advanced Python including Django, Flask, and automation scripting.", icon: "🐍" },
  { title: "MERN Stack", category: "Development", duration: "4 Months", desc: "MongoDB, Express.js, React, Node.js — the complete JavaScript stack for modern apps.", icon: "⚛️" },
  { title: "AI & Machine Learning", category: "AI & Data", duration: "6 Months", desc: "Deep learning, neural networks, NLP, and computer vision with TensorFlow and PyTorch.", icon: "🤖" },
  { title: "Data Science & Analytics", category: "AI & Data", duration: "5 Months", desc: "Statistical analysis, data visualization, Pandas, NumPy, and business intelligence.", icon: "📊" },
  { title: "Cloud Computing (AWS)", category: "Professional", duration: "3 Months", desc: "AWS services, architecture, deployment, and cloud infrastructure management.", icon: "☁️" },
  { title: "DevOps Engineering", category: "Professional", duration: "4 Months", desc: "Docker, Kubernetes, CI/CD pipelines, and infrastructure as code.", icon: "⚙️" },
  { title: "Cyber Security", category: "Professional", duration: "4 Months", desc: "Network security, ethical hacking, penetration testing, and security compliance.", icon: "🛡️" },
  { title: ".NET Development", category: "Development", duration: "5 Months", desc: "C#, ASP.NET Core, Entity Framework, and Microsoft Azure integration.", icon: "💠" },
  { title: "Data Engineering", category: "AI & Data", duration: "5 Months", desc: "Big data tools, Apache Spark, ETL pipelines, and data warehouse design.", icon: "🔧" },
  { title: "Digital Marketing", category: "Professional", duration: "3 Months", desc: "SEO, SEM, social media marketing, Google Analytics, and content strategy.", icon: "📱" },
];

export default function CoursesPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? courses : courses.filter(c => c.category === active);

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
              <span style={{
                display: "inline-block", padding: "8px 16px",
                background: "rgba(37, 99, 235, 0.1)", border: "1px solid rgba(37, 99, 235, 0.3)",
                borderRadius: "20px", color: "#60A5FA", fontSize: "13px", fontWeight: 500, marginBottom: "24px",
              }}>
                Our Programs
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "20px" }}>
                Industry-Ready Training Programs
              </h1>
              <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8" }}>
                Choose from our comprehensive range of courses designed to launch your career in technology.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-padding" style={{ background: "#0E1A2B", paddingTop: "40px" }}>
        <div className="container-max">
          {/* Filter Buttons */}
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px", justifyContent: "center" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: active === cat ? "1px solid #2563EB" : "1px solid rgba(255,255,255,0.1)",
                    background: active === cat ? "rgba(37, 99, 235, 0.15)" : "transparent",
                    color: active === cat ? "#60A5FA" : "#CBD5E1",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {filtered.map((course, i) => (
              <FadeIn key={course.title} delay={i * 0.05}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "10px",
                      background: "rgba(37, 99, 235, 0.1)", display: "flex",
                      alignItems: "center", justifyContent: "center", fontSize: "22px",
                    }}>
                      {course.icon}
                    </div>
                    <span style={{ fontSize: "12px", color: "#94A3B8", background: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: "12px" }}>
                      {course.duration}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "10px" }}>{course.title}</h3>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7", marginBottom: "16px" }}>{course.desc}</p>
                  <span style={{ color: "#2563EB", fontSize: "13px", fontWeight: 500 }}>Learn more →</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
