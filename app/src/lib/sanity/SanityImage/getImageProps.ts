import type { SanityImage } from './types';
import S from '../'
import { getImageDimensions } from './getImageDimensions';

const LARGEST_VIEWPORT = 1920; // Retina sizes will take care of 4k (2560px) and other huge screens
const DEFAULT_MIN_STEP = 0.1; // 10%
const DEFAULT_WIDTH_STEPS = [400, 600, 850, 1000, 1150]; // arbitrary
// Based on statcounter's most common screen sizes: https://gs.statcounter.com/screen-resolution-stats
const DEFAULT_FULL_WIDTH_STEPS = [360, 414, 768, 1366, 1536, 1920];

type GetImagePropArguments = {
	/**
	 * The image's reference object.
	 * Example: {asset: {_ref: string}, hotspot: {...}, crop: {...} }
	 */
	image: SanityImage;
	// Number of the largest width it can assume in the design
	userMaxWidth: number;
	/**
	 * The minimal width difference, in PERCENTAGE (decimal), between the image's srcSet variations.
	 *
	 * -> 0.10 (10%) by default.
	 */
	minimumWidthStep?: number;
	// List of width sizes to use in the srcSet (NON-RETINA)
	customWidthSteps?: number[];
	// Custom <img> element's `sizes` attribute
	sizes?: any;
};

export default function getImageProps({
	image,
	userMaxWidth,
	minimumWidthStep,
	customWidthSteps,
	sizes
}: GetImagePropArguments) {
	if (!image?.asset?._ref) {
		return {};
	}
	const maxWidth = typeof userMaxWidth === 'number' ? userMaxWidth : LARGEST_VIEWPORT;

	// For all image variations, we'll use an auto format and prevent scaling it over its max dimensions
	const builder = S.urlFor(image);

	const imageDimensions = getImageDimensions(image);

	// Width sizes the image could assume
	const baseSizes = [
		maxWidth,
		...(customWidthSteps ||
			(typeof userMaxWidth === 'number' ? DEFAULT_WIDTH_STEPS : DEFAULT_FULL_WIDTH_STEPS))
	];
	const retinaSizes = Array.from(
		// De-duplicate sizes with a Set
		new Set([
			...baseSizes,
			...baseSizes.map((size) => size * 2),
			...baseSizes.map((size) => size * 3)
		])
	)
		.sort((a, b) => a - b) // Lowest to highest
		.filter(
			(size) =>
				// Exclude sizes 10% or more larger than the image itself. Sizes slightly larger
				// than the image are included to ensure we always get closest to the highest
				// quality for an image. Sanity's CDN won't scale the image above its limits.
				size <= (imageDimensions?.width ?? 1) * 1.1 &&
				// Exclude those larger than maxWidth's retina (x3)
				size <= maxWidth * 3
		)

		// Exclude those with a value difference to their following size smaller than `minimumWidthStep`
		// This ensures we don't have too many srcSet variations, polluting the HTML
		.filter((size, i, arr) => {
			const nextSize = arr[i + 1];
			if (nextSize) {
				return nextSize / size > (minimumWidthStep || DEFAULT_MIN_STEP) + 1;
			}

			return true;
		});

	return {
		// Use the original image as the `src` for the <img>
		src: builder.width(maxWidth).url(),

		// Build a `{URL} {SIZE}w, ...` string for the srcset
		srcset: retinaSizes.map((size) => `${builder.width(size).url()} ${size}w`).join(', '),
		sizes: sizes || `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`,

		// Let's also tell the browser what's the size of the image so it can calculate aspect ratios
		width: retinaSizes[0],
		height: imageDimensions?.aspectRatio
			? retinaSizes[0] / imageDimensions?.aspectRatio
			: retinaSizes[0] / 1
	};
}
