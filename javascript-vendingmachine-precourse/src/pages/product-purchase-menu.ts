import { VendingMachine } from '../layouts';

interface ProductPurchaseMenuProps extends DefaultProps {
  data: Data;
  setData: SetState<Data>;
}

const productPurchaseMenu = ({}: ProductPurchaseMenuProps) => {
  return `
    ${VendingMachine({
      children: `
        <h2>상품 구매</h2>
      `,
    })}
  `;
};

export default productPurchaseMenu;
