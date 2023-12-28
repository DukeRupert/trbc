// Layout query for church data
export const getMetaData = `
  *[_type == "siteMeta"][0]{
    business_name,
    site_name,
    description,
    phone,
    "socials": {
      facebook,
      twitter,
      instagram,
      youtube
    },
    logo,
    "address": {
      address1,
      city,
      state,
      zip
    },
  }
`;

export const getPageData = `
*[_type == "page" && path == $pathname][0]{
  "blocks" : pageBuilder[]{
    ..., features[]{
      ..., icon->{
        title,
        size,
        svg,
      }
    },
    defaultTag->{title},
    searchTags[]->{title},
  },
  "seo" : {
    title,
    metaDescription,
    mainImage,
    openGraph
  }
}
`;

// Get all posts associated with the given category
// export const getPosts = `
// *[_type == "post" && references(*[_type == 'category' && title == $tag]._id) && publishedAt < now()][0...$max] | order(publishedAt desc) {
//   ...,
//   "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "")
// }
// `

// Get all posts published before now
export const getPosts = `
*[_type == "post"][$min...$max] | order(publishedAt desc) {
    title,
    slug,
    coverImage,
    tags[]->{title},
    category[]->{title},
    date,
    author->{name, slug, image},
    content[],
    "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
  }
`;

// Get post based on slug
export const getPost = `
  *[_type == "post" && slug.current == $slug]{
    title,
    coverImage{asset->{url, metadata{lqip, dimensions}}},
    tag[]->{title},
    date,
    content[]{...,
      _type == 'image' => @{asset->{url, metadata{lqip, dimensions}}},
    }
  }
`;

export const getEvents = `
*[_type == "event"][] | order(date desc){
  title,
  coverImage{asset->{url, metadata{lqip, dimensions}}},
  tag[]->{title},
  date,
  content[]{...,
    _type == 'image' => @{asset->{url, metadata{lqip, dimensions}}},
  }
}
`;
