import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'cta',
	type: 'object',
	title: 'Call to Action',
	fieldsets: [{ name: 'actions', title: 'Actions' }],
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
