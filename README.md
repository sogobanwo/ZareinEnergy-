# Zarein Energy Website

A modern, responsive corporate website for Zarein Energy Limited - a renewable energy solutions provider specializing in solar, energy storage, and smart grid technologies.

![Next.js](https://img.shields.io/badge/Next.js-14.2.25-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [Styling](#styling)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Performance](#performance)

## 🌟 Overview

Zarein Energy's website is a modern, fully responsive web application built with Next.js 14 and React 19. It showcases the company's renewable energy solutions, projects, services, and expertise in the sustainable energy sector.

The website features smooth animations, responsive design, an intuitive navigation system, and a clean, professional aesthetic aligned with Zarein Energy's brand identity.

## ✨ Features

- **Modern Design**: Clean, professional design with consistent branding
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Interactive Components**: Engaging UI elements with hover effects and transitions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Built with Next.js for optimal search engine visibility
- **Performance Focused**: Fast page loads and optimized assets
- **Accessible**: WCAG compliant with semantic HTML
- **Type Safe**: Written in TypeScript for better code quality

## 🛠 Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[class-variance-authority](https://cva.style/docs)** - Component variants

### UI Components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Recharts](https://recharts.org/)** - Chart library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation

### Development
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sogobanwo/ZareinEnergy-.git
cd ZareinEnergy-
```

2. Install dependencies:
```bash
# Using npm
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
# Using npm
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ZareinEnergy-/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   │   └── page.tsx
│   ├── contact/             # Contact page
│   │   └── page.tsx
│   ├── projects/            # Projects showcase page
│   │   └── page.tsx
│   ├── services/            # Services page
│   │   └── page.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
│
├── components/              # React components
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   │   └── button.tsx
│   ├── cta-section.tsx      # Call-to-action section
│   ├── dashboard-preview.tsx # Dashboard mockup component
│   ├── documentation-section.tsx
│   ├── feature-cards.tsx    # Feature card grid
│   ├── footer-section.tsx   # Footer component
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Hero banner
│   ├── page-shell.tsx       # Page wrapper component
│   ├── page-transition.tsx  # Page transition wrapper
│   ├── testimonials-section.tsx
│   └── ...                  # Other components
│
├── lib/                     # Utility functions
│   └── utils.ts             # Helper utilities
│
├── public/                  # Static assets
│   ├── *.svg                # SVG images
│   ├── *.jpg                # Image assets
│   ├── *.webp               # Optimized images
│   └── *.avif               # Modern image format
│
├── styles/                  # Additional styles
│   └── globals.css
│
├── components.json          # shadcn/ui configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 📄 Pages

### Home (`/`)
The landing page featuring:
- Hero section with company tagline
- Feature cards highlighting key services
- Testimonials section
- Call-to-action sections

### About (`/about`)
Company information including:
- Mission and vision
- Leadership team
- Company values
- Company history

### Services (`/services`)
Detailed service offerings:
- Renewable Energy Solutions
- Energy Storage Systems
- Smart Grid Solutions
- Consultation Services
- Installation & Maintenance
- Energy Audits

### Projects (`/projects`)
Showcase of completed projects:
- Solar Power Projects
- Energy Storage Installations
- Grid Solutions
- Case studies with images

### Contact (`/contact`)
Get in touch page with:
- Contact form (validated)
- Office location
- Phone and email information
- Support channels

## 🧩 Components

### Reusable Components

- **PageShell**: Wrapper for consistent page layout
- **PageTransition**: Smooth page transitions with Framer Motion
- **Header**: Responsive navigation with mobile menu
- **Footer**: Company information and links
- **Button**: Styled button component with variants
- **FeatureCards**: Grid layout for service/feature highlights
- **Testimonials**: Customer testimonial carousel
- **CTASection**: Call-to-action prompts
- **DashboardPreview**: Interactive dashboard mockup

### UI Components (shadcn/ui)

The project uses components from [shadcn/ui](https://ui.shadcn.com/), including:
- Accordion, Alert Dialog, Avatar
- Button, Card, Checkbox
- Dialog, Dropdown Menu
- Form, Input, Label
- Select, Separator, Slider
- Tabs, Toast, Tooltip
- And more...

## 🎨 Styling

### Color Palette

The website uses a carefully selected color scheme:

- **Primary (Teal)**: `#1a5f7a` - Main brand color
- **Primary Hover**: `#0f4a61` - Darker shade for interactions
- **Secondary (Green)**: `#2b8c3e` - Accent color for energy/sustainability
- **Text**: Various shades of the primary color with opacity

### Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Design Principles

- **Mobile-first**: Designed for mobile and scaled up
- **Consistency**: Uniform spacing, typography, and colors
- **Accessibility**: High contrast ratios and semantic HTML
- **Performance**: Optimized images and minimal CSS

## ⚙️ Configuration

### Tailwind Configuration

Custom Tailwind setup in `tailwind.config.ts`:
- Custom colors
- Extended spacing
- Animation utilities
- Custom fonts (Geist)

### Next.js Configuration

Configuration in `next.config.mjs`:
- Image optimization
- Experimental features
- Build optimizations

### TypeScript Configuration

Strict TypeScript settings in `tsconfig.json`:
- Path aliases (`@/`)
- Strict type checking
- JSX support

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement responsive design patterns
- Write semantic HTML
- Keep components small and focused

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Export a default React component
4. Update navigation in `header.tsx`

### Adding New Components

1. Create component in `components/`
2. Use TypeScript for props
3. Style with Tailwind CSS
4. Export from the file
5. Import where needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved by Zarein Energy Limited.

## 📞 Contact

**Zarein Energy Limited**
- Website: [Coming Soon]
- Email: [Coming Soon]
- Support: [Coming Soon]
- Phone: [Coming Soon]

---

Built with ❤️ by the Zarein Energy development team
