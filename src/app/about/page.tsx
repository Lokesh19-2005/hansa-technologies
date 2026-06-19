"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            <div>
              <FadeIn>
                <span style={{ display: "inline-block", padding: "8px 16px", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "20px", color: "#60A5FA", fontSize: "13px", fontWeight: 500, marginBottom: "24px" }}>
                  Established 1994
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "20px", lineHeight: "1.1" }}>
                  About <span style={{ color: "#2563EB" }}>Hansa Technologies</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "16px" }}>
                  Hansa Technologies is a premier AI-Based Software Training Institute
                  with over 30 years of experience in transforming students into
                  industry-ready professionals.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8" }}>
                  Founded in 1994, we have trained 5000+ students and placed
                  1000+ in top IT companies across India. Our Google 5-star rating
                  reflects our commitment to quality education.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div style={{ height: "380px", borderRadius: "16px", overflow: "hidden" }}>
                <img src="/images/classroom.jpg" alt="Hansa Technologies classroom" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
            <FadeIn>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>🎯</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>Our Mission</h3>
                <p style={{ fontSize: "15px", color: "#CBD5E1", lineHeight: "1.8" }}>
                  To empower students with industry-ready skills through AI-based training methodologies,
                  practical project experience, and comprehensive placement support, making quality
                  technology education accessible to all.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>🔭</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>Our Vision</h3>
                <p style={{ fontSize: "15px", color: "#CBD5E1", lineHeight: "1.8" }}>
                  To become the most trusted technology training institute in India, recognized for
                  producing industry-ready professionals who drive innovation and digital transformation
                  across organizations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>Our Journey</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Three decades of transforming lives through technology education</p>
            </div>
          </FadeIn>
          <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative", paddingLeft: "40px" }}>
            <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #2563EB, #3B82F6, #2563EB)" }} />
            {[
              { year: "1994", title: "Foundation", desc: "Hansa Technologies established in Palakollu with a vision to provide quality computer education." },
              { year: "2000", title: "Growth Phase", desc: "Expanded to multiple classrooms. Introduced advanced programming courses." },
              { year: "2008", title: "Placement Cell", desc: "Launched dedicated placement support. First batch of 100+ placements achieved." },
              { year: "2015", title: "Penugonda Branch", desc: "Opened second branch to serve more students in the region." },
              { year: "2020", title: "Online Training", desc: "Launched online training programs. Adapted to digital-first learning." },
              { year: "2023", title: "AI Integration", desc: "Integrated AI-powered curriculum. 5000+ students milestone reached." },
              { year: "2024", title: "30 Years", desc: "Celebrating 30 years of excellence. 1000+ placements milestone achieved." },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08}>
                <div style={{ marginBottom: "32px", position: "relative" }}>
                  <div style={{ position: "absolute", left: "-32px", width: "24px", height: "24px", borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: 700, color: "#FFF", border: "3px solid #08111F" }} />
                  <span style={{ color: "#2563EB", fontSize: "13px", fontWeight: 600 }}>{item.year}</span>
                  <h4 style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginTop: "4px", marginBottom: "4px" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.6" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>Our Values</h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>The principles that guide everything we do</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
            {[
              { icon: "🎓", title: "Excellence", desc: "Committed to the highest standards in education and training." },
              { icon: "🤝", title: "Integrity", desc: "Transparent practices and honest guidance for every student." },
              { icon: "💡", title: "Innovation", desc: "Constantly evolving curriculum with latest technologies." },
              { icon: "❤️", title: "Student First", desc: "Every decision is made with student success in mind." },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>{value.icon}</div>
                  <h4 style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{value.title}</h4>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.6" }}>{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "24px" }}>
            {[
              { value: "30+", label: "Years of Excellence" },
              { value: "5000+", label: "Students Trained" },
              { value: "1000+", label: "Placements" },
              { value: "200+", label: "Hiring Partners" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "32px 16px", background: "#122033", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p style={{ fontSize: "32px", fontWeight: 700, color: "#2563EB", fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", marginTop: "8px" }}>{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", padding: "56px 32px", background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(14,26,43,0.8) 100%)", borderRadius: "24px", border: "1px solid rgba(37,99,235,0.2)" }}>
              <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, marginBottom: "16px", color: "#FFFFFF" }}>
                Join the Hansa Technologies Family
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "480px", margin: "0 auto 28px" }}>
                Be part of our 30-year legacy of transforming careers through technology education.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
                <Link href="/courses/" className="btn-primary">Explore Programs</Link>
                <Link href="/contact/" className="btn-secondary">Contact Us</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
