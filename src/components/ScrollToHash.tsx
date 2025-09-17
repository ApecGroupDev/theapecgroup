"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 300; //adjust preferred scroll height
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 100);
  }, [pathname]);

  return null;
}
