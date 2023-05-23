export const getSiteMetaData = `
*[_type=="siteMeta"][0] {
  site_name,
  url,
  logo,
  isGoogleAnalyticsDisabled,
  isPlausibleEnabled,
  "business" : {
    business_name,
    phone,
    "address" : {
      "line1" : address_line1,
      city,
      state,
      zip
    },
  },
  "socialMedia" : {
    facebook,
    instagram,
    twitter,
    youtube
  },
  "plausible" : {
    dataDomain
  },
  "googleAnalytics" : {
    googleanalyticsId,
    googleSiteVerificationId,
  },
  "openGraph" : {
    ogTitle,
    ogDescription,
    ogImage
  }
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
export const getPosts = `
*[_type == "post" && references(*[_type == 'category' && title == $tag]._id) && publishedAt < now()][0...$max] | order(publishedAt desc) {
  ...,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "")
}
`;
