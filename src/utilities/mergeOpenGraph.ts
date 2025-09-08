import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'From brand foundations to growth campaigns, we deliver strategy, design, content, and digital experiences that move people and accelerate business.',
  images: [
    {
      url: `${getServerSideURL()}/images/og-default.jpg`,
    },
  ],
  siteName: 'C&C IDEA LAB',
  title: 'C&C IDEA LAB - Creative Agency & Digital Experience Design',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
