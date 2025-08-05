import React from 'react'
import type { ServicesBlock as ServicesBlockProps } from '@/payload-types'
import { StackingSections } from '@/components/StackingSections'

export const ServicesBlock: React.FC<ServicesBlockProps> = (props) => {
  const { title, subtitle, services } = props

  if (!services || services.length === 0) {
    return null
  }

  return (
    <StackingSections
      title={title}
      subtitle={subtitle}
      services={services}
    />
  )
}
