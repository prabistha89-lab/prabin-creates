"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { Icon } from "./Icon";

const CONTACT_EMAIL = "mail@shresthaprabin89.com.np";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const serviceOptions = [
  ["branding-visual-identity", "Branding and Visual Identity"], ["print-design", "Print Design"],
  ["social-media-design", "Social Media Graphic Design"], ["advertising-marketing-design", "Advertising and Marketing Design"],
  ["digital-marketing-creatives", "Digital Marketing Creatives"],
  ["consultation", "General Consultation"], ["other", "Other"],
] as const;

export function ContactForm() {
  const params = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "consultation", consultationMethod: "phone", consent: false, website: "", budget: "" },
  });

  useEffect(() => {
    const service = params.get("service");
    if (serviceOptions.some(([value]) => value === service)) {
      setValue("service", service as ContactInput["service"]);
      if (service === "consultation") window.setTimeout(() => formRef.current?.querySelector<HTMLSelectElement>("#service")?.focus(), 100);
    }
  }, [params, setValue]);

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      if (data.website) {
        setStatus("success");
        reset();
        return;
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone || "Not provided",
          organisation: data.company || "Not provided",
          service: data.service,
          budget: data.budget,
          consultation_method: data.consultationMethod,
          deadline: data.deadline || "Not provided",
          message: data.description,
          _replyto: data.email,
          _subject: `New design enquiry from ${data.fullName}`,
          _template: "table",
          _captcha: "false",
          _url: window.location.href.split("#")[0],
        }),
      });
      const result = await response.json().catch(() => null) as { success?: boolean | string } | null;
      if (!response.ok || result?.success === false || result?.success === "false") throw new Error("Submission failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldError = (name: keyof typeof errors) => errors[name]?.message ? <span className="field-error" id={`${name}-error`}>{String(errors[name]?.message)}</span> : null;

  return (
    <form ref={formRef} className="contact-form" action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-intro"><div><p className="eyebrow">Project enquiry</p><h2>Tell me what you are planning</h2></div><span>Usually replies within 1–2 business days</span></div>
      <div className="form-grid">
        <label>Full name *<input {...register("fullName")} autoComplete="name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} placeholder="Your full name" />{fieldError("fullName")}</label>
        <label>Email address *<input {...register("email")} type="email" autoComplete="email" aria-invalid={!!errors.email} placeholder="you@example.com" />{fieldError("email")}</label>
        <label>Phone number<input {...register("phone")} type="tel" autoComplete="tel" placeholder="+977 …" />{fieldError("phone")}</label>
        <label>Company or organisation<input {...register("company")} autoComplete="organization" placeholder="Optional" />{fieldError("company")}</label>
        <label>Required service *<select id="service" {...register("service")} aria-invalid={!!errors.service}>{serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>{fieldError("service")}</label>
        <label>Estimated budget *<select {...register("budget")} aria-invalid={!!errors.budget}><option value="">Select a range</option><option value="under-5000">Under NPR 5,000</option><option value="5000-10000">NPR 5,000–10,000</option><option value="10000-25000">NPR 10,000–25,000</option><option value="25000-50000">NPR 25,000–50,000</option><option value="50000-plus">NPR 50,000+</option><option value="not-sure">Not sure yet</option></select>{fieldError("budget")}</label>
        <label>Preferred consultation method *<select {...register("consultationMethod")}><option value="phone">Phone call</option><option value="video">Video meeting</option><option value="in-person">In-person in Bharatpur</option><option value="email">Email</option></select></label>
        <label>Project deadline<input {...register("deadline")} placeholder="For example, September 2026" />{fieldError("deadline")}</label>
        <label className="form-wide">Project description *<textarea {...register("description")} rows={6} aria-invalid={!!errors.description} placeholder="What do you need, who is it for, and what should the design achieve?" />{fieldError("description")}</label>
        <label className="honeypot" aria-hidden="true">Website<input {...register("website")} tabIndex={-1} autoComplete="off" /></label>
        <label className="consent form-wide"><input {...register("consent")} type="checkbox" /><span>I consent to Designer Prabin using these details to respond to my enquiry. *</span></label>
        {fieldError("consent")}
      </div>
      {status === "success" && <div className="form-message success" role="status"><Icon name="circle-check" />Thank you. Your enquiry has been submitted to Designer Prabin.</div>}
      {status === "error" && <div className="form-message error" role="alert">Your message could not be sent. Please try again or <a href={`mailto:${CONTACT_EMAIL}`}>email directly</a>.</div>}
      <button className="button form-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? <><span className="spinner" />Submitting…</> : <>Submit Form<Icon name="send" size={18} /></>}</button>
    </form>
  );
}
