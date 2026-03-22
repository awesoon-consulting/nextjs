import { forwardRef, InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  description?: string
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, error, id, className = '', ...rest },
  ref
) {
  const checkboxId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={['flex items-start gap-3', className].join(' ')}>
      <div className="flex items-center h-6">
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          aria-describedby={description ? `${checkboxId}-desc` : undefined}
          aria-invalid={!!error}
          className={[
            'h-5 w-5 rounded border-2 cursor-pointer',
            'bg-surface-elevated text-accent dark:border-white/15 dark:bg-secondary/55',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-accent dark:focus:ring-offset-primary',
            error ? 'border-error' : 'border-neutral-300 dark:hover:border-white/20',
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor={checkboxId}
          className="text-sm font-medium text-text-primary cursor-pointer leading-6"
        >
          {label}
        </label>
        {description && (
          <p id={`${checkboxId}-desc`} className="text-sm text-text-muted mt-0.5">
            {description}
          </p>
        )}
        {error && (
          <p role="alert" className="text-sm text-error mt-0.5">
            {error}
          </p>
        )}
      </div>
    </div>
  )
})

export default Checkbox
