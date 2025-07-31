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
      className={`relative w-8 h-8 flex flex-col justify-center items-center group ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {/* Top line */}
      <span
        className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out transform origin-center ${
          isOpen
            ? 'rotate-45 translate-y-0'
            : 'rotate-0 -translate-y-1.5 group-hover:w-8'
        }`}
      />

      {/* Middle line */}
      <span
        className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:w-8'
        }`}
      />

      {/* Bottom line */}
      <span
        className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out transform origin-center ${
          isOpen
            ? '-rotate-45 translate-y-0'
            : 'rotate-0 translate-y-1.5 group-hover:w-8'
        }`}
      />
    </button>
  )
}
