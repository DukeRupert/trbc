// Layout query for church data
const getMetaData = `
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

export default getMetaData;
