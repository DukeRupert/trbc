import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import { getMetaData, getPageData, getPost, getPosts } from './query';
import type { MetaData } from './types/SiteSettings';
import type { SanityPage } from '$lib/sanity/types/page';
import type { Post } from './types/post';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export type ReqMetaData = MetaData;
export type ReqGetPosts = {
	posts: Post[];
	total: number;
};

export class SanityClient {
	private projectId: string;
	private dataset: string;
	private apiVersion: string;
	private token: string = '';
	private useCdn: boolean = false;
	private client: any;
	private imageBuilder: ImageUrlBuilder;

	constructor(
		projectId: string,
		dataset: string,
		apiVersion: string,
		token?: string,
		useCdn?: boolean
	) {
		this.projectId = projectId;
		this.dataset = dataset;
		this.apiVersion = apiVersion;
		if (token) this.token = token;
		if (useCdn) this.useCdn = useCdn;
		this.client = createClient({
			projectId,
			dataset,
			apiVersion,
			token,
			useCdn
		});
		this.imageBuilder = imageUrlBuilder(this.client);
	}

	urlFor(source: SanityAsset) {
		return this.imageBuilder.image(source).fit('max').auto('format');
	}

	async getMetaData(): Promise<ReqMetaData> {
		const q = getMetaData;
		return await this.client.fetch(q);
	}

	async getPosts(min: number, max: number): Promise<ReqGetPosts> {
		const q = getPosts;
		const p = { min, max };
		return await this.client.fetch(q, p);
	}

	async getPost(slug: string): Promise<any> {
		const q = getPost;
		const p = { slug };
		return await this.client.fetch(q, p);
	}

	async getPageData(pathname: string): Promise<SanityPage> {
		const q = getPageData;
		const p = {
			pathname
		};
		return await this.client.fetch(q, p);
	}
}
