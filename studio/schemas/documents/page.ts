// page.ts
import { defineField, defineType } from 'sanity';
import openGraph from '../objects/openGraph';
import { BookIcon } from '@sanity/icons';

export default defineType({
	name: 'page',
	type: 'document',
	title: 'Page',
	icon: BookIcon,
	groups: [
		{ name: 'data', title: 'Page Data', default: true },
		{ name: 'seo', title: 'SEO' }
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description:
				'Make it as enticing as possible to encourage interaction on social feeds and Google search results. Ideally between 3 & 70 characters.',
			type: 'string',
			group: ['data'],
			validation: (Rule) => Rule.required().min(3).max(70)
		}),
		defineField({
			name: 'metaDescription',
			title: 'Description',
			description:
				'Optional but highly recommended. Search engines use this to generate the snippet in search results. Ideally between 70 & 160 characters.',
			type: 'string',
			group: ['data'],
			validation: (Rule) => Rule.min(70).max(160)
		}),
		defineField({
			name: 'path',
			title: 'Path',
			description: 'The path from route where the page can be found.',
			type: 'string',
			group: ['data'],
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			group: ['data'],
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
		// Setup a 'document' type to house the page builder field
		defineField({
			name: 'pageBuilder',
			type: 'array',
			title: 'Page builder',
			group: ['data'],
			of: [
				{ type: 'hero' }, // hero.ts (same applies for the other types)
				{ type: 'pageHeader' },
				{ type: 'features' },
				{ type: 'team' },
				{ type: 'reviews' },
				{ type: 'posts' },
				{ type: 'cta' },
				{ type: 'gallery'},
				{ type: 'contentBlock'}	
				// { type: "blockContent"}
				// etc...
			]
		}),
		defineField(openGraph)
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'path',
			media: 'mainImage'
		}
	}
});
