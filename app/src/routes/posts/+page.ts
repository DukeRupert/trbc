import type { PageLoad } from './$types';
import S from '$lib/sanity';
export const load: PageLoad = async ({ url }) => {
	// Fetch page data
	const { pathname } = url;
	const data = await S.getPage(pathname);
	
	// Get pagination variables
	const min = parseInt(url.searchParams.get('min') ?? '0');
	const max = parseInt(url.searchParams.get('max') ?? '10');

	// Fetch posts
	// console.log('Fetching posts');
	// const p = S.getPosts(min, max);

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ events: [], posts: [], total: 0 });
		}, 50);
	});

	return {
		page: data,
		streamed: {
			p: promise
		}
	};
};
