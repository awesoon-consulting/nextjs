import { HTMLAttributes } from 'react'

type BadgeVariant = 'default' | 'accent' | 'success' | 'error' | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-neutral-100 text-text-secondary dark:bg-white/10 dark:text-neutral-300',
  accent: 'bg-accent text-text-inverse',
  success: 'bg-success-light text-success',
  error: 'bg-error-light text-error',
  outline: 'border border-neutral-300 bg-transparent text-text-secondary dark:border-white/15 dark:text-neutral-300',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export default function Badge({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center font-medium rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </span>
  )
}
