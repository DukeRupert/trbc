import type { LayoutServerLoad } from './$types';
import type { ChurchData } from '$lib/sanity/types/churchData';
import Sanity from '$lib/sanity/client';
import { getChurchData } from '$lib/sanity/query';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies }) => {
	// Check if user has visited before, if not, set cookie
	const user_id = cookies.get('user_id');
	if (!user_id) {
		const uuid = crypto.randomUUID();
		cookies.set('user_id', uuid);
	}
	const q = getChurchData;
	const p = { name: "The Ridge Bible Church"}
	const churchData: ChurchData = await Sanity.fetch(q, p);
	if(!churchData) error(500, "An error has occured. The connection to Sanity is likely down.")

	return {
		churchData
	};
};
