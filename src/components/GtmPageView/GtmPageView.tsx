"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default function GtmPageView() {
  const pathname = usePathname();

  useEffect(() => {
    // Radi uvek i ne traži useSearchParams
    const page_path = window.location.pathname + window.location.search;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname]);

  return null;
}
