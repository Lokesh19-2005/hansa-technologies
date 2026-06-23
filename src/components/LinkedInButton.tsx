"use client";

export default function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/company/hansa-technologies-palakollu"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow on LinkedIn"
      style={{
        position: "fixed",
        bottom: "84px",
        left: "24px",
        zIndex: 999,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#0A66C2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(10, 102, 194, 0.4)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 30px rgba(10, 102, 194, 0.5)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(10, 102, 194, 0.4)"; }}
    >
      <svg width="24" height="24" fill="#FFFFFF" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>
  );
}
