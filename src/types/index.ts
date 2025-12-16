// Project/Case types
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
}