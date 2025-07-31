'use client'

import Link from 'next/link'
import { usePageTransition } from '@/hooks/usePageTransition'

const Nav = () => {
  const { navigateWithTransition } = usePageTransition()

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    navigateWithTransition(href)
  }

  return (
    <nav className="nav flex justify-between items-center p-6">
      <div className="logo">
        <Link href="/" passHref legacyBehavior>
          <a onClick={(e) => handleClick(e, '/')}>Index</a>
        </Link>
      </div>
      <div className="links flex space-x-6">
        <Link href="/projects" passHref legacyBehavior>
          <a onClick={(e) => handleClick(e, '/about')}>About</a>
        </Link>
        <Link href="/info" passHref legacyBehavior>
          <a onClick={(e) => handleClick(e, '/contact')}>Contact</a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
