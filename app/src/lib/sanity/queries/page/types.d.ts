// SanityPage
import type { Image } from '../common';
import type { Features } from './objects/features';
import type { Hero } from './objects/hero';
import type { Team } from './objects/team';
import type { PageHeader } from './objects/pageHeader';
import type { Reviews } from './objects/reviews';
import type { Cta } from './objects/cta';
import type { Gallery } from './objects/gallery';
import type { ContentBlock } from './objects/contentBlock'
import type { SanityAsset } from '@sanity/image-url/lib/types/types';

export interface SanityPage {
	blocks: Block[];
	seo: SEO;
}

export type Block = Gallery | Hero | Team | PageHeader | Reviews | Cta | ContentBlock;

export interface Feature {
	_key: string;
	_type: string;
	description: string;
	icon: Icon;
	link: string;
	title: string;
	useIcon: boolean;
	useImage: boolean;
}

export interface Icon {
	size: number;
	svg: string;
	title: string;
}

export interface Logo {
	_type: string;
	asset: Asset;
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

export interface Testimonial {
	_key: string;
	_type: Type;
	author: string;
	body: string;
	rating: number;
	title: string;
}

export enum Type {
	Review = 'review'
}

export interface SEO {
	mainImage: Image;
	metaDescription: string;
	openGraph: OpenGraph;
	title: string;
}

export interface OpenGraph {
	locale: string;
	ogDescription: string;
	ogImage: Image;
	ogTitle: string;
	site_name: string;
	url: string;
}

export { Features, Cta, Hero, Team, PageHeader, ContentBlock };
export default SanityPage;
