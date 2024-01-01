import type { PageLoad } from './$types';
import S from '$lib/sanity';
export const load: PageLoad = async ({ url }) => {
	// Get pagination variables
	const min = parseInt(url.searchParams.get('min') ?? '0');
	const max = parseInt(url.searchParams.get('max') ?? '10');

	console.log('Fetching posts');
	const p = S.getPosts(min, max);

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ events: [], posts: [], total: 0 });
		}, 50);
	});

	return {
		streamed: {
			p
		}
	};
};
