# 🎨 Portfolio & Blog

> **Minimalist developer portfolio built with Astro, based on Frontend Mentor's design challenge.**

[![Astro](https://img.shields.io/badge/Astro-4.0-ff5d01)](https://astro.build/)
[![Frontend Mentor Challenge](https://img.shields.io/badge/Frontend%20Mentor-Challenge-3f54a3)](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-4aUHEWg7o)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

**[Live Site](https://heath-babb.dev) | [Design Files](https://www.figma.com/design/Qy8cGlI9CduDxlOL4s94E7/minimalist-portfolio-website) | [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-4aUHEWg7o)**

---

## 📋 About This Project

This is my personal portfolio and blog, built as a Frontend Mentor challenge while learning Astro. The design is based on the "Minimalist Portfolio Website" challenge, with additional blog functionality added.

**What makes this special:**

- 🎨 Pixel-perfect implementation of Frontend Mentor design
- 📝 Extended with blog capabilities using Astro's content collections
- ⚡ Blazingly fast static site generation
- 🏠 Deployable to Vercel or self-hosted via Docker
- 🔧 Production-ready with nginx reverse proxy configuration

**This project demonstrates:**

- Astro framework proficiency
- Converting Figma designs to code
- Static site generation and optimization
- Docker containerization
- Self-hosting capabilities
- Modern frontend development practices

---

## ✨ Features

### Portfolio Features

- 🏠 **Home page** with hero section and featured projects
- 💼 **Projects showcase** with detailed case studies
- 👤 **About page** with background and skills
- 📧 **Contact form** (to be integrated)
- 📱 **Fully responsive** design (mobile, tablet, desktop)

### Blog Features _(Added Beyond Challenge)_

- 📝 **Markdown/MDX blog posts** with syntax highlighting
- 🏷️ **Tag system** for organizing content
- 📅 **Chronological archive** of posts
- 🔍 **SEO optimized** with meta tags and Open Graph
- ⚡ **RSS feed** for subscribers

### Technical Features

- 🎯 **TypeScript** for type safety
- 🎨 **CSS custom properties** for theming
- ♿ **Accessible** semantic HTML
- 🚀 **Optimized images** with Astro's image component
- 🐳 **Docker ready** for self-hosting
- 🔄 **CI/CD ready** with conventional commits and linting

---

## 🛠️ Tech Stack

**Framework & Build**

- [Astro 5.15](https://astro.build/) - Static site generator
- TypeScript - Type safety
- Vite - Build tool

**Styling**

- CSS3 with custom properties
- Mobile-first responsive design
- Sass (.scss) (Sass rocks!)

**Deployment**

- Vercel (current)
- Docker + nginx (self-hosted option)
- Podman compatible

**Dev Tools**

- ESLint - Code linting
- Prettier - Code formatting
- Commitlint - Conventional commits
- Renovate - Dependency updates

---

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ (or use Docker)
- pnpm (or npm/yarn)

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-blog.git
cd portfolio-blog

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Visit `http://localhost:4321`

### Build for Production

```bash
# Create optimized production build
pnpm build

# Preview production build locally
pnpm preview
```

---

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the image
docker build -t portfolio-blog .

# Run the container
docker run -p 8080:80 portfolio-blog
```

### Using Podman

```bash
# Build with Podman
podman build -t portfolio-blog .

# Run with Podman
podman run -p 8080:80 portfolio-blog
```

### Using Docker Compose / Podman Compose

```bash
# With Docker
docker compose up -d

# With Podman (same file works!)
podman-compose up -d
# or
podman compose up -d
```

Visit `http://localhost:8080`

**Note:** The compose file works with both Docker Compose and Podman Compose without modification. Podman Compose reads `docker-compose.yaml` by default.

---

## 📦 Project Structure

```
portfolio-blog/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable components
│   ├── content/           # Blog posts (MDX/Markdown)
│   │   └── blog/
│   ├── layouts/           # Page layouts
│   ├── pages/             # File-based routing
│   │   ├── index.astro   # Home page
│   │   ├── about.astro   # About page
│   │   ├── projects/     # Project pages
│   │   └── blog/         # Blog pages
│   └── styles/            # Global styles
├── astro.config.mjs       # Astro configuration
├── tsconfig.json          # TypeScript config
├── Dockerfile             # Container image
├── docker-compose.yaml    # Compose configuration
├── nginx.conf             # nginx web server config
└── package.json           # Dependencies
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Current - Zero Config)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Option 2: Self-Hosted (Homelab - checkout the blog &#128521;)

**Requirements:**

- Docker or Podman
- Reverse proxy (Caddy, Traefik, or nginx)
- Domain with DNS pointing to your server

**Steps:**

1. Build and run container using compose
2. Configure reverse proxy to forward domain to container
3. Set up SSL with Let's Encrypt (via Caddy/Certbot)
4. Optional: Use Cloudflare Tunnel for better uptime

### Option 3: Hybrid (Homelab + Cloud Failover)

**Architecture:**

- Primary: Self-hosted on homelab
- Failover: Vercel deployment
- Use Cloudflare for DNS with health checks
- Automatic failover if homelab goes down

**Future plan:** Move to this hybrid model when homelab has enterprise networking gear (UniFi).

---

## 📝 Writing Blog Posts

Create new posts in `src/content/blog/`:

```markdown
---
title: 'My First Blog Post'
description: 'This is my first post'
pubDate: 2024-11-26
tags: ['astro', 'blogging']
---

## Hello World

This is my first blog post!
```

Blog posts support:

- Full MDX (import components)
- Syntax highlighting for code
- Frontmatter metadata
- Automatic slug generation

---

## 🎨 Frontend Mentor Challenge

This project is based on the [Minimalist Portfolio Website](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-4aUHEWg7o) challenge from Frontend Mentor.

**Challenge requirements:**

- ✅ View optimal layout for each page depending on screen size
- ✅ See hover states for all interactive elements
- ✅ Navigate between pages
- ✅ (Bonus) Includes blog functionality beyond original design

**My additions:**

- Blog with MDX support
- Tag system
- RSS feed
- Docker deployment
- Self-hosting capabilities

---

## 🔧 Configuration Files Explained

### `Dockerfile`

Multi-stage build that:

1. Builds the Astro site
2. Serves static files with nginx
3. Optimized for small image size

### `docker-compose.yaml`

Single-service compose file for easy deployment. Works with both Docker Compose and Podman Compose.

### `nginx.conf`

Custom nginx configuration:

- Serves Astro's static output
- Gzip compression
- Proper caching headers
- SPA-style routing fallback

### `astro.config.mjs`

Astro configuration for:

- SSG output
- Integrations (MDX, sitemap, etc.)
- Build optimizations

---

## 🛠️ Development Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier

# Docker
pnpm docker:build     # Build Docker image
pnpm docker:run       # Run container locally
```

---

## 🐛 Known Issues / TODO

- [ ] Contact form integration (considering Formspree or Netlify Forms)
- [ ] Blog post search functionality
- [ ] Dark mode toggle
- [ ] Pagination for blog archive
- [ ] RSS feed implementation
- [ ] Social share buttons for posts
- [ ] Reading time estimates for posts

---

## 🤝 Contributing

This is a personal portfolio, but if you spot bugs or have suggestions:

1. Open an issue describing the problem/suggestion
2. Feel free to fork and experiment
3. PRs welcome for bug fixes

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Frontend Mentor Design:** Used with permission as part of the challenge. Design assets © Frontend Mentor.

---

## 🙏 Acknowledgments

- **Frontend Mentor** for the excellent design challenge
- **Astro Team** for the amazing framework
- **Figma** for design inspection tools
- **Vercel** for generous free hosting

---

## 📬 Connect

Built by Heath Babb

- 🌐 Website: [heath-babb.dev](https://heath-babb.dev)
- 🐦 Twitter: [@Heath2420](https://twitter.com/Heath2420)
- 💼 LinkedIn: [heath-babb](https://linkedin.com/in/heath-babb)
- 📝 Blog: [heath-babb.dev/blog](https://heath-babb.dev/blog)
- 📧 Email: [hbabb@heath-babb.dev](mailto:hbabb@heath-babb.dev)

---

## ⭐ Show Your Support

If you found this helpful or interesting, please give it a star! It helps others discover the project and motivates me to keep building in public.

---

<div align="center">

**Built with Astro 🚀 | Deployed on Vercel ▲ | Designed by Frontend Mentor 🎨**

</div>
