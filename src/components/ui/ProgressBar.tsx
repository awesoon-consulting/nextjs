interface ProgressBarProps {
  value: number // 0–100
  label?: string
  showValue?: boolean
  className?: string
  size?: 'sm' | 'md'
}

export default function ProgressBar({
  value,
  label,
  showValue = false,
  className = '',
  size = 'md',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))

  const heightClass = size === 'sm' ? 'h-1.5' : 'h-2'

  return (
    <div className={['w-full', className].join(' ')}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm text-text-secondary">{label}</span>}
          {showValue && (
            <span className="text-sm font-medium text-text-primary">{clamped}%</span>
          )}
        </div>
      )}
      <div
        className={['w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-white/10', heightClass].join(' ')}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={[
            'bg-accent rounded-full transition-all duration-500 ease-out',
            heightClass,
          ].join(' ')}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
