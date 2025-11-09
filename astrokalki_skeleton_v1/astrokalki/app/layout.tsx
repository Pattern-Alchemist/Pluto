import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AstroKalki',
  description: 'AI-powered Vedic astrology platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
