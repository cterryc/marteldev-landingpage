export interface TemplateDetailsProps {
  id: string
  name: string
  tagline: string
  description: string
  detailedDescription: string
  image: string
  features: string[]
  idealFor: string
  demoLink: string
}

// Template data
export const templatesDetails: Record<string, TemplateDetailsProps> = {
  'modern-shop': {
    id: 'modern-shop',
    name: 'MODERN SHOP',
    tagline: 'Modern',
    description:
      'Diseño moderno ideal para productos físicos y ventas por redes sociales. Layout limpio y conversión optimizada.',
    detailedDescription:
      'MODERN SHOP es el template perfecto para emprendedores que buscan un diseño contemporáneo y profesional. Con un enfoque en la usabilidad y conversión, este template incluye secciones optimizadas para mostrar tus productos de manera atractiva.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099780/MartelDev-Ecommerce/1_fkjd7g.webp',
    features: [
      'Hero section con imagen destacada',
      'Galería de productos responsive',
      'Carrito de compras integrado',
      'Sección de testimonios',
      'Footer informativo completo',
      'Optimizado para móviles'
    ],
    idealFor: 'Productos físicos, ropa, accesorios, cosmética',
    demoLink: '#'
  },
  'minimal-store': {
    id: 'minimal-store',
    name: 'MINIMAL STORE',
    tagline: 'Minimal',
    description:
      'Estética minimalista perfecta para productos premium. Enfoque en fotografía de producto y experiencia limpia.',
    detailedDescription:
      'MINIMAL STORE ofrece una experiencia visual limpia y sofisticada. Ideal para marcas que quieren que sus productos hablen por sí mismos, este template pone el foco en imágenes de alta calidad y espacios en blanco estratégicos.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099775/MartelDev-Ecommerce/2_u2vrgi.webp',
    features: [
      'Diseño minimalista y elegante',
      'Énfasis en fotografía de producto',
      'Navegación intuitiva',
      'Filtros de productos avanzados',
      'Vista rápida de productos',
      'Checkout simplificado'
    ],
    idealFor: 'Productos premium, joyería, artesanía, diseño',
    demoLink: '#'
  },
  'bold-commerce': {
    id: 'bold-commerce',
    name: 'BOLD COMMERCE',
    tagline: 'Bold',
    description:
      'Diseño audaz para marcas que quieren destacar. Colores vibrantes y CTAs potentes para máxima conversión.',
    detailedDescription:
      'BOLD COMMERCE es para marcas atrevidas que no temen destacar. Con colores vibrantes, tipografía impactante y llamadas a la acción prominentes, este template está diseñado para captar la atención y generar conversiones.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099777/MartelDev-Ecommerce/3_lc0yga.webp',
    features: [
      'Colores vibrantes y llamativos',
      'CTAs prominentes',
      'Animaciones suaves',
      'Sección de ofertas destacada',
      'Contador de urgencia',
      'Popup de descuentos'
    ],
    idealFor: 'Productos juveniles, tecnología, deportes, lifestyle',
    demoLink: '#'
  },
  'fashion-hub': {
    id: 'fashion-hub',
    name: 'FASHION HUB',
    tagline: 'Fashion',
    description:
      'Especializado en moda y accesorios. Lookbook integrado, filtros avanzados y galería tipo revista.',
    detailedDescription:
      'FASHION HUB está específicamente diseñado para tiendas de moda. Con un lookbook integrado, filtros por categoría avanzados y una presentación tipo revista, este template transforma tu catálogo en una experiencia de compra aspiracional.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099776/MartelDev-Ecommerce/4_adm35e.webp',
    features: [
      'Lookbook estilo revista',
      'Filtros por talla, color, categoría',
      'Zoom en productos',
      'Guía de tallas integrada',
      'Sección de tendencias',
      'Instagram feed integrado'
    ],
    idealFor: 'Ropa, calzado, accesorios de moda, boutiques',
    demoLink: '#'
  },
  'tech-store': {
    id: 'tech-store',
    name: 'TECH STORE',
    tagline: 'Tech',
    description:
      'Orientado a productos tecnológicos. Especificaciones detalladas, comparador de productos y diseño futurista.',
    detailedDescription:
      'TECH STORE combina funcionalidad y estética futurista para productos tecnológicos. Con tablas de especificaciones detalladas, comparador de productos y un diseño que transmite innovación, es perfecto para gadgets y electrónica.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099781/MartelDev-Ecommerce/5_i77yqu.webp',
    features: [
      'Tablas de especificaciones',
      'Comparador de productos',
      'Diseño futurista',
      'Reseñas de clientes',
      'Sección de FAQ técnicas',
      'Videos de producto'
    ],
    idealFor: 'Electrónica, gadgets, accesorios tech, gaming',
    demoLink: '#'
  }
}

// Types
export interface Template {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  alt: string
}

export interface Package {
  id: number
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  ctaText: string
  ctaAction: string
}

// Data
export const templates: Template[] = [
  {
    id: 'modern-shop',
    name: 'MODERN SHOP',
    tagline: 'Modern',
    description:
      'Diseño moderno ideal para productos físicos y ventas por redes sociales. Layout limpio y conversión optimizada.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/q_auto,w_800/v1769099780/MartelDev-Ecommerce/1_fkjd7g.webp',
    alt: 'Template Modern - Tienda online moderna con diseño limpio, carrito de compras prominente y sección de productos destacados'
  },
  {
    id: 'minimal-store',
    name: 'MINIMAL STORE',
    tagline: 'Minimal',
    description:
      'Estética minimalista perfecta para productos premium. Enfoque en fotografía de producto y experiencia limpia.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099775/MartelDev-Ecommerce/2_u2vrgi.webp',
    alt: 'Template Minimal - E-commerce minimalista con galería de productos en cuadrícula, filtros de búsqueda y checkout simplificado'
  },
  {
    id: 'bold-commerce',
    name: 'BOLD COMMERCE',
    tagline: 'Bold',
    description:
      'Diseño audaz para marcas que quieren destacar. Colores vibrantes y CTAs potentes para máxima conversión.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099777/MartelDev-Ecommerce/3_lc0yga.webp',
    alt: 'Template Bold - Tienda online con diseño audaz, colores vibrantes, slider de productos destacados y llamadas a la acción prominentes'
  },
  {
    id: 'fashion-hub',
    name: 'FASHION HUB',
    tagline: 'Fashion',
    description:
      'Especializado en moda y accesorios. Lookbook integrado, filtros avanzados y galería tipo revista.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/q_auto,w_800/v1769099776/MartelDev-Ecommerce/4_adm35e.webp',
    alt: 'Template Fashion - E-commerce especializado en moda con lookbook, filtros por categoría, zoom de productos y sección de tendencias'
  },
  {
    id: 'tech-store',
    name: 'TECH STORE',
    tagline: 'Tech',
    description:
      'Orientado a productos tecnológicos. Especificaciones detalladas, comparador de productos y diseño futurista.',
    image:
      'https://res.cloudinary.com/dniekrmqb/image/upload/f_auto,q_auto,w_800/v1769099781/MartelDev-Ecommerce/5_i77yqu.webp',
    alt: 'Template Tech - Tienda tecnológica con diseño futurista, comparador de productos, especificaciones técnicas detalladas y reseñas de clientes'
  }
]

export const packages: Package[] = [
  {
    id: 1,
    title: 'FRONTEND',
    price: 'S/ 499',
    description: 'Ideal si quieres algo simple y económico para empezar.',
    features: [
      'Pagina Statica completa',
      'Carrito de compras funcional',
      'Edición fácil desde archivos .js',
      'No usa base de datos',
      'No incluye dominio'
    ],
    ctaText: 'Quiero Este Paquete',
    ctaAction: 'Hola! Quiero el Paquete Frontend (S/ 499)'
  },
  {
    id: 2,
    title: 'FULLSTACK',
    price: 'S/ 1499',
    description: 'La opción más completa para escalar tu negocio.',
    features: [
      'Pagina Statica + Servidor',
      'Base de datos',
      'Panel de administrador',
      'Registro de clientes',
      'Sistema de usuarios finales',
      'Gestión de productos y pedidos',
      'No incluye dominio'
    ],
    isPopular: true,
    ctaText: 'Quiero Este Paquete',
    ctaAction: 'Hola! Quiero el Paquete Fullstack (S/ 1499)'
  },
  {
    id: 3,
    title: 'PERSONALIZADO',
    price: 'Variable',
    description: 'Si necesitas algo a medida, este paquete es para ti.',
    features: [
      'Cambios de diseño',
      'Funcionalidades personalizadas',
      'Ajustes según tu negocio',
      'Integraciones a medida'
    ],
    ctaText: 'Cotizar por WhatsApp',
    ctaAction: 'Hola! Quiero cotizar un Paquete Personalizado'
  }
]
