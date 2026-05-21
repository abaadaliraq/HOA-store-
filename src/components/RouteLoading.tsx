"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoading() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href) return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:")) return;
      if (href.startsWith("tel:")) return;
      if (href.startsWith("http") && !href.includes(window.location.host)) return;
      if (link.target === "_blank") return;

      setLoading(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setLoading(false);
      }, 7000);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setLoading(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [pathname]);

  if (!loading) return null;

 return (
  <div className="fixed inset-0 z-[999999] pointer-events-none flex items-center justify-center">
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 px-6 py-5 backdrop-blur-[2px]">
      <div className="hoa-soft-loader" />

      <p className="text-xs font-medium text-white/70 drop-shadow">
        جاري التحميل...
      </p>
    </div>
  </div>

  );
}