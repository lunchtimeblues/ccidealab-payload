'use client'

import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'

const Nav = () => {
  const router = useTransitionRouter()

  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0.2, transform: 'translateY(-35%)' },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    )

    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    router.push(href, {
      onTransitionReady: slideInOut,
    })
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
