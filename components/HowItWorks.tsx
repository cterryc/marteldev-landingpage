import { contactWhatsApp } from '../helpers/globalFunctions'

// How It Works Component
const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Elige Template',
      description: 'Selecciona el diseño que mejor se adapte a tu negocio'
    },
    {
      number: 2,
      title: 'Elige Paquete',
      description: 'Escoge entre Frontend, Fullstack o Personalizado'
    },
    {
      number: 3,
      title: 'Yo Configuro',
      description: 'Me encargo de toda la configuración técnica'
    },
    {
      number: 4,
      title: 'Empiezas a Vender',
      description: 'Tu tienda lista para recibir pedidos por WhatsApp'
    }
  ]

  return (
    <section className='section-padding px-6 lg:px-12 bg-cream text-dark'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'>
            Proceso Simple
          </span>
          <h2 className='font-display text-5xl md:text-7xl tracking-tighter leading-none mb-6 font-bold'>
            CÓMO FUNCIONA
          </h2>
          <p className='text-dark/60 text-base max-w-2xl mx-auto'>
            4 pasos simples para tener tu tienda online funcionando
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6'>
          {steps.map((step) => (
            <div key={step.number} className='text-center reveal-scroll'>
              <div className='w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6'>
                <span className='font-display text-3xl font-bold text-primary'>
                  {step.number}
                </span>
              </div>
              <h3 className='font-display text-xl font-bold mb-3 uppercase tracking-tight'>
                {step.title}
              </h3>
              <p className='text-sm text-dark/60 leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className='text-center mt-16'>
          <button
            onClick={() =>
              contactWhatsApp('Hola! Quiero saber más sobre el proceso')
            }
            className='inline-block bg-dark text-cream px-10 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-dark/90 transition-all'
          >
            Ver Templates
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
