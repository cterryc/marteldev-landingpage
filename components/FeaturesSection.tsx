import { type TemplateDetailsProps } from '../DTO/ecommerce.dto'

// Features Section Component
const FeaturesSection: React.FC<{ template: TemplateDetailsProps }> = ({
  template
}) => {
  return (
    <section className='py-20 px-6 lg:px-12 bg-charcoal'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'>
            Características
          </span>
          <h2 className='font-display text-4xl md:text-6xl tracking-tighter leading-none mb-6 font-bold text-cream'>
            ¿QUÉ INCLUYE ESTE
            <br />
            <span className='text-cream/40 font-light italic text-3xl md:text-5xl'>
              template?
            </span>
          </h2>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div
            id='template-features'
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {template.features.map((feature, index) => (
              <div key={index} className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary flex-shrink-0 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='text-cream/80'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
