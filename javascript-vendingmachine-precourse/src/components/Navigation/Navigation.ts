import { createElement } from '../../utils/Soact/v2';
import Link from '../../utils/SoactRouter/v1/Link';

interface NavigationProps {}

function Navigation(prop: PropsWithChildren<NavigationProps>) {
  return createElement(
    'ul',
    null,
    createElement(
      'li',
      null,
      createElement(Link, { href: 'product-add-menu' }, '상품 관리')
    ),
    createElement(
      'li',
      null,
      createElement(Link, { href: 'vending-machine-manage-menu' }, '잔돈 충전')
    ),
    createElement(
      'li',
      null,
      createElement(Link, { href: 'product-purchase-menu' }, '상품 구매')
    )
  );
}

export default Navigation;
