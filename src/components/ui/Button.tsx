import { forwardRef, ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-text-inverse font-semibold hover:bg-secondary focus-visible:ring-secondary shadow-md hover:shadow-lg active:scale-[0.98] dark:bg-secondary dark:hover:bg-secondary-light',
  secondary:
    'border border-neutral-200 bg-white text-text-primary font-semibold hover:bg-neutral-100 focus-visible:ring-secondary shadow-md hover:shadow-lg active:scale-[0.98] dark:border-white/10 dark:bg-secondary dark:text-text-inverse dark:hover:bg-secondary-light',
  outline:
    'border-2 border-accent text-accent bg-transparent font-semibold hover:bg-accent hover:text-text-inverse focus-visible:ring-accent active:scale-[0.98]',
  ghost:
    'bg-transparent text-text-primary hover:bg-neutral-100 focus-visible:ring-neutral-400 active:scale-[0.98] dark:text-text-inverse dark:hover:bg-white/10',
  danger:
    'bg-error text-white font-semibold hover:opacity-90 focus-visible:ring-error shadow-md active:scale-[0.98]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    disabled,
    className = '',
    children,
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      aria-busy={loading}
      className={[
        'inline-flex items-center justify-center gap-2 transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  )
})

export default Button
