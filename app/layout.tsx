import './globals.css'
import type { Metadata } from 'next'
import { Inter as FontFamily } from 'next/font/google'

const font = FontFamily({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'shady41',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
