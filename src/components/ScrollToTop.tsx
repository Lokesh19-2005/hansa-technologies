"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const fn = () => setVisible(window.scrollY > 400); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"
      style={{ position: "fixed", bottom: "90px", right: "28px", zIndex: 998, width: "42px", height: "42px", borderRadius: "50%", background: "#ffffff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,70,229,0.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"; }}>
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#4f46e5" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
    </button>
  );
}
