// posts.ts
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'posts',
	type: 'object',
	title: 'Posts',
	fields: [
		defineField({
			name: 'defaultTag',
			type: 'reference',
			title: 'Default Category',
			description: 'The category of posts that you want displayed by default',
			to: { type: 'category' },
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'searchTags',
			type: 'array',
			title: 'Search Categories',
			description:
				'A list of categories that you would like to allow the user to quickly search for.',
			of: [{ type: 'reference', to: { type: 'category' } }]
		}),
		defineField({
			name: 'max',
			type: 'number',
			title: 'Maximum',
			description: 'The number of posts to initially load',
			validation: (Rule) => Rule.required()
		})
	],
	preview: {
		select: {
			title: 'defaultTag.title'
		}
	}
});
