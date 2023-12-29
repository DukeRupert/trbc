import type { Image } from '$lib/sanity/queries/common';

export function getImageDimensions(image: Image) {
  if (!image?.asset?._ref) {
    return
  }

  const dimensions = image.asset._ref.split('-')[2]
  const [width, height] = dimensions.split('x').map(Number)

  if (!width || !height || Number.isNaN(width) || Number.isNaN(height)) {
    return
  }

  return {
    width,
    height,
    aspectRatio: width / height,
  }
}