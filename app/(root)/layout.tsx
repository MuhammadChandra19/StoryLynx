import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

import Topbar from '@/components/shared/Topbar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Storylynx - Share Your Stories, Connect with Readers',
  description: 'Join Storylynx, a vibrant platform where every story finds its voice. Share your tales, connect with a global community, and explore diverse narratives that inspire and resonate.',
  keywords: 'Storytelling platform, Share stories, Writing community, Online portfolio for writers, Connect with readers, Inspiring narratives'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="container pt-24">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
