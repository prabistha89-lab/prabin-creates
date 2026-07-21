import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const paths = ["", "/about", "/services", "/blog", "/contact", "/privacy-policy", "/terms", ...services.map((item) => `/services/${item.slug}`), ...posts.map((item) => `/blog/${item.slug}`)]; return paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly", priority: path === "" ? 1 : .7 })); }
