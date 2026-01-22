import { templates } from '../DTO/ecommerce.dto'
import TemplateCard from './TemplateCard'

// Templates Showcase Component
const TemplatesShowcase: React.FC = () => {
  return (
    <section
      id='templates'
      className='section-padding px-6 lg:px-12 bg-charcoal'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='mb-20 text-center md:text-left'>
          <span className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'>
            Nuestros Templates
          </span>
          <h2 className='font-display text-5xl md:text-7xl tracking-tighter leading-none mb-6 font-bold'>
            ELIGE EL TEMPLATE
            <br />
            <span className='text-cream/40 font-light italic'>
              ideal para tu negocio
            </span>
          </h2>
          <p className='text-cream/60 text-base max-w-2xl'>
            Todos los templates están pensados para vender rápido por WhatsApp,
            con diseño moderno y enfocado en conversión.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {templates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TemplatesShowcase
