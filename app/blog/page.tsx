import type { Metadata } from "next";
import Link from "next/link";
import { BlogExplorer } from "@/components/BlogExplorer";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/data/posts";

export const metadata: Metadata = { title: "Graphic Design Blog", description: "Practical articles about branding, print design, social media and visual communication.", alternates: { canonical: "/blog" } };

export default function BlogPage() { const featured = posts[0]; return <><PageHero eyebrow="Blog" title="Clear thinking for better design decisions." text="Practical notes on branding, print production, social media and visual communication for growing organisations." /><section className="section featured-article"><div className="container"><Link href={`/blog/${featured.slug}`} className={`blog-art blog-art-${featured.art}`}><span>Featured / {featured.category}</span><b>Design<br />builds<br />trust.</b><i /></Link><div><p className="eyebrow">Featured article</p><h2>{featured.title}</h2><p className="large-copy">{featured.excerpt}</p><div className="article-info"><span>{featured.date}</span><span>•</span><span>{featured.readTime}</span></div><Link href={`/blog/${featured.slug}`} className="button">Read Article<Icon name="arrow-right" size={18} /></Link></div></div></section><section className="section section-tint"><div className="container"><BlogExplorer /></div></section><CTASection /></>; }
