import type { Image } from '../common'
export type Post = {
    content:    Content[];
    excerpt:    string;
    title:      string;
    slug:       Slug;
    tags:       Tag[];
    date:       Date;
    coverImage: Image;
    category:   Category[];
    author:     Author;
}

export type Author = {
    name:  string;
    slug:  Slug;
    image: Image;
}

export type Slug = {
    current: string;
    _type:   string;
}

export type Category = {
    title: string;
}

export type Content = {
    style:    string;
    _key:     string;
    markDefs: any[];
    children: Child[];
    _type:    string;
}

export type Child = {
    marks: any[];
    text:  string;
    _key:  string;
    _type: string;
}

export type Tag = {
    title: string;
    slug:  Slug;
}

export default Post;
