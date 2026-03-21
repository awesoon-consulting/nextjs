import { ReactNode } from 'react'

interface FieldWrapperProps {
  label: string
  htmlFor?: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
  className?: string
}

export default function FieldWrapper({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
  className = '',
}: FieldWrapperProps) {
  const fieldId = htmlFor ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={['flex flex-col gap-1.5', className].join(' ')}>
      <label
        htmlFor={fieldId}
        className="text-sm font-semibold text-text-primary"
      >
        {label}
        {required && (
          <span className="text-error ml-1" aria-label="required">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-text-muted">{hint}</p>
      )}
      {error && (
        <p role="alert" className="text-xs text-error flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
}
