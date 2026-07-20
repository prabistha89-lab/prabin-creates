import Link from "next/link";
import type { Service } from "@/data/services";
import { Icon } from "./Icon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="service-card">
      <div className="service-card-top"><span className="service-icon"><Icon name={service.icon} size={24} /></span><span className="card-number">0{index + 1}</span></div>
      <h3>{service.title}</h3><p>{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="text-link">Learn More<Icon name="arrow-right" size={17} /></Link>
    </article>
  );
}
