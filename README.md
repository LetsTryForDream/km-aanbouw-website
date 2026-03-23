# KM Aanbouw Website

Marketing website for **KM Aanbouw**, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Radix UI components

## Features

- SEO-friendly pages with metadata and structured data
- Dynamic content from centralized content files
- Reusable UI components and page sections
- Blog, projects, service areas, and service pages
- Responsive layout for desktop and mobile

## Requirements

- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Installation and local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open in your browser:

`http://localhost:3000`

## Available scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production build
- `npm run lint` - Run ESLint

## Updating content

A large part of the website content is managed in:

- `src/content/site.ts`

You can update, for example:

- Brand details (name, phone, email, address)
- Navigation and footer links
- Page copy, FAQs, and CTAs
- Service areas, projects, and blog items

## Deploy

Use the standard Next.js flow:

```bash
npm run build
npm run start
```

You can deploy to Vercel or any Node.js hosting environment.
