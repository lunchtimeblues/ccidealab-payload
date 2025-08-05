'use client'

import { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

export const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    console.log('ClientOnly mounting...')
    setHasMounted(true)
  }, [])

  console.log('ClientOnly render, hasMounted:', hasMounted)

  if (!hasMounted) {
    console.log('ClientOnly: not mounted yet, returning null')
    return null
  }

  console.log('ClientOnly: mounted, rendering children')
  return <>{children}</>
}
