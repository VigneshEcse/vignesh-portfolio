# Vignesh E — Portfolio

Next.js (App Router) rebuild of the portfolio. Static export, deploys free on GitHub Pages via GitHub Actions.

## Structure

```
app/
  layout.js       — fonts (next/font/google) + <html>/<body> shell + metadata
  page.js          — assembles the page from components/
  globals.css      — all styling (ported 1:1 from the original design)
components/
  Nav.js
  Hero.js          — the animated connector diagram (client component)
  About.js
  Experience.js    — edit the ROLES array to update jobs
  CaseStudy.js
  Skills.js        — edit the GROUPS array to update skills
  Credentials.js   — edit CERTS / EDUCATION
  Footer.js
public/
  resume.pdf       — replace this file to update your downloadable résumé
```

Each section is data-driven — e.g. to change a job bullet, edit the `ROLES` array
at the top of `components/Experience.js`, not the JSX below it.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Since I can't run `npm install` myself in this
environment (no internet access here), **please run it once locally to confirm
everything installs and builds cleanly** before you push.

## Build

```bash
npm run build        # normal static export, root-relative paths (for Vercel/Netlify/custom domain)
npm run build:gh      # static export with the /vignesh-portfolio base path (for GitHub Pages)
```

Either way, output lands in `out/` — that's the folder that actually gets deployed.

## Deploying to GitHub Pages (recommended — matches your existing repo)

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
automatically **every time you push to `main`** — that's the real fix for "does
it auto-update," since a plain static-file repo doesn't need a build step but
this Next.js project does.

One-time setup on GitHub:

1. Push this project to your existing `vignesh-portfolio` repo, replacing the
   old plain-HTML files (see commands below).
2. On GitHub: **Settings → Pages → Build and deployment → Source** → change
   this from "Deploy from a branch" to **"GitHub Actions"**. (This is the one
   setting change required since the old setup expected plain files, not a
   build.)
3. Push to `main`. Check the **Actions** tab — you'll see the workflow run.
   When it's green, your site is live at the same URL as before:
   `https://vigneshecse.github.io/vignesh-portfolio/`

### Pushing this project to your repo

```bash
cd vignesh-portfolio-nextjs
git init
git remote add origin https://github.com/vigneshecse/vignesh-portfolio.git
git add .
git commit -m "Rebuild portfolio as a Next.js project"
git branch -M main
git push origin main --force
```

The `--force` is because this replaces the old plain-HTML commit history with
a fresh project — only do this once, for the initial swap-over. After that,
normal `git push` (no `--force`) is all you need for future edits.

## Deploying somewhere else instead (Vercel, Netlify)

If you'd rather host this on Vercel (the natural home for a Next.js app —
free tier, zero config, and you get server features if you ever want them):

1. Push this repo to GitHub as above.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Leave all settings default — Vercel auto-detects Next.js. Deploy.
4. Use `npm run build` (not `build:gh`) as the build command — Vercel doesn't
   need the GitHub Pages base path since it serves from the domain root.

You can also just delete `.github/workflows/deploy.yml` in that case, since
Vercel handles CI/CD itself.
