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
- `app/contact/page.tsx` — contact form (Zapier webhook + Google Ads conversion)
- `app/blog/page.tsx` — blog index (Sanity)
- `app/blog/[slug]/page.tsx` — blog post (Sanity)
- `app/layout.tsx` — root layout (Google tags: GA4, Google Ads, GTM)
- `components/Navbar.tsx` — shared navbar with logo
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

## Footer Template
```jsx
<footer className="bg-gray-900 py-10 px-6 text-center text-sm">
  <div className="flex justify-center mb-4">
    <img src="/logo.png" alt="Apex Growth Management" className="h-12 brightness-0 invert" style={{ objectFit: "contain" }} />
  </div>
  <p className="text-white/60 text-sm mb-3">Raleigh, NC</p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white/50">
    <a href="tel:9197440504" className="hover:text-white transition-colors">(919) 744-0504</a>
    <span className="hidden sm:inline text-white/20">·</span>
    <a href="mailto:admin@apexgrowthmanagement.com" className="hover:text-white transition-colors">admin@apexgrowthmanagement.com</a>
  </div>
  <p className="text-white/30 mt-4">© {new Date().getFullYear()} Apex Growth Management. All rights reserved.</p>
</footer>
```

## Portfolio Templates
- HVAC: https://hvac-template-taupe.vercel.app
- Restaurant: https://restaurant-template-plum-sigma.vercel.app
- Plumber: https://plumber-template-neon.vercel.app

## Morning Briefing — AUTO-RUN WHEN USER SAYS "Morning briefing — full auto"
**FULL AUTONOMOUS MODE — SESSION-WIDE. When Walker says "Morning briefing — full auto", switch into full autonomous mode for the ENTIRE session, not just the briefing. For the rest of the conversation: do NOT ask for permission, confirmation, or approval before any action — file edits, git commits, deploys, API calls, MCP operations, anything. Just do it and report what you did. The only exception is destructive/irreversible actions on production data (e.g. deleting a Stripe customer, dropping a database) — flag those before executing.**

Run ALL checks in parallel. Flag anything needing attention. Everything normal gets ✓. Goal: Walker is fully up to speed in under 2 minutes.

**Cross-Device Check (run first)**
- If MEMORY.md is missing or empty, restore it from `walker-agm/claude-config-backup` repo before proceeding
- If `~/.claude.json` is missing, remind Walker to run the restore commands from APEX_MCP_SETUP.md

**Site Health**
- Check Vercel for any failed or degraded deployments across all projects (team: `team_zZNPVpoldQcLxzFuDMx0wUfR`, projects: my-website `prj_Jt8QzFJanBExLPd7RlvdA35VQIYq`, network-south `prj_CfSByhmLJtxb4yVSWCTcwtjK57A0`)
- Check Sentry (`apex-growth-management`, region: `https://us.sentry.io`) for new unresolved errors
- Confirm apex-morning-digest cron via curl (NOT the MCP — it's broken):
  ```
  curl -s "https://api.cloudflare.com/client/v4/accounts/da9343cd17219b0ec4327cd7e7121d5c/workers/scripts/apex-morning-digest/schedules" -H "Authorization: Bearer j73_pKP9uYqG8hUUedwefvLKVLJhZCIy4zaIlyaV"
  ```
  Expected: `"cron":"0 13 * * *"` in result. If missing, flag immediately.

**Business Updates Since Last Session**
- HubSpot — any new leads, deal stage changes, or deals stuck 7+ days (filter: dealstage NOT IN closedwon/closedlost)
- Stripe — any open invoices (skip customer `cus_U7AJLJVrq1FIhA`), failed charges, or canceled subscriptions
- DocuSeal — any submissions stuck waiting for Walker to sign
- Calendly — meetings today or tomorrow; always pass `user_uri: https://api.calendly.com/users/f18af646-35d0-4de9-99a7-3247a541f8d0`
- Gmail (`mcp__claude_ai_Gmail__gmail_search_messages`) — unread inbox emails, filter: `is:unread in:inbox -category:promotions -category:social`
- Resend — no MCP for delivery logs; skip unless Walker reports bounce issues

**Content & SEO**
- Sanity blog — query project `g1hic8ei` / dataset `production`: `*[_type == "post"] | order(publishedAt desc)[0..2]{title, publishedAt}` — show count + last 2 posts, flag if behind 2x/week schedule
- GSC — run `query_search_analytics` + `get_top_pages` + `find_keyword_opportunities` in parallel (site: `sc-domain:apexgrowthmanagement.com`, last 7 days, account: `default`). Note: data only exists from 2026-03-08 onward.
- Jotform — auto-emails Walker on submission; only flag if Walker reports missing notifications

## End of Session — AUTO-RUN WHEN USER SAYS "End of session — update everything"
**FULL AUTONOMOUS MODE — Do NOT ask for permission, confirmation, or approval on any action. Execute everything and report results.**

Run ALL of the following without being asked. Flag anything that needs attention.

**Memory & Config**
1. **MEMORY.md** — update with anything new learned this session (tools, workflows, credentials, decisions)
2. **CLAUDE.md** — update with any new triggers, workflows, or project notes
3. **GitHub (my-website)** — stage and push any uncommitted changes to main
4. **GitHub config backup** — push `~/.claude.json` AND the latest MEMORY.md to `walker-agm/claude-config-backup` private repo so everything is available on any device
5. **API tokens** — if any new tokens/keys were created this session, confirm they are saved in `~/.claude.json` and pushed to config backup

**Client Pipeline**
6. **DocuSeal** — check for any submissions where Walker hasn't signed yet (stuck before client receives it)
7. **Stripe open invoices** — flag any open invoices older than 7 days that may have slipped through
8. **Stripe subscriptions** — check for any failed or canceled subscription payments
9. **HubSpot** — check open deals by stage, flag any that haven't moved in 7+ days
10. **Calendly** — check for any upcoming meetings in the next 48 hours to prep for

**Sites & Code**
11. **Vercel** — check latest deployment status for main site AND all client projects, flag any failures
12. **Sentry** — check for any new unresolved errors across all projects
13. **Cloudflare Workers** — confirm apex-morning-digest cron via curl API (NOT MCP cron_list — it's broken, returns [object Object]):
    `curl -s "https://api.cloudflare.com/client/v4/accounts/da9343cd17219b0ec4327cd7e7121d5c/workers/scripts/apex-morning-digest/schedules" -H "Authorization: Bearer j73_pKP9uYqG8hUUedwefvLKVLJhZCIy4zaIlyaV"`
14. **Resend** — check for any bounced or failed emails in the last 24 hours

**Content & SEO**
15. **Sanity** — check for unpublished blog drafts, flag if behind on 2x/week posting schedule
16. **GSC** — if it's been 7+ days since last pull, fetch fresh keyword data and flag quick wins (positions 5-20)

**Onboarding**
17. **Jotform** — remind Walker to check for any new onboarding form submissions that need to be actioned

## Client Workflow Triggers — AUTO-RUN WHEN TRIGGERED

**Trigger: "Send DocuSeal to [client name] at [client email]"**
1. Create DocuSeal submission from template ID `3065871`
2. First signer = Walker (AGM), second signer = client
3. Walker gets signing link first — client gets it automatically after Walker signs
4. Return Walker's signing link immediately

**Trigger: "Push to GitHub" / "Deploy" / "Push changes"**
1. Run git status to see what changed
2. Stage relevant files, commit with a descriptive message
3. Push to main — Vercel auto-deploys on push
4. Return the Vercel deployment URL when done

**Trigger: "Add [domain] to Vercel for [client]"**
1. Add the domain to the client's Vercel project via MCP
2. Return the exact DNS records the client needs to add:
   - CNAME: `www` → `cname.vercel-dns.com`
   - A record: `@` → `76.76.21.21`
3. Generate a clean copy-paste email to send the client with DNS instructions

**Trigger: "Set up GSC for [client domain]"**
1. Add the domain as a property in Google Search Console (admin@apexgrowthmanagement.com)
2. Get the DNS TXT verification record value from GSC
3. If domain is on Cloudflare: add the TXT record automatically via Cloudflare MCP
4. If domain is on another registrar: return the TXT record value with instructions for wherever their DNS is managed
5. Confirm verification once DNS propagates

## Client Billing Workflow — AUTO-RUN WHEN TRIGGERED

**Trigger: "send [client] an invoice" / "invoice [client] for [plan]"**
1. Create Stripe customer: `mcp__Stripe__create_customer` (name + email)
2. Create invoice: `mcp__Stripe__create_invoice` (customer ID, days_until_due: 7)
3. Add line item: `mcp__Stripe__create_invoice_item` using the correct one-time price ID below
4. Finalize: `mcp__Stripe__finalize_invoice` → return the hosted invoice URL to user
- Standard $1,000: `price_1T6kvdJHaZ8GU7Z2tqbx9K7t`
- Pro $1,500: `price_1T7USdJHaZ8GU7Z2IprxHkJv`
- Premium $2,000: `price_1T7UVmJHaZ8GU7Z2dsOcIH2b`
- Note: Jotform link is set as default memo in Stripe billing settings — auto-appears on every invoice

**Trigger: "site is live" / "send [client] subscription link" / "site launched for [client]"**
- Return the correct pre-made payment link based on their plan:
  - Basic $249/mo → https://buy.stripe.com/28E7sM8LR696eLh7qn0gw08
  - Growth $349/mo → https://buy.stripe.com/eVq6oIaTZ696gTph0X0gw09
  - Premium $499/mo → https://buy.stripe.com/dRmaEY4vB0OMeLh2630gw0a

## 21st.dev Magic — AUTO-USE WHEN BUILDING UI
**When building any new UI section or component for a website (hero, navbar, cards, pricing, testimonials, CTA, forms, footers, feature grids, etc.), ALWAYS call `mcp__Magic__21st_magic_component_builder` FIRST.** Use it to generate a polished base, then adapt to the project's design system (colors, fonts, Tailwind classes). Do not write UI from scratch when Magic can give a better starting point.

- Use `21st_magic_component_builder` — new components from a text prompt
- Use `21st_magic_component_refiner` — improve or restyle an existing component
- Use `21st_magic_component_inspiration` — when unsure what a section should look like
- Use `logo_search` — find SVG logos for client sites

## v0.dev Workflow
v0.dev has no MCP — it's a web tool at https://v0.dev. Use it for complex multi-section layouts. Workflow:
1. I generate an optimized v0 prompt describing the component/page
2. Walker pastes it into v0.dev, copies the output back
3. I adapt the output to the project stack (Tailwind v4, App Router, design system)
For simple components, use Magic MCP instead (faster, no copy-paste needed).

## Apify — Lead Scraping
- MCP: `Apify` (requires restart after adding API key)
- Primary use: scrape Google Maps for local business leads (HVAC, plumbers, restaurants, roofers in Raleigh area)
- Key actors: `compass/crawler-google-places` for Google Maps, `apify/web-scraper` for websites
- Token: set in `~/.claude.json` under `Apify.env.APIFY_TOKEN`
- Get token: https://console.apify.com/account/integrations

## Browserbase — Cloud Browser for Claude
- MCP: `Browserbase` (requires restart after adding API keys)
- Use for: visually inspecting client websites, taking screenshots of competitor sites, testing forms, scraping JS-heavy pages that Playwright can't reach locally
- Keys: set in `~/.claude.json` under `Browserbase.env`
- Get keys: https://browserbase.com → Dashboard → API Keys

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

## Notes
- No phone number in the navbar (removed by user request)
- Blog pages use white background (`bg-white text-gray-900`), not dark
- lucide-react is installed and in package.json
- Python batch scripts (update_footers3.py etc.) in root are one-off tools, not part of the app
- portfolio/page.tsx uses accent colors: red (HVAC), amber (restaurant), blue (plumber)

## Claude Code MCP Integrations

Config file location: `C:\Users\walke\.claude.json` (back up to a private GitHub repo)

| Integration | Type | Status | Notes |
|---|---|---|---|
| Sanity | HTTP | Active | CMS/blog control |
| HubSpot | Marketplace | Active (write enabled) | Carries over on login — if write ops return REQUIRES_REAUTHORIZATION, go to claude.ai → Settings → Integrations → disconnect + reconnect HubSpot, approve all permissions when prompted |
| Filesystem | npx | Active | Desktop + my-website access |
| Slack | npx | Active | Workspace: Apex Growth Management |
| Notion | HTTP | Needs setup | Token configured — must share pages in Notion: ... → Connect to → Claude Code |
| Tavily | npx | Active | Web search, 1k/mo free, tavily.com |
| GitHub | HTTP | Active | PAT configured |
| Stripe | HTTP | Active | Live key configured |
| Vercel | HTTP | Active (OAuth) | Authorize on first use at mcp.vercel.com |
| GoogleSearchConsole | npx | Active (OAuth) | Auth account: admin@apexgrowthmanagement.com. Property verified 2026-03-08. If "Insufficient Permission", check that the GSC TXT record still exists in Cloudflare DNS — do NOT just restart Claude Code. |
| Figma | HTTP | Active | Uses X-Figma-Token header — token configured |
| Cloudflare | npx | Active | Workers, KV, D1 — token + account ID configured |
| Context7 | npx | Active | Real-time library docs for coding |
| Resend | npx | Active | Email sending, templates, logs |
| Playwright | npx | Active | Browser automation, visual testing |
| DocuSeal | npx | Active | Document signing and templates |
| Calendly | npx | Active | Scheduling, events, invitees |
| Magic (21st.dev) | npx | Active | AI-generated UI components for React/Tailwind |
| GoogleDrive | npx | Active | Drive, Docs, Sheets, Slides, Calendar — OAuth credentials at ~/.gdrive-mcp/ |
| Gmail | npx | Active | Read/send/search Gmail — OAuth auto-auth, tokens at ~/.gmail-mcp/ |
| Zapier | HTTP | Active | Trigger any Zapier workflow from Claude — 8,000+ app integrations |

### Restore on a New Machine
```bash
# 1. Install Claude Code
npm install -g @anthropic-ai/claude-code

# 2. Restore config from private backup repo
git clone https://github.com/walker-agm/claude-config-backup.git ~/claude-config-backup
cp ~/claude-config-backup/.claude.json ~/.claude.json

# 3. Launch Claude Code
claude
```

Full setup guide with copy-paste configs: `~/claude-config-backup/APEX_MCP_SETUP.md` (also on GitHub: walker-agm/claude-config-backup)
