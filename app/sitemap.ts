import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const paths = ["", "/about", "/services", "/portfolio", "/blog", "/contact", "/privacy-policy", "/terms", ...services.map((item) => `/services/${item.slug}`), ...projects.map((item) => `/portfolio/${item.slug}`), ...posts.map((item) => `/blog/${item.slug}`)]; return paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly", priority: path === "" ? 1 : .7 })); }
