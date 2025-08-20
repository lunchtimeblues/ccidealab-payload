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
      className={`relative flex items-center justify-center text-black font-medium group ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span className="text-xl sm:text-fluid-xl">{isOpen ? 'Close' : 'Menu'}</span>
    </button>
  )
}
