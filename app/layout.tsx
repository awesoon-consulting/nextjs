/**
 * Root layout — minimal wrapper.
 * The [locale] layout handles fonts, i18n, consent, navbar, and footer.
 * This file is required by Next.js App Router but doesn't render any UI.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
