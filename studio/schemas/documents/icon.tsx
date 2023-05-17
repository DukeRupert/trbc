// icon.ts
import { defineType, defineField } from 'sanity';

export default defineType({
	type: 'document',
	name: 'icon',
	title: 'Icon',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required().min(2)
		}),
		defineField({
			title: 'SVG',
			name: 'svg',
			type: 'text',
			description: 'Paste the svg code to inline here.',
			validation: (Rule) => Rule.required().min(2)
		}),
		defineField({
			title: 'Size',
			name: 'size',
			type: 'number',
			description:
				'We actually use the size from the svg field above, but to keep things simple lets just enter it here.'
		})
	]
});
