import type { PageLoad } from './$types';
import S from '$lib/sanity'

export const prerender = true;

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;

	const data = await S.getPage(pathname);

	return {
		page: data
	};
};
