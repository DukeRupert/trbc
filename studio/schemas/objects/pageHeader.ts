import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'pageHeader',
	type: 'object',
	title: 'Page Header',
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
		})
	]
});
