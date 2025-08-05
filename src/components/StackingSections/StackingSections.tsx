'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const StackingSections = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.service-section')

    sections.forEach((section, i) => {
      // Set z-index based on order (last one is on top)
      gsap.set(section, {
        zIndex: sections.length - i,
      })

      // Animate in from 100% below
      gsap.fromTo(
        section,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: 'power2.out',
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}
