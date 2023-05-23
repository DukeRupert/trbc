import type { PageLoad } from './$types';
import type { SanityPage } from '$lib/sanity/types/page';
import Sanity from '$lib/sanity/client';
import { getPageData } from '$lib/sanity/query';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;

	const parameters = {
		pathname
	};

	const data: SanityPage = await Sanity.fetch(getPageData, parameters);

	return {
		page: data
	};
};
