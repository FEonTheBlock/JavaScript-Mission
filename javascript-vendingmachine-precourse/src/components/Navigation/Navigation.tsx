/** @jsx createElement */
import { createElement } from '../../utils/Soact/v2';
import { Link } from '../../utils/SoactRouter/v1';

function Navigation() {
  const productAddMenu = 'product-add-menu';
  const vendingMachineManageMenu = 'vending-machine-manage-menu';
  const productPurchaseMenu = 'product-purchase-menu';
  return (
    <ul>
      <li>
        <Link id={productAddMenu} href={productAddMenu}>
          상품 관리
        </Link>
      </li>
      <li>
        <Link id={vendingMachineManageMenu} href={vendingMachineManageMenu}>
          잔돈 충전
        </Link>
      </li>
      <li>
        <Link id={productPurchaseMenu} href={productPurchaseMenu}>
          상품 구매
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
