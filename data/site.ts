export const siteConfig = {
  name: "Prabin Shrestha",
  brand: "Designer Prabin",
  role: "Print & Digital Media Graphic Designer",
  email: "mail@shresthaprabin89.com.np",
  phone: "+977 9845150872",
  phoneHref: "+9779845150872",
  whatsappHref:
    "https://wa.me/9779845150872?text=Hello%20Prabin%2C%20I%27d%20like%20to%20discuss%20a%20design%20project.",
  location: "Bharatpur–11, Chitwan, Nepal",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://designer-prabin-portfolio.mhflex89.chatgpt.site",
  description:
    "Professional branding, print and digital media design services in Bharatpur, Chitwan, Nepal.",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591835314293" },
    { label: "Instagram", href: "https://www.instagram.com/prabincreates" },
    { label: "TikTok", href: "https://www.tiktok.com/@prabincreates" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/prabin-shrestha-5344a4422/" },
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
