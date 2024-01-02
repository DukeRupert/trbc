export const getEvent = `
  *[_type == "event" && slug.current == $slug][0]{
    title,
    slug,
    coverImage,
    tags[]->{title, slug},
    category[]->{title},
    date,
    author->{name, slug, image},
    content[],
    "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
  }
`;

export default getEvent;