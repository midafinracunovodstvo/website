"use client";

import { useEffect } from "react";

export default function ContactPageConversion() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17792393342/il8TCL2Eks8bEP7AiaRC",
      });
    }
  }, []);

  return null;
}
