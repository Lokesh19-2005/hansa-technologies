"use client";

import FadeIn from "@/components/AnimatedText";

export default function PlacementsPage() {
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
                Placements
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "20px" }}>
                Your Career Starts Here
              </h1>
              <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8" }}>
                Our placement cell works closely with 200+ hiring partners to ensure every trained student 
                gets the opportunity they deserve.
              </p>
            </div>
          </FadeIn>
          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "20px", maxWidth: "800px", margin: "40px auto 0" }}>
              {[
                { value: "1000+", label: "Students Placed" },
                { value: "200+", label: "Hiring Partners" },
                { value: "95%", label: "Placement Rate" },
                { value: "₹4.5L", label: "Avg Package" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center", padding: "24px 16px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p style={{ fontSize: "28px", fontWeight: 700, color: "#2563EB", fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                  <p style={{ fontSize: "13px", color: "#94A3B8", marginTop: "4px" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PLACEMENT SERVICES */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, marginBottom: "12px" }}>Placement Services</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Comprehensive support at every stage of your job search</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {[
              { icon: "📄", title: "Resume Building", desc: "Professional resume crafting with ATS optimization and industry-specific formatting." },
              { icon: "🎤", title: "Mock Interviews", desc: "Practice with HR and technical interview simulations conducted by industry experts." },
              { icon: "💼", title: "Job Referrals", desc: "Direct referrals to our 200+ hiring partner companies across India." },
              { icon: "🎯", title: "Aptitude Training", desc: "Comprehensive aptitude and reasoning preparation for campus drives." },
              { icon: "💬", title: "Soft Skills", desc: "Communication, presentation, and workplace etiquette training sessions." },
              { icon: "🔗", title: "LinkedIn Optimization", desc: "Profile optimization to attract recruiters and build professional network." },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ fontSize: "28px", marginBottom: "16px" }}>{service.icon}</div>
                  <h4 style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{service.title}</h4>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7" }}>{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER TRANSFORMATIONS */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, marginBottom: "12px" }}>Career Transformations</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Real stories of career growth through our programs</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
            {[
              { name: "Sai Krishna", before: "BSc Graduate", after: "Software Engineer at Wipro", program: "Java Full Stack", initials: "SK", color: "#2563EB" },
              { name: "Lakshmi Devi", before: "B.Com Graduate", after: "Data Analyst at Accenture", program: "Data Science", initials: "LD", color: "#7C3AED" },
              { name: "Ramesh Babu", before: "Fresher", after: "Python Developer at HCL", program: "Python Programming", initials: "RB", color: "#059669" },
              { name: "Suresh Reddy", before: "Diploma Holder", after: "Cloud Engineer at Cognizant", program: "AWS Cloud Computing", initials: "SR", color: "#D97706" },
            ].map((story, i) => (
              <FadeIn key={story.name} delay={i * 0.1}>
                <div className="card">
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%", background: story.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", fontWeight: 600, color: "#FFFFFF",
                    }}>
                      {story.initials}
                    </div>
                    <div>
                      <p style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF" }}>{story.name}</p>
                      <p style={{ fontSize: "12px", color: "#94A3B8" }}>{story.program}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "13px", color: "#94A3B8", padding: "4px 10px", background: "rgba(255,255,255,0.05)", borderRadius: "6px" }}>{story.before}</span>
                    <span style={{ color: "#2563EB" }}>→</span>
                    <span style={{ fontSize: "13px", color: "#22C55E", fontWeight: 500 }}>{story.after}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
