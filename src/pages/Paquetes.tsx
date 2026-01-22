import { useEffect } from 'react'
import PackagesSection from '../../components/PackagesSection'

const Paquetes = () => {
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
  return (
    <>
      <PackagesSection />
      <section className='section-padding px-6 lg:px-12 bg-charcoal'>
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
    </>
  )
}

export default Paquetes
