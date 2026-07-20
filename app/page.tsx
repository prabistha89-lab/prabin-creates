import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/BlogExplorer";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = { title: "Graphic Designer in Chitwan", description: "Professional print, branding and digital media design by Prabin Shrestha in Bharatpur, Chitwan, Nepal.", alternates: { canonical: "/" } };

const process = [{ n: "01", title: "Discovery", text: "We clarify the audience, message, scope and practical requirements." }, { n: "02", title: "Strategy", text: "I shape a focused creative direction built around your communication goal." }, { n: "03", title: "Design", text: "Ideas become considered layouts, systems and refined visual details." }, { n: "04", title: "Delivery", text: "You receive organised, production-ready files and clear handover guidance." }];

export default function Home() {
  return (
    <>
      <section className="hero grid-paper">
        <div className="container hero-grid">
          <Reveal className="hero-copy"><p className="eyebrow"><span className="status-dot" />Print & Digital Media Graphic Designer</p><h1>Creative designs that make <em>brands stand out.</em></h1><p className="hero-lead">I create professional print and digital media designs that help businesses communicate clearly, build credibility and connect with their audience.</p><div className="button-row"><Link href="/portfolio" className="button">View My Work<Icon name="arrow-right" size={18} /></Link><Link href="/contact?service=consultation" className="button button-outline">Book a Consultation</Link></div><div className="hero-proof"><span><b>12+</b> design capabilities</span><span><b>Print + Digital</b> production ready</span><span><b>Bharatpur</b> Chitwan, Nepal</span></div></Reveal>
          <Reveal className="portrait-composition" delay={0.12}><div className="portrait-frame"><Image src="/images/profile/prabin-shrestha.png" alt="Prabin Shrestha, print and digital media graphic designer" width={1124} height={1402} priority sizes="(max-width: 900px) 88vw, 42vw" /></div><div className="swatch-card"><span style={{ background: "#0F172A" }} /><span style={{ background: "#0369A1" }} /><span style={{ background: "#38BDF8" }} /><span style={{ background: "#BAE6FD" }} /><small>CMYK / RGB</small></div><div className="type-card"><small>TYPE SAMPLE</small><b>Aa</b><span>Manrope / Inter</span></div><div className="registration-mark">+</div></Reveal>
        </div>
      </section>
      <section className="experience-strip" aria-label="Areas of expertise"><div className="marquee-line">{["Branding", "Print Design", "Social Media", "Advertising", "Publication Design", "Marketing Graphics"].map((item) => <span key={item}><i />{item}</span>)}</div></section>
      <section className="section"><div className="container about-preview"><Reveal><p className="eyebrow">About the designer</p><h2>Ideas, made clear.<br />Details, made memorable.</h2></Reveal><Reveal delay={0.08}><p className="large-copy">I’m Prabin Shrestha, a graphic designer based in Bharatpur, creating practical visual communication for print and digital media.</p><p>My approach combines creative thinking with careful production knowledge—so the final work is not only attractive, but useful, consistent and ready to perform in the real world.</p><Link href="/about" className="text-link">More about my approach<Icon name="arrow-right" size={17} /></Link></Reveal></div></section>
      <section className="section section-tint"><div className="container"><div className="section-heading"><div><p className="eyebrow">Selected services</p><h2>Design support from first impression to final file.</h2></div><p>Focused creative services for organisations that want to communicate with clarity and confidence.</p></div><div className="service-grid">{services.map((service, index) => <Reveal key={service.slug} delay={index * 0.04}><ServiceCard service={service} index={index} /></Reveal>)}</div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Selected portfolio</p><h2>Thoughtful work across print and screen.</h2></div><Link className="text-link" href="/portfolio">Explore all projects<Icon name="arrow-right" size={17} /></Link></div><PortfolioGrid limit={4} /><p className="placeholder-note">Portfolio projects are clearly marked concept placeholders until real client work is added.</p></div></section>
      <section className="section process-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">How we work</p><h2>A clear process keeps creativity moving.</h2></div><p>Every project is shaped around practical decisions, timely feedback and a well-organised handover.</p></div><div className="process-grid">{process.map((step, index) => <Reveal key={step.title} delay={index * .06} className="process-card"><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}</div></div></section>
      <section className="section"><div className="container why-grid"><div><p className="eyebrow">Why work with me</p><h2>Creative care with production discipline.</h2><p className="large-copy">The work stays grounded in your audience, your goals and the formats you actually need.</p></div><div className="benefit-grid">{["Professional design experience", "Print-ready and digital-ready files", "Clear communication", "Original creative concepts", "Attention to detail", "On-time project delivery", "Consistent brand presentation", "Organised final assets"].map((benefit) => <div key={benefit}><Icon name="check" size={17} /><span>{benefit}</span></div>)}</div></div></section>
      <section className="section section-tint"><div className="container"><div className="section-heading"><div><p className="eyebrow">Client feedback</p><h2>What a thoughtful design process should feel like.</h2></div><p className="mock-label">Sample testimonials — not real endorsements</p></div><div className="testimonial-grid">{testimonials.map((item) => <article key={item.name} className="testimonial-card"><Icon name="quote" size={28} /><blockquote>“{item.quote}”</blockquote><div><strong>{item.name}</strong><span>{item.role}</span></div></article>)}</div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Design notes</p><h2>Useful ideas for better visual communication.</h2></div><Link href="/blog" className="text-link">View all articles<Icon name="arrow-right" size={17} /></Link></div><div className="blog-grid">{posts.slice(0, 3).map((post) => <ArticleCard key={post.slug} post={post} />)}</div></div></section>
      <CTASection />
    </>
  );
}
