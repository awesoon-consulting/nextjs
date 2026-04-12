'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import Button from '@/src/components/ui/Button'
import Input from '@/src/components/ui/Input'
import Select from '@/src/components/ui/Select'
import ChipSelect from '@/src/components/ui/ChipSelect'
import ProgressBar from '@/src/components/ui/ProgressBar'
import FormStep from './FormStep'
import { trackFormStep, trackLeadFormConversion } from '@/src/lib/analytics'
import { getUtmParams } from '@/src/lib/utm'

// ─── Step configuration ────────────────────────────────────────────────────────
// Flip `multiSelect` per step to toggle between single- and multi-select chip UI.
const STEP_CONFIG = [
  { step: 1, multiSelect: false }, // Business info  ; Select dropdowns, flag unused
  { step: 2, multiSelect: true  }, // Challenges     ; ChipSelect, toggle here
  { step: 3, multiSelect: false }, // Timeline/Budget; Select dropdowns, flag unused
  { step: 4, multiSelect: false }, // Contact details; inputs, flag unused
] as const satisfies readonly { step: number; multiSelect: boolean }[]

const TOTAL_STEPS = STEP_CONFIG.length

// ─── Types ─────────────────────────────────────────────────────────────────────
interface FormData {
  industry: string
  companySize: string
  problems: string[]
  otherProblem: string
  timeline: string
  budget: string
  name: string
  company: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  industry?: string
  companySize?: string
  problems?: string
  timeline?: string
  budget?: string
  name?: string
  company?: string
  email?: string
}

const initialData: FormData = {
  industry: '',
  companySize: '',
  problems: [],
  otherProblem: '',
  timeline: '',
  budget: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function MultiStepForm() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const pathname = usePathname()

  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const progress = ((step - 1) / TOTAL_STEPS) * 100
  // ─── Field helpers ──────────────────────────────────────────────────────────
  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  // ─── Validation ─────────────────────────────────────────────────────────────
  function validateStep(currentStep: number): boolean {
    const newErrors: FormErrors = {}

    if (currentStep === 1) {
      if (!data.industry) newErrors.industry = t('validation.industryRequired')
      if (!data.companySize) newErrors.companySize = t('validation.companySizeRequired')
    }
    if (currentStep === 2) {
      if (data.problems.length === 0) newErrors.problems = t('validation.problemRequired')
    }
    if (currentStep === 3) {
      if (!data.timeline) newErrors.timeline = t('validation.timelineRequired')
      if (!data.budget) newErrors.budget = t('validation.budgetRequired')
    }
    if (currentStep === 4) {
      if (!data.name.trim()) newErrors.name = t('validation.nameRequired')
      if (!data.company.trim()) newErrors.company = t('validation.companyRequired')
      if (!data.email.trim()) {
        newErrors.email = t('validation.emailRequired')
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = t('validation.emailInvalid')
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ─── Navigation ─────────────────────────────────────────────────────────────
  function handleNext() {
    if (!validateStep(step)) return
    trackFormStep(step, t(`steps.${step}` as Parameters<typeof t>[0]))
    setStep((prev) => prev + 1)
  }

  function handleBack() {
    setStep((prev) => prev - 1)
  }

  // ─── Submit ─────────────────────────────────────────────────────────────────
  async function handleSubmit() {
    if (!validateStep(4)) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          locale,
          submittedAt: new Date().toISOString(),
          sourceUrl: pathname,
          ...getUtmParams(),
        }),
      })

      if (response.status === 429) {
        setSubmitError(t('error.rateLimit'))
        return
      }
      if (!response.ok) {
        setSubmitError(t('error.generic'))
        return
      }

      trackLeadFormConversion()
      setIsSuccess(true)
    } catch {
      setSubmitError(t('error.generic'))
    } finally {
      setIsSubmitting(false)
    }
  }

  // ─── Success state ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">
          {t('success.title')}
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">{t('success.message')}</p>
        <div className="mx-auto flex max-w-xs items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-secondary/45">
          <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center flex-shrink-0">
            <span className="font-heading font-bold text-secondary text-sm">SC</span>
          </div>
          <div className="text-left">
            <p className="font-semibold text-text-primary text-sm">{t('success.responderName')}</p>
            <p className="text-xs text-text-muted">{t('success.responderTitle')}</p>
          </div>
        </div>
      </div>
    )
  }

  // ─── Option sets ────────────────────────────────────────────────────────────
  const industryOptions = [
    { value: 'manufacturing', label: t('industries.manufacturing') },
    { value: 'distribution', label: t('industries.distribution') },
    { value: 'industrial', label: t('industries.industrial') },
    { value: 'other', label: t('industries.other') },
  ]

  const companySizeOptions = [
    { value: '10-50', label: t('companySizes.small') },
    { value: '51-200', label: t('companySizes.medium') },
    { value: '201-500', label: t('companySizes.large') },
    { value: '500+', label: t('companySizes.enterprise') },
  ]

  const problemOptions = [
    { value: 'outgrown', label: t('problems.outgrown') },
    { value: 'spreadsheets', label: t('problems.spreadsheets') },
    { value: 'disconnected', label: t('problems.disconnected') },
    { value: 'manual', label: t('problems.manual') },
    { value: 'no-scalability', label: t('problems.noScalability') },
  ]

  const timelineOptions = [
    { value: 'asap', label: t('timelines.asap') },
    { value: '1-3-months', label: t('timelines.oneToThree') },
    { value: '3-6-months', label: t('timelines.threeToSix') },
    { value: 'exploring', label: t('timelines.exploring') },
  ]

  const budgetOptions = [
    { value: 'under-25k', label: t('budgets.under25k') },
    { value: '25k-75k', label: t('budgets.25kTo75k') },
    { value: '75k-150k', label: t('budgets.75kTo150k') },
    { value: 'over-150k', label: t('budgets.over150k') },
    { value: 'prefer-not-to-say', label: t('budgets.preferNotToSay') },
  ]

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div>
      {/* Step indicators */}
      <div className="mb-8">
        <ProgressBar value={progress} size="md" />
        <div className="flex justify-between mt-3">
          {STEP_CONFIG.map(({ step: s }) => (
            <span
              key={s}
              className={[
                'text-xs font-medium transition-colors',
                s === step
                  ? 'text-secondary'
                  : s < step
                  ? 'text-success'
                  : 'text-text-muted',
              ].join(' ')}
            >
              {t(`steps.${s}` as Parameters<typeof t>[0])}
            </span>
          ))}
        </div>
      </div>

      {/* Step 1: Business info */}
      <FormStep isActive={step === 1} title={t('steps.1')}>
        <Select
          id="industry"
          label={t('fields.industry')}
          options={industryOptions}
          placeholder={t('placeholders.selectIndustry')}
          value={data.industry}
          onChange={(e) => updateField('industry', e.target.value)}
          error={errors.industry}
          required
        />
        <Select
          id="companySize"
          label={t('fields.companySize')}
          options={companySizeOptions}
          placeholder={t('placeholders.selectCompanySize')}
          value={data.companySize}
          onChange={(e) => updateField('companySize', e.target.value)}
          error={errors.companySize}
          required
        />
      </FormStep>

      {/* Step 2: Challenges */}
      <FormStep isActive={step === 2} title={t('steps.2')}>
        <ChipSelect
          options={problemOptions}
          value={data.problems}
          onChange={(values) => updateField('problems', values)}
          multiSelect={STEP_CONFIG[1].multiSelect}
          label={t('fields.problems')}
          error={errors.problems}
          required
        />
        <div className="mt-6 flex flex-col gap-1">
          <label htmlFor="otherProblem" className="text-sm font-medium text-text-primary">
            {t('fields.otherProblem')}
          </label>
          <textarea
            id="otherProblem"
            rows={4}
            value={data.otherProblem}
            onChange={(e) => updateField('otherProblem', e.target.value)}
            placeholder={t('placeholders.otherProblem')}
            className={[
              'w-full rounded-lg border bg-surface-elevated px-4 py-3 text-base text-text-primary dark:border-white/10 dark:bg-secondary/55 dark:text-text-inverse',
              'placeholder:text-text-muted dark:placeholder:text-neutral-500',
              'transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary dark:focus:border-accent',
              'border-neutral-300 hover:border-neutral-400 dark:hover:border-white/20 resize-y min-h-28',
            ].join(' ')}
          />
        </div>
      </FormStep>

      {/* Step 3: Timeline & Budget */}
      <FormStep isActive={step === 3} title={t('steps.3')}>
        <Select
          id="timeline"
          label={t('fields.timeline')}
          options={timelineOptions}
          placeholder={t('placeholders.selectTimeline')}
          value={data.timeline}
          onChange={(e) => updateField('timeline', e.target.value)}
          error={errors.timeline}
          required
        />
        <Select
          id="budget"
          label={t('fields.budget')}
          options={budgetOptions}
          placeholder={t('placeholders.selectBudget')}
          value={data.budget}
          onChange={(e) => updateField('budget', e.target.value)}
          error={errors.budget}
          required
        />
      </FormStep>

      {/* Step 4: Contact details */}
      <FormStep isActive={step === 4} title={t('steps.4')}>
        <Input
          id="name"
          label={t('fields.name')}
          type="text"
          value={data.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder={t('placeholders.name')}
          error={errors.name}
          required
          autoComplete="name"
        />
        <Input
          id="company"
          label={t('fields.company')}
          type="text"
          value={data.company}
          onChange={(e) => updateField('company', e.target.value)}
          placeholder={t('placeholders.company')}
          error={errors.company}
          required
          autoComplete="organization"
        />
        <Input
          id="email"
          label={t('fields.email')}
          type="email"
          value={data.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder={t('placeholders.email')}
          error={errors.email}
          required
          autoComplete="email"
        />
        <Input
          id="phone"
          label={t('fields.phone')}
          type="tel"
          value={data.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder={t('placeholders.phone')}
          autoComplete="tel"
        />
      </FormStep>

      {/* Submit error */}
      {submitError && (
        <div role="alert" className="mt-4 p-4 bg-error-light border border-error/20 rounded-lg">
          <p className="text-sm text-error">{submitError}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center gap-3 mt-8">
        {step > 1 && (
          <Button variant="ghost" onClick={handleBack} disabled={isSubmitting}>
            {t('buttons.back')}
          </Button>
        )}
        <div className="ml-auto">
          {step < TOTAL_STEPS ? (
            <Button variant="primary" size="md" onClick={handleNext}>
              {t('buttons.next')}
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleSubmit}
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? t('buttons.submitting') : t('buttons.submit')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
