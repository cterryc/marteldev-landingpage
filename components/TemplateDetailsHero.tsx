import { Link } from 'react-router'
import { type TemplateDetailsProps } from '../DTO/ecommerce.dto'
import { contactWhatsApp } from '../helpers/globalFunctions'

// Template Details Hero Component
const TemplateDetailsHero: React.FC<{ template: TemplateDetailsProps }> = ({
  template
}) => {
  return (
    <section className='pt-32 pb-20 px-6 lg:px-12 bg-dark'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-8'>
          <Link
            to='/templates'
            className='text-cream/40 hover:text-primary transition-colors text-sm'
          >
            ← Volver a templates
          </Link>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <span
              id='template-tagline'
              className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'
            >
              {template.tagline}
            </span>
            <h1
              id='template-name'
              className='font-display text-5xl md:text-7xl tracking-tighter leading-none mb-6 font-bold text-cream'
            >
              {template.name}
            </h1>
            <p
              id='template-description'
              className='text-cream/60 text-lg mb-8 leading-relaxed'
            >
              {template.description}
            </p>

            <div className='mb-8 p-6 bg-charcoal border border-cream/10'>
              <h3 className='font-display text-xl font-bold text-cream mb-4 uppercase tracking-tight'>
                Descripción Completa
              </h3>
              <p
                id='template-detailed-description'
                className='text-cream/70 leading-relaxed mb-4'
              >
                {template.detailedDescription}
              </p>

              <div className='pt-4 border-t border-cream/10'>
                <p className='text-[10px] uppercase tracking-widest text-cream/40 mb-2'>
                  Ideal Para:
                </p>
                <p
                  id='template-ideal-for'
                  className='text-cream/80 font-medium'
                >
                  {template.idealFor}
                </p>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                id='cta-demo'
                to={template.demoLink}
                className='flex-1 text-center border-2 border-primary text-primary px-8 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-dark transition-all'
              >
                Ver Demo en Vivo
              </Link>
              <button
                id='cta-whatsapp'
                onClick={() =>
                  contactWhatsApp(
                    `Hola! Me interesa el template ${template.name}`
                  )
                }
                className='flex-1 bg-primary text-dark px-8 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all'
              >
                Quiero Este Template
              </button>
            </div>
          </div>

          <div className='lg:sticky lg:top-32'>
            <div className='aspect-[3/4] bg-charcoal border-2 border-cream/10 overflow-hidden relative group'>
              <img
                id='template-preview-image'
                src={template.image}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                alt={`Vista previa completa de ${template.name}`}
              />
              <div className='absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-colors pointer-events-none'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TemplateDetailsHero
