// post schema
export type Post = {
	category: Category[];
	date: Date;
	author: Author;
	content: Content[];
	title: string;
	coverImage: Image;
	tags: Category[];
	excerpt: string;
};

export type Author = {
	name: string;
	image: Image;
	slug: Slug;
};

export type Image = {
	_type: string;
	asset: Asset;
};

export type Asset = {
	_ref: string;
	_type: string;
};

export type Slug = {
	current: string;
	_type: string;
};

export type Category = {
	title: string;
};

export type Content = {
	_type: string;
	style?: string;
	_key: string;
	markDefs?: any[];
	children?: Child[];
	alt?: string;
	caption?: string;
	asset?: Asset;
};

export type Child = {
	_type: string;
	marks: any[];
	text: string;
	_key: string;
};
