import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Free Visual Brand Audit",
  description: "Use the free business visual brand audit to assess your logo, social media, advertising, marketing materials and sales communication.",
  alternates: { canonical: "/brand-audit" },
  openGraph: { title: "Free Visual Brand Audit | Designer Prabin", description: "Discover what to fix before spending more money on marketing." },
};

const auditAreas = [
  ["01", "Brand clarity", "Can a new customer understand what you do, who you help and why you are different within five seconds?"],
  ["02", "Visual identity", "Review your logo, colours, typography, photography and consistency across print and digital."],
  ["03", "Social media", "Check whether your profiles and posts are recognisable, readable on mobile and focused on customer benefits."],
  ["04", "Advertisement design", "Assess the headline, offer, focal point, proof and call to action in your promotional graphics."],
  ["05", "Marketing materials", "Make sure brochures, packaging, presentations, banners and digital assets feel like one business."],
  ["06", "Trust & professional image", "Find presentation problems that may create doubt before customers experience your actual quality."],
  ["07", "Sales support design", "Check whether offers, packages, benefits and buying information help customers make decisions."],
] as const;

const firstFixes = ["Logo & Brand Identity", "Social Media", "Advertising Creatives", "Sales Materials", "Brand Consistency"] as const;

export default function BrandAuditPage() {
  return (
    <div className="brand-audit-page">
      <section className="audit-hero">
        <div className="audit-orbit audit-orbit-one" aria-hidden="true" /><div className="audit-orbit audit-orbit-two" aria-hidden="true" />
        <div className="container audit-hero-grid">
          <Reveal className="audit-hero-copy">
            <p className="eyebrow">The Business Visual Brand Audit</p>
            <h1><span>7 things to fix</span> before spending more money on marketing.</h1>
            <p>A practical brand and graphic design checklist for business owners who want to look more professional, communicate clearly and build trust.</p>
            <div className="audit-hero-actions"><Link href="/brand-audit-form" className="button">Get My Free Brand Audit<Icon name="arrow-right" size={18} /></Link><a href="#audit-checklist" className="cine-text-link">Explore the checklist</a></div>
          </Reveal>
          <Reveal className="audit-hero-score" delay={0.08}>
            <span>Free / 15-point assessment</span><strong>Is your business good…<br /><em>but your design doesn’t show it?</em></strong>
            <div><i>Logo</i><i>Social</i><i>Ads</i><i>Print</i><i>Web</i></div>
          </Reveal>
        </div>
      </section>

      <section className="audit-intro section">
        <div className="container audit-intro-grid">
          <Reveal><p className="eyebrow">First impressions become business opinions</p><h2>Customers see your presentation before they experience your quality.</h2></Reveal>
          <Reveal delay={0.06}><p className="large-copy">A good product, competitive pricing and years of experience can still be overlooked when the visual communication feels unclear or inconsistent.</p><div className="audit-path"><span>Attention</span><i>→</i><span>Clarity</span><i>→</i><span>Trust</span><i>→</i><span>Action</span></div></Reveal>
        </div>
      </section>

      <section id="audit-checklist" className="audit-areas section">
        <div className="container"><div className="audit-section-heading"><p className="eyebrow">The 7-point audit</p><h2>See where design may be helping—or hurting—your business.</h2></div>
          <div className="audit-area-list">{auditAreas.map(([number,title,text],index)=><Reveal key={title} className="audit-area-row" delay={index*.035}><span>{number}</span><h3>{title}</h3><p>{text}</p><Icon name="arrow-right" size={21} /></Reveal>)}</div>
        </div>
      </section>

      <section className="audit-test section">
        <div className="container audit-test-grid"><div><p className="eyebrow">The 3-second test</p><h2>Can someone understand your latest post in three seconds?</h2><p>Strong visual communication gives every customer a clear sequence to follow.</p></div><div className="audit-test-steps"><div><b>01</b><span>Attention</span><small>What should they notice first?</small></div><div><b>02</b><span>Message</span><small>What are you trying to tell them?</small></div><div><b>03</b><span>Benefit</span><small>Why should they care?</small></div><div><b>04</b><span>Action</span><small>What should they do next?</small></div></div></div>
      </section>

      <section className="audit-first-fixes section"><div className="container"><p className="eyebrow">Fix these first</p><h2>The five customer touchpoints that usually create the fastest improvement.</h2><div>{firstFixes.map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3></article>)}</div><p className="audit-formula">Brand <i>→</i> Attention <i>→</i> Trust <i>→</i> Offer <i>→</i> Action <i>→</i> Sales</p></div></section>

      <section className="audit-application-cta section">
        <div className="container audit-application-grid">
          <Reveal><p className="eyebrow">Ready for your review?</p><h2>The audit form now has its own focused space.</h2></Reveal>
          <Reveal delay={0.06}><p>Share your business details, complete the 15-point self-assessment and choose the customer touchpoints you want reviewed.</p><Link href="/brand-audit-form" className="cine-pill cine-pill-dark">Open the Free Brand Audit Form<Icon name="arrow-right" size={18} /></Link></Reveal>
        </div>
      </section>

      <section className="audit-final"><div className="container"><p>Good design is not simply decoration.</p><h2>Make your business look as good as it really is.</h2><Link href="/contact" className="cine-text-link cine-text-link-light">Or discuss a project directly<Icon name="arrow-right" size={18} /></Link></div></section>
    </div>
  );
}
