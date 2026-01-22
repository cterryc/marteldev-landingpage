import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  templatesDetails as templates,
  type TemplateDetailsProps
} from '../../DTO/ecommerce.dto'
import TemplateDetailsHero from '../../components/TemplateDetailsHero'
import FeaturesSection from '../../components/FeaturesSection'
import PackageComparisonSection from '../../components/PackageComparisonSection'
import CTASection from '../../components/CTASection'

// TemplateDetails Component
const TemplateDetails: React.FC = () => {
  const [template, setTemplate] = useState<TemplateDetailsProps | null>(null)

  const params = useParams()

  console.log('params TemplateDetails', params)

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    // const urlParams = new URLSearchParams(window.location.search)
    const templateId = params.id || 'modern-shop'

    if (templates[templateId]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTemplate(templates[templateId])
      document.title = `${templates[templateId].name} | MartelDev`
    } else {
      window.location.href = '/'
    }
  }, [params.id])

  if (!template) {
    return null
  }

  return (
    <>
      <TemplateDetailsHero template={template} />
      <FeaturesSection template={template} />
      <PackageComparisonSection templateName={template.name} />
      <CTASection templateName={template.name} />
    </>
  )
}

export default TemplateDetails
