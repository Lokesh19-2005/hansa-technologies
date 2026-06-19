"use client";

import { FadeIn } from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <>
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.15, color: "#ffffff", marginBottom: "24px" }}>
              Shaping careers<br /><span style={{ color: "#4cd964" }}>since 1994.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: "560px" }}>
              Hansa Technologies is a Google 5-Star rated AI-based software training institute. For over 30 years, we&apos;ve transformed beginners into industry-ready professionals through practical training, real projects, and dedicated placement support.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "48px" }}>
          <FadeIn>
            <div>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#4cd964", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Mission</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                Empower individuals with industry-relevant skills through practical, AI-enhanced training that builds confident, job-ready professionals.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#4cd964", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Vision</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                Be the most trusted software training institute in India — known for producing professionals who drive innovation at top companies.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "24px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "40px" }}>Our Journey</h2>
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
              <div style={{ display: "flex", gap: "24px", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#4cd964", width: "44px", flexShrink: 0 }}>{item.year}</span>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{item.event}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "24px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#ffffff", marginBottom: "40px" }}>What We Stand For</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            {[
              { t: "Excellence", d: "Highest standards in curriculum, teaching, and outcomes." },
              { t: "Innovation", d: "Evolving with AI, industry trends, and modern methodology." },
              { t: "Student First", d: "Every decision centered around career growth and results." },
              { t: "Integrity", d: "Honest guidance and genuine commitment to every student." },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.05}>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", marginBottom: "6px" }}>{v.t}</h4>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>{v.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
