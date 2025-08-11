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
      <span className="text-black hover:text-gray-600 transition-colors text-lg font-medium">
        {isOpen ? 'Close' : 'Menu'}
      </span>
    </button>
  )
}
