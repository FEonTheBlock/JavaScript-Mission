export type Menu =
  | 'product-purchase-menu'
  | 'vending-machine-manage-menu'
  | 'product-add-menu';

export const Tabs: { [k in Menu]: string } = {
  'product-purchase-menu': '상품 관리',
  'vending-machine-manage-menu': '잔동 충전',
  'product-add-menu': '상품 구매',
};

export type Charge = {
  500: number;
  100: number;
  50: number;
  10: number;
};
export type Product = {
  name: string;
  price: number;
  quantity: number;
};

export type Store = {
  actualMenu: Menu;
  product: Product[];
  charge: Charge;
};

export type Coin = 10 | 50 | 100 | 500;
