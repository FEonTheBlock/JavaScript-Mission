import { Navigation } from '../../components';
import { createElement } from '../../utils/Soact/v2';

interface VendingMachineProps {}

function VendingMachine({ children }: PropsWithChildren<VendingMachineProps>) {
  return createElement(
    'div',
    null,
    createElement('h1', null, '자판기'),
    createElement('main', null, createElement(Navigation, null), ...children)
  );
}

export default VendingMachine;
