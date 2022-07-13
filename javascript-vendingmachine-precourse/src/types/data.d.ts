interface Product {
  product: string;
  price: number;
  quantity: number;
}

interface Data {
  products: Product[];
  coins: {
    500: number;
    100: number;
    50: number;
    10: number;
  };
}
