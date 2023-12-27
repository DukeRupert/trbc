import type { SanityImage } from './types';

export function getImageDimensions(image: SanityImage) {
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