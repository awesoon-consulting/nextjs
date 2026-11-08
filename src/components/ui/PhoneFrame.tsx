import Image from 'next/image'

interface PhoneFrameProps {
  src: string
  alt: string
  /** Accent used for the soft glow behind the device. */
  accent?: string
  priority?: boolean
  className?: string
}

/**
 * A screenshot in a plain phone shell: rounded bezel, pill cutout, soft accent
 * glow. The screenshots are 1320x2868 captures from the shipping builds, so
 * the aspect ratio here matches the device exactly.
 */
export default function PhoneFrame({
  src,
  alt,
  accent,
  priority = false,
  className = '',
}: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {accent && (
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-[2.5rem] opacity-20 blur-2xl"
          style={{ backgroundColor: accent }}
        />
      )}
      <div className="relative rounded-[2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl dark:border-neutral-700 dark:bg-neutral-700">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-4 w-1/3 -translate-x-1/2 rounded-full bg-neutral-900 dark:bg-neutral-700"
        />
        <Image
          src={src}
          alt={alt}
          width={440}
          height={956}
          priority={priority}
          sizes="(max-width: 640px) 70vw, 280px"
          className="rounded-[1.6rem] w-full h-auto"
        />
      </div>
    </div>
  )
}
