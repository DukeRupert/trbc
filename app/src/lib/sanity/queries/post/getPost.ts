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

export default getPost;
