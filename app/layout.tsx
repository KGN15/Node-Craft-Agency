import type { Metadata } from "next";
import "./globals.css";
import { LoadingProvider } from "../lib/loadingContext";
import Script from "next/script";
import LenisProvider from "@/components/LenisProvider";


export const metadata = {
  metadataBase: new URL("https://nodecraftagency.vercel.app"),
  title: {
    default: "NodeCraft Agency | Modern Web Design in Bangladesh",
    template: "%s | NodeCraft Agency",
  },
  description:
    "NodeCraft Agency is a premium web development agency in Bangladesh. We build aesthetic, fast, and SEO-optimized websites using modern technologies like Next.js.",
  keywords: [
    "web design Bangladesh",
    "Next.js developer Bangladesh",
    "modern website agency",
    "NodeCraft Agency",
    "SEO web development",
  ],
  authors: [{ name: "NodeCraft Agency" }],
  openGraph: {
    title: "NodeCraft Agency",
    description:
      "We build aesthetic, fast, SEO optimized websites for businesses.",
    url: "https://nodecraftagency.vercel.app",
    siteName: "NodeCraft Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NodeCraft Agency",
    description: "Premium web design & development agency in Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NodeCraft Agency",
  url: "https://nodecraftagency.vercel.app",
  description:
    "Web development agency in Bangladesh specializing in modern aesthetic websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-[#050508] text-slate-200 overflow-x-hidden"
        cz-shortcut-listen="false"
      >
        <LenisProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </LenisProvider>
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
