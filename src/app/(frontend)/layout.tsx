import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Inter } from 'next/font/google'
// import { Sora } from 'next/font/google'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/components/Footer'
// import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

import { ViewTransitions } from 'next-view-transitions'

import { NavigationWrapper } from '@/components/NavigationWrapper'
import { MainContent } from '@/components/MainContent'
import { SmoothScroll } from '@/components/SmoothScroll'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configure Sora font (commented out)
// const sora = Sora({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-sora',
// })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <ViewTransitions>
      <html className={cn(inter.variable)} lang="en" suppressHydrationWarning>
        <head>
          <InitTheme />
          <link href="/favicon.ico" rel="icon" sizes="32x32" />
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        </head>
        <body suppressHydrationWarning={true}>
          <GoogleAnalytics />
          <Providers>
            <SmoothScroll>
              {/* Background context for mix-blend-mode */}
              <div id="top" className="min-h-screen bg-gray-100 blend-context">
                <AdminBar
                  adminBarProps={{
                    preview: isEnabled,
                  }}
                />
                <NavigationWrapper />
                {/* <Header /> */}
                <MainContent>{children}</MainContent>
                <Footer />
              </div>
            </SmoothScroll>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: 'C&C IDEA LAB | Vancouver Branding & Web Design Agency',
  description:
    'C&C IDEA LAB is a global creative agency helping brands grow through strategy, design, content, and campaigns—creating ideas people champion.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@ccidealab',
  },
}
