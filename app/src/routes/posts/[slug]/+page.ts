import type { PageLoad } from './$types';
import { getPost } from '$lib/sanity/query';
import Sanity from '$lib/sanity/client';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const q = getPost;
	const p = { slug };

	const post = await Sanity.fetch(q, p);
	if (!post) error(404, 'No post found');

	return {
		post
	};
};
