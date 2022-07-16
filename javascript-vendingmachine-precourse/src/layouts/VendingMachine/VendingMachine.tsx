/**@jsx createElement */
import { createElement } from '../../utils/Soact/v2';
import { Navigation } from '../../components';

interface VendingMachineProps {}

function VendingMachine({ children }: PropsWithChildren<VendingMachineProps>) {
  // return (
  //   <div>
  //     <h1>자판기</h1>
  //     <main>
  //       <Navigation />
  //       {children || []}
  //     </main>
  //   </div>
  // );
  return createElement(
    'div',
    null,
    createElement('h1', null, '자판기'),
    createElement(
      'main',
      null,
      createElement(Navigation, null),
      ...(children || [])
    )
  );
}

export default VendingMachine;
