"use client";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const fn = () => setShow(window.scrollY > 500); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  if (!show) return null;
  return <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"><Icon name="chevron-down" size={20} /></button>;
}
