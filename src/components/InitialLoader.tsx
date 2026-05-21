"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setShow(false);
      }, 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/loading-stamp.png"
          alt="House of Antiques loading"
          className="hoa-initial-stamp-loader"
        />

        <p className="text-xs font-medium text-white/70">
          جاري فتح بيت التحفيات...
        </p>
      </div>
    </div>
  );
}