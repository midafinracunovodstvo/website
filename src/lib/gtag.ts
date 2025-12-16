export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;

  // šaljemo page_view ručno (SPA), pošto smo u init-u stavili send_page_view:false
  (window as any).gtag?.("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;

  (window as any).gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
