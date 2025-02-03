import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(
  `
  *[_type == "product"][0..11]{
    _id,
    name,
    description,
    price,
    quantity,
    "imageUrl": image.asset->url,
    tags,
    features,
    dimensions {
      height,
      width,
      depth
    },
    slug,
    rating
  }
  `
);

export const singleProductQuery = defineQuery(
  `
  *[_type == "product" && _id == $id][0]{
    _id,
    name,
    description,
    price,
    quantity,
    "imageUrl": image.asset->url,
    tags,
    features,
    dimensions {
      height,
      width,
      depth
    },
    slug,
    rating
  }
  `
);