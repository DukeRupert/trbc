import type { PageLoad } from './$types';
import S from '$lib/sanity';
export const load: PageLoad = async ({ url }) => {
	// Fetch page data
	const { pathname } = url;
	const data = await S.getPage(pathname);

	// Get pagination variables
	const max = parseInt(url.searchParams.get('max') ?? '10');

	console.log('Fetching events');
	const { events } = await S.getUpcomingEvents(max);
	
	return {
		page: data,
		events
	};
};
