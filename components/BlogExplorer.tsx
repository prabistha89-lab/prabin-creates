"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Icon } from "./Icon";

const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))] as string[];

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => posts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return (
    <>
      <div className="blog-tools">
        <label className="search-box"><Icon name="search" size={19} /><span className="sr-only">Search articles</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" /></label>
        <div className="filter-row compact" role="group" aria-label="Filter blog articles">{categories.map((item) => <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
      </div>
      {filtered.length ? <div className="blog-grid">{filtered.map((post) => <ArticleCard key={post.slug} post={post} />)}</div> : <div className="empty-state"><h2>No matching articles</h2><p>Try a different search or category.</p></div>}
    </>
  );
}

export function ArticleCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className={`blog-art blog-art-${post.art}`} aria-label={`Read ${post.title}`}><span>{post.category}</span><b>{post.title.split(" ").slice(0, 2).join(" ")}</b><i /></Link>
      <div className="blog-card-body"><div className="article-info"><span>{post.date}</span><span>•</span><span>{post.readTime}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="text-link">Read Article<Icon name="arrow-right" size={17} /></Link></div>
    </article>
  );
}
