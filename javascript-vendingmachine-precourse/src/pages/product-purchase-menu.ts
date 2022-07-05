import { createElement } from '../utils/Soact';

import { Link } from '../utils/Router';

const productPurchaseMenu = ({}: DefaultProps) => {
  return createElement(
    'div',
    null,
    `
      <h1>productPurchaseMenu 페이지</h1>
      ${Link({ href: '/product-add-menu', children: '상품 관리로 이동' })}
      ${Link({
        href: '/vending-machine-manage-menu',
        children: '잔돈 충전으로 이동',
      })}
      `
  );
};

export default productPurchaseMenu;
