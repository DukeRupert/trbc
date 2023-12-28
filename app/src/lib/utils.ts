export function formatDate(date: string | Date): string {
	return new Date(date).toLocaleDateString('us-EN', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

export function fromISOtoDatetime(date: string): string {
	const split = date.split('T');
	return split[0];
}
