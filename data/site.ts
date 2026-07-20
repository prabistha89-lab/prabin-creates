export const siteConfig = {
  name: "Prabin Shrestha",
  brand: "Designer Prabin",
  role: "Print & Digital Media Graphic Designer",
  email: "mail@shresthaprabin89.com.np",
  phone: "+977 9845150872",
  phoneHref: "+9779845150872",
  location: "Bharatpur–11, Chitwan, Nepal",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Professional branding, print and digital media design services in Bharatpur, Chitwan, Nepal.",
  socials: [
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Behance", href: "https://behance.net/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
