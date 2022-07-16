/** @jsx createElement */
import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';
import {
  InsertMoney,
  BuyableCurrentProducts,
  GiveChangeCoin,
} from '../components';

function ProductPurchaseMenu() {
  return (
    <VendingMachine>
      <InsertMoney />
      <BuyableCurrentProducts />
      <GiveChangeCoin />
    </VendingMachine>
  );
}

export default ProductPurchaseMenu;
