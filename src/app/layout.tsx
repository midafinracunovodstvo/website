import React, { Suspense } from "react";
import Script from "next/script";

import "../../public/styles/bootstrap.min.css";
import "../../public/styles/animate.min.css";
import "animate.css";
import "../../public/styles/fontawesome.min.css";
import "../../public/styles/pe-icon-7-stroke.css";
import "swiper/css";
import "swiper/css/bundle";

import "../../public/styles/app-home-page.css";

// Global Style
import "../../public/styles/style.css";
import "../../public/styles/responsive.css";
// Global RTL Style
import "../../public/styles/rtl.css";

import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import ClientAnalytics from "@/components/ClientAnalytics/ClientAnalytics";

// For all body text font
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// For all heading font
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MiDaFin - Zvanična prezentacija ",
  description: "Zvanična prezentacija knjigovodstvena agencija MiDaFin.doo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AW-... (Google Ads / Google tag loader)
  const TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "";
  // G-... (GA4 measurement id)
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  return (
    <html lang="sr" suppressHydrationWarning>
      <head>
        {TAG_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`}
              strategy="beforeInteractive"
            />
            <Script id="gtag-init" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;

                gtag('js', new Date());

                // Google tag (Ads) loader config
                gtag('config', '${TAG_ID}');

                // GA4 destination config (disable auto page_view; SPA sends it manually)
                ${
                  GA_ID
                    ? `gtag('config', '${GA_ID}', { send_page_view: false });`
                    : ""
                }
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className={`${inter.variable} ${saira.variable}`}>
        {children}

        <AosAnimation />
        <GoTop />

        {/* SPA pageview tracking (useSearchParams requires Suspense) */}
        <Suspense fallback={null}>
          <ClientAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
