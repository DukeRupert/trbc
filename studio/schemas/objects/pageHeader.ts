import {defineField, defineType} from 'sanity'
import {SplitHorizontalIcon} from '@sanity/icons'

export default defineType({
  name: 'pageHeader',
  type: 'object',
  icon: SplitHorizontalIcon,
  title: 'Page Header',
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'description',
    }),
  ],
})
