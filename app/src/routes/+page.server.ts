import type { Actions } from './$types';
import { contactSchema, type ContactSchema } from '$lib/validators';
import postmarkClient from '$lib/postmarkClient';
import { superValidate, message } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import S from '$lib/sanity';
import type { ReqGetPosts, ReqGetEvents } from '$lib/sanity/client';

export const load = async ({ fetch, url }) => {
	const { pathname } = url;

	// Priority page data
	const data = await S.getPage(pathname);

	// Streaming
	
		const {posts} = await fetch('/api/sanity/getPosts', {
			method: 'POST',
			body: JSON.stringify({ min: 0, max: 3 }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json()) as ReqGetPosts

	const { events } = await fetch( '/api/sanity/getUpcomingEvents', {
			method: 'POST',
			body: JSON.stringify({ max: 3 }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json()) as ReqGetEvents;

	// Server API:
	const form = await superValidate(contactSchema);

	// Always return { form } in load and form actions.
	return {
		page: data,
		form,
		posts,
		events
	};

	// For debugging
	// const promise = new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve({ events: [], posts: [], total: 0 });
	// 	}, 50);
	// });
	// return {
	// 	page: data,
	// 	form,
	// 	streamed: {
	// 		posts: promise,
	// 		events: promise
	// 	}
	// };
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
