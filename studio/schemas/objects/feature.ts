// feature_with_icon.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  type: 'object',
  title: 'Feature',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(2).max(40),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required().min(30).max(160),
    }),
    defineField({
      name: 'useIcon',
      title: 'Use Icon',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      type: 'icon.manager',
      name: 'icon',
      title: 'Icon',
      hidden: ({parent}) => !parent?.useIcon,
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      hidden: ({parent}) => !parent?.useImage,
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      description: "Adds a 'Learn more' link anchor tag which goes to this url.",
      type: 'string',
    }),
  ],
})
