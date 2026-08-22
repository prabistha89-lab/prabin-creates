import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Graphic Design, Print and AI Digital Marketing in Chitwan",
  description: "Brand identity, graphic design, professional printing and AI digital marketing by Prabin Shrestha in Bharatpur, Chitwan, Nepal.",
  alternates: { canonical: "/" },
};

const featuredWork = [
  { image: "/apex.png", title: "Apex Academy", type: "Prospectus design", href: "/services/print-design", className: "work-landscape" },
  { image: "/royal.png", title: "Royal Rice Mill", type: "Brand advertising", href: "/services/branding-visual-identity", className: "work-square" },
  { image: "/brochure.png", title: "Orchid College", type: "Education campaign", href: "/services/print-design", className: "work-portrait" },
] as const;

const process = [
  ["01", "Listen", "Understand the audience, purpose and practical constraints."],
  ["02", "Shape", "Build a clear creative direction around the message."],
  ["03", "Craft", "Design, refine and prepare every detail for production."],
  ["04", "Deliver", "Supply organised assets ready for screen or press."],
] as const;

export default function Home() {
  return (
    <div className="cine-home">
      <section className="cine-hero">
        <div className="cine-grid-texture" aria-hidden="true" />
        <div className="cine-hero-orbit orbit-one" aria-hidden="true"><i /></div>
        <div className="cine-hero-orbit orbit-two" aria-hidden="true"><i /></div>
        <div className="container cine-hero-meta">
          <span>Independent creative practice</span>
          <span>Design · Print · AI Marketing</span>
          <span>Bharatpur, Nepal</span>
        </div>
        <div className="container cine-hero-stage">
          <Reveal className="cine-hero-copy">
            <p className="cine-kicker"><span />Available for selected projects</p>
            <h1><span>Prabin</span><em>creates.</em></h1>
            <div className="cine-ai-badge"><span>New capability</span><b>AI Digital Marketing</b></div>
            <p className="cine-hero-intro">Distinctive visual communication and AI-powered digital marketing shaped by strategy, craft and real production knowledge.</p>
            <div className="cine-actions">
              <Link href="/services" className="cine-pill">Explore the work<Icon name="arrow-right" size={18} /></Link>
              <Link href="/contact?service=consultation" className="cine-text-link">Start a project</Link>
            </div>
          </Reveal>
          <Reveal className="cine-portrait-wrap" delay={0.12}>
            <div className="cine-portrait-halo" aria-hidden="true"><span>Think · Design · Deliver · </span></div>
            <div className="cine-portrait">
              <Image src="/images/profile/prabin-shrestha.png" alt="Prabin Shrestha, graphic designer and print specialist" fill priority unoptimized sizes="(max-width: 900px) 88vw, 39vw" />
            </div>
            <div className="cine-portrait-note"><b>Prabin Shrestha</b><span>Design · print · AI digital marketing</span></div>
          </Reveal>
        </div>
        <div className="container cine-scroll-cue"><span>Scroll to explore</span><i /></div>
      </section>

      <div className="cine-marquee" aria-label="Creative services">
        <div>{["Brand Identity", "Editorial Design", "Professional Print", "AI Digital Marketing", "Social Media", "Pre-press"].map((item) => <span key={item}>{item}<i>✦</i></span>)}</div>
        <div aria-hidden="true">{["Brand Identity", "Editorial Design", "Professional Print", "AI Digital Marketing", "Social Media", "Pre-press"].map((item) => <span key={item}>{item}<i>✦</i></span>)}</div>
      </div>

      <section className="cine-feature">
        <div className="container">
          <div className="cine-section-label"><span>01</span><p>Selected project</p><i /></div>
          <div className="cine-feature-grid">
            <Reveal className="cine-feature-copy">
              <p className="cine-kicker">Editorial · Print · Production</p>
              <h2>Information,<br /><em>made inviting.</em></h2>
              <p>Prospectus design that turns complex academic information into a clear, energetic and production-ready story.</p>
              <Link href="/services/print-design" className="cine-pill cine-pill-dark">View print services<Icon name="arrow-right" size={18} /></Link>
            </Reveal>
            <Reveal className="cine-feature-media" delay={0.08}>
              <Image src="/apex.png" alt="Apex Academy prospectus design by Prabin Shrestha" fill unoptimized sizes="(max-width: 900px) 100vw, 62vw" />
              <span className="cine-work-stamp">Designed<br />for print</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cine-work">
        <div className="container">
          <div className="cine-section-label cine-section-label-light"><span>02</span><p>More selected work</p><i /></div>
          <div className="cine-work-intro">
            <Reveal><h2>Work with a clear<br /><em>reason to exist.</em></h2></Reveal>
            <Reveal delay={0.06}><p>From identity and campaign visuals to print production, every piece is built to communicate—not just decorate.</p></Reveal>
          </div>
          <div className="cine-work-grid">
            {featuredWork.map((work, index) => (
              <Reveal key={work.title} className={`cine-work-card ${work.className}`} delay={index * 0.07}>
                <Link href={work.href}>
                  <div className="cine-work-image"><Image src={work.image} alt={`${work.title} — ${work.type}`} fill unoptimized sizes="(max-width: 720px) 100vw, 40vw" /></div>
                  <div className="cine-work-caption"><span>0{index + 1}</span><div><h3>{work.title}</h3><p>{work.type}</p></div><Icon name="arrow-right" size={20} /></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cine-reel" aria-label="Animated selection of design work">
        <div className="container cine-reel-header">
          <p>Design reel</p>
          <span>Selected frames · continuously moving</span>
        </div>
        <div className="container cine-reel-frame">
          <div className="cine-reel-shot reel-shot-one"><Image src="/facebook post (1).jpg" alt="" fill unoptimized sizes="100vw" /></div>
          <div className="cine-reel-shot reel-shot-two"><Image src="/diary.png" alt="" fill unoptimized sizes="100vw" /></div>
          <div className="cine-reel-shot reel-shot-three"><Image src="/label.png" alt="" fill unoptimized sizes="100vw" /></div>
          <div className="cine-reel-shot reel-shot-four"><Image src="/wall calendar.png" alt="" fill unoptimized sizes="100vw" /></div>
          <div className="cine-reel-overlay"><span>Ideas into impact</span><b>Prabin<br /><em>creates.</em></b><small>Graphic design · Print · AI digital marketing</small></div>
        </div>
      </section>

      <section className="cine-about">
        <div className="cine-grid-texture" aria-hidden="true" />
        <div className="container">
          <div className="cine-section-label cine-section-label-light"><span>03</span><p>About the practice</p><i /></div>
          <Reveal className="cine-about-statement"><h2>Think with purpose.<br />Design with <em>feeling.</em><br />Deliver with precision.</h2></Reveal>
          <div className="cine-about-grid">
            <Reveal><p className="cine-about-lead">I’m Prabin Shrestha, an independent graphic designer and print specialist helping businesses communicate with more confidence.</p></Reveal>
            <Reveal delay={0.08}><p>My process combines strategic thinking, AI-assisted exploration, hands-on design judgement and practical pre-press knowledge. The result is work that feels distinctive and performs in the real world.</p><Link href="/about" className="cine-text-link cine-text-link-light">Meet the designer<Icon name="arrow-right" size={18} /></Link></Reveal>
          </div>
          <div className="cine-process">
            {process.map(([number, title, text], index) => <Reveal key={title} className="cine-process-item" delay={index * 0.05}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="cine-services">
        <div className="container">
          <div className="cine-section-label"><span>04</span><p>Capabilities</p><i /></div>
          <div className="cine-services-head"><Reveal><h2>One creative partner.<br /><em>Many useful outcomes.</em></h2></Reveal><Reveal delay={0.06}><p>Focused services for businesses, institutions and teams that care about how they are seen and understood.</p></Reveal></div>
          <div className="cine-service-list">
            {services.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug} className="cine-service-row"><span>0{index + 1}</span><h3>{service.shortTitle}</h3><p>{service.summary}</p><Icon name="arrow-right" size={22} /></Link>)}
          </div>
        </div>
      </section>

      <section className="cine-journal">
        <div className="container">
          <div className="cine-section-label"><span>05</span><p>Design notes</p><i /></div>
          <div className="cine-journal-head"><h2>Ideas worth<br /><em>sharing.</em></h2><Link href="/blog" className="cine-text-link">View all notes<Icon name="arrow-right" size={18} /></Link></div>
          <div className="cine-journal-grid">
            {posts.slice(0, 3).map((post, index) => <Link href={`/blog/${post.slug}`} key={post.slug} className="cine-journal-card"><span>0{index + 1}</span><p>{post.category} · {post.readTime}</p><h3>{post.title}</h3><Icon name="arrow-right" size={20} /></Link>)}
          </div>
        </div>
      </section>

      <section className="home-audit-cta">
        <div className="home-audit-ring" aria-hidden="true"><span>15</span></div>
        <div className="container home-audit-grid">
          <Reveal><p className="cine-kicker"><span />Free business resource</p><h2>Is your business good…<br /><em>but your design doesn’t show it?</em></h2></Reveal>
          <Reveal delay={0.08}><p>Use the free visual brand audit to assess your logo, social media, advertisements, marketing materials and sales communication—then discover what to fix first.</p><Link href="/brand-audit-form" className="cine-pill cine-pill-light">Get My Free Brand Audit<Icon name="arrow-right" size={18} /></Link><Link href="/brand-audit" className="home-audit-guide-link">View the 7-point audit guide</Link><small>Practical review · 15-point score · Clear recommendations</small></Reveal>
        </div>
      </section>

      <section className="cine-cta">
        <div className="container">
          <p>Have a project in mind?</p>
          <h2>Let’s make it<br /><em>clear, useful, memorable.</em></h2>
          <div><Link href="/contact?service=consultation" className="cine-pill cine-pill-light">Start a conversation<Icon name="arrow-right" size={18} /></Link><a href="mailto:mail@shresthaprabin89.com.np" className="cine-text-link cine-text-link-light">mail@shresthaprabin89.com.np</a></div>
        </div>
      </section>
    </div>
  );
}
