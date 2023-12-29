export type Post = {
	coverImage: Image;
	slug: Slug;
	tags: Category[];
	category: Category[];
	date: Date;
	author: Author;
	content: Content[];
	title: string;
	excerpt: string;
};

export type Author = {
	name: string;
	slug: Slug;
	image: Image;
};

export type Image = {
	_type: string;
	asset: Asset;
	alt: string;
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
	style: string;
	_key: string;
	markDefs: any[];
	children: Child[];
};

export type Child = {
	text: string;
	_key: string;
	_type: string;
	marks: any[];
};

export default Post;
