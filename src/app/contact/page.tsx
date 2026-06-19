"use client";

import { FadeIn } from "@/components/AnimatedText";

export default function ContactPage() {
  return (
    <section className="px-5 sm:px-6 py-16 sm:py-24">
      <div className="max-w-[800px] mx-auto">
        <FadeIn>
          <h1 className="text-[2rem] sm:text-[2.8rem] font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Get in touch
          </h1>
          <p className="text-[14px] sm:text-[15px] mb-12 sm:mb-14 max-w-[400px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            Book a free career consultation. We&apos;ll help you choose the right program.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-14">
          {/* Form */}
          <FadeIn delay={0.1}>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-[10px] text-[14px] text-white outline-none" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Phone</label>
                  <input type="tel" placeholder="+91" className="w-full px-4 py-3 rounded-[10px] text-[14px] text-white outline-none" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Email</label>
                <input type="email" placeholder="you@email.com" className="w-full px-4 py-3 rounded-[10px] text-[14px] text-white outline-none" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Program</label>
                <select className="w-full px-4 py-3 rounded-[10px] text-[14px] outline-none" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
                  <option value="">Select a program</option>
                  <option>Full Stack Python</option>
                  <option>Data Science & ML</option>
                  <option>AI Automation</option>
                  <option>Java</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Message</label>
                <textarea rows={3} placeholder="Tell us about your goals..." className="w-full px-4 py-3 rounded-[10px] text-[14px] text-white outline-none resize-none" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-fit mt-1">Send Message</button>
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>Phone</p>
                <a href="tel:+919849127749" className="text-[14px] text-white no-underline">+91 98491 27749</a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>WhatsApp</p>
                <a href="https://wa.me/919949960200" className="text-[14px] text-white no-underline">+91 99499 60200</a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>Email</p>
                <a href="mailto:hansatechnologies94@gmail.com" className="text-[14px] text-white no-underline">hansatechnologies94@gmail.com</a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>Hours</p>
                <p className="text-[14px] text-white">Mon–Sat, 9:00 AM – 9:00 PM</p>
                <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>Sunday closed</p>
              </div>

              <div className="mt-4 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="mb-4">
                  <p className="text-[13px] font-medium text-white mb-1">Palakollu Branch</p>
                  <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>Near Desalamma Temple</p>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-white mb-1">Penugonda Branch</p>
                  <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>Near Kanyaka Parameswari Temple</p>
                </div>
              </div>

              <div className="flex gap-3 mt-3">
                <a href="https://wa.me/919949960200" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center text-[12px] !py-2.5">WhatsApp</a>
                <a href="tel:+919849127749" className="btn-primary flex-1 text-center text-[12px] !py-2.5">Call Now</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
