import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { navigation, siteConfig } from "@/data/site";
import { LinkedInLogo } from "./BrandIcons";
import { Icon } from "./Icon";

export function Footer() {
  const socialIcons = { Facebook: "facebook", Instagram: "instagram", TikTok: "tiktok", LinkedIn: "linkedin" };
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <p className="footer-brand-name">Designer Prabin</p>
          <p>AI-powered graphic design, pre-press and professional printing for businesses that value clarity, craft and consistent presentation.</p>
          <div className="social-row">
            {siteConfig.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`Follow Designer Prabin on ${social.label}`} title={social.label}>{social.label === "LinkedIn" ? <LinkedInLogo /> : <Image src={`https://cdn.simpleicons.org/${socialIcons[social.label]}/ffffff`} alt="" width={18} height={18} unoptimized />}<span className="sr-only">{social.label}</span></a>)}
          </div>
        </div>
        <div><h2>Navigate</h2>{navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div><h2>Services</h2>{services.slice(0, 4).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}</div>
        <div><h2>Start a project</h2><a href={`mailto:${siteConfig.email}`}><Icon name="mail" size={17} />{siteConfig.email}</a><a href={`tel:${siteConfig.phoneHref}`}><Icon name="phone" size={17} />{siteConfig.phone}</a><a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer"><Icon name="message-circle" size={17} />WhatsApp message</a><p className="footer-location"><Icon name="map-pin" size={17} />{siteConfig.location}</p></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Designer Prabin. All rights reserved.</p><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></div></div>
    </footer>
  );
}
