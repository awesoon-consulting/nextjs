import { forwardRef, SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  hint?: string
  options: SelectOption[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, hint, options, placeholder, id, className = '', required, ...rest },
  ref
) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-text-primary">
          {label}
          {required && (
            <span className="text-error ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
          }
          className={[
            'w-full appearance-none rounded-lg border bg-surface-elevated px-4 py-3 text-text-primary dark:border-white/10 dark:bg-secondary/55 dark:text-text-inverse dark:[color-scheme:dark]',
            'text-base transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary dark:focus:border-accent',
            error
              ? 'border-error focus:ring-error'
              : 'border-neutral-300 hover:border-neutral-400 dark:hover:border-white/20',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-neutral-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {hint && !error && (
        <p id={`${selectId}-hint`} className="text-sm text-text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${selectId}-error`} role="alert" className="text-sm text-error flex items-center gap-1">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
})

export default Select
