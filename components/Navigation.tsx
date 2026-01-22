import { Link } from 'react-router'
import { contactWhatsApp } from '../helpers/globalFunctions'

// Navigation Component
const Navigation: React.FC<{ toggleMenu: () => void; isMenuOpen: boolean }> = ({
  toggleMenu
}) => {
  return (
    <nav
      className='fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300 bg-dark/95 backdrop-blur-md'
      id='navbar'
    >
      <Link
        to='/'
        className='font-display text-2xl tracking-tighter uppercase font-semibold z-50 relative'
      >
        MARTEL<span className='text-primary'>DEV</span>
      </Link>

      <div className='hidden md:flex gap-8 text-[10px] font-medium uppercase tracking-widest items-center'>
        <Link to='/templates' className='hover:text-primary transition-colors'>
          Templates
        </Link>
        <Link to='/paquetes' className='hover:text-primary transition-colors'>
          Paquetes
        </Link>
        <Link to='/about' className='hover:text-primary transition-colors'>
          Sobre Mí
        </Link>
        <button
          onClick={() =>
            contactWhatsApp('Hola! Quiero información sobre los templates')
          }
          className='border border-primary/50 px-6 py-2 rounded-sm hover:bg-primary hover:text-dark transition-all font-semibold'
        >
          WhatsApp
        </button>
      </div>

      <button
        className='md:hidden z-50 p-2 -mr-2'
        onClick={toggleMenu}
        aria-label='Toggle Menu'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>
    </nav>
  )
}

export default Navigation
