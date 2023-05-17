import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'hero',
	type: 'object',
	title: 'Hero',
	fieldsets: [
		{ name: 'actions', title: 'Actions' },
		{ name: 'highlight', title: 'Highlight link' }
	],
	fields: [
		defineField({
			name: 'heading',
			type: 'string',
			title: 'Heading'
		}),
		defineField({
			name: 'subtext',
			type: 'string',
			title: 'Subtext'
		}),
		defineField({
			name: 'image',
			type: 'image',
			title: 'Image',
			description: 'Primary image in hero component',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text'
				}
			]
		}),
		defineField({
			name: 'logo',
			type: 'image',
			title: 'Logo',
			description: 'If you want your logo included in the Hero'
		}),
		defineField({
			type: 'boolean',
			name: 'isHighlight',
			title: 'Enable highlight link',
			fieldset: 'highlight',
			initialValue: false,
			options: {
				layout: 'checkbox'
			}
		}),
		defineField({
			type: 'string',
			name: 'highlightText',
			title: 'Highlight text',
			fieldset: 'highlight',
			validation: (Rule) => Rule.max(60),
			hidden: ({ parent }) => !parent?.isHighlight
		}),
		defineField({
			type: 'string',
			name: 'highlightHref',
			title: 'Hilight href',
			fieldset: 'highlight',
			hidden: ({ parent }) => !parent?.isHighlight
		}),
		defineField({
			type: 'boolean',
			name: 'isPrimaryAction',
			title: 'Enable primary action button',
			fieldset: 'actions',
			initialValue: false,
			options: {
				layout: 'checkbox'
			}
		}),
		defineField({
			type: 'string',
			name: 'primaryText',
			title: 'Primary button text',
			fieldset: 'actions',
			validation: (Rule) => Rule.max(15),
			hidden: ({ parent }) => !parent?.isPrimaryAction
		}),
		defineField({
			type: 'string',
			name: 'primaryHref',
			title: 'Primary button href',
			fieldset: 'actions',
			hidden: ({ parent }) => !parent?.isPrimaryAction
		}),
		defineField({
			type: 'boolean',
			name: 'isSecondaryAction',
			title: 'Enable secondary action button',
			fieldset: 'actions',
			hidden: ({ parent }) => !parent?.isPrimaryAction,
			initialValue: false,
			options: {
				layout: 'checkbox'
			}
		}),
		defineField({
			type: 'string',
			name: 'secondaryText',
			title: 'Secondary button text',
			fieldset: 'actions',
			validation: (Rule) => Rule.max(15),
			hidden: ({ parent }) => !parent?.isSecondaryAction
		}),
		defineField({
			type: 'string',
			name: 'secondaryHref',
			title: 'Primary button href',
			fieldset: 'actions',
			hidden: ({ parent }) => !parent?.isSecondaryAction
		})
	]
});
