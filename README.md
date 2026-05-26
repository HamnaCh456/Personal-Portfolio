# Hamna Hameed — Portfolio (Minimal)

A clean, minimal Next.js 15 portfolio. Black-and-white Linear-inspired theme.
Same content as the previous build, stripped of unused infrastructure (Supabase,
Velite, MDX, Sandpack, blog/changelog/stats/toolbox pages, etc.).

## Why this version exists

The previous project was deployed to Vercel from a heavy template. It returned
**404 on every route** because `middleware.ts` referenced
`process.env.NEXT_PUBLIC_SUPABASE_URL!` and `NEXT_PUBLIC_SUPABASE_ANON!` — both
unset in Vercel. The non-null assertion crashed the middleware at request time,
and a crashing middleware that matches `/((?!_next/...).*)` rejects every page.

This version has **no middleware, no Supabase, no Velite, no env vars** —
nothing that can fail at deploy time.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Import the repo on https://vercel.com/new.
3. Leave all defaults. **No environment variables required.**
4. Deploy.

## Structure

```
app/
  components/        Navbar, Footer, HeroEditorial, GridWrapper, SocialPill
  data/              siteMetadata.ts
  favicon.ico
  globals.css        minimal global styles
  layout.tsx         root layout (fonts, nav, footer wrapper)
  page.tsx           homepage — hero + stack + experience + projects
public/
  static/
    hamna_hameed_resume.pdf
```

## Color palette

Tailwind tokens in `tailwind.config.ts`:

| Token            | Hex      | Use                       |
|------------------|----------|---------------------------|
| `bg`             | #08090A  | page background           |
| `surface`        | #0F1011  | cards                     |
| `surface-2`      | #16181A  | nested surfaces / chips   |
| `border`         | #1F2023  | subtle dividers           |
| `border-strong`  | #2A2C30  | hover borders             |
| `ink`            | #F7F8F8  | primary text              |
| `ink-muted`      | #8A8F98  | secondary text            |
| `ink-dim`        | #62666D  | tertiary / labels         |
| `accent`         | #FFFFFF  | accent (was terracotta)   |
