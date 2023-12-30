export const getPage = `
*[_type == "page" && path == $pathname][0]{
  "blocks" : pageBuilder[],
  "seo" : {
    title,
    metaDescription,
    mainImage,
    openGraph
  }
}
`;

export default getPage;
