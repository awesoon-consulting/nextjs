import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'dark'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  hover?: boolean
}

const variantClasses = {
  default: 'bg-surface shadow-md',
  elevated: 'bg-surface-elevated shadow-lg',
  bordered: 'bg-surface-elevated border border-neutral-200 shadow-sm',
  dark: 'bg-primary text-text-inverse shadow-lg',
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
