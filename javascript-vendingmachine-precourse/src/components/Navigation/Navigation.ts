import { createElement } from '../../utils/Soact';
import { Link } from '../../utils/Router';

const Navigation = ({}: DefaultProps = {}) => {
  return createElement(
    'nav',
    null,
    `
    <ul>
      <li>
        ${Link({
          id: 'product-add-menu',
          href: '/product-add-menu',
          children: '상품 관리',
        })}
      </li>
      <li>
        ${Link({
          id: 'vending-machine-manage-menu',
          href: '/vending-machine-manage-menu',
          children: '잔돈 충전',
        })}
      </li>
      <li>
        ${Link({
          id: 'product-purchase-menu',
          href: '/product-purchase-menu',
          children: '상품 구매',
        })}
      </li>
    </ul>
    `
  );
};

export default Navigation;
