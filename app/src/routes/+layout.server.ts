import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import S from '$lib/sanity'

export const load: LayoutServerLoad = async ({ cookies }) => {
	// Check if user has visited before, if not, set cookie
	const user_id = cookies.get('user_id');
	if (!user_id) {
		const uuid = crypto.randomUUID();
		cookies.set('user_id', uuid);
	}

	const metaData = await S.getMetaData();
	if(!metaData) error(500, "An error has occured. The connection to Sanity is likely down.")

	return {
		metaData
	};
};
