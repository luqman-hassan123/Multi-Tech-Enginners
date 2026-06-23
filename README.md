# Multi Tech Engineers — Website

Construction company website built with React, Vite, and React Router.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `VITE_WEB3FORMS_ACCESS_KEY` — Web3Forms key for the contact form

## Deploy on Vercel

1. Import [Multi-Tech-Enginners](https://github.com/luqman-hassan123/Multi-Tech-Enginners) on [Vercel](https://vercel.com)
2. **Production branch:** `main`
3. **Framework preset:** Vite (auto-detected)
4. **Build command:** `npm run build`
5. **Output directory:** `dist`
6. Add `VITE_WEB3FORMS_ACCESS_KEY` under **Settings → Environment Variables**
7. Deploy

`vercel.json` includes SPA rewrites so client-side routes (`/about`, `/projects`, etc.) work on refresh.

## Branches

- `development` — active work
- `main` — production (Vercel)

## Images

- Hero slideshow: `public/images/hero/`
- Projects: `public/images/projects/[project-id]/`
- Services: `public/images/services/`
- Team: `public/images/team/`
