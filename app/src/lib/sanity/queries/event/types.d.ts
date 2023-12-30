import type { Image } from '../common';

export type Event = {
	coverImage: Image;
	content: Content[];
	excerpt: string;
	title: string;
	slug: Slug;
	date: Date;
	author: Author;
	tags: Tag[];
	category: Category[];
};

export type Author = {
	name: string;
	slug: Slug;
	image: Image;
};

export type Slug = {
	current: string;
	_type: string;
};

export type Category = {
	title: string;
};

export type Content = {
	children: Child[];
	_type: string;
	style: string;
	_key: string;
	markDefs: any[];
};

export type Child = {
	_type: string;
	marks: any[];
	text: string;
	_key: string;
};

export type Tag = {
	title: string;
	slug: Slug;
};

export default Event;
