"use client";
import { useState } from "react";
import { Icon } from "./Icon";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="accordion">{items.map((item, index) => <div className="accordion-item" key={item.question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{item.question}</span><Icon name="chevron-down" size={19} /></button>{open === index && <p>{item.answer}</p>}</div>)}</div>;
}
