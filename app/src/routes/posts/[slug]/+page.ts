import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import S from '$lib/sanity'

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const post = await S.getPost(slug);

	if (!post) error(404, 'No post found');

	return {
		post
	};
};
