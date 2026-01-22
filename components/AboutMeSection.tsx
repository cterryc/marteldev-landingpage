import { Link } from 'react-router'
import { contactWhatsApp } from '../helpers/globalFunctions'

interface AboutProps {
  bg?: string
  pt?: string
}

// About Me Section Component
const AboutMeSection: React.FC<AboutProps> = ({
  bg = 'bg-cream',
  pt = 'section-padding'
}) => {
  return (
    <section id='sobre-mi' className={`${pt} px-6 lg:px-12 ${bg} text-dark`}>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center'>
          <div className='reveal-scroll'>
            <span className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'>
              Sobre Mí
            </span>
            <h2 className='font-display text-4xl md:text-6xl tracking-tighter leading-none mb-8 font-bold'>
              TRABAJO CONTIGO
              <br />
              <span className='text-dark/40 font-light italic text-3xl md:text-5xl'>
                para que empieces a vender
              </span>
            </h2>
            <div className='space-y-6 text-dark/70 text-base leading-relaxed'>
              <p>
                Soy{' '}
                <span className='text-dark font-semibold'>
                  desarrollador web
                </span>{' '}
                y ayudo tanto a emprendedores como a negocios ya establecidos a
                tener su propio e-commerce funcional, sin depender de
                plataformas caras o complicadas.
              </p>
              <p>
                Mi enfoque es simple:{' '}
                <span className='text-dark font-semibold'>
                  menos tecnología innecesaria y más ventas reales
                </span>
                .
              </p>
              <p>
                Trabajo personalmente en cada proyecto, asegurándome de que tu
                tienda esté lista para vender desde el primer día.
              </p>
            </div>
            <div className='mt-10 flex gap-6'>
              <button
                onClick={() =>
                  contactWhatsApp(
                    'Hola! Me gustaría conocer más sobre tu trabajo'
                  )
                }
                className='bg-dark text-cream px-8 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-dark/90 transition-all'
              >
                Hablemos
              </button>
              <Link
                to='/templates'
                className='border-2 border-dark text-dark px-8 py-4 font-display text-xs font-bold uppercase tracking-widest hover:bg-dark hover:text-cream transition-all'
              >
                Ver Trabajo
              </Link>
            </div>
          </div>
          <div className='reveal-scroll'>
            <div className='relative overflow-hidden'>
              <img
                src='https://res.cloudinary.com/dniekrmqb/image/upload/q_auto,w_500/v1769106630/MartelDev-Ecommerce/3500407d-5b9f-43f3-8603-6070db48fcd1_by0dmt.webp'
                className='w-52 h-72 object-center border-4 border-primary/20'
                alt='Desarrollador web trabajando en laptop creando tiendas online para emprendedores'
              />
              {/* <div className='absolute w-52 h-96 inset-0 border-4 border-primary/20'></div> */}
            </div>
            <div className='mt-8 grid grid-cols-2 gap-6'>
              <div>
                <div className='font-display text-4xl font-bold text-primary mb-2'>
                  +50
                </div>
                <div className='text-sm text-dark/60 uppercase tracking-wider'>
                  Proyectos Completados
                </div>
              </div>
              <div>
                <div className='font-display text-4xl font-bold text-primary mb-2'>
                  100%
                </div>
                <div className='text-sm text-dark/60 uppercase tracking-wider'>
                  Clientes Satisfechos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
