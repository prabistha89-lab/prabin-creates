export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  description: string;
  problems: string[];
  deliverables: string[];
  idealClients: string[];
  benefits: string[];
  specialties?: string[];
  images?: { src: string; label: string; alt: string }[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "branding-visual-identity",
    title: "Branding and Visual Identity",
    shortTitle: "Brand Identity",
    icon: "pen-tool",
    summary: "A cohesive identity system that makes your business memorable and credible.",
    description: "Build a clear, recognisable brand with a considered logo, colour system, typography and practical visual guidelines.",
    problems: ["An inconsistent visual presence", "A dated or forgettable logo", "Unclear brand personality"],
    deliverables: ["Logo suite", "Brand colour system", "Typography selection", "Brand guidelines", "Business stationery", "Visual identity assets"],
    idealClients: ["Start-ups", "Growing businesses", "Professional services", "Hospitality and retail brands"],
    benefits: ["Stronger recognition", "Consistent communication", "A professional first impression", "Assets ready for print and digital use"],
    specialties: ["Label Design", "Advertisement Design", "Promotional Product Design"],
    images: [
      { src: "/label design.png", label: "Label Design", alt: "Food product label designs applied to three pickle jars" },
      { src: "/add-A.jpg", label: "Advertisement Design", alt: "Wide-format advertising design created by Designer Prabin" },
      { src: "/facebook post 17.jpg", label: "Promotional Product Design", alt: "Promotional product graphic designed for social media" },
    ],
    process: [{ title: "Discover", text: "Clarify your audience, offer and ambition." }, { title: "Position", text: "Define the visual territory and creative direction." }, { title: "Create", text: "Develop and refine the identity system." }, { title: "Launch", text: "Supply organised files and usage guidance." }],
    faqs: [{ question: "How many logo concepts will I receive?", answer: "The proposal defines a focused concept and revision scope so the process stays strategic rather than becoming a volume exercise." }, { question: "Will I receive source files?", answer: "Yes. Final approved work includes organised, editable source files plus practical export formats." }],
  },
  {
    slug: "print-design",
    title: "Print Design",
    shortTitle: "Print Design",
    icon: "printer",
    summary: "Tactile, carefully crafted materials prepared correctly for professional production.",
    description: "From a single flyer to a coordinated print campaign, every layout is designed for clarity, impact and dependable production.",
    problems: ["Crowded layouts", "Files rejected by printers", "Marketing materials that lack consistency"],
    deliverables: ["Books", "Brochures", "Prospectuses", "Diaries", "Table and wall calendars", "Flyers and posters", "Pre-press services", "Professional printing services"],
    idealClients: ["Local businesses", "Schools and colleges", "Events", "Restaurants", "Community organisations"],
    benefits: ["Print-ready artwork", "Complete pre-press support", "Professional printing coordination", "Clear information hierarchy"],
    specialties: ["Book Design & Printing", "Brochure Design & Printing", "Prospectus Design & Printing", "Diary Design & Printing", "Calendar Design & Printing", "All Pre-press & Printing Services"],
    images: [
      { src: "/book.png", label: "Book Design & Printing", alt: "Professionally designed and printed book mockup" },
      { src: "/brochure.png", label: "Brochure Design & Printing", alt: "College brochure and prospectus cover design" },
      { src: "/prospectus.png", label: "Prospectus Design", alt: "Educational prospectus presentation design" },
      { src: "/prospectus-A.png", label: "Prospectus Design Variation", alt: "Alternative educational prospectus design" },
      { src: "/diary.png", label: "Diary Design & Printing", alt: "Custom branded diary design" },
      { src: "/Table Calendar.png", label: "Table Calendar", alt: "Custom table calendar design and print presentation" },
      { src: "/wall calendar.png", label: "Wall Calendar", alt: "Custom wall calendar design and print presentation" },
    ],
    process: [{ title: "Brief", text: "Confirm format, quantity and production requirements." }, { title: "Structure", text: "Plan the message, hierarchy and reading flow." }, { title: "Design", text: "Create and refine the visual composition." }, { title: "Preflight", text: "Check colour, bleed, resolution and exports." }],
    faqs: [{ question: "Can you work with my printer?", answer: "Yes. I can prepare artwork to a supplier’s specification and help resolve production questions." }, { question: "Do you arrange printing?", answer: "Printing can be coordinated where practical, or I can supply production-ready files for your preferred printer." }],
  },
  {
    slug: "social-media-design",
    title: "Social Media Graphic Design",
    shortTitle: "Social Media",
    icon: "messages-square",
    summary: "On-brand campaign visuals designed to stop the scroll and stay consistent.",
    description: "Create a recognisable social presence with adaptable content systems, promotional graphics and campaign assets.",
    problems: ["Inconsistent posts", "Low visual recognition", "Slow content production"],
    deliverables: ["Facebook posts", "Instagram posts", "Story designs", "Campaign creatives", "Cover images", "Reusable templates"],
    idealClients: ["Retail brands", "Education providers", "Creators", "Hospitality", "Service businesses"],
    benefits: ["Faster publishing", "Better brand recall", "Campaign consistency", "Platform-ready sizing"],
    specialties: ["Facebook Post Design", "Instagram Creative Design", "Campaign Graphics", "Admission & Promotional Posts"],
    images: [
      { src: "/facebook post (1).jpg", label: "Social Media Creative 01", alt: "School admission social media advertisement" },
      { src: "/facebook post (4).jpg", label: "Social Media Creative 02", alt: "Promotional Facebook post design" },
      { src: "/facebook post (6).jpg", label: "Social Media Creative 03", alt: "Branded social media campaign graphic" },
      { src: "/facebook post (5).jpg", label: "Social Media Creative 04", alt: "Marketing post designed for Facebook and Instagram" },
      { src: "/facebook post (7).jpg", label: "Social Media Creative 05", alt: "Professional promotional social post" },
      { src: "/facebook post (8).jpg", label: "Social Media Creative 06", alt: "Social media advertisement layout" },
      { src: "/facebook post (10).jpg", label: "Social Media Creative 07", alt: "Digital campaign post design" },
      { src: "/facebook post (11).jpg", label: "Social Media Creative 08", alt: "Facebook promotional graphic design" },
      { src: "/facebook post (12).jpg", label: "Social Media Creative 09", alt: "Instagram and Facebook marketing creative" },
      { src: "/facebook post (13).jpg", label: "Social Media Creative 10", alt: "Branded campaign artwork for social media" },
      { src: "/facebook post (15).jpg", label: "Social Media Creative 11", alt: "Professional social media post design" },
    ],
    process: [{ title: "Plan", text: "Map the campaign goal and content themes." }, { title: "System", text: "Create a flexible visual direction." }, { title: "Produce", text: "Design the agreed asset set." }, { title: "Adapt", text: "Optimise artwork for each platform and placement." }],
    faqs: [{ question: "Can I edit the templates myself?", answer: "Editable templates can be included when agreed, using a tool that suits your team." }, { question: "Do you write captions?", answer: "The core service covers visual design; caption support can be scoped separately." }],
  },
  {
    slug: "advertising-marketing-design",
    title: "Advertising and Marketing Design",
    shortTitle: "Advertising",
    icon: "megaphone",
    summary: "Persuasive campaign creative that gives your offer a clear, compelling voice.",
    description: "Translate campaign messages into effective layouts for print, outdoor and digital advertising placements.",
    problems: ["Weak campaign hierarchy", "Offers that get lost", "Mismatched assets across channels"],
    deliverables: ["Newspaper advertisements", "Display advertisements", "Outdoor advertising", "Digital advertisements", "Campaign materials", "Sales promotion graphics"],
    idealClients: ["Retail campaigns", "Property and education", "Events", "Public information campaigns"],
    benefits: ["A clearer message", "Cross-channel consistency", "Placement-ready artwork", "Stronger calls to action"],
    process: [{ title: "Objective", text: "Define the action and audience." }, { title: "Concept", text: "Develop the campaign idea and message hierarchy." }, { title: "Rollout", text: "Adapt the approved direction across formats." }, { title: "Deliver", text: "Supply organised files to media specifications." }],
    faqs: [{ question: "Can one concept work across print and digital?", answer: "Yes. The system is designed around a flexible master direction, then adapted for each placement." }, { question: "Can you work to a media deadline?", answer: "Yes, provided the schedule and final specifications are agreed at the start." }],
  },
  {
    slug: "publication-editorial-design",
    title: "Publication and Editorial Design",
    shortTitle: "Editorial Design",
    icon: "book-open",
    summary: "Well-paced, readable publications with disciplined grids and typographic detail.",
    description: "Turn complex content into engaging books, reports, catalogues and editorial documents that are easy to navigate.",
    problems: ["Dense information", "Inconsistent long documents", "Poor readability"],
    deliverables: ["Books", "Magazines", "Annual reports", "Company profiles", "Catalogues", "Newsletters", "Educational publications"],
    idealClients: ["Publishers", "NGOs", "Schools", "Corporate teams", "Membership organisations"],
    benefits: ["Clear content structure", "Professional typography", "Reliable master pages", "Production-ready output"],
    specialties: ["Book Design", "Prospectus Design", "Editorial Layout", "Publication Pre-press"],
    images: [
      { src: "/book.png", label: "Book Design", alt: "Book cover and publication design presentation" },
      { src: "/prospectus design.png", label: "Prospectus Design", alt: "Educational prospectus cover and editorial design" },
    ],
    process: [{ title: "Audit", text: "Review content, structure and production needs." }, { title: "System", text: "Develop grids, styles and sample spreads." }, { title: "Layout", text: "Flow and refine the full publication." }, { title: "Proof", text: "Check corrections and production files carefully." }],
    faqs: [{ question: "Can you handle a long document?", answer: "Yes. A structured InDesign workflow keeps typography, pages and revisions consistent." }, { question: "Do you proofread content?", answer: "Basic visual checks are included; full editorial proofreading should be arranged separately." }],
  },
  {
    slug: "digital-marketing-creatives",
    title: "Digital Marketing Creatives",
    shortTitle: "Digital Creative",
    icon: "monitor-smartphone",
    summary: "Focused digital assets for campaigns, content and conversion-led experiences.",
    description: "Create sharp, responsive campaign visuals that communicate quickly across websites, email and paid media.",
    problems: ["Inconsistent ad sets", "Unclear digital offers", "Assets that do not fit placements"],
    deliverables: ["Website banners", "Email graphics", "Landing-page visuals", "Display advertisements", "YouTube thumbnails", "Promotional assets"],
    idealClients: ["E-commerce", "Education", "Marketing teams", "Local and national campaigns"],
    benefits: ["Placement-ready formats", "Clear conversion focus", "Consistent campaigns", "Efficient asset variations"],
    process: [{ title: "Goal", text: "Identify the campaign objective and placements." }, { title: "Direction", text: "Create a distinctive visual hook." }, { title: "Scale", text: "Build the complete set of sizes and variants." }, { title: "Optimise", text: "Review clarity at real display sizes." }],
    faqs: [{ question: "Will the artwork work on mobile?", answer: "Yes. Layouts are checked at realistic sizes and adapted for mobile placements." }, { question: "Can you create multiple ad variations?", answer: "Yes. A modular system makes message, image and format variants efficient to produce." }],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
