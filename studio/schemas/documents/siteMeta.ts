import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  type: 'document',
  name: 'siteMeta',
  title: 'Site Configuration',
  icon: CogIcon,
  fieldsets: [
    {name: 'social', title: 'Social media handles'},
    {name: 'address', title: 'Physical Address'},
  ],
  groups: [
    {
      name: 'business',
      title: 'Business Info',
    },
    {
      name: 'social',
      title: 'Social Media',
    },
  ],
  fields: [
    defineField({
      type: 'string',
      name: 'site_name',
      title: 'Site Name',

    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Describe This Site',

    }),
    defineField({
      type: 'url',
      title: 'URL',
      name: 'url',
      description: 'Most likely either the url of the page or its canonical url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'business_name',
      title: 'Business Name',
      description: 'Official business name not intended for seo use',
      group: ['business'],
    }),
    defineField({
      type: 'number',
      name: 'phone',
      title: 'Phone number',
      description: 'Just digits including area code. Example: 1234567890',
      group: ['business'],
    }),
    defineField({
      type: 'string',
      name: 'address1',
      title: 'Street Address',
      group: ['business'],
	  fieldset: 'address'
    }),
    defineField({
      type: 'string',
      name: 'city',
      title: 'City',
      group: ['business'],
	  fieldset: 'address'
    }),
    defineField({
      type: 'string',
      name: 'state',
      title: 'State',
      description: 'example: MT',
      group: ['business'],
	  fieldset: 'address'
    }),
    defineField({
      type: 'number',
      name: 'zip',
      title: 'Zip Code',
      group: ['business'],
	  fieldset: 'address'
    }),
    defineField({
      type: 'url',
      name: 'facebook',
      title: 'Facebook profile',
      group: ['social'],
	  fieldset: 'social'
    }),
    defineField({
      type: 'url',
      name: 'instagram',
      title: 'Instagram profile',
      group: ['social'],
	  fieldset: 'social'
    }),
    defineField({
      type: 'url',
      name: 'twitter',
      title: 'Twitter profile',
      group: ['social'],
	  fieldset: 'social'
    }),
    defineField({
      type: 'url',
      name: 'youtube',
      title: 'Youtube channel',
      group: ['social'],
	  fieldset: 'social'
    }),
    defineField({
      type: 'image',
      title: 'Logo',
      name: 'logo',
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
  ],
})
