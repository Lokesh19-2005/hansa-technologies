"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "rgba(10, 22, 40, 0.9)",
        border: "1px solid rgba(0, 212, 255, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0, 212, 255, 0.15)"; e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(10, 22, 40, 0.9)"; e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"; }}
    >
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#00d4ff" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
