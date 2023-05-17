import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'reviews',
	type: 'object',
	title: 'Reviews',
	fields: [
		defineField({
			name: 'heading',
			type: 'string',
			title: 'Heading',
			validation: (Rule) => Rule.required().min(2).max(40)
		}),
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required().min(2).max(70)
		}),
		defineField({
			name: 'tagline',
			type: 'string',
			title: 'Tagline',
			validation: (Rule) => Rule.min(20).max(250)
		}),
		defineField({
			name: 'testimonials',
			type: 'array',
			title: 'User Reviews',
			of: [{ type: 'review' }]
		})
	]
});
