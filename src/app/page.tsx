"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

export default function HomePage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* HERO SECTION */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            {/* Left */}
            <div>
              <FadeIn>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    background: "rgba(37, 99, 235, 0.1)",
                    border: "1px solid rgba(37, 99, 235, 0.3)",
                    borderRadius: "20px",
                    color: "#60A5FA",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "24px",
                  }}
                >
                  AI-Based Software Training Institute Since 1994
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, marginBottom: "20px", lineHeight: "1.1" }}>
                  Learn Software Skills That{" "}
                  <span style={{ color: "#2563EB" }}>Build Careers.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "32px", maxWidth: "520px" }}>
                  From fundamentals to advanced AI — master the technologies that top companies demand. 
                  Join 5000+ students who transformed their careers with Hansa Technologies.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px" }}>
                  <Link href="/courses/" className="btn-primary">Explore Programs</Link>
                  <Link href="/contact/" className="btn-secondary">Free Career Counseling</Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "20px" }}>
                  {[
                    { value: "30+", label: "Years" },
                    { value: "5000+", label: "Students" },
                    { value: "1000+", label: "Placed" },
                    { value: "5★", label: "Google" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                      <p style={{ fontSize: "12px", color: "#94A3B8" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            {/* Right - Image Placeholder */}
            <FadeIn delay={0.3}>
              <div
                className="image-placeholder"
                style={{
                  height: "400px",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <div style={{ fontSize: "48px", marginBottom: "12px", opacity: 0.4 }}>🎓</div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>Professional Training Environment</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Our Training Programs
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Industry-aligned courses designed to make you job-ready from day one
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {[
              {
                title: "Software Development",
                desc: "Full Stack, Java, Python, MERN, .NET — build production-ready applications with modern frameworks.",
                icon: "💻",
              },
              {
                title: "AI & Data Science",
                desc: "Machine Learning, Deep Learning, NLP, Computer Vision — harness the power of artificial intelligence.",
                icon: "🤖",
              },
              {
                title: "Professional Programs",
                desc: "Cloud Computing, DevOps, Cyber Security, Digital Marketing — expand your professional toolkit.",
                icon: "🚀",
              },
            ].map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.1}>
                <div className="card" style={{ height: "100%" }}>
                  <div
                    className="image-placeholder"
                    style={{ height: "180px", width: "100%", marginBottom: "20px" }}
                  >
                    <span style={{ fontSize: "40px" }}>{program.icon}</span>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#FFFFFF" }}>
                    {program.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7", marginBottom: "16px" }}>
                    {program.desc}
                  </p>
                  <Link
                    href="/courses/"
                    style={{ color: "#2563EB", fontSize: "14px", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "4px" }}
                  >
                    View Programs <span>→</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HANSA */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Why Choose Hansa Technologies
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Three decades of excellence in transforming beginners into industry professionals
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {[
              { title: "30+ Years Experience", desc: "Trusted by thousands of students since 1994 with a proven track record of success." },
              { title: "AI-Powered Curriculum", desc: "Courses updated with the latest AI tools and technologies used by top companies." },
              { title: "Placement Support", desc: "Dedicated placement cell with 200+ hiring partners ensuring career success." },
              { title: "Real-World Projects", desc: "Build portfolio-worthy projects with industry datasets and real business problems." },
              { title: "1-on-1 Mentorship", desc: "Personal guidance from industry experts who understand your learning pace." },
              { title: "Certified Programs", desc: "Industry-recognized certifications that add value to your professional profile." },
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div style={{ padding: "24px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(18, 32, 51, 0.5)" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2563EB", marginBottom: "16px" }} />
                  <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{feature.title}</h4>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7" }}>{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Your Learning Journey
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                A structured path from enrollment to placement
              </p>
            </div>
          </FadeIn>
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative" }}>
              {/* Connecting Line */}
              <div style={{ position: "absolute", top: "20px", left: "40px", right: "40px", height: "2px", background: "linear-gradient(to right, #2563EB, #3B82F6, #2563EB)" }} />
              {[
                { step: "01", title: "Enroll", desc: "Choose your program" },
                { step: "02", title: "Learn", desc: "Expert-led training" },
                { step: "03", title: "Build", desc: "Real projects" },
                { step: "04", title: "Intern", desc: "Industry exposure" },
                { step: "05", title: "Interview", desc: "Mock interviews" },
                { step: "06", title: "Get Placed", desc: "Career launch" },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.1}>
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1, flex: "1" }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 12px", fontSize: "12px", fontWeight: 700, color: "#FFFFFF",
                      border: "3px solid #08111F",
                    }}>
                      {item.step}
                    </div>
                    <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#FFFFFF", marginBottom: "4px" }}>{item.title}</h4>
                    <p style={{ fontSize: "12px", color: "#94A3B8" }}>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div style={{ position: "relative", paddingLeft: "32px" }}>
              <div style={{ position: "absolute", left: "15px", top: "0", bottom: "0", width: "2px", background: "linear-gradient(to bottom, #2563EB, #3B82F6)" }} />
              {[
                { step: "01", title: "Enroll", desc: "Choose your program" },
                { step: "02", title: "Learn", desc: "Expert-led training" },
                { step: "03", title: "Build", desc: "Real projects" },
                { step: "04", title: "Intern", desc: "Industry exposure" },
                { step: "05", title: "Interview", desc: "Mock interviews" },
                { step: "06", title: "Get Placed", desc: "Career launch" },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.08}>
                  <div style={{ marginBottom: "28px", position: "relative" }}>
                    <div style={{
                      position: "absolute", left: "-25px", width: "22px", height: "22px", borderRadius: "50%",
                      background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "9px", fontWeight: 700, color: "#FFFFFF",
                    }}>
                      {item.step}
                    </div>
                    <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "2px" }}>{item.title}</h4>
                    <p style={{ fontSize: "13px", color: "#94A3B8" }}>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENTS SECTION */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            <div>
              <FadeIn>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                  Placement Excellence
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "32px" }}>
                  Our dedicated placement cell works tirelessly to connect trained students with top 
                  companies. From resume building to interview preparation, we support you at every step.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-3" style={{ gap: "20px" }}>
                  {[
                    { value: "1000+", label: "Students Placed" },
                    { value: "200+", label: "Hiring Partners" },
                    { value: "95%", label: "Placement Rate" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: "center", padding: "16px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p style={{ fontSize: "24px", fontWeight: 700, color: "#2563EB", fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                      <p style={{ fontSize: "12px", color: "#94A3B8", marginTop: "4px" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/placements/" className="btn-primary" style={{ marginTop: "28px", display: "inline-flex" }}>
                  View Placements
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="image-placeholder" style={{ height: "320px", width: "100%" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "48px", marginBottom: "12px", opacity: 0.4 }}>📊</div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>Placement Achievements</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Success Stories
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Hear from our alumni who built successful careers
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {[
              { name: "Rajesh Kumar", role: "Software Engineer at TCS", quote: "Hansa Technologies gave me the foundation I needed. The practical training and placement support helped me land my dream job.", initials: "RK", color: "#2563EB" },
              { name: "Priya Sharma", role: "Data Analyst at Infosys", quote: "The AI and Data Science course was comprehensive. The mentors were always available and the projects were industry-relevant.", initials: "PS", color: "#7C3AED" },
              { name: "Venkat Reddy", role: "Full Stack Developer", quote: "From zero coding knowledge to a full stack developer — Hansa Technologies made it possible with their structured approach.", initials: "VR", color: "#059669" },
            ].map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * 0.1}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%", background: testimonial.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", fontWeight: 600, color: "#FFFFFF",
                    }}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF" }}>{testimonial.name}</p>
                      <p style={{ fontSize: "12px", color: "#94A3B8" }}>{testimonial.role}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", lineHeight: "1.7", fontStyle: "italic" }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div style={{
              textAlign: "center",
              padding: "64px 32px",
              background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(14, 26, 43, 0.8) 100%)",
              borderRadius: "24px",
              border: "1px solid rgba(37, 99, 235, 0.2)",
            }}>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, marginBottom: "16px", color: "#FFFFFF" }}>
                Ready to Start Your Career Journey?
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "480px", margin: "0 auto 28px" }}>
                Join thousands of students who have transformed their careers with industry-ready skills.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
                <Link href="/courses/" className="btn-primary">Explore Programs</Link>
                <Link href="/contact/" className="btn-secondary">Talk to Us</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BRANCHES SECTION */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, marginBottom: "12px" }}>
                Our Branches
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Visit us at our convenient locations</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
            {[
              { name: "Palakollu", landmark: "Near Desalamma Temple", phone: "+91 98488 24481" },
              { name: "Penugonda", landmark: "Near Kanyaka Parameswari Temple", phone: "+91 98488 24481" },
            ].map((branch, i) => (
              <FadeIn key={branch.name} delay={i * 0.1}>
                <div className="card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>📍</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{branch.name}</h3>
                  <p style={{ fontSize: "14px", color: "#CBD5E1", marginBottom: "8px" }}>{branch.landmark}</p>
                  <a href={`tel:${branch.phone.replace(/\s/g, "")}`} style={{ color: "#2563EB", fontSize: "14px", fontWeight: 500 }}>
                    {branch.phone}
                  </a>
                  <div style={{ marginTop: "16px" }}>
                    <a
                      href={`https://maps.google.com/?q=Hansa+Technologies+${branch.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#94A3B8", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "4px" }}
                    >
                      Get Directions <span>↗</span>
                    </a>
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
