export type Product = {
  image?: string;
  price: number;
  productId: number;
  title: string;
};

export type CartItem = Product & { amount: number };
