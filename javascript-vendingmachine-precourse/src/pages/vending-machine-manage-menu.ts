import { VendingMachine } from '../layouts';

interface VendingMachineManageMenuProps extends DefaultProps {
  data: Data;
  setData: SetState<Data>;
}

const vendingMachineManageMenu = ({}: DefaultProps) => {
  return `
    ${VendingMachine({
      children: `
        <h2>잔돈 충전</h2>
      `,
    })}
  `;
};

export default vendingMachineManageMenu;
