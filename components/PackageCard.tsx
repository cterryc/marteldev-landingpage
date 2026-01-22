import { type Package } from '../DTO/ecommerce.dto'
import { contactWhatsApp } from '../helpers/globalFunctions'

// Package Card Component
const PackageCard: React.FC<{ pkg: Package }> = ({ pkg }) => {
  return (
    <div
      className={`bg-charcoal border ${pkg.isPopular ? 'border-2 border-primary' : 'border-cream/10'} p-8 hover:border-primary/40 transition-all duration-500 reveal-scroll ${pkg.isPopular ? 'relative' : ''}`}
    >
      {pkg.isPopular && (
        <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-dark px-4 py-1 text-[9px] font-bold uppercase tracking-widest'>
          Más Popular
        </div>
      )}
      <div className='mb-6'>
        <span className='text-[10px] font-bold uppercase tracking-widest text-primary'>{`Paquete ${String(pkg.id).padStart(2, '0')}`}</span>
        <h3 className='font-display text-3xl font-bold text-cream mt-2 mb-4'>
          {pkg.title}
        </h3>
        <div className='flex items-baseline gap-2 mb-4'>
          <span className='font-display text-5xl font-bold text-cream'>
            {pkg.price}
            {pkg.price !== 'Variable' && <span className='text-3xl'>.00</span>}
          </span>
          {/* {pkg.price !== 'Variable' && (
            <span className='text-cream/40 text-sm'>precio fijo</span>
          )} */}
        </div>
        <p className='text-cream/60 text-sm leading-relaxed'>
          {pkg.description}
        </p>
      </div>
      <div className='space-y-3 mb-8'>
        {pkg.features.map((feature, idx) => (
          <div key={idx} className='flex items-start gap-3'>
            <svg
              className='w-5 h-5 text-primary flex-shrink-0 mt-0.5'
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
            <span className='text-sm text-cream/80'>{feature}</span>
          </div>
        ))}
      </div>
      <div className='pt-6 border-t border-cream/10'>
        {pkg.title === 'FRONTEND' && (
          <p className='text-xs text-cream/40 mb-4 italic'>
            Nota: Para cambiar productos solo editas archivos, no necesitas
            backend.
          </p>
        )}
        <button
          onClick={() => contactWhatsApp(pkg.ctaAction)}
          className={`w-full ${pkg.title === 'PERSONALIZADO' ? 'bg-cream text-dark' : 'bg-primary text-dark'} py-4 font-display text-xs font-bold uppercase tracking-widest hover:${pkg.title === 'PERSONALIZADO' ? 'bg-cream/90' : 'bg-primary/90'} transition-all`}
        >
          {pkg.ctaText}
        </button>
      </div>
    </div>
  )
}

export default PackageCard
