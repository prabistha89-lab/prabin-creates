import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/BlogExplorer";
import { LinkedInLogo } from "@/components/BrandIcons";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${slug}` }, openGraph: { type: "article", title: post.title, description: post.excerpt } } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const index = posts.findIndex((item) => item.slug === slug);
  const previous = posts[index - 1];
  const next = posts[index + 1];
  const related = posts.filter((item) => item.slug !== slug && item.category === post.category).slice(0, 2);
  const toc = post.sections.map((section, i) => ({ ...section, id: `section-${i + 1}` }));
  const schema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: post.dateIso || "2026-07-12", author: { "@type": "Person", name: "Prabin Shrestha" }, publisher: { "@type": "Person", name: "Prabin Shrestha" } };

  return <>
    <article>
      <header className="article-hero grid-paper"><div className="container narrow"><nav className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{post.category}</span></nav><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="page-lead">{post.excerpt}</p><div className="article-byline"><span>By Prabin Shrestha</span><span>{post.date}</span><span>{post.readTime}</span></div></div></header>
      <figure className="article-feature-image"><Image src={post.image} alt={post.imageAlt} fill priority unoptimized sizes="(max-width: 900px) 94vw, 1180px" /></figure>
      <div className="container article-layout">
        <aside><strong>In this article</strong>{toc.map((section) => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}<div className="share-list"><span>Share</span><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/blog/${slug}`)}`} aria-label="Share on LinkedIn"><LinkedInLogo size={15} /></a><a href={`mailto:?subject=${encodeURIComponent(post.title)}`} aria-label="Share by email">@</a></div></aside>
        <div className="article-body">
          <p className="article-intro">{post.intro}</p>
          {toc.map((section, sectionIndex) => <div key={section.id}>
            <section id={section.id}>
              <h2>{section.heading}</h2>
              {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph, paragraphIndex) => <p key={`${section.id}-${paragraphIndex}`}>{paragraph}</p>)}
              {section.bullets?.length ? <ul className="article-bullets">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </section>
            {post.inlineImages?.filter((image) => image.afterSection === sectionIndex + 1).map((image) => <figure className="article-inline-image" key={image.src}><div><Image src={image.src} alt={image.alt} fill unoptimized sizes="(max-width: 800px) 94vw, 720px" /></div><figcaption>{image.caption}</figcaption></figure>)}
          </div>)}
          <div className="article-callout"><Icon name="sparkles" size={24} /><div><h3>Human creativity, enhanced by AI</h3><p>Use AI to improve speed and exploration while keeping strategy, accuracy, ethics and final creative judgement firmly human-led.</p></div></div>
        </div>
      </div>
    </article>
    <nav className="container article-nav" aria-label="Article pagination">{previous ? <Link href={`/blog/${previous.slug}`}><span>Previous article</span><b>{previous.title}</b></Link> : <span />}{next && <Link href={`/blog/${next.slug}`}><span>Next article</span><b>{next.title}</b></Link>}</nav>
    {related.length > 0 && <section className="section section-tint"><div className="container"><div className="section-heading"><div><p className="eyebrow">Keep reading</p><h2>Related articles</h2></div></div><div className="blog-grid">{related.map((item) => <ArticleCard key={item.slug} post={item} />)}</div></div></section>}
    <CTASection />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
