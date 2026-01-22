import { Link } from 'react-router'
import { contactWhatsApp } from '../helpers/globalFunctions'

// Mobile Menu Component
const MobileMenu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu
}) => {
  return (
    <div
      id='mobile-menu'
      className={`fixed inset-0 bg-dark z-40 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-500 flex flex-col justify-center items-center`}
    >
      <div className='flex flex-col gap-6 text-center'>
        <Link
          to='/templates'
          onClick={toggleMenu}
          className='font-display text-5xl uppercase tracking-tighter hover:text-primary transition-colors'
        >
          Templates
        </Link>
        <Link
          to='/paquetes'
          onClick={toggleMenu}
          className='font-display text-5xl uppercase tracking-tighter hover:text-primary transition-colors'
        >
          Paquetes
        </Link>
        <Link
          to='/about'
          onClick={toggleMenu}
          className='font-display text-5xl uppercase tracking-tighter hover:text-primary transition-colors'
        >
          Sobre Mí
        </Link>
        <button
          onClick={() => {
            contactWhatsApp('Hola! Quiero información sobre los templates')
            toggleMenu()
          }}
          className='font-display text-5xl uppercase tracking-tighter hover:text-primary transition-colors'
        >
          WhatsApp
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
