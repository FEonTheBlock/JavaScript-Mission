// export const COINS = [500, 100, 50, 10] as const;

import { Store } from '@/types';

export const INITIAL_VENDOR_STORE: Store = {
  actualMenu: 'vending-machine-manage-menu',
  product: [],
  charge: {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  },
  insertedCoin: 0,
};

export const COINS = [500, 100, 50, 10];
