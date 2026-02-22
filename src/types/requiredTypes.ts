export type ReviewProps ={
  name: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  productImage: string;
}

export type newDropsProps ={
  id: number;
  title: string;
  name?:string;
  price: number;
  image?: string;
  images?: string[];
}


export type CategoryType = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type ProductType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryType;
  images: string[];
  creationAt: string;
  updatedAt: string;
};