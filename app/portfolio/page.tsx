import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = { title: "Graphic Design Portfolio", description: "Selected branding, print, social, advertising, publication and digital design concept work.", alternates: { canonical: "/portfolio" } };

export default function PortfolioPage() { return <><PageHero eyebrow="Portfolio" title="Selected work, built around clear ideas." text="Explore concept case studies across identity, print, campaigns, publications and digital media. Real client work can be added through the structured project data." /><section className="section"><div className="container"><PortfolioGrid /><p className="placeholder-note">Transparency note: all projects currently shown are fictional portfolio placeholders, ready to be replaced with approved client work.</p></div></section><CTASection /></>; }
