// app/sitemap.js

/**
 * Next.js App Router sitemap
 * URL: https://YOUR_DOMAIN/sitemap.xml
 */
export default function sitemap() {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://midafin.rs";

  const now = new Date();

  // Dodaj ovde tvoje statične rute
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/contact-us",
    "/pricing",
    "/services/racunovodstvo",
    "/services/interno-izvestavanje",
    "/services/obracun-zarada",
    "/services/poresko-savetovanje",
    "/services/pravne-usluge",
    "/services/izrada-procedura-i-pravilnika",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
