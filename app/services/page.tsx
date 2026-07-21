import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "AI-Powered Graphic Design and Print Services", description: "AI-powered branding, print, social media, advertising, editorial, pre-press and professional printing services in Nepal.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <>
    <PageHero eyebrow="Services" title="AI-powered graphic design, backed by print expertise." text="From a focused social creative to a complete publication and professional print run, every service combines efficient AI-assisted workflows with human creative direction and careful production." />
    <section className="section"><div className="container"><div className="service-grid service-grid-detail">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div></div></section>
    <section className="section section-tint"><div className="container included-grid"><div><p className="eyebrow">A dependable process</p><h2>What every project includes.</h2></div><div>{["A clear project scope and schedule", "Audience and communication review", "AI-assisted concept exploration", "Human-led creative refinement", "Production-ready pre-press preparation", "Professional print coordination and handover"].map((item) => <p key={item}>✓ {item}</p>)}</div></div></section>
    <CTASection title="Not sure which service fits?" text="Share the outcome you need and I’ll help you choose a practical design, pre-press or printing solution." />
  </>;
}
