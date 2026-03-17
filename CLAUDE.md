# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build (linting skipped)
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 14 App Router** portfolio/marketing site for a Brighton-based freelance creative.

### Route structure

- `src/app/(main)/` — main route group with shared layout
  - `page.jsx` — homepage
  - `about/`, `contact/`, `work/` — standard pages
  - `parade/`, `studiofox/`, `southwark/`, `tcsound/` — individual project showcase pages
- `src/app/layout.tsx` — root layout (custom fonts: VCR OSD Mono, DM Sans)
- `src/app/globals.css` — global styles

### Component layers

- `src/components/ui/` — 40+ shadcn/ui + custom animated components (particle effects, 3D cards, shimmer buttons, canvas reveal, etc.)
- `src/components/main/navbar.tsx` — navigation
- `src/app/(main)/components/` — page-specific components (Hero, Dock)

### Key conventions

- Path alias `@/*` maps to `src/*`
- Mix of `.tsx` and `.jsx` — TypeScript is not enforced everywhere
- All content is hardcoded in components (no CMS)
- shadcn/ui "new-york" style; components added via `npx shadcn@latest add <component>`
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge) used throughout

### Styling

Tailwind CSS with extensive custom config: custom color tokens (CSS variables), animations (border-beam, meteor, shimmer-slide, ripple, rainbow), and dark mode via `next-themes`.

### Notable dependencies

- **Animation:** Framer Motion, `@tsparticles/react`
- **3D:** Three.js + `@react-three/fiber`
- **Scroll:** Lenis (smooth scroll)
- **Syntax highlighting:** Shiki
- **Email:** Resend (`resend` package)

### Environment variables

```
NEXT_PUBLIC_BASE_URL=https://api.dissociate.io
API_URL=http://localhost:6900
RESEND_API_KEY=                        # Required for contact form email sending
```

### Contact form

- Form is at `src/app/(main)/contact/page.jsx` — controlled inputs with sonner toast notifications
- API route at `src/app/api/contact/route.ts` — POSTs to Resend, sends to `mitch@chocolate-ltd.com` and `archieisarchie@gmail.com`
- From address: `website@seveache.chocolate-ltd.com` (verified domain)
- Reply-To is set to the sender's email address
- `RESEND_API_KEY` must be set in `.env.local` (locally) and as a Netlify environment variable (production)
