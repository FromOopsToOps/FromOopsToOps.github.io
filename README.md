# AI Agent Landing Page

![Demo](public/screenshot.jpeg)

A modern, production-ready landing page template for AI and SaaS products. Built with Astro and Tailwind CSS.

## Features

- ⚡️ **Astro 5** - Fast, static site generation
- 🎨 **Tailwind CSS 4** - Modern styling with CSS-first config
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - Semantic HTML & ARIA compliant
- 🎭 **Smooth Animations** - Scroll-triggered effects
- 🎯 **SEO Ready** - Meta tags & Open Graph
- 🧩 **Modular Components** - Easy to customize

## Sections

- Hero with stats
- Features grid (9 cards)
- How it works (4 steps)
- Testimonials (6 with company logos)
- Pricing tiers (3 plans)
- FAQ accordion (6 questions)
- Contact form
- Footer

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customization

Edit content in:

- `src/config.ts` - Site configuration
- `src/content/*.ts` - Features, testimonials, FAQ
- `src/styles/globals.css` - Colors & animations

## Deploy

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)

Works on Replit, Vercel, Netlify, and GitHub Pages.

## License

[MIT](LICENSE)


## Odin’s Vault customization

This repo is based on the **Astrogent** Astro theme, customized for **Odin’s Vault**.

### Configure (GitHub Pages)

Use GitHub **Repository Variables** (Settings → Secrets and variables → Actions → Variables):

- `ASTRO_BASE`:
  - Project pages: `/<repo-name>/` (example: `/odins-vault/`)
  - Custom domain or user pages: leave empty
- `PUBLIC_GA_ID` (optional): GA4 Measurement ID, e.g. `G-XXXXXXXXXX`

### Contact links

- Calendly: https://calendly.com/your-next-devops/quick-chat
- WhatsApp: https://wa.me/5548998142779

### Pages

Besides the landing page, these static pages exist:

- `/services`
- `/tech`
- `/about`
- `/proof`
