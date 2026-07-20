import Link from "next/link";

export function PageHero({ eyebrow, title, text, trail }: { eyebrow: string; title: string; text: string; trail?: string }) {
  return (
    <section className="page-hero grid-paper">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span>{trail && <><Link href={`/${trail.toLowerCase()}`}>{trail}</Link><span>/</span></>}<span>{eyebrow}</span></nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{text}</p>
      </div>
    </section>
  );
}
