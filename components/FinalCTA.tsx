import { contactWhatsApp } from '../helpers/globalFunctions'

// Final CTA Component
const FinalCTA: React.FC = () => {
  return (
    <section className='py-20 md:py-32 px-6 bg-dark border-t border-cream/10'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='font-display text-5xl md:text-7xl tracking-tighter leading-none mb-8 font-bold text-cream'>
          ¿LISTO PARA
          <br />
          <span className='text-primary'>EMPEZAR?</span>
        </h2>
        <p className='text-cream/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed'>
          Escríbeme por WhatsApp y cuéntame qué template y paquete te interesa.
          <br />
          <span className='text-cream font-medium'>
            Yo me encargo del resto.
          </span>
        </p>
        <button
          onClick={() =>
            contactWhatsApp('Hola! Quiero empezar mi tienda online')
          }
          className='inline-block bg-primary text-dark px-12 py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all'
        >
          💬 Hablar por WhatsApp
        </button>
      </div>
    </section>
  )
}

export default FinalCTA
