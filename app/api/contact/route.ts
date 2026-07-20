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
    const apiKey = process.env.RESEND_API_KEY; const contactEmail = process.env.CONTACT_EMAIL || "mail@shresthaprabin89.com.np";
    if (!apiKey) { console.error("Contact email is not configured."); return NextResponse.json({ message: "Email service is not configured." }, { status: 503 }); }
    const send = (payload: Record<string, unknown>) => fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const subject = `New design enquiry from ${data.fullName}`;
    const messageText = [`Name: ${data.fullName}`, `Email: ${data.email}`, `Phone: ${data.phone || "Not provided"}`, `Organisation: ${data.company || "Not provided"}`, `Service: ${data.service}`, `Budget: ${data.budget}`, `Consultation: ${data.consultationMethod}`, `Deadline: ${data.deadline || "Not provided"}`, "", data.description].join("\n");
    const [owner, confirmation] = await Promise.all([send({ from: process.env.FROM_EMAIL || "Designer Prabin <onboarding@resend.dev>", to: [contactEmail], reply_to: data.email, subject, text: messageText }), send({ from: process.env.FROM_EMAIL || "Designer Prabin <onboarding@resend.dev>", to: [data.email], subject: "Your enquiry has been received", text: `Hello ${data.fullName},\n\nThank you for contacting Designer Prabin. I have received your enquiry and will review the details shortly.\n\nRegards,\nPrabin Shrestha` })]);
    if (!owner.ok || !confirmation.ok) { console.error("Resend returned a non-success response."); return NextResponse.json({ message: "The message could not be sent." }, { status: 502 }); }
    return NextResponse.json({ ok: true });
  } catch (error) { console.error("Contact submission failed", error instanceof Error ? error.message : "Unknown error"); return NextResponse.json({ message: "Unable to process the request." }, { status: 500 }); }
}
