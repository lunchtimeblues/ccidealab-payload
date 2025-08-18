'use client'

interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
  className?: string
  isDarkBackground?: boolean
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
  className = '',
  isDarkBackground = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center group ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span
        className="text-black hover:text-gray-600 transition-colors text-lg font-medium"
        style={{ filter: isDarkBackground ? 'invert(1)' : 'none' }}
      >
        {isOpen ? 'Close' : 'Menu'}
      </span>
    </button>
  )
}
