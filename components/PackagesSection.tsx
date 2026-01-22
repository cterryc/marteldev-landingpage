import { packages } from '../DTO/ecommerce.dto'
import PackageCard from './PackageCard'

// Packages Section Component
const PackagesSection: React.FC = () => {
  return (
    <section id='paquetes' className='section-padding px-6 lg:px-12 bg-dark'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'>
            Opciones de Compra
          </span>
          <h2 className='font-display text-5xl md:text-7xl tracking-tighter leading-none mb-6 font-bold text-cream'>
            ELIGE TU PAQUETE
          </h2>
          <p className='text-cream/60 text-base max-w-2xl mx-auto'>
            Selecciona el paquete que se adapte a tu etapa y necesidades
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesSection
