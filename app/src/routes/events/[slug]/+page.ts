import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import S from '$lib/sanity'

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const event = await S.getEvent(slug);

	if (!event) error(404, 'No event found');

	return {
		event
	};
};
