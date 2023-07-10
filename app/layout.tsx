import './globals.css'
import type { Metadata } from 'next'
import { Lexend as FontFamily } from 'next/font/google'
import NextTopLoader from "nextjs-toploader"

const font = FontFamily({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'shady41 - home',
  description: 'Personal website and blog of Abhinav Jha.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${font.className} bg-neutral-950`}>
        <NextTopLoader showSpinner={false} shadow={false} height={3} color='#db2877'/>
        {children}
      </body>
    </html>
  )
}
