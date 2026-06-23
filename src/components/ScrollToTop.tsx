"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
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
        bottom: "90px",
        right: "28px",
        zIndex: 998,
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: "rgba(15, 23, 42, 0.9)",
        border: "1px solid rgba(56, 189, 248, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s",
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.5)"; e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.2)"; e.currentTarget.style.background = "rgba(15, 23, 42, 0.9)"; }}
    >
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#38bdf8" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
