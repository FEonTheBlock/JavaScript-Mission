// export const COINS = [500, 100, 50, 10] as const;

import { Store } from '@/types';

export const INITIAL_VENDOR_STORE: Store = {
  actualMenu: 'vending-machine-manage-menu',
  product: [
    { name: '코올라', price: 100, quantity: 33 },
    { name: '코올라2', price: 1050, quantity: 332 },
  ],
  charge: {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  },
};
