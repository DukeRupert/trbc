const getEvents = `
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

export default getEvents;
