# NotAVPN

**"Ceci n'est pas un VPN."**

A satirical landing page masquerading as a premium SaaS product. NotAVPN exploits a simple fact: you can't ban video calls. And you can't scan a live video stream.

## Context

On January 26, 2026, France's National Assembly voted 130-21 to ban social media for minors under 15, requiring mandatory ID verification. Four days later, Minister Anne Le Hénanff confirmed: *"Les VPN, c'est le prochain sujet sur ma liste."* The UK had already banned VPN usage to bypass age checks under the Online Safety Act.

Meanwhile at EU level, Chat Control (the CSAM regulation) was approved by the Council in November 2025, with trilogue negotiations running through 2026 — aiming to scan private messages, potentially even on encrypted services via client-side scanning. Signal and Proton have threatened to leave the EU market.

NotAVPN is a satirical "product" that makes a point: each restriction creates a workaround, and each workaround reveals the futility of the restriction. This is that workaround.

## Design Philosophy: "Deadpan Corporate Premium"

The page looks indistinguishable from a real premium SaaS landing page (think Linear, Vercel, Raycast). Dark theme. Glassmorphism cards. Gradient mesh backgrounds. The satire lives entirely in the copy, delivered with corporate sincerity. The page never winks at the audience.

## Tech Stack

- **Vite 7** + vanilla TypeScript (no framework — overkill for a single page)
- **Tailwind CSS v4** via Vite plugin
- **Bilingual i18n** (FR default + EN toggle) using JSON locale files
- Output: static files deployable anywhere

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:5555`.

### Build

```bash
npm run build
```

Production files are output to `dist/`.

## Project Structure

```
cloudbrowser/
  index.html              # Single page, semantic sections with data-i18n attrs
  package.json
  vite.config.ts
  tsconfig.json
  public/
    favicon.svg
    CNAME                 # Custom domain: notavpn.eu
  src/
    main.ts               # Entry: i18n init, scroll animations, FAQ accordion, easter eggs
    i18n.ts               # t(key) function, language toggle, localStorage persistence
    locales/
      fr.json             # All French copy
      en.json             # All English copy
    styles/
      main.css            # Tailwind + custom dark theme, glassmorphism, gradients
```

## Page Sections

1. **Navbar** — Fixed glassmorphism nav with FR/EN toggle
2. **Hero** — "Browse the internet. From anywhere. Through a video call." + fake email signup that stores nothing
3. **Trust Bar** — Country flags including the ones that banned VPNs
4. **Features Grid** — 8 glassmorphism cards (DPI-invisible, zero footprint, Chat Control-proof, Parliament-proof architecture...)
5. **Access Without Borders** — Academic research, live sports, the entire internet — with deadpan irony
6. **Why Not a VPN?** — Side-by-side comparison: the "dangers" of VPNs vs. the NotAVPN checklist
7. **Government Escalation Roadmap** — Satirical timeline from "Scan all messages" to "We have always been at war with Eastasia"
8. **How It Works** — Choose country → Join video call → Browse freely
9. **Pricing** — Libre (0€), Citoyen (9.99€/mo), Parlementaire (29.99€/mo — "Free for anyone who voted for the VPN ban")
10. **Testimonials** — 7 fictional characters including an anonymous MP and a 9-year-old who needs NotAVPN to access science education
11. **FAQ** — Accordion with answers like "Is this a VPN? Several lawyers laughed, then said 'technically, no.'"
12. **Disclaimer** — Breaks character, links to real debates and sources
13. **Footer** — "Made with frustration in France."

## Easter Eggs

- **Konami code** (↑↑↓↓←→←→BA) reveals a hidden message
- **Logo hover** cycles through: "NotAVPN" → "Really, Not A VPN" → "We Promise" → "Stop Asking" → "Read The Name"

## Deployment

Deployed via GitHub Actions to GitHub Pages on the `gh-deploy` branch. Custom domain: **notavpn.eu**.

Push to `main` triggers an automatic build and deploy.

## Key References

- France social media ban vote (Jan 26, 2026)
- Anne Le Hénanff VPN ban announcement (Jan 30, 2026)
- UK Online Safety Act — VPN ban for age check bypass
- EU Chat Control — Council approval Nov 2025, trilogue 2026
- ProtectEU strategy — "lawful access to encrypted data"
- French court orders forcing VPN providers to block sports streaming (Jul 2025)
- France's sovereign video platform "Visio" (announced Jan 26, 2026)

## License

This is a satirical project. NotAVPN is technically feasible but exists primarily to illustrate the absurdity of banning VPNs in a democracy.
