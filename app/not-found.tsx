import Link from 'next/link'
import AnimateIn from '@/src/components/ui/AnimateIn'
import '@/app/globals.css'

export default function NotFound() {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body>
        <div className="min-h-screen bg-white dark:bg-primary flex items-center justify-center px-4">
          {/* Geometric background */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.03]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid-404" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0F1D33" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-404)" />
            </svg>
          </div>

          <AnimateIn variant="scale" threshold={0.08}>
            <div className="relative max-w-lg text-center">
              <div
                className="mb-4 select-none font-heading text-[10rem] font-bold leading-none text-accent/20 dark:text-white/10"
                aria-hidden="true"
              >
                404
              </div>

              <h1 className="mb-4 font-heading text-4xl font-bold text-text-primary dark:text-text-inverse sm:text-5xl">
                Page Not Found
              </h1>
              <p className="mb-8 text-lg text-text-secondary dark:text-neutral-400">
                We couldn&apos;t find that page. It may have been moved, or the URL might be
                incorrect.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/en"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-text-inverse transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-[#E5E5E5] dark:focus-visible:ring-offset-primary"
                >
                  Go to Homepage
                </Link>
                <Link
                  href="/en/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-accent dark:border-white/20 dark:text-white px-6 py-3 font-semibold text-accent transition-colors dark:hover:bg-white/[0.08] dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </body>
    </html>
  )
}
