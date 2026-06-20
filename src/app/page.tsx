"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

const phone = "919949960200";
function waLink(course: string) {
  const msg = encodeURIComponent(`Hello HANSA Technologies,\nI am interested in the "${course}" program.\nPlease share details about the course duration, fees, and batch timings.\nThank you.`);
  return `https://wa.me/${phone}?text=${msg}`;
}

export default function HomePage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* HERO SECTION */}
      <section style={{ padding: "80px 24px", background: "#08111F" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            <div>
              <FadeIn>
                <span style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "rgba(37, 99, 235, 0.1)",
                  border: "1px solid rgba(37, 99, 235, 0.3)",
                  borderRadius: "20px",
                  color: "#60A5FA",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "24px",
                }}>
                  AI-Based Software Training Institute Since 1994
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, marginBottom: "12px", lineHeight: "1.1" }}>
                  Learn Software Skills That{" "}
                  <span style={{ color: "#2563EB" }}>Get You Hired</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p style={{ fontSize: "18px", color: "#60A5FA", fontWeight: 500, marginBottom: "16px" }}>
                  Learn • Build • Get Placed
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "32px", maxWidth: "520px" }}>
                  From fundamentals to advanced AI — master the technologies that top companies demand.
                  Join 5000+ students who transformed their careers with Hansa Technologies.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px" }}>
                  <Link href="/courses/" className="btn-primary">Explore Courses</Link>
                  <Link href="/contact/" className="btn-secondary">Free Career Counseling</Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "20px" }}>
                  {[
                    { value: "30+", label: "Years" },
                    { value: "5000+", label: "Students" },
                    { value: "1000+", label: "Placed" },
                    { value: "5★", label: "Google Rating" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>{stat.value}</p>
                      <p style={{ fontSize: "12px", color: "#94A3B8" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            {/* Right - Hero Image */}
            <FadeIn delay={0.3}>
              <div style={{ height: "420px", width: "100%", position: "relative", overflow: "hidden", borderRadius: "16px" }}>
                <img src="/images/hero-main.jpg" alt="Professional software training at Hansa Technologies" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section style={{ padding: "80px 24px", background: "#0E1A2B" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            <div>
              <FadeIn>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "24px" }}>
                  About Hansa Technologies
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "16px" }}>
                  Hansa Technologies is a premier AI-Based Software Training Institute with over 30 years of experience
                  in transforming students into industry-ready professionals. Founded in 1994, we have trained 5000+ students
                  and placed 1000+ in top IT companies.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "16px" }}>
                  Our curriculum is continuously updated with the latest AI tools and technologies. We offer hands-on,
                  project-based learning with dedicated mentorship and placement support from day one.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "16px" }}>
                  We specialize in Full Stack Development, Data Science, AI & Machine Learning, Python, Java, and more.
                  Our training methodology combines theoretical knowledge with real-world projects.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8" }}>
                  With branches in Palakollu and Penugonda, we serve students from West Godavari and surrounding districts,
                  providing both offline and online training options to suit every learner.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div style={{ height: "380px", width: "100%", borderRadius: "16px", overflow: "hidden" }}>
                <img src="/images/about-classroom.jpg" alt="Hansa Technologies classroom" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HANSA */}
      <section style={{ padding: "80px 24px", background: "#08111F" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Why Choose Hansa Technologies
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Three decades of excellence in transforming beginners into industry professionals
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "16px" }}>
            {[
              "30+ Years of Experience",
              "AI-Powered Curriculum",
              "100% Placement Support",
              "Real-World Projects",
              "1-on-1 Mentorship",
              "Certified Programs",
              "Flexible Learning Modes",
              "Affordable Fees with EMI",
              "Interview Preparation",
              "Internship Opportunities",
              "Updated Technologies",
              "Small Batch Sizes",
              "Weekend Batches Available",
              "Lifetime Access to Materials",
            ].map((item, i) => (
              <FadeIn key={item} delay={i * 0.03}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2563EB", flexShrink: 0 }} />
                  <span style={{ color: "#CBD5E1", fontSize: "15px" }}>{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section style={{ padding: "100px 24px", background: "#0E1A2B" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Our Programs
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Comprehensive training programs designed for every career stage
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px" }}>
            {/* Software Training */}
            <FadeIn delay={0.05}>
              <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px", height: "100%", transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Software Training</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "Full Stack Python Development", icon: "🐍" },
                    { name: "Data Analyst", icon: "📊" },
                    { name: "AI Automation Development", icon: "🤖" },
                    { name: "Data Science & Machine Learning", icon: "🧠" },
                    { name: "Java Programming", icon: "☕" },
                    { name: "C Programming", icon: "⚙️" },
                    { name: "Web Development", icon: "🌐" },
                  ].map((course) => (
                    <a key={course.name} href={waLink(course.name)} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 12px", borderRadius: "8px", background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.08)", textDecoration: "none", transition: "all 0.2s" }}>
                      <span style={{ fontSize: "16px", width: "24px", textAlign: "center" }}>{course.icon}</span>
                      <span style={{ color: "#CBD5E1", fontSize: "14px", flex: 1 }}>{course.name}</span>
                      <span style={{ fontSize: "10px", color: "#25D366" }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Professional Courses */}
            <FadeIn delay={0.1}>
              <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px", height: "100%", transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Professional Courses</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "Tally Prime", icon: "📒" },
                    { name: "SAP (FICO, MM, SD)", icon: "🏢" },
                    { name: "Power BI", icon: "📈" },
                    { name: "Advanced Excel", icon: "📑" },
                    { name: "SQL", icon: "🗃️" },
                    { name: "Oracle", icon: "🔶" },
                    { name: "MySQL", icon: "💾" },
                  ].map((course) => (
                    <a key={course.name} href={waLink(course.name)} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 12px", borderRadius: "8px", background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.08)", textDecoration: "none", transition: "all 0.2s" }}>
                      <span style={{ fontSize: "16px", width: "24px", textAlign: "center" }}>{course.icon}</span>
                      <span style={{ color: "#CBD5E1", fontSize: "14px", flex: 1 }}>{course.name}</span>
                      <span style={{ fontSize: "10px", color: "#25D366" }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Design & Technical */}
            <FadeIn delay={0.15}>
              <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px", height: "100%", transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#A855F7" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Design & Technical</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "AutoCAD", icon: "📐" },
                    { name: "MS Office", icon: "📋" },
                    { name: "Digital Marketing", icon: "📱" },
                    { name: "Ethical Hacking", icon: "🔒" },
                  ].map((course) => (
                    <a key={course.name} href={waLink(course.name)} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 12px", borderRadius: "8px", background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.08)", textDecoration: "none", transition: "all 0.2s" }}>
                      <span style={{ fontSize: "16px", width: "24px", textAlign: "center" }}>{course.icon}</span>
                      <span style={{ color: "#CBD5E1", fontSize: "14px", flex: 1 }}>{course.name}</span>
                      <span style={{ fontSize: "10px", color: "#25D366" }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Career Development */}
            <FadeIn delay={0.2}>
              <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px", height: "100%", transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#F59E0B" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Career Development</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { name: "Internships", icon: "🎯" },
                    { name: "Academic Projects (B.Tech, MCA, BCA, Degree)", icon: "🎓" },
                    { name: "Campus Recruitment Training (CRT)", icon: "🏆" },
                    { name: "Soft Skills Training", icon: "🗣️" },
                    { name: "Industrial Training", icon: "🏭" },
                    { name: "Placement Assistance", icon: "💼" },
                  ].map((course) => (
                    <a key={course.name} href={waLink(course.name)} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 12px", borderRadius: "8px", background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.08)", textDecoration: "none", transition: "all 0.2s" }}>
                      <span style={{ fontSize: "16px", width: "24px", textAlign: "center" }}>{course.icon}</span>
                      <span style={{ color: "#CBD5E1", fontSize: "14px", flex: 1 }}>{course.name}</span>
                      <span style={{ fontSize: "10px", color: "#25D366" }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRAINING MODES */}
      <section style={{ padding: "80px 24px", background: "#08111F" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Training Modes
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px" }}>Choose the learning format that works best for you</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
            <FadeIn delay={0.1}>
              <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏫</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>Offline Training</h3>
                <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7" }}>
                  Classroom-based training at our Palakollu and Penugonda branches with hands-on lab sessions,
                  face-to-face mentoring, and peer collaboration.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>💻</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>Online Training</h3>
                <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7" }}>
                  Live instructor-led sessions via Zoom/Google Meet. Learn from anywhere with recorded sessions,
                  assignments, and real-time doubt clearing.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PLACEMENTS */}
      <section style={{ padding: "80px 24px", background: "#0E1A2B" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Placement Services
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Complete career support from training to placement
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: "16px" }}>
            {[
              "Internships",
              "Academic Projects",
              "CRT (Campus Recruitment Training)",
              "Soft Skills Training",
              "Industrial Training",
              "Placement Assistance",
              "Resume Preparation",
              "Interview Guidance",
              "Mock Interviews",
              "Career Counseling",
            ].map((service, i) => (
              <FadeIn key={service} delay={i * 0.05}>
                <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                  <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>{service}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + BRANCHES */}
      <section style={{ padding: "80px 24px", background: "#08111F" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Get In Touch
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Ready to start your career? Reach out for free career counseling
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px" }}>
            {/* Contact Info */}
            <FadeIn>
              <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "24px" }}>Contact Details</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "18px" }}>📞</span>
                    <div>
                      <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>Phone</p>
                      <a href="tel:+919849127749" style={{ color: "#2563EB", fontSize: "14px" }}>+91 98491 27749</a>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "18px" }}>💬</span>
                    <div>
                      <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>WhatsApp</p>
                      <a href="https://wa.me/919949960200" style={{ color: "#25D366", fontSize: "14px" }}>+91 99499 60200</a>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "18px" }}>✉️</span>
                    <div>
                      <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>Email</p>
                      <a href="mailto:hansatechnologies94@gmail.com" style={{ color: "#2563EB", fontSize: "14px" }}>hansatechnologies94@gmail.com</a>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "18px" }}>📸</span>
                    <div>
                      <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>Instagram</p>
                      <a href="https://www.instagram.com/hansa_tech_official" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C", fontSize: "14px" }}>@hansa_tech_official</a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Branches */}
            <FadeIn delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>📍 Palakollu Branch (Main)</h4>
                  <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7" }}>Near Desalamma Temple, Palakollu, West Godavari, Andhra Pradesh</p>
                </div>
                <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>📍 Penugonda Branch</h4>
                  <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7" }}>Near Kanyaka Parameswari Temple, Penugonda, West Godavari, Andhra Pradesh</p>
                </div>
                <div style={{ background: "#122033", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>🕐 Business Hours</h4>
                  <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7" }}>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                  <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7" }}>Sunday: 10:00 AM – 5:00 PM (Online only)</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
