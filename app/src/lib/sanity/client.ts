import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';

const projectId = '0edefeh9';
const dataset = 'production';
const apiVersion = '2023-05-16';

const Sanity = createClient({
	projectId: projectId,
	dataset: dataset,
	apiVersion: apiVersion, // use current UTC date - see "specifying API version"!
	token: '', // or leave blank for unauthenticated usage
	useCdn: false // `false` if you want to ensure fresh data
});

export const imageBuilder = imageUrlBuilder(Sanity);

export const urlFor = (source: string | SanityAsset) => {
	return imageBuilder.image(source);
};

export default Sanity;
