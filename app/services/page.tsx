import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Graphic Design Services", description: "Branding, print, social media, advertising, editorial and digital marketing design services in Nepal.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <><PageHero eyebrow="Services" title="Design services shaped around real communication needs." text="From a focused print piece to a connected brand system, every service combines creative thinking with careful delivery." /><section className="section"><div className="container"><div className="service-grid service-grid-detail">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div></div></section><section className="section section-tint"><div className="container included-grid"><div><p className="eyebrow">A dependable process</p><h2>What every project includes.</h2></div><div>{["A clear project scope and schedule", "Audience and communication review", "Focused creative development", "Structured feedback and revisions", "Production-ready file preparation", "Organised final asset handover"].map((item) => <p key={item}>✓ {item}</p>)}</div></div></section><CTASection title="Not sure which service fits?" text="Share the outcome you need and I’ll help you choose a practical starting point." /></>;
}
