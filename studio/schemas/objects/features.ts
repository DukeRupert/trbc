import {defineField, defineType} from 'sanity'
import { UlistIcon } from '@sanity/icons'

export default defineType({
  name: 'features',
  type: 'object',
  title: 'Features',
  icon: UlistIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required().min(2).max(40),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(2).max(70),
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      validation: (Rule) => Rule.min(20).max(250),
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features / Services',
      of: [{type: 'feature'}],
    }),
  ],
})
