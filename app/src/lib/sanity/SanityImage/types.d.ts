export interface SanityImage {
  _type: string
  asset: Asset,
  alt: string,
}

export interface Asset {
  _ref: string
  _type: string
}