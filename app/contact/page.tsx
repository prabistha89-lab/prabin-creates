import type { Metadata } from "next";
import { Suspense } from "react";
import { Accordion } from "@/components/Accordion";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact & Consultation", description: "Request a graphic design quote or consultation with Designer Prabin in Bharatpur, Chitwan.", alternates: { canonical: "/contact" } };

const faqs = [
  { question: "What should I include in my enquiry?", answer: "Share what you need, the audience, intended formats, approximate deadline and any budget range you already have." },
  { question: "Can we meet in person?", answer: "Yes. In-person consultations may be arranged in Bharatpur, alongside phone and video options." },
  { question: "How quickly will I receive a quotation?", answer: "After the scope is clear, a tailored quotation and proposed schedule can usually be prepared within a few business days." },
  { question: "Do you work outside Chitwan?", answer: "Yes. Print and digital projects can be managed remotely with clients across Nepal and beyond." },
];

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact" title="Let’s talk about what you need to communicate." text="Request a quotation, arrange a consultation or simply ask a question. Share a few details and I’ll suggest a practical next step." />
    <section className="section"><div className="container contact-layout">
      <aside className="contact-sidebar">
        <div><p className="eyebrow">Contact details</p><h2>Start the conversation.</h2><p>You can use the project form or contact me directly during normal business hours.</p></div>
        <a href={`mailto:${siteConfig.email}`}><span><Icon name="mail" /></span><div><small>Email</small><b>{siteConfig.email}</b></div></a>
        <a href={`tel:${siteConfig.phoneHref}`}><span><Icon name="phone" /></span><div><small>Phone</small><b>{siteConfig.phone}</b></div></a>
        <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer"><span><Icon name="message-circle" /></span><div><small>WhatsApp</small><b>Message Prabin</b></div></a>
        <div className="contact-detail"><span><Icon name="map-pin" /></span><div><small>Location</small><b>{siteConfig.location}</b></div></div>
        <div className="availability"><i /><span><b>Currently accepting enquiries</b>Monday–Friday, 9:00–17:30 NPT</span></div>
        <div className="consultation-note"><Icon name="message-circle" /><div><h3>Consultations</h3><p>Choose phone, video meeting or an in-person conversation in Bharatpur. No fake calendar—just a direct, useful discussion.</p></div></div>
      </aside>
      <Suspense fallback={<div className="form-loading">Loading enquiry form…</div>}><ContactForm /></Suspense>
    </div></section>
    <section className="map-section"><div className="container"><div className="map-embed"><iframe title="Google Map showing Designer Prabin in Bharatpur-11, Chitwan" src="https://www.google.com/maps?q=Bharatpur-11%2C%20Chitwan%2C%20Nepal&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div><a className="map-open-link" href="https://www.google.com/maps/search/?api=1&query=Bharatpur-11%2C%20Chitwan%2C%20Nepal" target="_blank" rel="noreferrer"><Icon name="map-pin" size={17} />Open current location in Google Maps</a></div></section>
    <section className="section"><div className="container faq-grid"><div><p className="eyebrow">Before you enquire</p><h2>Frequently asked questions</h2></div><Accordion items={faqs} /></div></section>
  </>;
}
