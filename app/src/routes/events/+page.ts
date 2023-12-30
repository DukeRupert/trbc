import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import S from '$lib/sanity';
export const load: PageLoad = async ({ url }) => {
	// Get pagination variables
	const min = parseInt(url.searchParams.get('min') ?? '0');
	const max = parseInt(url.searchParams.get('max') ?? '10');

	console.log('Fetching events');
	const e = S.getEvents(min, max);

	return {
		streamed: {
			e
		}
	};
};
