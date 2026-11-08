/**
 * @file     loading.tsx
 * @layer    app > [locale]
 * @purpose  Streaming loading UI shown while the new route is being fetched
 *           during client-side navigation. Prevents the "stuck" feeling when
 *           tapping a mobile menu item before the new page has rendered.
 */

export default function LocaleLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-primary flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 rounded-full border-4 border-neutral-200 border-t-accent animate-spin dark:border-white/10 dark:border-t-accent"
          role="status"
          aria-label="Loading"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
