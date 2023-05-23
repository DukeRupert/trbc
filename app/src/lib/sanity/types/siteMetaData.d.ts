// MetaData object
export interface SiteMetaData {
	business: Business;
	googleAnalytics: GoogleAnalytics;
	isGoogleAnalyticsDisabled: null;
	isPlausibleEnabled: boolean;
	logo: Logo;
	openGraph: OpenGraph;
	plausible: Plausible;
	site_name: string;
	socialMedia: SocialMedia;
	url: string;
}

export interface Business {
	address: Address;
	business_name: string;
	phone: number;
}

export interface Address {
	city: string;
	line1: string;
	state: string;
	zip: number;
}

export interface GoogleAnalytics {
	googleSiteVerificationId: null;
	googleanalyticsId: null;
}

export interface Logo {
	_type: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface OpenGraph {
	ogDescription: string;
	ogImage: Logo;
	ogTitle: string;
}

export interface Plausible {
	dataDomain: string;
}

export interface SocialMedia {
	facebook: string;
	instagram: string;
	twitter: string;
	youtube: null;
}

// Hero object
export interface Hero {
	_key: string;
	_type: string;
	heading: string;
	highlightHref: string;
	highlightText: string;
	image: Image;
	isHighlight: boolean;
	isPrimaryAction: boolean;
	isSecondaryAction: boolean;
	logo: Logo;
	primaryHref: string;
	primaryText: string;
	secondaryHref: string;
	secondaryText: string;
	subtext: string;
}

export interface Image {
	_type: string;
	alt: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface Logo {
	_type: string;
	asset: Asset;
}
