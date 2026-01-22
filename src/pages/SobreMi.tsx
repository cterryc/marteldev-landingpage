import { useEffect } from 'react'
import AboutMeSection from '../../components/AboutMeSection'

const SobreMi = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
  useEffect(() => {
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
    <div className='bg-dark'>
      <div className='h-20'></div>
      <AboutMeSection pt='pt-8 pb-16' />
    </div>
  )
}

export default SobreMi
