import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Services: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our Services',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          required: true,
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'backgroundColor',
          type: 'select',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Gray 50', value: 'gray-50' },
            { label: 'Gray 100', value: 'gray-100' },
            { label: 'Black', value: 'black' },
            { label: 'Blue 50', value: 'blue-50' },
            { label: 'Green 50', value: 'green-50' },
            { label: 'Purple 50', value: 'purple-50' },
          ],
          defaultValue: 'white',
        },
        {
          name: 'textColor',
          type: 'select',
          options: [
            { label: 'Black', value: 'black' },
            { label: 'White', value: 'white' },
            { label: 'Gray 600', value: 'gray-600' },
            { label: 'Gray 800', value: 'gray-800' },
          ],
          defaultValue: 'black',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
  labels: {
    plural: 'Services Sections',
    singular: 'Services Section',
  },
}
