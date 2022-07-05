import { createElement } from '../utils/Soact';

import { Link } from '../utils/Router';

const vendingMachineManageMenu = ({}: DefaultProps) => {
  return createElement(
    'div',
    null,
    `
      <h1>vendingMachineManageMenu 페이지</h1>
      ${Link({ href: '/product-add-menu', children: '상품 관리로 이동' })}
      ${Link({ href: '/product-purchase-menu', children: '상품 구매로 이동' })}
      `
  );
};

export default vendingMachineManageMenu;
