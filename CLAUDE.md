# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

No test suite is configured.

## Architecture

**Framework**: Next.js 14 with App Router, React 18, Tailwind CSS.

**Source layout** (all under `src/app/`):
- `page.js` / `layout.js` — root home page and shared layout (Header + Footer)
- `components/` — one folder per section: `AboutMe`, `CallToAction`, `Footer`, `Header`, `HomeComponent`, `LanguageSwitcher`, `SliderCard`, `WorkHistory`
- `portfoliodetail/[id]/page.js` — dynamic portfolio item detail (App Router dynamic route)
- `page/contactme/page.js` — contact form page
- `api/contact/route.js` — POST handler that sends email via Nodemailer (Gmail SMTP, credentials from `.env`)
- `i18n/request.js` — locale detection config for `next-intl`

**Internationalization**: `next-intl` with English/Japanese. Locale is stored in a cookie (defaults to `en`) and read in `src/app/i18n/request.js`. All user-facing strings live in `messages/en.json` and `messages/ja.json`. Server components call `getLocale()` / `getMessages()`; client components use the `useTranslations()` hook. The `LanguageSwitcher` component sets the cookie and reloads the page.

**Styling**: Tailwind utility classes plus custom CSS in `globals.css`. Custom fonts: Recoleta (local) and Hind (Google Fonts). CSS variables `--background` / `--foreground` for theming. Responsive breakpoints are defined inline in Tailwind classes (480px → 1760px range).

**Client vs. server components**: Interactive components are marked `"use client"`. Layout, page shells, and i18n bootstrapping run as server components.

**Environment variables** (`.env`):
- `EMAIL` — Gmail sender address used by Nodemailer
- `PASSWORD` — Gmail app password

**Path alias**: `@/*` maps to `./src/*` (configured in `jsconfig.json`).

**Portfolio project data**: defined as a static array in `src/app/page/portfolio-detail-design/index.js`, consumed by both the slider cards and the dynamic detail page (`portfoliodetail/[id]`).

**Key dependencies**: `react-slick` + `slick-carousel` for the project carousel, `react-toastify` for contact form feedback, `react-icons` for iconography.
