export type RootStackParamList = {
  Home: undefined;
  Details: {
    product: Product;
  };
};
export type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  category: string;
  stock: number;
  rating: number;
  status: string;
  weight: number;
  sku: string;
};
