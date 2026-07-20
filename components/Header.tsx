"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
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
          <span className="brand-mark">DP</span>
          <span>Designer <b>Prabin</b></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/contact?service=consultation" className="button button-small">Book a Consultation</Link>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            <Icon name={open ? "x" : "menu"} size={23} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          <div className="container">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow-right" size={17} /></Link>)}
            <Link href="/contact?service=consultation" className="button" onClick={() => setOpen(false)}>Book a Consultation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
