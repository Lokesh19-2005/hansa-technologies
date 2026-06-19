"use client";

import FadeIn from "@/components/AnimatedText";

export default function AboutPage() {
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
                About Us
              </span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "20px" }}>
                Shaping Tech Careers Since 1994
              </h1>
              <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8" }}>
                Hansa Technologies has been at the forefront of IT education for over three decades,
                empowering students with the skills and confidence to succeed in the technology industry.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
            <FadeIn>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(37, 99, 235, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "20px" }}>🎯</span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>Our Mission</h3>
                <p style={{ fontSize: "15px", color: "#CBD5E1", lineHeight: "1.8" }}>
                  To bridge the gap between academic knowledge and industry requirements by providing 
                  world-class software training that prepares students for successful careers in technology.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(37, 99, 235, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "20px" }}>🔭</span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>Our Vision</h3>
                <p style={{ fontSize: "15px", color: "#CBD5E1", lineHeight: "1.8" }}>
                  To become the most trusted technology education partner in India, creating a generation 
                  of skilled professionals who drive innovation and growth in the global tech ecosystem.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, marginBottom: "12px" }}>Our Journey</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Milestones that define our legacy</p>
            </div>
          </FadeIn>
          <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", paddingLeft: "32px" }}>
            <div style={{ position: "absolute", left: "15px", top: "0", bottom: "0", width: "2px", background: "linear-gradient(to bottom, #2563EB, #3B82F6, #2563EB)" }} />
            {[
              { year: "1994", title: "Foundation", desc: "Hansa Technologies established in Palakollu with a vision to provide quality IT education." },
              { year: "2004", title: "Expansion", desc: "Opened our second branch in Penugonda to reach more aspiring tech professionals." },
              { year: "2015", title: "Digital Transformation", desc: "Upgraded curriculum to include cloud computing, data science, and modern frameworks." },
              { year: "2020", title: "AI Integration", desc: "Became one of the first institutes in the region to offer AI and Machine Learning courses." },
              { year: "2024", title: "30 Years Strong", desc: "Celebrating 30+ years with 5000+ trained students and 1000+ successful placements." },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div style={{ marginBottom: "36px", position: "relative" }}>
                  <div style={{
                    position: "absolute", left: "-25px", width: "22px", height: "22px", borderRadius: "50%",
                    background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "8px", fontWeight: 700, color: "#FFFFFF", border: "3px solid #08111F",
                  }} />
                  <span style={{ color: "#2563EB", fontSize: "13px", fontWeight: 600 }}>{item.year}</span>
                  <h4 style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginTop: "4px", marginBottom: "6px" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, marginBottom: "12px" }}>Our Core Values</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Principles that guide everything we do</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
            {[
              { icon: "⭐", title: "Excellence", desc: "We pursue the highest standards in education and training delivery." },
              { icon: "🤝", title: "Integrity", desc: "Honest communication and transparent processes with every student." },
              { icon: "💡", title: "Innovation", desc: "Continuously updating our methods and curriculum to stay current." },
              { icon: "❤️", title: "Student First", desc: "Every decision we make centers around student success and growth." },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "32px 20px", borderRadius: "16px", background: "rgba(18, 32, 51, 0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>{value.icon}</div>
                  <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{value.title}</h4>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7" }}>{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
