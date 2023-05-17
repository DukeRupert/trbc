import { defineField, defineType } from 'sanity';
import {CogIcon} from '@sanity/icons'

export default defineType({
	type: 'document',
	name: 'siteMeta',
	title: 'Site Configuration',
	icon: CogIcon,
	fieldsets: [
		{ name: 'google', title: 'Google Analytics' },
		{ name: 'plausible', title: 'Plausible Analytics' }
	],
	groups: [
		{
			name: 'meta',
			title: 'Site Info',
			default: true
		},
		{
			name: 'business',
			title: 'Business Info'
		},
		{
			name: 'og',
			title: 'Open Graph'
		},
		{
			name: 'google',
			title: 'Google Config'
		},
		{
			name: 'plausible',
			title: 'Plausible Config'
		}
	],
	fields: [
		defineField({
			type: 'string',
			name: 'site_name',
			title: 'Site Name',
			group: ['og', 'meta']
			// fieldset: "optional"
		}),
		defineField({
			type: 'text',
			name: 'ogDescription',
			title: 'Social Share Description',
			group: ['og', 'meta']
		}),
		defineField({
			type: 'url',
			title: 'URL',
			name: 'url',
			description: 'Most likely either the url of the page or its canonical url',
			validation: (Rule) => Rule.required(),
			group: ['og', 'meta']
			// fieldset: "basic"
		}),
		defineField({
			type: 'string',
			name: 'business_name',
			title: 'Business Name',
			description: 'Official business name not intended for seo use',
			group: ['business']
		}),
		defineField({
			type: 'number',
			name: 'phone',
			title: 'Phone number',
			description: 'Just digits including area code. Example: 1234567890',
			group: ['business']
		}),
		defineField({
			type: 'string',
			name: 'address_line1',
			title: 'Primary Address',
			group: ['business']
		}),
		defineField({
			type: 'string',
			name: 'city',
			title: 'City',
			group: ['business']
		}),
		defineField({
			type: 'string',
			name: 'state',
			title: 'State',
			description: 'example: MT',
			group: ['business']
		}),
		defineField({
			type: 'number',
			name: 'zip',
			title: 'Zip Code',
			group: ['business']
		}),
		defineField({
			type: 'url',
			name: 'facebook',
			title: 'Facebook profile',
			group: ['business']
		}),
		defineField({
			type: 'url',
			name: 'instagram',
			title: 'Instagram profile',
			group: ['business']
		}),
		defineField({
			type: 'url',
			name: 'twitter',
			title: 'Twitter profile',
			group: ['business']
		}),
		defineField({
			type: 'url',
			name: 'youtube',
			title: 'Youtube channel',
			group: ['business']
		}),
		defineField({
			type: 'image',
			title: 'Logo',
			name: 'logo',
			group: ['meta']
		}),
		defineField({
			type: 'string',
			title: 'Page Title',
			name: 'ogTitle',
			description:
				'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
			validation: (Rule) => Rule.required()
			// fieldset: "basic"
		}),
		defineField({
			type: 'image',
			title: 'Image',
			name: 'ogImage',
			description:
				'URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.',
			group: ['og']
			// fieldset: "basic"
		}),
		defineField({
			type: 'text',
			name: 'description',
			title: 'Describe This Site',
			group: ['meta', 'og']
		}),
		defineField({
			type: 'boolean',
			name: 'isGoogleAnalyticsEnabled',
			title: 'Enable Google Analytics?',
			group: ['meta', 'google'],
			initialValue: false,
			options: {
				layout: 'checkbox'
			}
		}),
		defineField({
			type: 'string',
			name: 'googleanalyticsId',
			title: 'Google Analytics ID',
			fieldset: 'google',
			hidden: ({ document }) => !document?.isGoogleAnalyticsEnabled,
			group: ['meta', 'google']
		}),
		defineField({
			type: 'string',
			name: 'googleSiteVerificationId',
			title: 'Google site Verification ID',
			fieldset: 'google',
			hidden: ({ document }) => !document?.isGoogleAnalyticsEnabled,
			group: ['meta', 'google']
		}),
		defineField({
			type: 'boolean',
			name: 'isPlausibleEnabled',
			title: 'Enable Plausible Analytics?',
			group: ['meta', 'plausible'],
			initialValue: false,
			options: {
				layout: 'checkbox'
			}
		}),
		defineField({
			type: 'string',
			name: 'dataDomain',
			title: 'Data domain',
			description: 'Usually base url (ie. something.com)',
			fieldset: 'plausible',
			hidden: ({ document }) => !document?.isPlausibleEnabled,
			group: ['meta', 'plausible']
		})
	],
	initialValue: {
		isGoogleAnalyticsEnabled: false
	}
});
