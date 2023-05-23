// cta
export interface Cta {
	_key: string;
	_type: string;
	heading: string;
	isPrimaryAction: boolean;
	isSecondaryAction: boolean;
	primaryHref: string;
	primaryText: string;
	secondaryHref: string;
	secondaryText: string;
	subtext: string;
}
