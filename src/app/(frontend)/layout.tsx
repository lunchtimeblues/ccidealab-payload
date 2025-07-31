import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
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

import { AnimatedNav } from '@/components/AnimatedNav'
import { MainContent } from '@/components/MainContent'
import { SmoothScroll } from '@/components/SmoothScroll'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <ViewTransitions>
      <html
        className={cn(GeistSans.variable, GeistMono.variable)}
        lang="en"
        suppressHydrationWarning
      >
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
              <AnimatedNav />
              {/* <Header /> */}
              <MainContent>
                {children}
              </MainContent>
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
