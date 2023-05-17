import type { Rule } from 'sanity';
import locale from './locale';

export default {
	name: 'openGraph',
	title: 'SEO config',
	type: 'object',
	group: ['seo'],
	fields: [
		{
			type: 'string',
			name: 'site_name',
			title: 'Site Name'
			// fieldset: "optional"
		},
		{
			type: 'text',
			name: 'ogDescription',
			title: 'Social Share Description'
		},
		{
			type: 'url',
			title: 'URL',
			name: 'url',
			description: 'Most likely either the url of the page or its canonical url',
			validation: (Rule: Rule) => Rule.required()
			// fieldset: "basic"
		},
		{
			type: 'string',
			title: 'Page Title',
			name: 'ogTitle',
			description:
				'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
			validation: (Rule: Rule) => Rule.required()
			// fieldset: "basic"
		},
		{
			type: 'image',
			title: 'Image',
			name: 'ogImage',
			description:
				'URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.',
			validation: (Rule: Rule) => Rule.required()
			// fieldset: "basic"
		},
		locale
	]
};
