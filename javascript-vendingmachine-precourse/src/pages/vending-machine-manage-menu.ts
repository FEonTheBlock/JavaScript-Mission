import { DataProps } from './../index';
import { createElement } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';

interface VendingMachineManageMenuProps extends DataProps {}

function VendingMachineManageMenu(
  props: PropsWithChildren<VendingMachineManageMenuProps>
) {
  return createElement(VendingMachine, null, 'VendingMachineManageMenu');
}

export default VendingMachineManageMenu;
