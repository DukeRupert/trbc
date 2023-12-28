import type { LayoutServerLoad } from './$types';
import type { MetaData } from '$lib/sanity/types/SiteSettings';
import Sanity from '$lib/sanity/client';
import { getMetaData } from '$lib/sanity/query';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies }) => {
	// Check if user has visited before, if not, set cookie
	const user_id = cookies.get('user_id');
	if (!user_id) {
		const uuid = crypto.randomUUID();
		cookies.set('user_id', uuid);
	}
	const q = getMetaData;
	const metaData: MetaData = await Sanity.fetch(q);
	if(!metaData) error(500, "An error has occured. The connection to Sanity is likely down.")

	return {
		metaData
	};
};
