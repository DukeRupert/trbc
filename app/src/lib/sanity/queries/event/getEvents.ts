export const getEvents = `
  {
    "events" : *[_type == "event"][$min...$max] | order(date desc) {
      title,
      slug,
      coverImage,
      tags[]->{title, slug},
      category[]->{title},
      date,
      author->{name, slug, image},
      content[],
      "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
    },
    "total": count(*[_type == "event"])
  }
`;

export default getEvents;
