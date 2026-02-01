### Landing page para venta de plantillas de e-commerce pre-construidas dirigidas a emprendedores de Perú.

## 🎯 Descripción del Proyecto

MartelDev es una aplicación React de página única (SPA) que muestra 5 plantillas de e-commerce y 3 paquetes de servicios. Toda la comunicación con clientes se maneja a través de integración con WhatsApp.

### Plantillas Disponibles

El proyecto ofrece 5 plantillas especializadas:

- **MODERN SHOP**: Diseño moderno para productos físicos
- **MINIMAL STORE**: Estética minimalista para productos premium
- **BOLD COMMERCE**: Diseño audaz con colores vibrantes
- **FASHION HUB**: Especializado en moda con lookbook integrado
- **TECH STORE**: Orientado a productos tecnológicos

### Paquetes de Servicio

- **FRONTEND** (S/ 499): Sitio estático con plantilla seleccionada
- **FULLSTACK** (S/ 1499): Solución completa con base de datos PostgreSQL
- **PERSONALIZADO** (Variable): Desarrollo a medida

## 🛠️ Stack Tecnológico

- **React** 19.0.0 - Framework de UI
- **TypeScript** ~5.7.2 - Tipado estático
- **Vite** ^6.0.5 - Build tool y dev server
- **React Router** 7.1.1 - Enrutamiento client-side
- **Tailwind CSS** ^3.4.17 - Estilos utility-first

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Arquitectura

### Estructura de Datos

El proyecto utiliza un patrón de doble representación de datos:

- `templates[]`: Array para iteración en vistas de galería
- `templatesDetails{}`: Record para búsqueda O(1) en páginas de detalle

### Componentes Principales

- `TemplateCard`: Muestra vista previa de plantillas
- `TemplateDetailsHero`: Vista detallada de plantilla individual
- `PackageCard`: Tarjetas de paquetes de servicio
- `PackageComparisonSection`: Tabla comparativa de paquetes

### Servicios Externos

- **Cloudinary CDN**: Hosting y optimización de imágenes (cuenta `dniekrmqb`)
- **WhatsApp Web API**: Comunicación directa con clientes vía `wa.me`

## 🚀 Despliegue

El proyecto se despliega en Vercel con configuración SPA:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Esta configuración asegura que todas las rutas sirvan `index.html`, permitiendo que React Router maneje la navegación client-side.

## 📁 Estructura del Proyecto

```
├── components/          # Componentes React
├── DTO/                # Definiciones de datos
│   └── ecommerce.dto.ts # Plantillas y paquetes
├── helpers/            # Funciones auxiliares
├── public/             # Assets estáticos
└── vercel.json         # Configuración de despliegue
```

## 🎨 Optimización de Imágenes

Todas las imágenes usan Cloudinary con parámetros de optimización automática:
- `f_auto`: Selección automática de formato (WebP, AVIF)
- `q_auto`: Optimización automática de calidad
- `w_800`: Ancho fijo de 800px

## 📝 Licencia

Todos los derechos reservados © 2026 MartelDev

## 👤 Autor

MartelDev - Desarrollo de e-commerce para emprendedores peruanos

## Notes

Este README está basado en la información del wiki de Overview y la estructura del código actual. El proyecto actualmente tiene un README genérico de Vite que no describe la funcionalidad específica de MartelDev. El README propuesto incluye las 5 plantillas definidas en `ecommerce.dto.ts`, los 3 paquetes de servicio, y detalles sobre la arquitectura JAMstack con despliegue en Vercel.

### Citations

**File:** README.md (L1-3)
```markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
```

**File:** DTO/ecommerce.dto.ts (L128-146)
```typescript
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
```

**File:** DTO/ecommerce.dto.ts (L149-200)
```typescript
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
```

**File:** components/TemplateDetailsHero.tsx (L6-8)
```typescript
const TemplateDetailsHero: React.FC<{ template: TemplateDetailsProps }> = ({
  template
}) => {
```
