# Odin's Vault — Static Site (Astro + GitHub Pages)

## Quick start
```bash
npm i
npm run dev
```

## Configure contact + analytics
This project uses Astro public env vars:

- `PUBLIC_CALENDLY_URL` (required for CTA)
- `PUBLIC_WHATSAPP` (required for CTA, digits only; e.g. 5548998142779)
- `PUBLIC_GA_ID` (optional GA4 Measurement ID, e.g. G-XXXXXXX)

Create a `.env` file in the project root:
```env
PUBLIC_CALENDLY_URL=https://calendly.com/your-next-devops/quick-chat
PUBLIC_WHATSAPP=5548998142779
PUBLIC_GA_ID=G-XXXXXXXXXX
```

## GitHub Pages deployment
This repo includes a workflow under `.github/workflows/deploy.yml` that:
- builds the Astro site
- uploads the `dist/` output
- deploys to GitHub Pages

In GitHub:
1. Go to **Settings → Pages**
2. Under **Build and deployment**, select **GitHub Actions**
3. Push to `main` and the workflow will publish the site.

## Customize base path
If your repository name is NOT `odins-vault`, update `astro.config.mjs`:
- `base: "/<repo-name>/"`

If you later move to a custom domain, you can usually remove the `base` setting.
