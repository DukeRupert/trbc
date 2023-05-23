import type { LayoutServerLoad } from './$types';
import type { SiteMetaData } from '$lib/sanity/types/siteMetaData';
import Sanity from '$lib/sanity/client';
import { getSiteMetaData } from '$lib/sanity/query';

export const load: LayoutServerLoad = async ({ cookies }) => {
	// Check if user has visited before, if not, set cookie
	const user_id = cookies.get('user_id');
	if (!user_id) {
		const uuid = crypto.randomUUID();
		cookies.set('user_id', uuid);
	}
	const siteMetaData: SiteMetaData = await Sanity.fetch(getSiteMetaData);

	return {
		siteMetaData
	};
};
