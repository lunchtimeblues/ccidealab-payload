'use client'

interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center text-white font-base group ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span className="text-fluid-sm animated-underline">{isOpen ? 'Close' : 'Menu'}</span>
    </button>
  )
}
