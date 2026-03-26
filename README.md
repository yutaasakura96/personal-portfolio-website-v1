> ⚠️ **Archived Project** — This is **v1** of my personal portfolio website. For my current portfolio, visit [www.asakurayuta.dev](https://www.asakurayuta.dev).

---

# Personal Portfolio Website v1

The original version of my personal portfolio website, built to showcase my skills as a full-stack web developer. Features a fully responsive multi-page design using React 18, Next.js 14 (App Router), Tailwind CSS, and Nodemailer.

Supports internationalization (i18n) in both English and Japanese via `next-intl`, with locale stored in a cookie and a language switcher for seamless toggling.

## Demo

[Live Demo (v1 archive)](https://personal-portfolio-website-v1.vercel.app)

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop (375px – 1920px).
- **React 18 & Next.js 14 (App Router)**: Component-based architecture with server-side rendering, optimized routing, and dynamic pages.
- **Internationalization (i18n)**: English and Japanese support via `next-intl`. Locale is stored in a cookie and all user-facing strings live in `messages/en.json` and `messages/ja.json`.
- **Portfolio Section**: 8 projects showcased in a responsive React Slick carousel, each with a dedicated detail page (`/portfoliodetail/[id]`) including images, tech stack, live demo/GitHub links, and previous/next navigation.
- **Tech Stack Carousel**: Infinite carousel of 22+ technology icons (HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue, Ruby, Rails, and more).
- **Work History Section**: Professional experience timeline with role descriptions and per-job tech stack display.
- **Contact Form**: Fields for name, email, phone, subject, and message with real-time validation. Submissions are sent via Nodemailer (Gmail SMTP) through a Next.js API route.
- **SEO Optimized**: Structured data (JSON-LD), Open Graph and Twitter meta tags for improved search engine and social sharing visibility.
- **Diagonal Drawer Menu**: Custom animated diagonal drawer for mobile navigation.
- **Scroll to Top Button**: Appears on scroll, returns user to top of page.
- **Enhanced Accessibility**: Semantic HTML, descriptive ARIA labels, keyboard navigation, and screen-reader-friendly carousel items.

## Technologies Used

- [**React 18**](https://react.dev/) — Component-based UI
- [**Next.js 14**](https://nextjs.org/) — App Router, SSR, dynamic routing, i18n
- [**Tailwind CSS**](https://tailwindcss.com/) — Utility-first responsive styling
- [**next-intl**](https://next-intl-docs.vercel.app/) — Internationalization (English / Japanese)
- [**Nodemailer**](https://nodemailer.com/about/) — Contact form email delivery via Gmail SMTP
- [**React Toastify**](https://fkhadra.github.io/react-toastify/introduction) — In-app success/error notifications
- [**React Slick**](https://react-slick.neostack.com/) — Responsive carousel for projects and tech icons
- [**react-icons**](https://react-icons.github.io/react-icons/) — Iconography throughout the site
- [**Google Fonts (Hind)**](https://fonts.google.com/) — Typography
- [**Next.js Image Optimization**](https://nextjs.org/docs/basic-features/image-optimization) — Optimized image loading
- [**Vercel**](https://vercel.com/) — Deployment platform

## Project Structure

```
src/app/
├── page.js / layout.js          # Home page and shared layout (Header + Footer)
├── components/
│   ├── AboutMe/                 # Skills section with flip card animations
│   ├── CallToAction/            # Scroll-to-top button
│   ├── Footer/                  # Footer with social links
│   ├── Header/                  # Navigation header + DiagonalDrawer mobile menu
│   ├── HomeComponent/           # Hero/landing section
│   ├── LanguageSwitcher/        # EN/JA toggle (sets locale cookie)
│   ├── SliderCard/              # Portfolio carousel (MySlider + SliderCard)
│   └── WorkHistory/             # Professional experience timeline
├── portfoliodetail/[id]/        # Dynamic portfolio detail pages
├── page/contactme/              # Contact form page
└── api/contact/route.js         # POST handler — sends email via Nodemailer
messages/
├── en.json                      # English translations
└── ja.json                      # Japanese translations
```

## Key Components

### Internationalization (i18n)
`next-intl` with English and Japanese. Locale is stored in a cookie (defaults to `en`) and read in `src/app/i18n/request.js`. Server components call `getLocale()` / `getMessages()`; client components use the `useTranslations()` hook. The `LanguageSwitcher` sets the cookie and reloads the page.

### Portfolio Carousel & Detail Pages
`MySlider.js` renders a responsive React Slick carousel of `SliderCard` components. Each card links to a dynamic detail page (`/portfoliodetail/[id]`) showing project images, full description, tech stack, live demo/GitHub links, and previous/next project navigation. Project data is defined as a static array in `src/app/page/portfolio-detail-design/index.js`.

### About Me
Flip card animations per skill category (Frontend, Backend, UI/UX, Tools), with a clean responsive layout and smooth transitions.

### Work History
Professional experience cards with role descriptions and per-job tech stack tags.

### Contact Form
Fields: name, email, phone, subject, message — with client-side validation. Submissions POST to `/api/contact`, which sends an HTML-formatted email via Nodemailer (Gmail SMTP, port 465). Feedback via React Toastify toast notifications.

### Diagonal Drawer Menu
Custom diagonal animated drawer for mobile navigation with active section tracking based on scroll position.

### Scroll to Top
`CallToAction` component tracks scroll position via `useEffect`/`useState` and renders a button when scrolled past a threshold.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Environment Variables

Create a `.env` file in the project root:

```env
EMAIL=your-gmail-address@gmail.com
PASSWORD=your-gmail-app-password
```

> Use a [Google App Password](https://support.google.com/accounts/answer/185833), not your regular Gmail password.

### Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/yutaasakura96/personal-portfolio-website-v1.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

## Deployment

Deployed on [Vercel](https://vercel.com/). To deploy your own copy:

1. Push the project to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Add the `EMAIL` and `PASSWORD` environment variables in the Vercel project settings.
4. Deploy — Vercel handles the rest with automatic Next.js integration.

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

🖥️ Created and Coded by Yuta Asakura © 2024

## Contact

Reach out via the contact form on the site, connect on [LinkedIn](https://www.linkedin.com/in/yuta-asakura), or email [yuta.asakura.se@gmail.com](mailto:yuta.asakura.se@gmail.com).
