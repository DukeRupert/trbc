import type { Actions } from './$types';
import postmarkClient from '$lib/postmarkClient';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import S from '$lib/sanity';
import type { ReqGetPosts, ReqGetEvents } from '$lib/sanity/client';

const schema = z.object({
	name: z.string().max(50),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string().max(250)
});

export const load = async ({ fetch, url }) => {
	const { pathname } = url;

	// Priority page data
	const data = await S.getPage(pathname);

	// Streaming
	const fetchPosts = async (min: number, max: number): Promise<ReqGetPosts> => {
		const endpoint = '/api/sanity/getPosts';
		const response = await fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify({ min, max }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json() as Promise<ReqGetPosts>;
	};

	const fetchUpcomingEvents = async (max: number): Promise<ReqGetEvents> => {
		const endpoint = '/api/sanity/getUpcomingEvents';
		const response = await fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify({ max }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json() as Promise<ReqGetEvents>;
	};

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ events: [], posts: [], total: 0 });
		}, 50);
	});

	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	// return {
	// 	page: data,
	// 	form,
	// 	streamed: {
	// 		posts: fetchPosts(0, 3),
	// 		events: fetchUpcomingEvents(5)
	// 	}
	// };

	return {
		page: data,
		form,
		streamed: {
			posts: promise,
			events: promise
		}
	};
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
				To: 'theridgepsc@gmail.com',
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
