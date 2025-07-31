import type React from 'react'
import { notFound } from 'next/navigation'

interface Props {
  disableNotFound?: boolean
  url: string
}

/* Simplified component without redirects functionality */
export const PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
  // Since we removed redirects functionality, just handle the not found case
  if (disableNotFound) return null

  notFound()
}
