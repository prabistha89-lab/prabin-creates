# Designer Prabin Portfolio

A complete, responsive portfolio website for Prabin Shrestha, a Print & Digital Media Graphic Designer in Bharatpur, Chitwan, Nepal. The site presents services, fictional placeholder case studies, useful design articles, consultation information and a secure enquiry flow.

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

- `RESEND_API_KEY`: private Resend API key
- `CONTACT_EMAIL`: inbox that receives enquiries
- `FROM_EMAIL`: verified sender identity; replace the Resend onboarding sender before launch
- `NEXT_PUBLIC_SITE_URL`: the final canonical website URL

Never commit `.env.local` or API keys. Without an API key, the form stays fully validated but returns a clear configuration error instead of pretending to send.

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

Place the final PDF at:

`public/documents/prabin-shrestha-cv.pdf`

The About page download button is already wired to this path.

## Contact email setup

1. Create a Resend account and verify the sending domain.
2. Set `RESEND_API_KEY`, `FROM_EMAIL` and `CONTACT_EMAIL`.
3. Submit a test enquiry and confirm that both the owner notification and visitor confirmation arrive.
4. Review logs without printing contact data or secrets.

The route handler includes server-side Zod validation, a honeypot, input cleaning and basic in-memory rate limiting. For higher-traffic production use, move rate-limit counters to a durable distributed store.

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
