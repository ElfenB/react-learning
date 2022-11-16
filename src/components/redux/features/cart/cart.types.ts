export type Product = {
  description: string;
  image?: string;
  price: number;
  productId: number;
  title: string;
};

export type CartItem = Product & { amount: number };
