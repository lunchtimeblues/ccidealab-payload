'use client'

interface MainContentProps {
  children: React.ReactNode
}

export const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className="relative z-20 bg-white">
      {children}
    </main>
  )
}
