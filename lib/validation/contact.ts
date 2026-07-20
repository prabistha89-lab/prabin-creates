import { z } from "zod";

export const serviceValues = ["branding-visual-identity", "print-design", "social-media-design", "advertising-marketing-design", "publication-editorial-design", "digital-marketing-creatives", "consultation", "other"] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(120),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(100).optional(),
  service: z.enum(serviceValues, { message: "Please select a service." }),
  budget: z.string().trim().min(1, "Please select an estimated budget."),
  consultationMethod: z.enum(["phone", "video", "in-person", "email"]),
  deadline: z.string().trim().max(50).optional(),
  description: z.string().trim().min(20, "Please share at least 20 characters about your project.").max(3000),
  consent: z.boolean().refine(Boolean, "Please confirm that we may respond to your enquiry."),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
