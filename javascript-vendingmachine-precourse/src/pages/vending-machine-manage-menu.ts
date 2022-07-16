import { Random } from '@woowacourse/mission-utils';

import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';
import { ChargeCoin, CurrentCoin } from '../components';

function VendingMachineManageMenu() {
  return createElement(
    VendingMachine,
    null,
    createElement(ChargeCoin),
    createElement(CurrentCoin)
  );
}

export default VendingMachineManageMenu;
