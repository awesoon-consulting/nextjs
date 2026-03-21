import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      {/* Geometric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-404" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-404)" />
        </svg>
      </div>

      <div className="relative text-center max-w-lg">
        {/* 404 number */}
        <div className="font-heading font-bold text-[10rem] leading-none text-accent/20 select-none mb-4" aria-hidden="true">
          404
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-inverse mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-neutral-400 mb-8">
          We couldn&apos;t find that page. It may have been moved, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/en"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Go to Homepage
          </Link>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
