import type { Metadata } from "next";
import { headers } from "next/headers";
import { Manrope, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollTop } from "@/components/ScrollTop";
import { siteConfig } from "@/data/site";
import "./globals.css";

const heading = Manrope({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const body = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") || (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : siteConfig.url;
  return {
    metadataBase: new URL(origin),
    title: { default: "Designer Prabin | Print & Digital Media Graphic Designer", template: "%s | Designer Prabin" },
    description: siteConfig.description,
    alternates: { canonical: "/" },
    openGraph: { type: "website", locale: "en_GB", siteName: siteConfig.brand, title: siteConfig.brand, description: siteConfig.description, images: [{ url: `${origin}/og.png`, width: 1792, height: 938, alt: "Designer Prabin — Print and Digital Media Graphic Designer" }] },
    twitter: { card: "summary_large_image", title: siteConfig.brand, description: siteConfig.description, images: [`${origin}/og.png`] },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "Person", name: siteConfig.name, jobTitle: siteConfig.role, email: siteConfig.email, telephone: siteConfig.phoneHref, address: { "@type": "PostalAddress", addressLocality: "Bharatpur", addressRegion: "Chitwan", addressCountry: "NP" }, url: siteConfig.url }, { "@type": "ProfessionalService", name: siteConfig.brand, description: siteConfig.description, email: siteConfig.email, telephone: siteConfig.phoneHref, areaServed: "Nepal", url: siteConfig.url }] };
  return (
    <html lang="en"><body className={`${heading.variable} ${body.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><a className="floating-contact" href="/contact?service=consultation" aria-label="Book a consultation">Let’s talk</a><ScrollTop /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>
  );
}
