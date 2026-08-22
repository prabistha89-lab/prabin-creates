import type { Metadata } from "next";
import Link from "next/link";
import { BrandAuditForm } from "@/components/BrandAuditForm";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Free Brand Audit Form",
  description: "Request a free visual brand audit for your logo, social media, advertising, print materials and sales communication.",
  alternates: { canonical: "/brand-audit-form" },
  openGraph: { title: "Free Brand Audit Form | Designer Prabin", description: "Complete the 15-point assessment and request practical recommendations for your business." },
};

const formSteps = [
  ["01", "Tell me about your business"],
  ["02", "Score your visual brand"],
  ["03", "Choose what to review"],
] as const;

export default function BrandAuditFormPage() {
  return (
    <div className="audit-form-page">
      <section className="audit-form-page-hero">
        <div className="audit-orbit audit-form-orbit" aria-hidden="true" />
        <div className="container audit-form-page-hero-grid">
          <Reveal>
            <p className="eyebrow">Free professional review</p>
            <h1>Request your<br /><em>visual brand audit.</em></h1>
            <p>Complete one focused form so I can understand your business, review the right customer touchpoints and recommend what to improve first.</p>
            <Link href="/brand-audit" className="cine-text-link">Read the 7-point audit guide<Icon name="arrow-right" size={18} /></Link>
          </Reveal>
          <Reveal className="audit-form-page-summary" delay={0.08}>
            <span>No cost · Practical feedback</span>
            {formSteps.map(([number, label]) => <div key={number}><b>{number}</b><p>{label}</p></div>)}
            <small>15-point self-assessment included</small>
          </Reveal>
        </div>
      </section>

      <section className="audit-form-section section">
        <div className="container"><BrandAuditForm /></div>
      </section>
    </div>
  );
}
