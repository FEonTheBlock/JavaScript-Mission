/** @jsx createElement */
import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';
import { AddProduct, CurrentProducts } from '../components';

function ProductAddMenu() {
  return (
    <VendingMachine>
      <AddProduct />
      <CurrentProducts />
    </VendingMachine>
  );
}

export default ProductAddMenu;
