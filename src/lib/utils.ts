import { type ClassValue, clsx } from 'clsx'
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
}