// Team Object
export interface Team {
	_key: string;
	_type: "team";
	features: null;
	members: Member[];
	tagline: string;
	title: string;
}

export interface Member {
	_key: string;
	_type: string;
	description: string;
	image: Image;
	link: string;
	name: string;
	title: string;
}

export interface Image {
	_type: string;
	alt: string;
	asset: Asset;
	crop: Crop;
	hotspot: Hotspot;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface Crop {
	_type: string;
	bottom: number;
	left: number;
	right: number;
	top: number;
}

export interface Hotspot {
	_type: string;
	height: number;
	width: number;
	x: number;
	y: number;
}
