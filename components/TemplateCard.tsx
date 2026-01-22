// import { contactWhatsApp } from '../helpers/globalFunctions'
import { type Template } from '../DTO/ecommerce.dto'
import { Link } from 'react-router'

// Template Card Component
const TemplateCard: React.FC<{ template: Template; index: number }> = ({
  template,
  index
}) => {
  return (
    <div className='template-card group relative p-6 bg-dark border border-cream/10 hover:border-primary/40 transition-all duration-500 reveal-scroll'>
      <div className='aspect-[4/5] overflow-hidden mb-6 relative bg-charcoal'>
        <img
          src={template.image}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          alt={template.alt}
        />
      </div>
      <div className='space-y-4'>
        <div className='flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-cream/40'>
          <span>{`Template ${String(index + 1).padStart(2, '0')}`}</span>
          <span className='text-primary'>{template.tagline}</span>
        </div>
        <h3 className='font-display text-2xl font-bold text-cream'>
          {template.name}
        </h3>
        <p className='text-cream/50 text-sm leading-relaxed'>
          {template.description}
        </p>
        <div className='flex gap-3 pt-4'>
          <Link
            to={`/template-details/${template.id}`}
            className='flex-1 text-center text-[10px] font-bold uppercase tracking-widest border border-cream/20 py-3 hover:border-primary hover:text-primary transition-all'
          >
            Ver Detalles
          </Link>
          {/* <button
            onClick={() =>
              contactWhatsApp(`Hola! Me interesa el template ${template.name}`)
            }
            className='flex-1 text-center text-[10px] font-bold uppercase tracking-widest bg-primary text-dark py-3 hover:bg-primary/90 transition-all'
          >
            Quiero Este
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default TemplateCard
