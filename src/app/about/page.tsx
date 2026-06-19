"use client";

import { FadeIn } from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <>
      <section className="px-5 sm:px-6 py-16 sm:py-24">
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <h1 className="text-[2rem] sm:text-[2.8rem] font-bold leading-[1.15] text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Shaping careers<br /><span style={{ color: "#4cd964" }}>since 1994.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] leading-relaxed max-w-[560px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Hansa Technologies is a Google 5-Star rated AI-based software training institute. For over 30 years, we&apos;ve transformed beginners into industry-ready professionals through practical training, real projects, and dedicated placement support.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-[700px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
          <FadeIn>
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: "#4cd964" }}>Mission</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Empower individuals with industry-relevant skills through practical, AI-enhanced training that builds confident, job-ready professionals.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: "#4cd964" }}>Vision</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Be the most trusted software training institute in India — known for producing professionals who drive innovation at top companies.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-16">
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-white mb-8 sm:mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Journey</h2>
          </FadeIn>
          {[
            { year: "1994", event: "Founded in Palakollu with a vision for quality software education." },
            { year: "2005", event: "Crossed 1,000 trained students with strong placement results." },
            { year: "2010", event: "Fully digital classrooms and modern computer labs launched." },
            { year: "2015", event: "Second branch opened in Penugonda to serve more students." },
            { year: "2018", event: "Introduced AI-based learning and Data Science programs." },
            { year: "2024", event: "30 years complete. 5,000+ alumni. Google 5-star rated." },
          ].map((item, i) => (
            <FadeIn key={item.year} delay={i * 0.04}>
              <div className="flex gap-4 sm:gap-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-[13px] font-semibold w-10 shrink-0" style={{ color: "#4cd964" }}>{item.year}</span>
                <span className="text-[13px] sm:text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>{item.event}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-white mb-8 sm:mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>What We Stand For</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { t: "Excellence", d: "Highest standards in curriculum, teaching, and outcomes." },
              { t: "Innovation", d: "Evolving with AI, industry trends, and modern methodology." },
              { t: "Student First", d: "Every decision centered around career growth and results." },
              { t: "Integrity", d: "Honest guidance and genuine commitment to every student." },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.05}>
                <div>
                  <h4 className="text-[14px] sm:text-[15px] font-semibold text-white mb-1.5">{v.t}</h4>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{v.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
