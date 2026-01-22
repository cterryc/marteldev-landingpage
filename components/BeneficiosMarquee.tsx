// Marquee Component - Versión optimizada
const BeneficiosMarquee: React.FC = () => {
  // Contenido que se repite
  const items = [
    { emoji: '🚀', text: 'Listo en días' },
    { emoji: '+', text: '' },
    { emoji: '📱', text: 'Optimizado TikTok' },
    { emoji: '+', text: '' },
    { emoji: '🛒', text: 'Diseño profesional' },
    { emoji: '+', text: '' },
    { emoji: '💬', text: 'Ventas WhatsApp + Yape' },
    { emoji: '+', text: '' },
    { emoji: '🚀', text: 'Listo en días' },
    { emoji: '+', text: '' },
    { emoji: '📱', text: 'Optimizado TikTok' },
    { emoji: '+', text: '' },
    { emoji: '🛒', text: 'Diseño profesional' },
    { emoji: '+', text: '' },
    { emoji: '💬', text: 'Ventas WhatsApp + Yape' },
    { emoji: '+', text: '' }
  ]

  const items2 = [
    { emoji: '🚀', text: 'Listo en días' },
    { emoji: '+', text: '' },
    { emoji: '📱', text: 'Optimizado TikTok' },
    { emoji: '+', text: '' },
    { emoji: '🛒', text: 'Diseño profesional' },
    { emoji: '+', text: '' },
    { emoji: '💬', text: 'Ventas WhatsApp + Yape' },
    { emoji: '+', text: '' },
    { emoji: '🚀', text: 'Listo en días' },
    { emoji: '+', text: '' },
    { emoji: '📱', text: 'Optimizado TikTok' },
    { emoji: '+', text: '' },
    { emoji: '🛒', text: 'Diseño profesional' },
    { emoji: '+', text: '' },
    { emoji: '💬', text: 'Ventas WhatsApp + Yape' },
    { emoji: '+', text: '' }
  ]

  return (
    <div className='bg-primary text-dark py-4 border-y border-dark overflow-hidden whitespace-nowrap z-20 relative'>
      <div className='inline-flex animate-marquee font-display font-semibold min-w-max'>
        {/* Usamos 2 copias en lugar de 3 */}
        {items.map((item, index) => (
          <span
            key={`first-${index}`}
            className='text-sm md:text-base uppercase tracking-tight px-4 md:px-8 inline-flex items-center'
          >
            {item.emoji}{' '}
            {item.text && <span className='ml-1'>{item.text}</span>}
          </span>
        ))}

        {items2.map((item, index) => (
          <span
            key={`second-${index}`}
            className='text-sm md:text-base uppercase tracking-tight px-4 md:px-8 inline-flex items-center'
            aria-hidden='true'
          >
            {item.emoji}{' '}
            {item.text && <span className='ml-1'>{item.text}</span>}
          </span>
        ))}
      </div>
    </div>
  )
}

export default BeneficiosMarquee
