import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.description, alternates: { canonical: `/services/${slug}` } } : {};
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@type": "Person", name: "Prabin Shrestha" }, areaServed: "Nepal" };

  return <>
    <PageHero eyebrow={service.shortTitle} trail="Services" title={service.title} text={service.description} />
    <section className="service-intro"><div className="container service-detail-grid">
      <div className="service-poster"><span>AI-POWERED DESIGN SERVICE / 0{services.indexOf(service) + 1}</span><Icon name={service.icon} size={48} /><strong>{service.shortTitle}</strong><div><i /><i /><i /></div></div>
      <div><p className="eyebrow">What this solves</p><h2>Move from scattered communication to a clear visual system.</h2><ul className="check-list">{service.problems.map((item) => <li key={item}><Icon name="circle-check" size={20} />{item}</li>)}</ul><div className="button-row"><Link href={`/contact?service=${service.slug}`} className="button">Request a Quote<Icon name="arrow-right" size={18} /></Link><Link href="/contact?service=consultation" className="button button-outline">Book a Consultation</Link></div></div>
    </div></section>

    {service.images?.length ? <section className="section service-work-section"><div className="container">
      <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>{service.shortTitle} design examples.</h2></div><p>Real design samples showing the products and production services available.</p></div>
      {service.specialties?.length ? <div className="service-specialty-row" aria-label={`${service.title} specialties`}>{service.specialties.map((item) => <span key={item}>{item}</span>)}</div> : null}
      <div className={`service-work-grid service-work-${service.slug}`}>
        {service.images.map((image) => <figure className="service-work-card" key={image.src}><div className="service-work-media"><Image src={image.src} alt={image.alt} fill unoptimized sizes="(max-width: 600px) 94vw, (max-width: 1000px) 45vw, 31vw" /></div><figcaption>{image.label}</figcaption></figure>)}
      </div>
    </div></section> : null}

    <section className="section section-tint"><div className="container split-lists"><div><p className="eyebrow">Deliverables</p><h2>What can be included</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Ideal for</p><h2>Who this helps</h2><ul>{service.idealClients.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Process</p><h2>From brief to final delivery.</h2></div></div><div className="process-grid">{service.process.map((step, index) => <article className="process-card" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    <section className="section section-tint"><div className="container benefit-detail"><div><p className="eyebrow">Benefits</p><h2>Designed to work, not just look good.</h2></div><div className="benefit-grid">{service.benefits.map((benefit) => <div key={benefit}><Icon name="check" size={17} />{benefit}</div>)}</div></div></section>
    <section className="section"><div className="container faq-grid"><div><p className="eyebrow">Questions</p><h2>Frequently asked questions</h2></div><Accordion items={service.faqs} /></div></section>
    <section className="section related-services"><div className="container"><p className="eyebrow">Related services</p><div className="related-grid">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><Icon name={item.icon} size={22} /><h3>{item.shortTitle}</h3><span>Explore service <Icon name="arrow-right" size={16} /></span></Link>)}</div></div></section>
    <CTASection />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
