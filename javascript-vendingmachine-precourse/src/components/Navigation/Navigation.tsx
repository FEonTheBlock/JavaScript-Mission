/** @jsx createElement */
import { createElement } from '../../utils/Soact/v2';
import { Link } from '../../utils/SoactRouter/v1';

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="product-add-menu">상품 관리</Link>
      </li>
      <li>
        <Link href="vending-machine-manage-menu">잔돈 충전</Link>
      </li>
      <li>
        <Link href="product-purchase-menu">상품 구매</Link>
      </li>
    </ul>
  );
}

export default Navigation;
