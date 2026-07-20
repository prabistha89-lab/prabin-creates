import Link from "next/link";
import { Icon } from "./Icon";

export function CTASection({ title = "Have a design project in mind?", text = "Let’s turn your ideas into clear, confident creative work that is ready for the real world." }: { title?: string; text?: string }) {
  return <section className="cta-wrap"><div className="container"><div className="cta-card"><div><p className="eyebrow eyebrow-light">Start a project</p><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><Link href="/contact?service=consultation" className="button button-white">Book a Consultation<Icon name="arrow-right" size={18} /></Link><Link href="/contact" className="button button-ghost-light">Contact Me</Link></div></div></div></section>;
}
