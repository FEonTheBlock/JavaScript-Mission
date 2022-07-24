import { Store } from '@/types';

const store: Store = {
  actualMenu: 'product-add-menu',
  product: [
    { name: '코올라', price: 100, quantity: 33 },
    { name: '코올라2', price: 1002, quantity: 332 },
  ],
  charge: {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  },
};

export default store;
