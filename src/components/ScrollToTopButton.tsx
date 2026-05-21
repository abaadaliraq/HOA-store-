"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 700);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`scrollTopButton ${show ? "isVisible" : ""}`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5l-7 7m7-7 7 7M12 5v14" />
        </svg>
      </button>

      <style jsx>{`
        .scrollTopButton {
          position: fixed;
          right: 22px;
          bottom: 24px;
          z-index: 99999;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: 1px solid rgba(210, 185, 125, 0.28);
          background: rgba(8, 8, 8, 0.72);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(16px) scale(0.92);
          pointer-events: none;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.34);
          transition:
            opacity 0.22s ease,
            transform 0.22s ease,
            background 0.18s ease,
            border-color 0.18s ease;
        }

        .scrollTopButton.isVisible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .scrollTopButton:hover {
          background: rgba(18, 18, 18, 0.92);
          border-color: rgba(210, 185, 125, 0.55);
          transform: translateY(-2px) scale(1);
        }

        .scrollTopButton svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @media (max-width: 640px) {
          .scrollTopButton {
            right: 16px;
            bottom: 18px;
            width: 42px;
            height: 42px;
          }

          .scrollTopButton svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </>
  );
}