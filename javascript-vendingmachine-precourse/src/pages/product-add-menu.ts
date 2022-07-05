import { createElement } from '../utils/Soact';

import { Link } from '../utils/Router';

const productAddMenu = ({}: DefaultProps) => {
  return createElement(
    'div',
    null,
    `
      <h1>productAddMenu 페이지</h1>
      ${Link({ href: '/product-purchase-menu', children: '상품 구매로 이동' })}
      ${Link({
        href: '/vending-machine-manage-menu',
        children: '잔돈 충전으로 이동',
      })}
      `
  );
};

export default productAddMenu;
