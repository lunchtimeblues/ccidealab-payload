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
        <body>
          <Providers>
            <SmoothScroll>
              <AdminBar
                adminBarProps={{
                  preview: isEnabled,
                }}
              />
              <NavigationWrapper />
              {/* <Header /> */}
              <MainContent>{children}</MainContent>
              <Footer />
            </SmoothScroll>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
