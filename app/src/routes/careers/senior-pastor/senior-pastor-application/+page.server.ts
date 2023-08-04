import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import postmarkClient from '$lib/postmarkClient';

const schema = z.object({
	first_name: z.string().max(50).default(''),
	last_name: z.string().max(50).default(''),
	email: z.string().email(),
	street_address: z.string().max(50).default(''),
	city: z.string().max(50).default(''),
	region: z.string().max(50).default(''),
	postal_code: z.string().max(7).default(''),
	country: z.string().default(''),
	non_negotiable: z.string().max(10000).default(''),
	role: z.string().max(10000).default(''),
	sof_response: z.string().max(10000).default(''),
	testimony: z.string().max(10000).default('')
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		// Server API:
		const form = await superValidate(request, schema);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return message(form, 'Invalid form');
		}

		// Do something with the validated data
		try {
			const parameters = {
				TemplateId: 32704916,
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
			console.log(JSON.stringify(error));
			await postmarkClient.sendEmail({
				From: 'logan@fireflysoftware.dev',
				To: 'logan@fireflysoftware.dev',
				Subject: 'The Ridge Website form error',
				TextBody: JSON.stringify(error)
			});
		}
		// Always return { form } in load and form actions.
		return message(form, 'Application sent 😊');
	}
};
