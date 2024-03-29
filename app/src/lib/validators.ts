import { z } from 'zod';

export const contactSchema = z.object({
	password: z.string().default('').optional(), // honeypot
	first_name: z.string().max(30),
	last_name: z.string().max(30),
	email: z.string().email(),
	phone: z.string().default('').optional(),
	location: z.string(),
	message: z.string().max(1500)
});

export type ContactSchema = typeof contactSchema;
