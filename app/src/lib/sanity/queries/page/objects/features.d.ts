// Features Object
export interface Features {
	_key: string;
	_type: string;
	features: Feature[];
	heading: string;
	tagline: string;
	title: string;
}

export interface Feature {
	_key: string;
	_type: string;
	description: string;
	icon: Icon | null;
	link: string;
	title: string;
	useIcon: boolean;
	useImage: boolean;
	image?: Image;
}

export interface Icon {
	size: number;
	svg: string;
	title: string;
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
