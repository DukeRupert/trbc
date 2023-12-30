import type { RequestHandler } from '@sveltejs/kit';
import { json, error } from '@sveltejs/kit';

import S from '$lib/sanity';
export const POST: RequestHandler = async ({ request }) => {
	console.log('Fetching posts');
	// Get pagination variables
	const { min, max } = await request.json();
	if (!min || !max) error(401, 'Missing parameters.');
	console.log(`Variables valid. Fetching ${min} - ${max}`);
	const res = await S.getPosts(min, max);
	if (!res) error(500, 'Weird. No posts were returned.');

	return json({
		...res
	});
};
