import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z.object({
	name: z.string().default('Hello world!'),
	email: z.string().email()
});

export const actions = {
	default: async ({ request }) => {
		// Server API:
		const form = await superValidate(request, schema);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data

		// Always return { form } in load and form actions.
		return { form };
	}
};
