import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(2).max(40),
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (Rule) => Rule.min(20).max(250),
    }),
    defineField({
      name: 'subtext',
      type: 'string',
      title: 'Subtext',
      validation: (Rule) => Rule.min(20).max(250),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Media Gallery',
      of: [{type: 'media'}],
    }),
  ],
})
