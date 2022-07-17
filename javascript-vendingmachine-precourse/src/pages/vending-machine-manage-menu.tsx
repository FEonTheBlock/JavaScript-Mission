/** @jsx createElement */
import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';
import { ChargeCoin, CurrentCoin } from '../components';

function VendingMachineManageMenu() {
  return (
    <VendingMachine>
      <ChargeCoin />
      <CurrentCoin />
    </VendingMachine>
  );
}

export default VendingMachineManageMenu;
