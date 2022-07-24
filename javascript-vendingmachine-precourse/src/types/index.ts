export type Menu =
  | 'product-purchase-menu'
  | 'vending-machine-manage-menu'
  | 'product-add-menu';

export const Tabs: { [k in Menu]: string } = {
  'product-purchase-menu': '상품 관리',
  'vending-machine-manage-menu': '잔동 충전',
  'product-add-menu': '상품 구매',
};
