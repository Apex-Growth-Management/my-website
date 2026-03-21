# Apex Growth Management — Main Website

## Project Info
- **Live URL**: https://apexgrowthmanagement.com
- **GitHub**: https://github.com/Apex-Growth-Management/my-website
- **Deploy**: Vercel auto-deploys on push to main
- **Framework**: Next.js App Router, Tailwind CSS v4, TypeScript
- **Stack**: Static site + Sanity CMS (blog only)

## Owners
- Walker Norris (co-founder) — client relationships, project delivery
- Jack Francis (co-founder) — technical, SEO, site management
- Location: Raleigh, NC
- Phone: (919) 744-0504
- Email: admin@apexgrowthmanagement.com

## Key Files
- `app/page.tsx` — homepage
- `app/about/page.tsx` — about page (founders section)
- `app/services/page.tsx` — services offered
- `app/portfolio/page.tsx` — template demos (HVAC, Restaurant, Plumber)
- `app/contact/page.tsx` — multi-step contact form (3 steps: business type → service → contact info; Zapier webhook + Google Ads conversion + Turnstile CAPTCHA)
- `app/audit/page.tsx` — free website audit lead capture (URL input → submits to /api/contact as "FREE AUDIT REQUEST" + Turnstile dark theme)
- `app/audit/layout.tsx` — metadata for audit page
- `app/referrals/page.tsx` — referral program page ($200 credit per converted referral)
- `app/referrals/layout.tsx` — metadata for referrals page
- `app/api/referral/route.ts` — referral form API (admin email + referrer confirmation + HubSpot contact/deal)
- `app/error.tsx` — root error boundary (reports to Sentry)
- `app/global-error.tsx` — catches root layout errors
- `app/blog/page.tsx` — blog index (Sanity)
- `app/blog/[slug]/page.tsx` — blog post (Sanity)
- `app/blog/[slug]/opengraph-image.tsx` — dynamic OG image per post (next/og edge runtime)
- `app/sitemap.ts` — async sitemap: static routes + live Sanity blog slugs
- `app/robots.ts` — crawl rules (allow all + explicit AI crawler rules: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Amazonbot, YouBot)
- `app/layout.tsx` — root layout (Google tags, SmoothScroll, ScrollProgress, Navbar, PageTransition, StickyCTA, LocalBusinessSchema)
- `components/Navbar.tsx` — shared navbar; "Free Audit" link in blue, "Get Started" CTA
- `components/Footer.tsx` — shared footer; Instagram, both phones, email, UptimeBadge, "Refer & Earn $200" link
- `components/StickyCTA.tsx` — sticky bottom bar, slides up after 40% scroll, dismissable
- `components/UptimeBadge.tsx` — pulsing green dot + "99.9% uptime" in footer
- `components/SmoothScroll.tsx` — Lenis inertia scroll wrapper
- `components/PageTransition.tsx` — AnimatePresence per-route fade/slide
- `components/FaqAccordion.tsx` — used on pricing page
- `components/ScrambleText.tsx` — decrypt animation on scroll into view
- `components/HeroParticles.tsx` — canvas particle network in hero
- `public/llms.txt` — AI-readable business profile (services, pricing, FAQ, links) for GEO
- `public/logo.png` — Apex Growth Management logo (transparent PNG)
- `app/favicon.ico` — site favicon

## Google Tags (in layout.tsx)
- GA4: `G-YYHZEHE1WK`
- Google Ads: `AW-17993946041`
- Google Tag Manager: `GT-MB83M9TQ`
- Contact form fires conversion event: `gtag("event", "conversion", { send_to: "AW-17993946041" })`

## Design System
- Colors: blue-600 accent, gray-900 backgrounds, white body
- Navbar: dark (`bg-gray-900`), logo uses `brightness-0 invert` CSS filter
- Footer: dark `bg-gray-900`, logo + Raleigh NC + phone + email + copyright
- Fonts: system default via Tailwind
- Icons: lucide-react

## Footer
See `components/Footer.tsx` for current implementation. Dark bg-gray-900, logo with brightness-0 invert, both phones, email, Instagram, Refer & Earn $200 link, Privacy/Terms links, UptimeBadge.

## Portfolio Templates
- HVAC: https://hvac-template-taupe.vercel.app
- Restaurant: https://restaurant-template-plum-sigma.vercel.app
- Plumber: https://plumber-template-neon.vercel.app

## Morning Briefing — AUTO-RUN WHEN USER SAYS "Morning briefing — full auto"
Enables **FULL AUTONOMOUS MODE for the entire session** (not just the briefing). Exception: destructive production actions — flag those first.
Run `/morning-briefing` skill for full checklist. Also triggers cross-device config restore check and memory cleanup.

## End of Session — AUTO-RUN WHEN USER SAYS "End of session — update everything"
Run `/end-of-session` skill. Backs up all config, checks pipeline, verifies deploys, flags issues.

## Client Workflow Triggers — AUTO-RUN WHEN TRIGGERED

**"Send DocuSeal to [client] at [email]"** → run `/close-client` skill
**"Push to GitHub" / "Deploy"** → run `/deploy` skill
**"site is live" / "onboard [client]"** → run `/onboard-client` skill (domain, DNS, GSC, env vars, subscription link email)
**"send monthly reports" / "client reports"** → run `/monthly-report` for each active subscriber, show for review, send via Resend

## Sanity CMS (Blog)
- Project ID: `g1hic8ei` | Dataset: `production`
- Schema deployed 2026-03-09 — `create_documents_from_markdown` and `get_schema` now work
- **To create a blog post**: use `create_documents_from_json` (most reliable), then `publish_documents`
- **To fetch a specific doc**: use `query_documents` with `*[_id == "id"][0]` — do NOT use `get_document` (resource param bug)
- **Do NOT use `create_documents_from_markdown`** unless schema has been recently deployed — verify with `get_schema` first

## MCP Quick Reference — Known Issues
- **Cloudflare `cron_list`** — broken (returns `[object Object]`). Always use curl API instead.
- **Cloudflare `worker_put` / `worker_list`** — silently fail. Use curl API instead.
- **Sanity `get_document`** — resource param bug. Use `query_documents` instead.
- **Calendly `list_events`** — always pass `user_uri: https://api.calendly.com/users/f18af646-35d0-4de9-99a7-3247a541f8d0` or it returns 400.
- **Resend** — no MCP for delivery logs. Check resend.com/emails manually.
- **Stripe** — skip customer `cus_U7AJLJVrq1FIhA` in all checks (not a real active client).

## Vercel Quick Reference
- Team: `agm-projects` | Team ID: `team_zZNPVpoldQcLxzFuDMx0wUfR`
- my-website: `prj_Jt8QzFJanBExLPd7RlvdA35VQIYq`
- network-south: `prj_CfSByhmLJtxb4yVSWCTcwtjK57A0`
- hvac-template: `prj_KPu00sNgUlsjG7KgkHVlaK9kfitN`
- restaurant-template: `prj_4M0kjpFmG4LAa9Ri51I4eVeyr7ua`
- plumber-template: `prj_e9ZYX31bOly5VLQ598bbsduleU5w`

## GEO (Generative Engine Optimization)
- `robots.ts` allows AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Amazonbot, YouBot
- `public/llms.txt` serves AI-readable business profile at /llms.txt
- FAQ schema (JSON-LD) on `/services` (6 Q&As) and `/pricing` (7 Q&As) via layout files
- Article schema (JSON-LD) auto-generates on every `/blog/[slug]` page
- Profiles: Clutch, DesignRush (created 2026-03-21)
- 17 blog posts total as of 2026-03-21 (5 GEO-optimized definitive-answer posts added)

## Notes
- No phone number in the navbar (removed by user request)
- Blog pages use white background (`bg-white text-gray-900`), not dark
- lucide-react is installed and in package.json
- Python batch scripts (update_footers3.py etc.) in root are one-off tools, not part of the app
- portfolio/page.tsx uses accent colors: red (HVAC), amber (restaurant), blue (plumber)

## MCP Config
- Full MCP list + restore instructions: `~/.claude/CLAUDE.md`
- Config file: `C:\Users\walke\.claude.json` | Backup: `walker-agm/claude-config-backup` (private)
