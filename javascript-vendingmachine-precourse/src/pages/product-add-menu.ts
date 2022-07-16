import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';
import { AddProduct, CurrentProducts } from '../components';

function ProductAddMenu() {
  return createElement(
    VendingMachine,
    null,
    createElement(AddProduct),
    createElement(CurrentProducts)
  );
}

export default ProductAddMenu;
