import { contactWhatsApp } from '../helpers/globalFunctions'

// Package Comparison Section Component
const PackageComparisonSection: React.FC<{ templateName: string }> = () => {
  return (
    <section className='py-20 px-6 lg:px-12 bg-dark'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'>
            Paquetes Disponibles
          </span>
          <h2 className='font-display text-4xl md:text-6xl tracking-tighter leading-none mb-6 font-bold text-cream'>
            ELIGE TU
            <br />
            <span className='text-cream/40 font-light italic text-3xl md:text-5xl'>
              paquete ideal
            </span>
          </h2>
          <p className='text-cream/60 text-base max-w-2xl mx-auto'>
            Este template está disponible en los tres paquetes. Compara y elige
            el que mejor se adapte a tus necesidades.
          </p>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border-b-2 border-primary'>
                <th className='text-left py-6 px-4 font-display text-sm uppercase tracking-widest text-cream/60'>
                  Característica
                </th>
                <th className='text-center py-6 px-4 bg-charcoal/50'>
                  <div className='font-display text-2xl font-bold text-cream mb-2'>
                    FRONTEND
                  </div>
                  <div className='text-primary font-bold text-3xl mb-2'>
                    S/ 499
                  </div>
                  <div className='text-[9px] uppercase tracking-widest text-cream/40'>
                    Básico
                  </div>
                </th>
                <th className='text-center py-6 px-4 bg-primary/10 border-2 border-primary'>
                  <div className='inline-block bg-primary text-dark px-3 py-1 text-[8px] font-bold uppercase tracking-widest mb-2'>
                    Más Popular
                  </div>
                  <div className='font-display text-2xl font-bold text-cream mb-2'>
                    FULLSTACK
                  </div>
                  <div className='text-primary font-bold text-3xl mb-2'>
                    S/ 1499
                  </div>
                  <div className='text-[9px] uppercase tracking-widest text-cream/40'>
                    Completo
                  </div>
                </th>
                <th className='text-center py-6 px-4 bg-charcoal/50'>
                  <div className='font-display text-2xl font-bold text-cream mb-2'>
                    PERSONALIZADO
                  </div>
                  <div className='text-primary font-bold text-3xl mb-2'>
                    Variable
                  </div>
                  <div className='text-[9px] uppercase tracking-widest text-cream/40'>
                    A Medida
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>
                  Template Frontend Completo
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
                <td className='text-center py-4 px-4 bg-primary/5'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
              </tr>
              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>
                  Carrito de compras funcional
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
                <td className='text-center py-4 px-4 bg-primary/5'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
              </tr>

              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>Gestión de Datos</td>
                <td className='text-center py-4 px-4 bg-charcoal/30 text-cream/50 text-xs'>
                  Archivos .js (manual)
                </td>
                <td className='text-center py-4 px-4 bg-primary/5 text-primary font-semibold text-xs'>
                  Base de Datos PostgreSQL
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30 text-primary font-semibold text-xs'>
                  Base de Datos + Más
                </td>
              </tr>

              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>
                  Panel de Administrador
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-cream/20 mx-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </td>
                <td className='text-center py-4 px-4 bg-primary/5'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
              </tr>

              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>
                  Registro de Clientes
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-cream/20 mx-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </td>
                <td className='text-center py-4 px-4 bg-primary/5'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
              </tr>

              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>Gestión de Pedidos</td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-cream/20 mx-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </td>
                <td className='text-center py-4 px-4 bg-primary/5'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
              </tr>

              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>
                  Personalización de Diseño
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-cream/20 mx-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </td>
                <td className='text-center py-4 px-4 bg-primary/5'>
                  <svg
                    className='w-6 h-6 text-cream/20 mx-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
              </tr>

              <tr className='border-b border-cream/5'>
                <td className='py-4 px-4 text-cream/80'>
                  Integraciones Personalizadas
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-cream/20 mx-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </td>
                <td className='text-center py-4 px-4 bg-primary/5'>
                  <svg
                    className='w-6 h-6 text-cream/20 mx-auto'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </td>
                <td className='text-center py-4 px-4 bg-charcoal/30'>
                  <svg
                    className='w-6 h-6 text-primary mx-auto'
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
                </td>
              </tr>

              <tr>
                <td className='py-6 px-4'></td>
                <td className='text-center py-6 px-4 bg-charcoal/30'>
                  <button
                    onClick={() =>
                      contactWhatsApp('Hola! Quiero el Paquete Frontend')
                    }
                    className='w-full bg-cream text-dark py-3 px-4 font-display text-[10px] font-bold uppercase tracking-widest hover:bg-cream/90 transition-all'
                  >
                    Elegir Paquete
                  </button>
                </td>
                <td className='text-center py-6 px-4 bg-primary/5'>
                  <button
                    onClick={() =>
                      contactWhatsApp('Hola! Quiero el Paquete Fullstack')
                    }
                    className='w-full bg-primary text-dark py-3 px-4 font-display text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all'
                  >
                    Elegir Paquete
                  </button>
                </td>
                <td className='text-center py-6 px-4 bg-charcoal/30'>
                  <button
                    onClick={() =>
                      contactWhatsApp(
                        'Hola! Quiero cotizar un Paquete Personalizado'
                      )
                    }
                    className='w-full bg-cream text-dark py-3 px-4 font-display text-[10px] font-bold uppercase tracking-widest hover:bg-cream/90 transition-all'
                  >
                    Cotizar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default PackageComparisonSection
