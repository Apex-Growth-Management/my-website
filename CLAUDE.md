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
| GoogleSearchConsole | npx | Active (OAuth) | Run `gsc-mcp-auth` in terminal to authenticate. If "Insufficient Permission" persists after auth, restart Claude Code — session must reload to pick up new tokens. Auth account: admin@apexgrowthmanagement.com |
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
