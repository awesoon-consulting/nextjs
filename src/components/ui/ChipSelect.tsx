'use client'

export interface ChipOption {
  value: string
  label: string
}

interface ChipSelectProps {
  options: ChipOption[]
  value: string[]
  onChange: (values: string[]) => void
  /** When true: clicking toggles. When false: clicking replaces (max one selected). */
  multiSelect?: boolean
  label?: string
  error?: string
  required?: boolean
}

export default function ChipSelect({
  options,
  value,
  onChange,
  multiSelect = false,
  label,
  error,
  required,
}: ChipSelectProps) {
  function handleClick(opt: string) {
    if (multiSelect) {
      onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt])
    } else {
      onChange(value.includes(opt) ? [] : [opt])
    }
  }

  return (
    <div>
      {label && (
        <p className="text-sm font-semibold text-text-primary dark:text-white mb-3">
          {label}
          {required && (
            <span className="text-error ml-1" aria-label="required">
              *
            </span>
          )}
        </p>
      )}
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((opt) => {
          const selected = value.includes(opt.value)
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleClick(opt.value)}
              aria-pressed={selected}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer',
                selected
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-transparent text-text-secondary border-neutral-200 hover:border-secondary/50 dark:border-white/15 dark:text-white/70 dark:hover:border-white/40',
              ].join(' ')}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
      {error && (
        <p role="alert" className="text-xs text-error mt-2">
          {error}
        </p>
      )}
    </div>
  )
}
