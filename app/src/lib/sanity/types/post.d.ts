// post schema
export type Post = {
    title:      string;
    coverImage: CoverImage;
    tags:       Category[];
    category:   Category[];
    date:       Date;
    content:    Content[];
}

export type Category = {
    title: string;
}

export type Content = {
    _key:     string;
    markDefs: any[];
    children: Child[];
    _type:    string;
    style:    string;
}

export type Child = {
    text:  string;
    _key:  string;
    _type: string;
    marks: any[];
}

export type CoverImage = {
    _type: string;
    asset: Asset;
}

export type Asset = {
    _ref:  string;
    _type: string;
}
