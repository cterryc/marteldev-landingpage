// src/pages/TemplatesPage.tsx
import { templates } from '../../DTO/ecommerce.dto'
import TemplateCard from '../../components/TemplateCard'
import { useEffect, useState } from 'react'

// Templates Page Component
const TemplatesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    const navbar = document.getElementById('navbar')

    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        navbar?.classList.remove('bg-dark/95', 'backdrop-blur-md', 'py-4')
        navbar?.classList.add('py-6')
      } else {
        navbar?.classList.add('bg-dark/95', 'backdrop-blur-md', 'py-4')
        navbar?.classList.remove('py-6')
      }
    }

    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (
        target.tagName === 'A' &&
        target.getAttribute('href')?.startsWith('#')
      ) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }

    // Scroll reveal
    const revealElements = document.querySelectorAll(
      '.reveal-hero, .reveal-scroll'
    )
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add('active')
      } else {
        revealObserver.observe(el)
      }
    })

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleAnchorClick)
      revealObserver.disconnect()
    }
  }, [])

  // Obtener todas las categorías únicas de los templates
  // const categories = [
  //   'all',
  //   ...new Set(templates.map((t) => t.tagline.toLowerCase()))
  // ]

  // Filtrar templates según la categoría seleccionada
  const filteredTemplates =
    filter === 'all'
      ? templates
      : templates.filter(
          (template) => template.tagline.toLowerCase() === filter
        )

  return (
    <main className='min-h-screen bg-dark'>
      {/* Hero Section */}
      <section className='max-md:section-padding px-6 pt-12 pb-0 lg:px-12 bg-gradient-to-b from-charcoal to-dark'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center py-16 md:py-24'>
            <span className='text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6'>
              Catálogo Completo
            </span>
            <h1 className='font-display text-6xl md:text-8xl tracking-tighter leading-none mb-8 font-bold text-cream'>
              TODOS NUESTROS
              <br />
              <span className='text-primary font-light italic'>TEMPLATES</span>
            </h1>
            <p className='text-cream/60 text-lg max-w-3xl mx-auto'>
              Explora nuestra colección completa de templates optimizados para
              conversión. Cada diseño está pensado para maximizar ventas por
              WhatsApp con la mejor experiencia de usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      {/* <section className='px-6 lg:px-12 pb-8 pt-20 bg-dark/50 sticky top-0 z-10 bg-[#1a1a1a] bg-opacity-90'>
        <div className='w-full h-full absolute bg-blend-saturation left-0 top-0 backdrop-blur-sm -z-10'></div>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all ${
                  filter === category
                    ? 'bg-primary text-dark'
                    : 'border border-cream/20 text-cream/60 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Templates Grid */}
      <section className='max-md:section-padding py-20 px-6 lg:px-12 bg-[#181818]'>
        <div className='max-w-7xl mx-auto'>
          {/* <div className='mb-12'>
            <h2 className='font-display text-4xl md:text-5xl tracking-tighter mb-4 font-bold text-cream'>
              {filter === 'all' ? 'Todos los Templates' : `Templates ${filter}`}
              <span className='text-primary/40 text-2xl ml-4'>
                ({filteredTemplates.length})
              </span>
            </h2>
          </div> */}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {filteredTemplates.map((template, index) => {
              console.log('template 123', template)
              return (
                <TemplateCard
                  key={template.id}
                  template={template}
                  index={index}
                />
              )
            })}
          </div>

          {/* Empty State */}
          {filteredTemplates.length === 0 && (
            <div className='text-center py-20'>
              <h3 className='font-display text-3xl mb-4 text-cream/60'>
                No hay templates en esta categoría
              </h3>
              <button
                onClick={() => setFilter('all')}
                className='text-primary hover:text-primary/80 font-bold uppercase tracking-widest text-sm'
              >
                Ver todos los templates
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding px-6 lg:px-12 bg-dark'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='font-display text-4xl md:text-5xl tracking-tighter mb-8 font-bold text-cream'>
            ¿No encuentras lo que buscas?
          </h3>
          <p className='text-cream/60 text-lg mb-10 max-w-2xl mx-auto'>
            Podemos crear un template personalizado para tu negocio específico.
            Contáctanos y diseñamos juntos la solución perfecta.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                'https://wa.me/XXXXXXXXXX?text=Hola!%20Quiero%20un%20template%20personalizado')
            }
            className='bg-primary text-dark px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all'
          >
            Solicitar Template Personalizado
          </button>
        </div>
      </section>
    </main>
  )
}

export default TemplatesPage
