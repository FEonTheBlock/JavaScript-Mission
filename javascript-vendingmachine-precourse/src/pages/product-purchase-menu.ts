import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';
import {
  InsertMoney,
  BuyableCurrentProducts,
  GiveChangeCoin,
} from '../components';

function ProductPurchaseMenu() {
  return createElement(
    VendingMachine,
    null,
    createElement(InsertMoney),
    createElement(BuyableCurrentProducts),
    createElement(GiveChangeCoin)
  );
}

export default ProductPurchaseMenu;
