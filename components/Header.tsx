"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { Icon } from "./Icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="Designer Prabin home">
          <Image className="brand-logo" src="/Logo-01.svg" alt="Designer Prabin" width={154} height={60} priority unoptimized />
        </Link>
        <span className="header-tagline">Design · Print · Direction</span>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/brand-audit-form" className="button button-small">Free Brand Audit</Link>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            <Icon name={open ? "x" : "menu"} size={23} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          <div className="container">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow-right" size={17} /></Link>)}
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="button button-whatsapp" onClick={() => setOpen(false)}>Message on WhatsApp</a>
            <Link href="/brand-audit-form" className="button" onClick={() => setOpen(false)}>Get a Free Brand Audit</Link>
            <Link href="/contact?service=consultation" className="button button-outline" onClick={() => setOpen(false)}>Start a Project</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
