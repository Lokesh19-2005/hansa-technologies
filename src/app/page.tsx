"use client";

import Link from "next/link";
import { FadeIn } from "@/components/AnimatedText";

const categories = ["Python", "Data Science", "AI & ML", "Java", "Web Dev", "Power BI", "Excel", "SAP"];

const topCourses = [
  { name: "Full Stack Python Development", level: "Beginner → Advanced", duration: "6 Months", desc: "Master Python, Django, APIs, databases, and deployment." },
  { name: "Data Science & Machine Learning", level: "Intermediate → Advanced", duration: "6 Months", desc: "Deep learning, NLP, computer vision, and predictive analytics." },
  { name: "AI Automation Developer", level: "Beginner → Advanced", duration: "5 Months", desc: "Build intelligent automation with AI/ML and RPA." },
  { name: "Web Development", level: "Beginner → Advanced", duration: "5 Months", desc: "React, Node.js, MongoDB — full-stack modern web." },
  { name: "Data Analyst", level: "Beginner → Intermediate", duration: "4 Months", desc: "SQL, Power BI, statistics, data visualization." },
  { name: "Java Programming", level: "Beginner → Advanced", duration: "5 Months", desc: "Spring Boot, microservices, enterprise patterns." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(76,217,100,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(52,199,89,0.04) 0%, transparent 70%)" }} />

        <div className="max-w-[1100px] mx-auto relative">
          <FadeIn>
            <img src="/logo.png" alt="Hansa Technologies" className="h-16 sm:h-24 mb-8 sm:mb-10" />

            <h1 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight mb-5 sm:mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ffffff" }}>
              Learn software skills<br />
              <span style={{ color: "#4cd964" }}>that get you hired.</span>
            </h1>

            <p className="text-[14px] sm:text-[16px] leading-relaxed mb-8 sm:mb-9 max-w-[480px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Master in-demand skills in Python, AI, Data Science, and more through practical training, real projects, and dedicated placement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
              <Link href="/courses" className="btn-primary">Start Learning</Link>
              <Link href="/contact" className="btn-secondary">Book Free Consultation</Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link key={cat} href="/courses" className="pill">{cat}</Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-b px-5 sm:px-6 py-6 sm:py-8" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <FadeIn>
            <div className="grid grid-cols-4 gap-6 sm:gap-12">
              {[
                { v: "30+", l: "Years" },
                { v: "5,000+", l: "Students" },
                { v: "1,000+", l: "Placed" },
                { v: "5★", l: "Google" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <span className="stat-value block text-[16px] sm:text-[22px]">{s.v}</span>
                  <span className="stat-label text-[9px] sm:text-[11px]">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <span className="hidden md:block text-[11px] tracking-wider" style={{ color: "rgba(255,255,255,0.25)" }}>AI-BASED TRAINING · SINCE 1994</span>
        </div>
      </section>

      {/* Find your path */}
      <section className="px-5 sm:px-6 py-16 sm:py-24">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Find your path</h2>
            <p className="text-[13px] sm:text-[14px] mb-10 sm:mb-12" style={{ color: "rgba(255,255,255,0.35)" }}>Choose the track that matches your goals.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "I'm starting fresh", desc: "Zero experience? We take you from basics to job-ready with hands-on projects.", cta: "Explore Beginner Programs →" },
              { title: "I want to switch careers", desc: "Working in another field? Our programs are designed for career changers.", cta: "View Career Tracks →" },
              { title: "I want to upskill", desc: "Already in tech? Level up with AI, data science, and advanced programming.", cta: "Browse Advanced Courses →" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <Link href="/courses" className="card-muted block h-full" style={{ textDecoration: "none" }}>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-[13px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>{p.desc}</p>
                  <span className="text-[13px] font-medium" style={{ color: "#4cd964" }}>{p.cta}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="px-5 sm:px-6 py-16 sm:py-24" style={{ backgroundColor: "rgba(255,255,255,0.01)" }}>
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Popular Programs</h2>
                <p className="text-[13px] sm:text-[14px]" style={{ color: "rgba(255,255,255,0.35)" }}>Every program includes projects, mentorship & placement support.</p>
              </div>
              <Link href="/courses" className="text-[13px] font-medium" style={{ color: "#4cd964", textDecoration: "none" }}>View All →</Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topCourses.map((course, i) => (
              <FadeIn key={course.name} delay={i * 0.05}>
                <Link href="/courses" className="card block h-full" style={{ textDecoration: "none" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full" style={{ color: "#4cd964", backgroundColor: "rgba(76,217,100,0.08)" }}>{course.level}</span>
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{course.duration}</span>
                  </div>
                  <h3 className="text-[14px] font-semibold text-white mb-2">{course.name}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{course.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 sm:px-6 py-16 sm:py-24">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-white mb-10 sm:mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Student success stories</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { text: "From zero coding knowledge to a developer role at TCS in 8 months. The practical approach made all the difference.", name: "Sai Krishna", role: "Full Stack Developer, TCS" },
              { text: "Got placed at Infosys within a month of course completion. The mentors are genuinely invested in your success.", name: "Priya Reddy", role: "Data Analyst, Infosys" },
              { text: "World-class training quality in our small town. Interview prep and placement support were exceptional.", name: "Venkat Rao", role: "SAP Consultant, Deloitte" },
              { text: "Career switch from mechanical engineering to IT. The Python course gave me everything I needed.", name: "Kiran Reddy", role: "Python Developer, Infosys" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <div className="card">
                  <p className="text-[13px] sm:text-[14px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>&ldquo;{t.text}&rdquo;</p>
                  <p className="text-[13px] font-medium text-white">{t.name}</p>
                  <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(76,217,100,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-[1100px] mx-auto text-center relative">
          <FadeIn>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ready to transform your career?</h2>
            <p className="text-[13px] sm:text-[14px] mb-8 max-w-[400px] mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>Join 5,000+ students who built successful careers. Free consultation available.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="btn-primary">Get Started Free</Link>
              <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
