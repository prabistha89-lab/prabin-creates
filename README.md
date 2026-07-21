# Designer Prabin Portfolio

A complete, responsive portfolio website for Prabin Shrestha, offering AI-powered graphic design, pre-press and professional printing in Bharatpur, Chitwan, Nepal. The site presents services, selected work, design articles, consultation information and a secure enquiry flow.

## Technology

- Next.js App Router and TypeScript
- React 19 and Tailwind CSS 4
- Framer Motion for subtle, reduced-motion-aware reveals
- React Hook Form and Zod for form handling and validation
- Lucide React icons
- Vinext/Vite for Cloudflare-compatible builds
- Resend REST API for enquiry and confirmation emails

## Local installation

Use Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

On Windows PowerShell, if the shell does not accept the inline environment assignment in the package script, run:

```powershell
$env:WRANGLER_LOG_PATH='.wrangler/wrangler.log'
.\node_modules\.bin\vinext.cmd dev
```

## Environment variables

Copy `.env.example` to `.env.local` and provide:

- `CONTACT_EMAIL`: inbox that receives FormSubmit enquiries
- `NEXT_PUBLIC_SITE_URL`: the final canonical website URL

Never commit `.env.local`. The browser form posts directly to FormSubmit at `prabistha89@gmail.com`, and the optional contact API route uses the same address as its default.

## Validation and production build

```bash
npm run lint
npm test
npm run build
```

## Updating personal information

Edit `data/site.ts` for the name, role, contact details, canonical URL and social links. Global navigation and footer content read from this file.

## Adding a service

Add a new structured object in `data/services.ts`. Every object provides its dynamic route, overview, deliverables, ideal clients, process, benefits and FAQs. The service cards and `/services/[slug]` pages are generated from this data.

## Adding a portfolio project

Add a project object in `data/projects.ts`. The current entries are explicitly labelled fictional placeholders. Replace them with approved client facts and results before presenting them as real work. Project visuals currently use a flexible CSS art direction; a real project can be extended with local image paths and `next/image`.

## Adding a blog article

Add a post in `data/posts.ts`, including its slug, metadata, introduction and section content. Listing, search, article navigation and dynamic metadata update automatically.

## Replacing images

The supplied portrait is stored at:

`public/images/profile/prabin-shrestha.png`

Keep the same filename to replace it without changing components, or update the two `next/image` references in the homepage and About page. Add approved client images under `public/images/portfolio`, service artwork under `public/images/services`, and article artwork under `public/images/blog`. Always provide descriptive alt text and explicit dimensions.

## Adding the real CV

The About page currently offers a direct email-based CV request so visitors do
not encounter a broken download. When an approved CV is available, place it at
`public/documents/prabin-shrestha-cv.pdf` and change the button back to a local
download link.

## Contact email setup

1. Confirm that `prabistha89@gmail.com` is receiving email normally. Set `CONTACT_EMAIL` only if the optional API route should use a different inbox.
2. Submit the form once and open the activation email sent by FormSubmit.
3. Confirm the form using the link in that activation email.
4. Submit a second test enquiry and confirm it arrives in the destination inbox.
5. Review logs without printing contact data.

The visible form uses client-side Zod validation, a honeypot and FormSubmit's standard POST endpoint. The optional route handler remains available with server-side validation, input cleaning and basic in-memory rate limiting.
Local previews identify themselves with the production contact URL so they reuse the same FormSubmit activation instead of registering a separate localhost form.

## Legal content

The Privacy Policy and Terms pages contain clearly marked placeholder wording. Have both reviewed by a qualified legal professional before production launch.

## Deployment

The project is ready for OpenAI Sites hosting and Cloudflare-compatible output. It can also be deployed to Vercel after confirming framework compatibility and adding the same environment variables in the project settings:

1. Push the repository to a Git provider.
2. Import it into Vercel.
3. Add the environment variables.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Deploy and test the form, dynamic routes, sitemap and metadata.

Before any public launch, replace fictional projects/testimonials, add the approved CV, verify social links and sender domain, and review legal wording.
