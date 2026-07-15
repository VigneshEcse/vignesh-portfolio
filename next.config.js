/**
 * This repo is deployed as a static site (output: 'export'), so it works on
 * GitHub Pages, Netlify, or any static host with zero server.
 *
 * GitHub Pages project sites (yourname.github.io/repo-name) serve from a
 * subpath, so every asset URL needs that subpath prefixed. The GITHUB_PAGES
 * env var (set by .github/workflows/deploy.yml) turns that on automatically
 * during CI builds. Local `npm run dev` and `npm run build` don't set it, so
 * local previews behave like a normal root-hosted site.
 *
 * Deploying somewhere else (Vercel, Netlify, a custom domain)? Just don't set
 * GITHUB_PAGES and the basePath disappears — nothing else to change.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "vignesh-portfolio";
const basePath = isGithubPages ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
