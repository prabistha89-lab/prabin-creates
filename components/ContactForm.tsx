"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Icon } from "./Icon";

const CONTACT_EMAIL = "prabistha89@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;
const FORM_PAGE_URL = "https://designer-prabin-portfolio.mhflex89.chatgpt.site/contact";

const serviceOptions = [
  ["branding-visual-identity", "Branding and Visual Identity"], ["print-design", "Print Design"],
  ["social-media-design", "Social Media Graphic Design"], ["advertising-marketing-design", "Advertising and Marketing Design"],
  ["digital-marketing-creatives", "Digital Marketing Creatives"],
  ["consultation", "General Consultation"], ["other", "Other"],
] as const;

export function ContactForm() {
  const params = useSearchParams();
  const serviceRef = useRef<HTMLSelectElement>(null);
  const requestedService = params.get("service");
  const defaultService = serviceOptions.some(([value]) => value === requestedService) ? requestedService || "consultation" : "consultation";

  useEffect(() => {
    if (requestedService === "consultation") window.setTimeout(() => serviceRef.current?.focus(), 100);
  }, [requestedService]);

  return (
    <form className="contact-form" action={FORM_ENDPOINT} method="POST">
      <input type="hidden" name="_subject" value="New project enquiry for Designer Prabin" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_url" value={FORM_PAGE_URL} />
      <div className="form-intro"><div><p className="eyebrow">Project enquiry</p><h2>Tell me what you are planning</h2></div><span>Usually replies within 1–2 business days</span></div>
      <div className="form-grid">
        <label>Full name *<input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your full name" /></label>
        <label>Email address *<input name="email" required type="email" maxLength={120} autoComplete="email" placeholder="you@example.com" /></label>
        <label>Phone number<input name="phone" type="tel" maxLength={30} autoComplete="tel" placeholder="+977 …" /></label>
        <label>Company or organisation<input name="organisation" maxLength={100} autoComplete="organization" placeholder="Optional" /></label>
        <label>Required service *<select ref={serviceRef} id="service" name="service" required defaultValue={defaultService}>{serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <label>Preferred consultation method *<select name="consultation_method" required defaultValue="phone"><option value="phone">Phone call</option><option value="video">Video meeting</option><option value="in-person">In-person in Bharatpur</option><option value="email">Email</option></select></label>
        <label>Project deadline<input name="deadline" maxLength={50} placeholder="For example, September 2026" /></label>
        <label className="form-wide">Project description *<textarea name="message" required minLength={20} maxLength={3000} rows={6} placeholder="What do you need, who is it for, and what should the design achieve?" /></label>
        <label className="honeypot" aria-hidden="true">Website<input name="_honey" tabIndex={-1} autoComplete="off" /></label>
        <label className="consent form-wide"><input name="consent" required type="checkbox" /><span>I consent to Designer Prabin using these details to respond to my enquiry. *</span></label>
      </div>
      <button className="button form-submit" type="submit">Submit Form<Icon name="send" size={18} /></button>
    </form>
  );
}
