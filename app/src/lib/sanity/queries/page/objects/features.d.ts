// Features Object
export type Features = {
	_key: string;
	features: Feature[];
	heading: string;
	_type: string;
	tagline: string;
	title: string;
};

export type Feature = {
	useIcon: boolean;
	description: string;
	_key: string;
	title: string;
	_type: string;
	icon: Icon;
	link?: string;
};

export type Icon = {
	metadata: Metadata;
	_type: string;
	icon: string;
};

export type Metadata = {
	iconName: string;
	author: Author;
	hFlip: boolean;
	url: string;
	collectionName: string;
	vFlip: boolean;
	size: Size;
	palette: boolean;
	collectionId: string;
	downloadUrl: string;
	license: Author;
	flip: string;
	rotate: number;
};

export type Author = {
	name: string;
	url: string;
};

export type Size = {
	width: number;
	height: number;
};
