 export type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    category: {
      name: string;
      slug: string;
    };
    tags: string[];
    features: string[];
    dimensions: {
      height: string;
      width: string;
      depth: string;
    };
    slug: string;
    rating: number;
  };
    