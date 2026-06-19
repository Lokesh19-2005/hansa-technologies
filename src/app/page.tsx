"use client";

import Link from "next/link";
import FadeIn from "@/components/AnimatedText";

export default function HomePage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* HERO SECTION */}
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
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
                  Google 5-Star Rated · AI-Based Training Since 1994
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
                      <p style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                      <p style={{ fontSize: "12px", color: "#94A3B8" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            {/* Right - Hero Image */}
            <FadeIn delay={0.3}>
              <div style={{ height: "420px", width: "100%", position: "relative", overflow: "hidden", borderRadius: "16px" }}>
                <img src="/images/hero-training.jpg" alt="Professional software training at Hansa Technologies" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            <div>
              <FadeIn>
                <span style={{ display: "inline-block", padding: "6px 14px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "20px", color: "#4ADE80", fontSize: "13px", fontWeight: 500, marginBottom: "20px" }}>
                  Established 1994 · 30+ Years of Excellence
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                  About Hansa Technologies
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "16px" }}>
                  Hansa Technologies is a premier AI-Based Software Training Institute with over 30 years of experience
                  in transforming students into industry-ready professionals. Founded in 1994, we have trained 5000+ students
                  and placed 1000+ in top IT companies.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "24px" }}>
                  Our curriculum is continuously updated with the latest AI tools and technologies. We offer hands-on,
                  project-based learning with dedicated mentorship and placement support from day one.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link href="/about/" className="btn-primary" style={{ display: "inline-flex" }}>Learn More About Us</Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div style={{ height: "380px", width: "100%", borderRadius: "16px", overflow: "hidden" }}>
                <img src="/images/classroom.jpg" alt="Hansa Technologies classroom" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HANSA */}
      <section className="section-padding" style={{ background: "#08111F" }}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "20px" }}>
            {[
              { title: "30+ Years Experience", desc: "Trusted by thousands since 1994 with a proven track record." },
              { title: "AI-Powered Curriculum", desc: "Courses updated with the latest AI tools and technologies." },
              { title: "100% Placement Support", desc: "Dedicated placement cell with 200+ hiring partners." },
              { title: "Real-World Projects", desc: "Build portfolio-worthy projects with industry datasets." },
              { title: "1-on-1 Mentorship", desc: "Personal guidance from industry experts at your pace." },
              { title: "Certified Programs", desc: "Industry-recognized certifications for your profile." },
              { title: "Flexible Learning Modes", desc: "Online and offline options to suit your schedule." },
              { title: "Affordable Fees", desc: "Quality training at accessible pricing with EMI options." },
              { title: "Interview Preparation", desc: "Mock interviews and resume building workshops." },
              { title: "Internship Opportunities", desc: "Gain real experience with live industry projects." },
              { title: "Updated Technologies", desc: "Always learning the latest frameworks and tools." },
              { title: "Small Batch Sizes", desc: "Personalized attention with limited students per batch." },
              { title: "Weekend Batches", desc: "Special batches for working professionals." },
              { title: "Lifetime Access", desc: "Revisit course materials and community support forever." },
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.05}>
                <div style={{ padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(18, 32, 51, 0.5)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2563EB", marginTop: "8px", flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "6px" }}>{feature.title}</h4>
                      <p style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: "1.6" }}>{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
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
                <p style={{ color: "#CBD5E1", fontSize: "14px", marginBottom: "16px" }}>Industry-standard programming and development courses</p>
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
                <img src="/images/python-dev.jpg" alt="Software development training" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </div>
          </FadeIn>

          {/* Professional Courses */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "40px", alignItems: "center", marginBottom: "64px" }}>
              <div style={{ height: "280px", borderRadius: "16px", overflow: "hidden" }} className="hidden lg:block">
                <img src="/images/business-analytics.jpg" alt="Professional courses" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Professional Courses</h3>
                <p style={{ color: "#CBD5E1", fontSize: "14px", marginBottom: "16px" }}>Business and analytics programs for career growth</p>
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
                <p style={{ color: "#CBD5E1", fontSize: "14px", marginBottom: "16px" }}>Creative and hardware-focused programs</p>
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
                <img src="/images/technical-training.jpg" alt="Technical training" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </div>
          </FadeIn>

          {/* Career Development */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "40px", alignItems: "center" }}>
              <div style={{ height: "280px", borderRadius: "16px", overflow: "hidden" }} className="hidden lg:block">
                <img src="/images/placement.jpg" alt="Career development" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>Career Development</h3>
                <p style={{ color: "#CBD5E1", fontSize: "14px", marginBottom: "16px" }}>Complete career support from training to placement</p>
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
      <section className="section-padding" style={{ background: "#08111F" }}>
        <div className="container-max">
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
              <div className="card" style={{ textAlign: "center", padding: "40px 28px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏫</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>Offline Training</h3>
                <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
                  Classroom-based training at our Palakollu and Penugonda branches with hands-on lab sessions,
                  face-to-face mentoring, and peer collaboration.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left" }}>
                  {["Interactive classrooms", "Lab practice sessions", "Peer learning groups", "Direct mentor access"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#22C55E", fontSize: "14px" }}>✓</span>
                      <span style={{ color: "#CBD5E1", fontSize: "13px" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card" style={{ textAlign: "center", padding: "40px 28px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>💻</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>Online Training</h3>
                <p style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
                  Live instructor-led sessions via Zoom/Google Meet. Learn from anywhere with recorded sessions,
                  assignments, and real-time doubt clearing.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left" }}>
                  {["Live instructor sessions", "Recorded for revision", "Flexible scheduling", "Screen sharing support"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#22C55E", fontSize: "14px" }}>✓</span>
                      <span style={{ color: "#CBD5E1", fontSize: "13px" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PLACEMENTS */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            <div>
              <FadeIn>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                  Placement Excellence
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p style={{ fontSize: "16px", color: "#CBD5E1", lineHeight: "1.8", marginBottom: "24px" }}>
                  Our dedicated placement cell works tirelessly to connect trained students with top companies.
                  From resume building to interview preparation, we support you at every step of your career journey.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-3" style={{ gap: "16px", marginBottom: "24px" }}>
                  {[
                    { value: "1000+", label: "Students Placed" },
                    { value: "200+", label: "Hiring Partners" },
                    { value: "95%", label: "Placement Rate" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: "center", padding: "16px 8px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p style={{ fontSize: "22px", fontWeight: 700, color: "#2563EB", fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                      <p style={{ fontSize: "11px", color: "#94A3B8", marginTop: "4px" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/placements/" className="btn-primary" style={{ display: "inline-flex" }}>
                  View Placements
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div style={{ height: "350px", width: "100%", borderRadius: "16px", overflow: "hidden" }}>
                <img src="/images/interview.jpg" alt="Placement interviews" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="section-padding" style={{ background: "#08111F" }}>
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
              { name: "Rajesh Kumar", role: "Software Engineer at TCS", quote: "Hansa Technologies gave me the foundation I needed. The practical training and placement support helped me land my dream job within 3 months of completing the course.", initials: "RK", color: "#2563EB" },
              { name: "Priya Sharma", role: "Data Analyst at Infosys", quote: "The AI and Data Science course was comprehensive. The mentors were always available and the projects were industry-relevant. I got placed before even finishing the course.", initials: "PS", color: "#7C3AED" },
              { name: "Venkat Reddy", role: "Full Stack Developer at Wipro", quote: "From zero coding knowledge to a full stack developer — Hansa Technologies made it possible with their structured approach and constant support.", initials: "VR", color: "#059669" },
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

      {/* CONTACT SECTION */}
      <section className="section-padding" style={{ background: "#0E1A2B" }}>
        <div className="container-max">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px" }}>
                Get In Touch
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
                Ready to start? Reach out for free career counseling
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px" }}>
            {/* Contact Form */}
            <FadeIn>
              <div className="card">
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "24px" }}>Send Us a Message</h3>
                <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <input type="text" placeholder="Your Name" style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none" }} />
                  <input type="email" placeholder="Email Address" style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none" }} />
                  <input type="tel" placeholder="Phone Number" style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none" }} />
                  <select style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#94A3B8", fontSize: "14px", outline: "none" }}>
                    <option value="">Select a Course</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="python">Python Programming</option>
                    <option value="datascience">Data Science</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="java">Java Development</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea placeholder="Your Message" rows={4} style={{ width: "100%", padding: "12px 16px", background: "#0E1A2B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#FFFFFF", fontSize: "14px", outline: "none", resize: "vertical" }} />
                  <button type="submit" className="btn-primary" style={{ width: "100%" }}>Send Message</button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Details */}
            <FadeIn delay={0.2}>
              <div>
                <div style={{ marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>Contact Details</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                        <p style={{ color: "#CBD5E1", fontSize: "14px" }}>info@hansatechnologies.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branches */}
                <div style={{ marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "16px" }}>Our Branches</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ padding: "16px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600 }}>📍 Palakollu Branch</p>
                      <p style={{ color: "#CBD5E1", fontSize: "13px", marginTop: "4px" }}>Near Desalamma Temple, Palakollu</p>
                    </div>
                    <div style={{ padding: "16px", background: "#122033", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600 }}>📍 Penugonda Branch</p>
                      <p style={{ color: "#CBD5E1", fontSize: "13px", marginTop: "4px" }}>Near Kanyaka Parameswari Temple, Penugonda</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>Business Hours</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>Monday - Saturday</span>
                      <span style={{ color: "#FFFFFF", fontSize: "14px" }}>9:00 AM - 7:00 PM</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#CBD5E1", fontSize: "14px" }}>Sunday</span>
                      <span style={{ color: "#94A3B8", fontSize: "14px" }}>By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding" style={{ background: "#08111F" }}>
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
                Your first consultation is free.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
                <Link href="/courses/" className="btn-primary">Explore Programs</Link>
                <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
