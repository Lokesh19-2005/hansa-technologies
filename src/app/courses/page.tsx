"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

const courses = [
  {
    category: "Software Development",
    color: "#2563EB",
    items: [
      { title: "Full Stack Development (MERN)", duration: "6 Months", level: "Beginner to Advanced" },
      { title: "Python Programming & Django", duration: "4 Months", level: "Beginner to Intermediate" },
      { title: "Java & Spring Boot", duration: "5 Months", level: "Beginner to Advanced" },
      { title: "MEAN Stack Development", duration: "5 Months", level: "Intermediate" },
      { title: ".NET Development (C#)", duration: "4 Months", level: "Beginner to Intermediate" },
      { title: "React.js & Next.js", duration: "3 Months", level: "Intermediate" },
      { title: "Node.js Backend Development", duration: "3 Months", level: "Intermediate" },
    ],
  },
  {
    category: "AI & Data Science",
    color: "#7C3AED",
    items: [
      { title: "Data Science & Machine Learning", duration: "6 Months", level: "Intermediate to Advanced" },
      { title: "Artificial Intelligence & Deep Learning", duration: "6 Months", level: "Advanced" },
      { title: "Natural Language Processing", duration: "3 Months", level: "Advanced" },
      { title: "Computer Vision", duration: "3 Months", level: "Advanced" },
      { title: "Data Analytics with Python", duration: "4 Months", level: "Beginner to Intermediate" },
      { title: "Power BI & Tableau", duration: "2 Months", level: "Beginner" },
      { title: "R Programming for Statistics", duration: "3 Months", level: "Intermediate" },
    ],
  },
  {
    category: "Professional Programs",
    color: "#059669",
    items: [
      { title: "Cloud Computing (AWS/Azure)", duration: "4 Months", level: "Intermediate" },
      { title: "DevOps & CI/CD", duration: "4 Months", level: "Intermediate to Advanced" },
      { title: "Cyber Security", duration: "5 Months", level: "Intermediate" },
      { title: "Digital Marketing & SEO", duration: "3 Months", level: "Beginner" },
      { title: "Salesforce Administration", duration: "3 Months", level: "Beginner to Intermediate" },
      { title: "Software Testing & QA", duration: "3 Months", level: "Beginner" },
      { title: "Database Management (SQL/NoSQL)", duration: "2 Months", level: "Beginner" },
    ],
  },
  {
    category: "Design & Technical",
    color: "#D946EF",
    items: [
      { title: "UI/UX Design & Figma", duration: "3 Months", level: "Beginner" },
      { title: "Graphic Design & Adobe Suite", duration: "3 Months", level: "Beginner" },
      { title: "AutoCAD & 3D Modeling", duration: "4 Months", level: "Beginner to Intermediate" },
      { title: "Hardware & Networking", duration: "3 Months", level: "Beginner" },
    ],
  },
];

export default function CoursesPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max" style={{ textAlign: "center" }}>
          <FadeIn>
            <span style={{ display: "inline-block", padding: "8px 16px", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "20px", color: "#60A5FA", fontSize: "13px", fontWeight: 500, marginBottom: "24px" }}>
              25+ Industry-Ready Courses
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "16px", lineHeight: "1.1" }}>
              Our Training <span style={{ color: "#2563EB" }}>Programs</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: "16px", color: "#CBD5E1", maxWidth: "560px", margin: "0 auto" }}>
              Industry-aligned courses with hands-on projects, expert mentorship, and placement support
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Course Images Banner */}
      <section style={{ background: "#0E1A2B", padding: "0 24px 40px" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "16px" }}>
            <FadeIn>
              <div style={{ height: "180px", borderRadius: "12px", overflow: "hidden" }}>
                <img src="/images/python-dev.jpg" alt="Software development" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ height: "180px", borderRadius: "12px", overflow: "hidden" }}>
                <img src="/images/data-science.jpg" alt="Data Science training" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ height: "180px", borderRadius: "12px", overflow: "hidden" }}>
                <img src="/images/ai-learning.jpg" alt="AI and Machine Learning" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      {courses.map((category, catIdx) => (
        <section key={category.category} className="section-padding" style={{ background: catIdx % 2 === 0 ? "#0E1A2B" : "#08111F" }}>
          <div className="container-max">
            <FadeIn>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: category.color }} />
                  <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700 }}>{category.category}</h2>
                </div>
                <p style={{ color: "#94A3B8", fontSize: "14px", paddingLeft: "24px" }}>{category.items.length} courses available</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "20px" }}>
              {category.items.map((course, i) => (
                <FadeIn key={course.title} delay={i * 0.05}>
                  <div className="card" style={{ height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                      <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", flex: 1 }}>{course.title}</h4>
                    </div>
                    <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "13px", color: "#94A3B8" }}>⏱ {course.duration}</span>
                      <span style={{ fontSize: "13px", color: "#94A3B8" }}>📊 {course.level}</span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ padding: "4px 10px", background: `${category.color}20`, color: category.color, fontSize: "11px", borderRadius: "12px", fontWeight: 500 }}>
                        Certification
                      </span>
                      <span style={{ padding: "4px 10px", background: "rgba(34,197,94,0.1)", color: "#4ADE80", fontSize: "11px", borderRadius: "12px", fontWeight: 500 }}>
                        Placement Support
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", padding: "56px 32px", background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(14,26,43,0.8) 100%)", borderRadius: "24px", border: "1px solid rgba(37,99,235,0.2)" }}>
              <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, marginBottom: "16px", color: "#FFFFFF" }}>
                Not Sure Which Course is Right for You?
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "480px", margin: "0 auto 28px" }}>
                Get a free career counseling session. Our experts will help you choose the best path.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
                <Link href="/contact/" className="btn-primary">Free Career Counseling</Link>
                <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
