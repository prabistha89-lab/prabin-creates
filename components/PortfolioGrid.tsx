"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectArt } from "./ProjectArt";
import { Icon } from "./Icon";

const filters = ["All", "Branding", "Print", "Social Media", "Advertising", "Publication", "Digital"] as const;

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = (active === "All" ? projects : projects.filter((project) => project.category === active)).slice(0, limit);
  return (
    <>
      {!limit && <div className="filter-row" role="group" aria-label="Filter portfolio projects">{filters.map((filter) => <button key={filter} type="button" className={active === filter ? "active" : ""} onClick={() => setActive(filter)}>{filter}</button>)}</div>}
      <div className="portfolio-grid">
        {filtered.map((project) => (
          <article className="portfolio-card" key={project.slug}>
            <Link href={`/portfolio/${project.slug}`} aria-label={`View ${project.title} case study`}><ProjectArt project={project} /></Link>
            <div className="portfolio-meta"><div><span>{project.category}</span><h3><Link href={`/portfolio/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p></div><Link href={`/portfolio/${project.slug}`} className="circle-link" aria-label={`View ${project.title}`}><Icon name="arrow-right" size={19} /></Link></div>
          </article>
        ))}
      </div>
    </>
  );
}
