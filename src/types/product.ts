export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  size: string;
  image: string;
  rating: number;
  location: string;
  seller: {
    name: string;
    avatar: string;
  };
}