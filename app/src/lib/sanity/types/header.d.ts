// Page Header
export interface PageHeader {
	_key: string;
	_type: string;
	features: null;
	heading: string;
	image: Image;
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
