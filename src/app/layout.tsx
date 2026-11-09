import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "DecentraData",
  title: {
    default: "DecentraData — Blockchain data intelligence",
    template: "%s · DecentraData",
  },
  description:
    "Blockchain data intelligence for institutions, agents and everyday users. Read the Base Ecosystem 2025 report.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "DecentraData",
    title: "DecentraData — Blockchain data intelligence",
    description:
      "Blockchain data intelligence for institutions, agents and everyday users. Read the Base Ecosystem 2025 report.",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DecentraData — Blockchain data, made checkable.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Decentradata_",
    creator: "@Decentradata_",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#14213D" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
