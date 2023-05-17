// feature_with_icon.ts
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'review',
	type: 'object',
	title: 'Review',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'body',
			type: 'string',
			title: 'Body',
			validation: (Rule) => Rule.required().min(30).max(200)
		}),
		defineField({
			name: 'author',
			type: 'string',
			title: 'Author',
			validation: (Rule) => Rule.required().max(30)
		}),
		defineField({
			name: 'rating',
			type: 'number',
			title: 'Rating',
			description: 'Out of five starts'
		})
	],
	preview: {
		select: {
			title: 'title',
			author: 'author'
		}
	}
});
