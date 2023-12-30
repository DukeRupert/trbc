export interface Options {
	month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
	day?: 'numeric' | '2-digit';
	year?: 'numeric' | '2-digit';
	weekday?: 'long' | 'short' | 'narrow';
}

export function formatDate(date: string | Date, opts?: Options): string {
	let options: Options = {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	};
	if (opts) options = opts;
	return new Date(date).toLocaleDateString('us-EN', options);
}

export function fromISOtoDatetime(date: string): string {
	const split = date.split('T');
	return split[0];
}

export function fromISOtoTime(date: Date): string {
	const d = new Date(date);
	return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}
