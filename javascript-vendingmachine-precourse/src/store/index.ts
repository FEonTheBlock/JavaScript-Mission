import { Menu } from '@/types';

type Product = {
  name: string;
  price: number;
  quantity: number;
};

type Store = {
  actualMenu: Menu;
  product: Product[];
  charge: {
    500: number;
    100: number;
    50: number;
    10: number;
  };
};

export const store: Store = {
  actualMenu: 'product-add-menu',
  product: [],
  charge: {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  },
};
