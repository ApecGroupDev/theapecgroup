<div align="center">

# The APEC Group

**Your one-stop shop for petroleum construction, compliance, and fuel station services.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)](https://www.theapecgroup.com/)

[Live Site](https://www.theapecgroup.com/) &middot; [Report Bug](../../issues) &middot; [Request Feature](../../issues)

</div>

---

## About

The APEC Group has been serving fuel retailers, distributors, and commercial operators since **1989**. This repository contains the company's public-facing website &mdash; a statically-generated, SEO-optimized marketing site built with the **Next.js App Router**.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Static Export) |
| **Language** | [TypeScript 5](https://typescriptlang.org/) |
| **UI** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) + Google Analytics |
| **Forms** | [Formspree](https://formspree.io/) |
| **Hosting** | [Vercel](https://vercel.com/) |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── home/               # Homepage sections
│   ├── about-us/           # About page
│   ├── contact-us/         # Contact page
│   ├── our-team/           # Team page
│   ├── blogs/              # Blog listing + articles
│   ├── services/           # Service pages
│   │   ├── gas-station-construction/
│   │   ├── gas-station-electrical/
│   │   ├── gas-station-financing/
│   │   ├── canopy-imaging-solutions/
│   │   └── environmental-compliance-solutions/
│   └── petroleum-companies-jobs/  # Careers page
├── components/             # Shared UI components
├── lib/                    # Shared utilities (animations, etc.)
└── styles/                 # Global CSS
```

## Getting Started

### Prerequisites

- **Node.js** &ge; 18
- **npm** &ge; 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/theapecgroup.git
cd theapecgroup

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** to view the site locally. Pages hot-reload as you edit.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Deployment

The site is deployed automatically to **Vercel** on every push to the `main` branch. No additional configuration is required &mdash; Vercel auto-detects the Next.js framework.

## License

This is a private, proprietary project. All rights reserved &copy; The APEC Group.
