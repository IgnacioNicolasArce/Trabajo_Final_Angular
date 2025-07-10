export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  specifications?: {
    brand?: string;
    model?: string;
    color?: string;
    size?: string;
    weight?: string;
    material?: string;
  };
} 