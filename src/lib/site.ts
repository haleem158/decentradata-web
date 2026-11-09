import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://decentradata-web-fusm.vercel.app";
export const X_URL = "https://x.com/Decentradata_";
export const X_HANDLE = "@Decentradata_";
export const REPORT_URL = "/2025-report-on-the-base-ecosystem.pdf";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "DecentraData — Blockchain data, made checkable.",
};

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = opts.absoluteTitle ? opts.title : `${opts.title} · DecentraData`;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      siteName: "DecentraData",
      title: fullTitle,
      description: opts.description,
      url: opts.path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      site: X_HANDLE,
      creator: X_HANDLE,
      title: fullTitle,
      description: opts.description,
      images: ["/og.png"],
    },
  };
}
