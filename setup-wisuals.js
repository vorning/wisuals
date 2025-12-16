const fs = require('fs');
const path = require('path');

// Helper function to create file with content
function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${filePath}`);
}

// Create all directories first
const directories = [
  'src/components/ui',
  'src/components/sections',
  'src/components/layout',
  'src/components/effects',
  'src/lib',
  'src/hooks',
  'src/styles',
  'src/types'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
});

// File contents
const files = {
  'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig`,

  'tailwind.config.ts': `import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        muted: '#888888',
        border: 'rgba(255, 255, 255, 0.08)',
        
        // Accent colors - Next.js inspired
        accent: {
          DEFAULT: '#0070F3',
          hover: '#0051CC',
        },
        
        // Grays
        gray: {
          50: '#FAFAFA',
          100: '#EAEAEA',
          200: '#999999',
          300: '#888888',
          400: '#666666',
          500: '#444444',
          600: '#333333',
          700: '#222222',
          800: '#111111',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow': {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config`,

  'app/layout.tsx': `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wisuals - Fast Sites. No Bullshit. Pure Craft.',
  description: 'Victor Vorning bygger websites der performer lige så godt som de ser ud. Next.js, React, TypeScript.',
  keywords: ['web development', 'Next.js', 'React', 'TypeScript', 'freelance', 'Denmark'],
  authors: [{ name: 'Victor Vorning' }],
  creator: 'Victor Vorning',
  metadataBase: new URL('https://wisuals.dk'),
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://wisuals.dk',
    siteName: 'Wisuals',
    title: 'Wisuals - Fast Sites. No Bullshit. Pure Craft.',
    description: 'Victor Vorning bygger websites der performer lige så godt som de ser ud.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisuals',
    description: 'Fast Sites. No Bullshit. Pure Craft.',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={\`\${inter.variable}\`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
}`,

  'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    
    /* Custom properties */
    --blur-amount: 10px;
    --border-color: rgba(255, 255, 255, 0.08);
    --glow-color: rgba(0, 112, 243, 0.15);
    
    /* Animation durations */
    --animation-fast: 200ms;
    --animation-base: 300ms;
    --animation-slow: 500ms;
  }
  
  * {
    @apply border-border;
  }
  
  html {
    @apply scroll-smooth;
    scrollbar-width: thin;
    scrollbar-color: #333 #000;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
  
  /* Custom scrollbar for Webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-black;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-gray-800 rounded;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-700;
  }
  
  /* Selection colors */
  ::selection {
    @apply bg-accent text-white;
  }
}

@layer utilities {
  /* Glass effect */
  .glass {
    @apply bg-white/[0.02] backdrop-blur-md border border-white/[0.08];
  }
  
  /* Gradient text */
  .gradient-text {
    @apply bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent;
  }
  
  /* Glow effect */
  .glow {
    box-shadow: 
      0 0 20px rgba(0, 112, 243, 0.15),
      0 0 40px rgba(0, 112, 243, 0.1),
      0 0 60px rgba(0, 112, 243, 0.05);
  }
  
  /* Smooth animations */
  .transition-smooth {
    @apply transition-all duration-300 ease-in-out;
  }
  
  /* Grid pattern background */
  .grid-pattern {
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  
  /* Noise texture */
  .noise {
    position: relative;
  }
  
  .noise::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.03;
  }
  
  /* Focus styles */
  .focus-ring {
    @apply focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black;
  }
}

@layer components {
  /* Button base */
  .btn {
    @apply px-6 py-3 rounded-lg font-medium transition-smooth focus-ring;
  }
  
  .btn-primary {
    @apply btn bg-white text-black hover:bg-gray-100;
  }
  
  .btn-secondary {
    @apply btn glass hover:bg-white/[0.05];
  }
  
  /* Container */
  .container-custom {
    @apply mx-auto px-6 md:px-8 lg:px-12 max-w-7xl;
  }
  
  /* Section spacing */
  .section {
    @apply py-20 md:py-32;
  }
}`,

  'app/page.tsx': `import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Grid pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-20" />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        
        {/* Placeholder for other sections */}
        <div className="h-screen flex items-center justify-center text-gray-500">
          <p>Cases section coming soon...</p>
        </div>
      </div>
    </main>
  )
}`,

  'src/lib/utils.ts': `import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Delay utility for animations
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Format number with commas
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('da-DK').format(num)
}

// Check if we're on server or client
export const isServer = typeof window === 'undefined'

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}`,

  'src/lib/animations.ts': `export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
}

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(0, 112, 243, 0.3)',
  transition: { duration: 0.2 }
}

// Text animations
export const textReveal = {
  hidden: { 
    opacity: 0,
    y: 100,
    rotateX: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.9]
    }
  }
}

// Page transitions
export const pageTransition = {
  hidden: { 
    opacity: 0,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, 0.05, 0.9]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.9]
    }
  }
}`,

  'src/lib/constants.ts': `// Site metadata
export const SITE_CONFIG = {
  name: 'Wisuals',
  domain: 'wisuals.dk',
  author: 'Victor Vorning',
  email: 'victor@wisuals.dk',
  tagline: 'Fast Sites. No Bullshit. Pure Craft.',
  description: 'Jeg bygger websites der performer lige så godt som de ser ud.',
}

// Navigation
export const NAV_ITEMS = [
  { label: 'Cases', href: '#cases' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

// Services
export const SERVICES = [
  {
    title: 'Custom Development',
    description: 'Next.js, React, TypeScript. Håndkodet fra bunden.',
    features: ['Performance First', 'SEO Optimized', 'Type Safe'],
  },
  {
    title: 'UI/UX Design',
    description: 'Interfaces der ikke bare virker, men imponerer.',
    features: ['Figma to Code', 'Responsive Design', 'Micro-interactions'],
  },
  {
    title: 'Performance',
    description: 'Lighthouse scores der får konkurrenterne til at græde.',
    features: ['Core Web Vitals', 'Bundle Optimization', 'Edge Deployment'],
  },
]

// Tech stack
export const TECH_STACK = [
  'Next.js',
  'React',
  'TypeScript', 
  'Tailwind CSS',
  'Framer Motion',
  'Vercel',
  'Supabase',
  'Prisma',
]

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/victorvorning',
  linkedin: 'https://linkedin.com/in/victorvorning',
  twitter: 'https://twitter.com/victorvorning',
}

// Performance metrics (example data - replace with real)
export const METRICS = {
  lighthouseScore: 98,
  projectsCompleted: 24,
  coffeesConsumed: 1337,
  linesOfCode: 50000,
}`,

  'src/types/index.ts': `// Project/Case types
export interface Project {
  id: string
  title: string
  client: string
  description: string
  image: string
  url?: string
  github?: string
  tech: string[]
  year: number
  featured?: boolean
  metrics?: {
    lighthouse?: number
    loadTime?: number
    improvement?: string
  }
}

// Service types
export interface Service {
  title: string
  description: string
  features: string[]
  icon?: string
}

// Navigation
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// Contact form
export interface ContactFormData {
  name: string
  email: string
  company?: string
  project: string
  budget?: string
  timeline?: string
  message: string
}

// Component props
export interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}`,

  'src/components/ui/Button.tsx': `'use client'

import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'
import Link from 'next/link'
import { forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring rounded-lg'
    
    const variants = {
      primary: 'bg-white text-black hover:bg-gray-100',
      secondary: 'bg-white/[0.08] text-white hover:bg-white/[0.12] backdrop-blur-sm border border-white/[0.08]',
      ghost: 'hover:bg-white/[0.08] text-white',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
    
    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )
    
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )
      }
      
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button`,

  'src/components/layout/Container.tsx': `import { cn } from '@/lib/utils'
import { ContainerProps } from '@/types'

export default function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  }
  
  return (
    <div className={cn(
      'mx-auto px-6 md:px-8 lg:px-12',
      sizes[size],
      className
    )}>
      {children}
    </div>
  )
}`,

  'src/components/sections/Hero.tsx': `'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div 
            variants={fadeInUp}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for projects
            </span>
          </motion.div>
          
          {/* Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block">Kode der</span>
            <span className="block text-gray-400">performer.</span>
            <span className="block gradient-text">Design der</span>
            <span className="block gradient-text">inspirerer.</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
          >
            Jeg er Victor. Jeg bygger websites der er lige så hurtige som de er smukke. 
            Ingen WordPress. Ingen page builders. Just raw, optimized code.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" href="#cases">
              Se mit arbejde
            </Button>
            <Button size="lg" variant="secondary" href="#contact">
              Start et projekt
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/[0.08]"
          >
            {[
              { label: 'Lighthouse Score', value: '98+' },
              { label: 'Projects', value: '24' },
              { label: 'Years Experience', value: '5+' },
              { label: 'Coffee Consumed', value: '∞' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}`
};

// Create all files
console.log('🚀 Creating Wisuals project files...\n');

Object.entries(files).forEach(([filePath, content]) => {
  createFile(filePath, content);
});

console.log('\n✨ All files created successfully!');
console.log('\nNext steps:');
console.log('1. Run: npm install framer-motion clsx tailwind-merge lucide-react');
console.log('2. Run: npm run dev');
console.log('3. Open http://localhost:3000\n');