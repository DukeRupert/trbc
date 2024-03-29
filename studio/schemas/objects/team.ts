import { defineField, defineType } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export default defineType({
	name: 'team',
	type: 'object',
	title: 'Team Section',
	icon: UsersIcon,
	fields: [
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
			name: 'members',
			type: 'array',
			title: 'Team Members',
			of: [{ type: 'teamMember' }]
		})
	]
});
