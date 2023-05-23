// Post
export interface Post {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	body: Body[];
	categories: Category[];
	excerpt: string;
	mainImage: MainImage;
	publishedAt: string;
	slug: Slug;
	title: string;
}

export interface Body {
	_key: string;
	_type: BodyType;
	children: Child[];
	markDefs: any[];
	style: Style;
	level?: number;
	listItem?: ListItem;
}

export enum BodyType {
	Block = 'block'
}

export interface Child {
	_key: string;
	_type: ChildType;
	marks: string[];
	text: string;
}

export enum ChildType {
	Span = 'span'
}

export enum ListItem {
	Bullet = 'bullet'
}

export enum Style {
	H2 = 'h2',
	Normal = 'normal'
}

export interface Category {
	_key: string;
	_ref: string;
	_type: string;
}

export interface MainImage {
	_type: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface Slug {
	_type: string;
	current: string;
}
