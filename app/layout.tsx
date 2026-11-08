/**
 * Root layout,  minimal wrapper.
 * The [locale] layout handles fonts, i18n, consent, navbar, footer, and all tags.
 * This file MUST NOT render <html> or <body> because the [locale] layout does.
 * Rendering them here creates nested HTML documents which breaks mobile browsers.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
