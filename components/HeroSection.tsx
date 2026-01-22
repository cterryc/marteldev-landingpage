import { Link } from 'react-router'
import { contactWhatsApp } from '../helpers/globalFunctions'

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <header className='relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden pt-24 pb-16'>
      <div className='absolute right-0 top-0 h-full w-1/3 border-l border-cream/5 hidden lg:block'></div>
      <div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto'>
        <div className='lg:col-span-7'>
          <div className='mb-12'>
            <span className='text-primary font-bold tracking-[0.5em] uppercase text-[10px] block mb-8 reveal-hero'>
              Para Tiktokers Emprendedores
            </span>
            <h1 className='font-display editorial-text text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85]'>
              <span className='block reveal-hero'>VENDE POR</span>
              <span className='block reveal-hero text-primary glow-text'>
                WHATSAPP
              </span>
              <span className='block reveal-hero text-cream/60 font-light italic text-[clamp(2rem,6vw,5rem)]'>
                con tu propio e-commerce
              </span>
            </h1>
          </div>
          <div
            className='flex flex-col md:flex-row gap-8 items-start reveal-hero opacity-0 translate-y-10'
            id='hero-meta'
          >
            <p className='max-w-xl text-cream/60 text-lg font-normal leading-relaxed'>
              Templates profesionales listos para vender en días, no meses.
              <span className='text-cream font-medium'>Sin pagos online</span>,
              <span className='text-cream font-medium'>
                sin complicaciones técnicas
              </span>
              .
            </p>
            <div className='flex flex-col gap-4'>
              <button
                onClick={() =>
                  contactWhatsApp(
                    'Hola! Quiero un template para mi tienda online'
                  )
                }
                className='btn-primary px-10 py-4 font-display text-xs font-bold uppercase tracking-widest bg-primary text-dark hover:bg-primary/90 transition-all'
              >
                Hablar por WhatsApp
              </button>
              <Link
                to='/templates'
                className='text-[9px] font-bold uppercase tracking-[0.4em] text-cream/30 hover:text-primary transition-colors text-center'
              >
                Ver templates ↓
              </Link>
            </div>
          </div>
        </div>
        <div className='lg:col-span-5 hidden lg:flex flex-col justify-center items-end relative gap-6'>
          <div
            className='floating-card aspect-[3/4] w-full max-w-[280px] bg-charcoal border border-cream/10 overflow-hidden group relative reveal-hero'
            style={{ animationDelay: '0.2s' }}
          >
            <img
              src='https://res.cloudinary.com/dniekrmqb/image/upload/f_webp,q_auto,w_500/v1769099780/MartelDev-Ecommerce/1_fkjd7g.png'
              className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700'
              alt='Vista previa de template de e-commerce moderno con productos destacados y carrito de compras'
            />
            <div className='absolute inset-0 border border-primary/0 group-hover:border-primary/40 transition-colors pointer-events-none'></div>
            <div className='absolute bottom-4 left-4 right-4 bg-dark/80 backdrop-blur-sm p-3 border border-cream/10'>
              <span className='text-[9px] uppercase tracking-widest font-bold text-primary'>
                Template Modern
              </span>
            </div>
          </div>
          <div
            className='floating-card aspect-[4/5] w-full max-w-[220px] bg-charcoal border border-cream/10 overflow-hidden group relative reveal-hero -mt-16'
            style={{ animationDelay: '0.4s' }}
          >
            <img
              src='https://res.cloudinary.com/dniekrmqb/image/upload/q_auto,w_500/v1769101479/MartelDev-Ecommerce/6_nhnxsk.webp'
              className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700'
              alt='Interfaz de template e-commerce minimalista mostrando galería de productos con filtros y búsqueda'
            />
            <div className='absolute inset-0 border border-primary/0 group-hover:border-primary/40 transition-colors pointer-events-none'></div>
            <div className='absolute bottom-4 left-4 right-4 bg-dark/80 backdrop-blur-sm p-3 border border-cream/10'>
              <span className='text-[9px] uppercase tracking-widest font-bold text-primary'>
                Template Minimal
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
