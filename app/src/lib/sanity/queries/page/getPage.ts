export const getPage = `
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

export default getPage;
