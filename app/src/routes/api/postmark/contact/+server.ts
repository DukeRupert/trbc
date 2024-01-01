import client from '$lib/postmarkClient.js';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	console.log('Invoke Postmark contact endpoint');
	const data = await request.json();
	const business_name = 'The Ridge Bible Church';
	const model = { ...data, business_name: business_name };

	// Send message
	try {
		const parameters = {
			TemplateId: 20861986,
			TemplateModel: model,
			From: 'logan@fireflysoftware.dev',
			To: 'theridgepsc@gmail.com',
			MessageStream: 'outbound',
			TrackOpens: true
		};

		const result = await client.sendEmailWithTemplate(parameters);

		// success
		if (result.ErrorCode == 0) return json({ success: true }, { status: 200 });

		// uh oh
		error(400, 'Bad request');
	} catch (err) {
		await client.sendEmail({
			From: 'logan@fireflysoftware.dev',
			To: 'logan@fireflysoftware.dev',

			Subject: 'The Ridge Website form error',
			TextBody: JSON.stringify(err)
		});

		error(400, 'Bad request');
	}

	return json({ success: true }, { status: 200 });
};
