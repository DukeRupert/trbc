import type { Actions, PageServerLoad } from './$types';
import { contactSchema } from '$lib/validators';
import postmarkClient from '$lib/postmarkClient';
import { superValidate, message } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	// Server API:
	const form = await superValidate(contactSchema);

	// Always return { form } in load and form actions.
	return {
		form
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, contactSchema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// Check the honeypot
		if (form.data.password !== '') return message(form, 'Nice try bot', { status: 400 });

		// Send email
		try {
			// Setup
			const resource = '/api/postmark/contact';
			const headers = new Headers({ 'Content-Type': 'application/json' });
			const options = {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(form.data)
			};
			// Call
			const res = await fetch(resource, options);
			console.log(`Received response from ${resource}`);
			const status = res.status;
			console.log(`Status is ${status}`);
			if (status === 200) {
				return { form };
			} else {
				console.log(res);
				return message(form, 'An error occured on our end. Please try again later or call.', {
					status: 500
				});
			}
		} catch (err) {
			console.log(err);
			// Notify tech support
			await postmarkClient.sendEmail({
				From: 'logan@fireflysoftware.dev',
				To: 'logan@fireflysoftware.dev',

				Subject: 'The Ridge Website form error',
				TextBody: JSON.stringify(err)
			});
		}

		// Yep, return { form } here too
		return { form };
	}
};
