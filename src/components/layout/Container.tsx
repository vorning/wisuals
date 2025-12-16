import { cn } from '@/lib/utils'
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
}