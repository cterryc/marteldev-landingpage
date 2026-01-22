import { Link } from 'react-router'
import { contactWhatsApp } from '../helpers/globalFunctions'

// CTA Section Component
const CTASection: React.FC<{ templateName: string }> = () => {
  return (
    <section className='py-20 px-6 bg-charcoal'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='font-display text-4xl md:text-6xl tracking-tighter leading-none mb-8 font-bold text-cream'>
          ¿LISTO PARA
          <br />
          <span className='text-primary'>EMPEZAR?</span>
        </h2>
        <p className='text-cream/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed'>
          Hablemos por WhatsApp sobre este template y el paquete que mejor se
          adapte a tu negocio.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={() =>
              contactWhatsApp(
                `Hola! Quiero más información sobre este template`
              )
            }
            className='bg-primary text-dark px-10 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all'
          >
            💬 Hablar por WhatsApp
          </button>
          <Link
            to='/'
            className='border-2 border-cream/20 text-cream px-10 py-4 font-display text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all'
          >
            Ver Más Templates
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
