import { DataProps } from './../index';
import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';

interface ProductPurchaseMenuProps extends DataProps {}

function ProductPurchaseMenu(
  props: PropsWithChildren<ProductPurchaseMenuProps>
) {
  return createElement(VendingMachine, null, 'ProductPurchaseMenu');
}

export default ProductPurchaseMenu;
