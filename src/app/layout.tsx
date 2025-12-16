import React from "react";
import Script from "next/script";

import "../../public/styles/bootstrap.min.css";
import "../../public/styles/animate.min.css";
import "animate.css";
import "../../public/styles/fontawesome.min.css";
import "../../public/styles/pe-icon-7-stroke.css";
import "swiper/css";
import "swiper/css/bundle";

import "../../public/styles/app-home-page.css";
import "../../public/styles/style.css";
import "../../public/styles/responsive.css";
import "../../public/styles/rtl.css";

import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import ClientAnalytics from "@/components/ClientAnalytics/ClientAnalytics";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
}: {
  children: React.ReactNode;
}) {
  const TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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

                // Google Ads tag (glavni tag)
                gtag('config', '${TAG_ID}');

                // GA4 (analytics) destination
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
        <ClientAnalytics />
      </body>
    </html>
  );
}
