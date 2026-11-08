import { ReactNode } from 'react'

interface FormStepProps {
  isActive: boolean
  children: ReactNode
  title?: string
  description?: string
}

export default function FormStep({ isActive, children, title, description }: FormStepProps) {
  if (!isActive) return null

  return (
    <div
      role="group"
      aria-label={title}
      className="animate-in fade-in slide-in-from-right-4 duration-300"
    >
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-1">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-text-secondary">{description}</p>
          )}
        </div>
      )}
      <div className="space-y-5">{children}</div>
    </div>
  )
}
