import type { Image } from '../../common';

export type Gallery = {
	gallery: GalleryElement[];
	subtext: string;
	_type: string;
	text: string;
	_key: string;
	title: string;
};

export type GalleryElement = {
	description: string;
	_key: string;
	title: string;
	image: Image;
	_type: string;
};
