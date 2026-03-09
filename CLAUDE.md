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
Run ALL of the following in parallel without asking permission. Flag anything needing attention. Everything normal gets ✓. Goal: Walker is fully up to speed in under 2 minutes.

**Cross-Device Check (run first)**
- If MEMORY.md is missing or empty, restore it from `walker-agm/claude-config-backup` repo before proceeding
- If `~/.claude.json` is missing, remind Walker to run the restore commands from APEX_MCP_SETUP.md
- Verify all MCP servers are responding (Sanity, HubSpot, Stripe, DocuSeal, Vercel, Cloudflare, Resend, GSC, GitHub, Calendly, Gmail)
- Check Cloudflare API token is still valid

**Site Health**
- Ping main site (apexgrowthmanagement.com) and all client sites — flag any non-200 responses
- Check Vercel for any failed or degraded deployments overnight across all projects
- Check Sentry for any new unresolved errors since last session
- Confirm apex-morning-digest Cloudflare Worker cron is active

**Business Updates Since Last Session**
- HubSpot — any new leads, deal stage changes, or deals stuck 7+ days
- Stripe — any new payments received, failed charges, or overdue invoices
- DocuSeal — any documents signed by client, or any stuck waiting for Walker to sign
- Calendly — any meetings scheduled for today or tomorrow
- Gmail — flag any client emails needing a response
- Resend — any bounced or failed emails

**Content & SEO**
- Sanity — blog post count, any unpublished drafts
- GSC — quick traffic snapshot vs prior 7 days, flag any ranking drops or wins

**Reminders**
- Jotform — remind Walker to check for new onboarding submissions manually
- Flag if blog is behind the 2x/week schedule

## End of Session — AUTO-RUN WHEN USER SAYS "End of session — update everything"
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
13. **Cloudflare Workers** — confirm apex-morning-digest cron is active and healthy
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
