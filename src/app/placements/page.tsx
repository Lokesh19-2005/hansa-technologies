"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

export default function PlacementsPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max" style={{ textAlign: "center" }}>
          <FadeIn>
            <span style={{ display: "inline-block", padding: "8px 16px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "20px", color: "#4ADE80", fontSize: "13px", fontWeight: 500, marginBottom: "24px" }}>
              95% Placement Rate
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "20px", lineHeight: "1.1" }}>
              Placement <span style={{ color: "#2563EB" }}>Excellence</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
              Our dedicated placement cell connects trained students with top companies.
              From resume building to interview preparation, we support you at every step
              of your career journey.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-3" style={{ gap: "20px", maxWidth: "600px", margin: "0 auto" }}>
              {[
                { value: "1000+", label: "Students Placed" },
                { value: "200+", label: "Hiring Partners" },
                { value: "95%", label: "Placement Rate" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center", padding: "20px 12px", background: "#122033", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p style={{ fontSize: "26px", fontWeight: 700, color: "#2563EB", fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                  <p style={{ fontSize: "12px", color: "#94A3B8", marginTop: "4px" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Placement Services */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>Placement Services</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Comprehensive career support from day one to placement</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {[
              { icon: "📄", title: "Resume Building", desc: "Professional resume crafted by industry experts highlighting your skills and projects." },
              { icon: "🎤", title: "Mock Interviews", desc: "Practice with real interview questions. Get feedback from HR professionals." },
              { icon: "💼", title: "Job Referrals", desc: "Direct referrals to our 200+ hiring partner companies across India." },
              { icon: "🎯", title: "Aptitude Training", desc: "Preparation for technical and aptitude rounds in placement drives." },
              { icon: "🤝", title: "Soft Skills", desc: "Communication, presentation, and workplace etiquette training." },
              { icon: "📊", title: "Portfolio Development", desc: "Build an impressive portfolio with real-world projects to showcase." },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{service.icon}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{service.title}</h3>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7" }}>{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Career Transformations */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>Career Transformations</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Real success stories from our placed students</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px" }}>
            {[
              { name: "Srinivas R.", from: "BSc Graduate", to: "Software Engineer at TCS", course: "Full Stack Development" },
              { name: "Lakshmi P.", from: "BCA Student", to: "Data Analyst at Infosys", course: "Data Science" },
              { name: "Mahesh K.", from: "Mechanical Engineer", to: "Python Developer at Wipro", course: "Python & Django" },
              { name: "Divya S.", from: "Commerce Graduate", to: "Digital Marketing Manager", course: "Digital Marketing" },
              { name: "Ravi T.", from: "Diploma Holder", to: "Cloud Engineer at AWS Partner", course: "Cloud Computing" },
              { name: "Anjali M.", from: "Electronics Engineer", to: "AI Engineer at Startup", course: "AI & Machine Learning" },
            ].map((story, i) => (
              <FadeIn key={story.name} delay={i * 0.08}>
                <div className="card" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 600, color: "#FFF", flexShrink: 0 }}>
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF" }}>{story.name}</p>
                    <p style={{ fontSize: "13px", color: "#94A3B8" }}>{story.from} → <span style={{ color: "#4ADE80" }}>{story.to}</span></p>
                    <p style={{ fontSize: "12px", color: "#60A5FA", marginTop: "2px" }}>Course: {story.course}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>Placement Process</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Our structured approach to getting you placed</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "20px" }}>
            {[
              { step: "01", title: "Skill Assessment", desc: "Evaluate your current skills and career goals" },
              { step: "02", title: "Training & Projects", desc: "Complete course with real-world projects" },
              { step: "03", title: "Interview Prep", desc: "Resume, mock interviews, and soft skills" },
              { step: "04", title: "Placement Drives", desc: "Connect with hiring partners for interviews" },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "32px 20px", background: "#122033", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "16px", fontWeight: 700, color: "#FFF" }}>
                    {item.step}
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{item.title}</h4>
                  <p style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", padding: "56px 32px", background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(14,26,43,0.8) 100%)", borderRadius: "24px", border: "1px solid rgba(37,99,235,0.2)" }}>
              <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, marginBottom: "16px", color: "#FFFFFF" }}>
                Ready to Launch Your Career?
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "480px", margin: "0 auto 28px" }}>
                Join our placement-focused training and get hired by top companies.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
                <Link href="/courses/" className="btn-primary">Choose Your Course</Link>
                <Link href="/contact/" className="btn-secondary">Talk to Placement Team</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
