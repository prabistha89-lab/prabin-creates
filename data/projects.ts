export type Project = {
  slug: string;
  title: string;
  category: "Branding" | "Print" | "Social Media" | "Advertising" | "Publication" | "Digital";
  year: string;
  client: string;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  tools: string[];
  deliverables: string[];
  results: string[];
  palette: [string, string, string];
  art: string;
};

// All projects below are clearly labelled fictional placeholders. Replace them with real case studies.
export const projects: Project[] = [
  { slug: "himalayan-harvest-identity", title: "Himalayan Harvest", category: "Branding", year: "2026", client: "Fictional concept client", summary: "A warm, contemporary identity for a Nepali farm-to-shelf food brand.", challenge: "Create a trusted local identity that could feel equally natural on a market stall and a modern retail shelf.", approach: "A simple mountain-and-field motif was paired with bold typography and an earthy secondary palette.", solution: "A flexible identity system covering packaging marks, labels, stationery and a clear hierarchy for product variants.", tools: ["Illustrator", "Photoshop", "InDesign"], deliverables: ["Logo suite", "Packaging system", "Brand guide", "Stationery"], results: ["A unified shelf presence", "Simpler product expansion", "Clear local provenance"], palette: ["#0F6B5A", "#F3B44A", "#F7E9CF"], art: "harvest" },
  { slug: "chitwan-cultural-festival", title: "Chitwan Cultural Festival", category: "Advertising", year: "2026", client: "Fictional concept event", summary: "A high-energy campaign system for an annual cultural celebration.", challenge: "Bring diverse performances, audiences and venues together under one memorable visual direction.", approach: "Rhythmic colour blocks and oversized type created a system that stayed recognisable across sizes.", solution: "A master campaign adapted for posters, outdoor placements, tickets and social promotion.", tools: ["Illustrator", "Photoshop"], deliverables: ["Campaign key visual", "Poster series", "Digital ads", "Event signage"], results: ["Consistent cross-channel campaign", "Strong event hierarchy", "Fast format adaptation"], palette: ["#064E8A", "#38BDF8", "#FFCC66"], art: "festival" },
  { slug: "clarity-annual-report", title: "Clarity Annual Report", category: "Publication", year: "2025", client: "Fictional NGO", summary: "A calm, accessible annual report that makes complex outcomes easier to understand.", challenge: "Organise programme data and stories into a publication suitable for donors, partners and communities.", approach: "A disciplined grid, generous white space and compact data stories established a confident reading rhythm.", solution: "A 48-page report system with section openers, infographics, tables and print-ready production files.", tools: ["InDesign", "Illustrator", "Photoshop"], deliverables: ["48-page report", "Chart library", "Interactive PDF", "Print files"], results: ["Clearer programme narrative", "Reusable layout system", "Accessible digital edition"], palette: ["#0F172A", "#0EA5E9", "#E0F2FE"], art: "report" },
  { slug: "naya-cafe-campaign", title: "Naya Café Social Launch", category: "Social Media", year: "2026", client: "Fictional café", summary: "A friendly social launch kit with enough structure to stay fresh every week.", challenge: "Build anticipation for a new neighbourhood café without losing the hand-made character of the brand.", approach: "Editorial crops, playful labels and a flexible type scale made content recognisable but not repetitive.", solution: "A launch campaign and reusable templates for menu features, stories, offers and events.", tools: ["Photoshop", "Illustrator", "Canva"], deliverables: ["Launch campaign", "Post templates", "Story templates", "Cover images"], results: ["A cohesive launch month", "Faster content production", "Flexible owner-editable templates"], palette: ["#7C3F2C", "#F2C879", "#FFF7EA"], art: "cafe" },
  { slug: "pragati-school-admissions", title: "Pragati Admissions", category: "Print", year: "2025", client: "Fictional school", summary: "A coordinated admissions campaign designed for clarity, warmth and trust.", challenge: "Present academic, cultural and practical information without overwhelming parents.", approach: "A modular information system balanced real-life storytelling with practical admissions details.", solution: "A prospectus, poster set, outdoor banner and supporting information sheets.", tools: ["InDesign", "Photoshop", "Illustrator"], deliverables: ["Prospectus", "Posters", "Banners", "Information sheets"], results: ["Consistent admissions communication", "Clearer parent journey", "Production-ready campaign"], palette: ["#123C69", "#38BDF8", "#F7C948"], art: "school" },
  { slug: "vertex-digital-display", title: "Vertex Display Campaign", category: "Digital", year: "2026", client: "Fictional technology brand", summary: "A precise family of digital ads that makes a technical offer feel direct and human.", challenge: "Communicate a multi-feature product clearly inside small, fast-moving placements.", approach: "One message per frame, strong contrast and modular product callouts simplified the decision path.", solution: "A responsive digital campaign covering banners, landing-page visuals and email graphics.", tools: ["Figma", "Photoshop", "Illustrator"], deliverables: ["Display ad set", "Landing visuals", "Email graphics", "Campaign guide"], results: ["Consistent digital rollout", "Sharper message hierarchy", "Easy creative variation"], palette: ["#0F172A", "#2563EB", "#67E8F9"], art: "vertex" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
