'use client'

interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center group ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span className="nav-text hover:opacity-70 transition-all text-lg font-medium">
        {isOpen ? 'Close' : 'Menu'}
      </span>
    </button>
  )
}
