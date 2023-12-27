// ChurchData object
export type ChurchData = {
  socials: Socials
  logo: Logo
  address: Address
  staff: Staff
  name: string
  about: About[]
  phone: string
}

export interface Socials {
  facebook: string | null
  twitter: string | null
  instagram: string | null 
}

export interface Logo {
  asset: Asset
}

export interface Asset {
  url: string
  metadata: Metadata
}

export interface Metadata {
  lqip: string
  dimensions: Dimensions
}

export interface Dimensions {
  _type: string
  width: number
  aspectRatio: number
  height: number
}

export interface Address {
  address1: string
  city: string
  state: string
  zip: string
}

export interface Staff {
  elders: Elder[]
  deacons: any
  supports: Support[]
}

export interface Elder {
  _updatedAt: string
  image: Image
  _type: string
  name: string
  title: string
  bio?: Bio[]
  slug: Slug
  _createdAt: string
  _rev: string
  _id: string
}

export interface Image {
  asset: Asset2
}

export interface Asset2 {
  url: string
  metadata: Metadata2
}

export interface Metadata2 {
  lqip: string
  dimensions: Dimensions2
}

export interface Dimensions2 {
  width: number
  aspectRatio: number
  height: number
  _type: string
}

export interface Bio {
  _type: string
  style: string
  _key: string
  markDefs: any[]
  children: Children[]
}

export interface Children {
  _type: string
  marks: any[]
  text: string
  _key: string
}

export interface Slug {
  current: string
  _type: string
}

export interface Support {
  _rev: string
  image: Image2
  _type: string
  _id: string
  title: string
  _updatedAt: string
  slug: Slug2
  _createdAt: string
  name: string
}

export interface Image2 {
  asset: Asset3
}

export interface Asset3 {
  url: string
  metadata: Metadata3
}

export interface Metadata3 {
  lqip: string
  dimensions: Dimensions3
}

export interface Dimensions3 {
  aspectRatio: number
  height: number
  _type: string
  width: number
}

export interface Slug2 {
  current: string
  _type: string
}

export interface About {
  style: string
  _key: string
  markDefs: any[]
  children: Children2[]
  _type: string
}

export interface Children2 {
  marks: any[]
  text: string
  _key: string
  _type: string
}