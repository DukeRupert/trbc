import type { Actions } from './$types';
import postmarkClient from '$lib/postmarkClient';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import type { SanityPage } from '$lib/sanity/types/page';
import Sanity from '$lib/sanity/client';
import { getPageData } from '$lib/sanity/query';

const schema = z.object({
	name: z.string().max(50),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string().max(250)
});

export const load = async ({ url }) => {
	const { pathname } = url;

	const parameters = {
		pathname
	};

	const data: SanityPage = await Sanity.fetch(getPageData, parameters);

	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { page: data, form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data
		try {
			const parameters = {
				TemplateId: 20861986,
				TemplateModel: form.data,
				From: 'logan@fireflysoftware.dev',
				To: 'logan@fireflysoftware.dev',
				MessageStream: 'outbound',
				TrackOpens: true
			};

			const result = await postmarkClient.sendEmailWithTemplate(parameters);

			// success
			if (result.ErrorCode == 0) return { form };

			// uh oh
			return fail(400, { form });
		} catch (error) {
			await postmarkClient.sendEmail({
				From: 'logan@fireflysoftware.dev',
				To: 'logan@fireflysoftware.dev',

				Subject: 'The Ridge Website form error',
				TextBody: JSON.stringify(error)
			});
		}

		// Yep, return { form } here too
		return { form };
	}
};
