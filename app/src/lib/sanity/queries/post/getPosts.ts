export const getPosts = `
  {
    "posts" : *[_type == "post"][$min...$max] | order(publishedAt desc) {
      title,
      slug,
      coverImage,
      tags[]->{title},
      category[]->{title},
      date,
      author->{name, slug, image},
      content[],
      "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
    },
    "total": count(*[_type == "post"])
  }
`;

export default getPosts;
