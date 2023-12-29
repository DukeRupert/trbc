export type MetaData = {
    description:   string;
    phone:         number;
    socials:       Socials;
    logo:          Logo;
    address:       Address;
    business_name: string;
    site_name:     string;
}

export type Address = {
    address1: string;
    city:     string;
    state:    string;
    zip:      number;
}

export type Logo = {
    _type: string;
    alt:   string;
    asset: Asset;
}

export type Asset = {
    _ref:  string;
    _type: string;
}

export type Socials = {
    facebook:  string;
    twitter:   null;
    instagram: null;
    youtube:   string;
}

export default MetaData