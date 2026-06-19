"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

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
      <section style={{ padding: "80px 24px", background: "#0E1A2B" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Our Services
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Comprehensive training programs designed for every career stage
              </p>
            </div>
          </FadeIn>

          {/* Software Training */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "40px", alignItems: "center", marginBottom: "64px" }}>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Software Training</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Full Stack Development (MERN/MEAN)", "Python Programming & Django", "Java & Spring Boot", "Data Science & Machine Learning", "Artificial Intelligence & Deep Learning", "Cloud Computing (AWS/Azure)", "DevOps & CI/CD"].map((course) => (
                    <div key={course} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563EB" }} />
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ height: "280px", borderRadius: "16px", overflow: "hidden" }}>
                <img src="/images/software-dev.jpg" alt="Software development training" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </div>
          </FadeIn>

          {/* Professional Courses */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "40px", alignItems: "center", marginBottom: "64px" }}>
              <div style={{ height: "280px", borderRadius: "16px", overflow: "hidden" }} className="hidden lg:block">
                <img src="/images/professional-courses.jpg" alt="Professional courses" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Professional Courses</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Digital Marketing & SEO", "Business Analytics", "Cyber Security", "Database Management (SQL/NoSQL)", "Software Testing & QA", "Salesforce Administration", "Power BI & Tableau"].map((course) => (
                    <div key={course} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }} />
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Design & Technical */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "40px", alignItems: "center", marginBottom: "64px" }}>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Design & Technical</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["UI/UX Design & Figma", "Graphic Design & Adobe Suite", "AutoCAD & 3D Modeling", "Hardware & Networking"].map((course) => (
                    <div key={course} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A855F7" }} />
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ height: "280px", borderRadius: "16px", overflow: "hidden" }}>
                <img src="/images/technical-design.jpg" alt="Technical training" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </div>
          </FadeIn>

          {/* Career Development */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "40px", alignItems: "center" }}>
              <div style={{ height: "280px", borderRadius: "16px", overflow: "hidden" }} className="hidden lg:block">
                <img src="/images/career-placement.jpg" alt="Career development" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Career Development</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Resume Building & Portfolio", "Mock Interviews & HR Rounds", "Soft Skills & Communication", "Internship Programs", "Placement Assistance", "Career Counseling"].map((course) => (
                    <div key={course} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F59E0B" }} />
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
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
