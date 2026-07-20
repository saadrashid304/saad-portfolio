# Saad Rashid — Developer Portfolio

Personal portfolio website for Saad Rashid, a full-stack developer specializing in React.js, TypeScript, Spring Boot, and production-focused software engineering.

## What’s included

- Responsive portfolio homepage with hero, about, skills, projects, and contact sections
- Mobile navigation and accessible reduced-motion support
- Individual project detail pages at `/projectDetails/[slug]`
- Project metadata, responsibilities, technology groups, features, external demos, and galleries
- Image galleries for the Lawful Interception System and IJournalist
- Responsive video gallery for the Bullet Localization System
- Contact form powered by the Resend API
- Next.js image optimization and CSS-based animations

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- React Icons
- Resend for contact-form email delivery

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

Create a `.env.local` file in the project root:

```env
RESEND_CONTACT_FORM_API_KEY=your_resend_api_key
```

The contact form requires a valid [Resend](https://resend.com/) API key. Never commit `.env`, `.env.local`, or API keys to the repository.

## Available scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Serve the production build
npm run lint      # Run ESLint
npx tsc --noEmit  # Run the TypeScript checker
```

## Project structure

```text
src/
├── app/
│   ├── api/contact/           # Contact form API route
│   ├── projectDetails/[slug]/ # Dynamic project detail pages
│   ├── globals.css            # Theme tokens, responsive styles, animations
│   └── page.tsx               # Homepage composition
├── assets/                    # Images and project screenshots
├── components/                # Portfolio sections and reusable UI
└── data/projects.ts           # Typed project content and media metadata
public/
└── BulletLocalizationSystemVideos/ # Web-optimized project videos
```

## Adding or editing a project

Project content is centralized in [`src/data/projects.ts`](src/data/projects.ts). Add a project object with a unique `slug`, thumbnail, description, responsibilities, feature list, stack groups, and optional `links` or `gallery` entries.

External links are conditional. If a project has no public source code, omit `links.github`; the page will not render a GitHub button. Use `links.liveDemo` only for an approved public website.

Gallery media supports both images and videos:

```ts
{
  type: "video",
  name: "Feature walkthrough",
  src: "/BulletLocalizationSystemVideos/example.mp4",
  alt: "Feature walkthrough video",
}
```

Keep large video files web-optimized and place them in `public/` so they are served as static assets rather than imported as JavaScript modules.

## Production checks

Before opening a pull request or deploying:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Deployment

This is a standard Next.js application and can be deployed to Vercel or any platform that supports Node.js and Next.js. Configure `RESEND_CONTACT_FORM_API_KEY` in the deployment environment before enabling the contact form.

## License and project confidentiality

This repository contains a personal portfolio and selected visual demonstrations. Some showcased projects are proprietary company work. Source code, internal implementation details, and confidential project data are not included or publicly available.

