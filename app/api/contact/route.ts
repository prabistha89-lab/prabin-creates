import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function clean(value?: string) { return value ? value.replace(/<[^>]*>/g, "").replace(/[\u0000-\u001F\u007F]/g, " ").trim() : ""; }

export async function POST(request: Request) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now(); const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= MAX_ATTEMPTS) return NextResponse.json({ message: "Too many enquiries. Please try again later." }, { status: 429 });
  attempts.set(ip, !current || current.resetAt <= now ? { count: 1, resetAt: now + WINDOW } : { ...current, count: current.count + 1 });
  try {
    const raw = await request.json();
    if (raw.website) return NextResponse.json({ ok: true });
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) return NextResponse.json({ message: "Please check the form fields.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    const data = { ...parsed.data, fullName: clean(parsed.data.fullName), phone: clean(parsed.data.phone), company: clean(parsed.data.company), deadline: clean(parsed.data.deadline), description: clean(parsed.data.description) };
    const contactEmail = process.env.CONTACT_EMAIL || "prabistha89@gmail.com";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designer-prabin-portfolio.mhflex89.chatgpt.site";
    const contactUrl = `${siteUrl.replace(/\/$/, "")}/contact`;
    const subject = `New design enquiry from ${data.fullName}`;
    const formSubmit = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Origin: new URL(siteUrl).origin, Referer: contactUrl },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        phone: data.phone || "Not provided",
        organisation: data.company || "Not provided",
        service: data.service,
        consultation_method: data.consultationMethod,
        deadline: data.deadline || "Not provided",
        message: data.description,
        _replyto: data.email,
        _subject: subject,
        _template: "table",
        _captcha: "false",
        _url: contactUrl,
      }),
    });
    const result = await formSubmit.json().catch(() => null) as { success?: boolean | string } | null;
    if (!formSubmit.ok || result?.success === false || result?.success === "false") { console.error("FormSubmit returned a non-success response."); return NextResponse.json({ message: "The message could not be sent." }, { status: 502 }); }
    return NextResponse.json({ ok: true });
  } catch (error) { console.error("Contact submission failed", error instanceof Error ? error.message : "Unknown error"); return NextResponse.json({ message: "Unable to process the request." }, { status: 500 }); }
}
