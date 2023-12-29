// Hero Object
export interface Hero {
	_key: string;
	_type: string;
	features: null;
	heading: string;
	highlightHref: string;
	highlightText: string;
	image: Image;
	isHighlight: boolean;
	isPrimaryAction: boolean;
	isSecondaryAction: boolean;
	logo: Logo;
	primaryHref: string;
	primaryText: string;
	secondaryHref: string;
	secondaryText: string;
	subtext: string;
}

export interface Image {
	_type: string;
	alt: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface Logo {
	_type: string;
	asset: Asset;
}
