import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'dark'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  hover?: boolean
}

const variantClasses = {
  default: 'bg-surface shadow-md dark:bg-secondary/45 dark:shadow-none',
  elevated: 'bg-surface-elevated shadow-lg dark:border dark:border-white/10 dark:bg-primary dark:shadow-none',
  bordered: 'border border-neutral-200 bg-surface-elevated shadow-sm dark:border-white/10 dark:bg-primary dark:shadow-none',
  dark: 'bg-primary text-text-inverse shadow-lg dark:bg-secondary',
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        'rounded-xl',
        variantClasses[variant],
        paddingClasses[padding],
        hover
          ? 'transition-shadow duration-200 hover:shadow-xl cursor-pointer'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}
