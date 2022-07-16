/** @jsx createElement */
import { useMoneyQuery, useUpdateMoneyMutation } from '../../api/query/money';
import {
  useProductsQuery,
  useUpdateProductMutation,
} from '../../api/query/products';
import { createElement } from '../../utils/Soact/v2';

function BuyableCurrentProducts() {
  const { data: money } = useMoneyQuery();
  const { data: products } = useProductsQuery();

  const { mutate: updateMoneyMutate } = useUpdateMoneyMutation();
  const { mutate: updateProductMutate } = useUpdateProductMutation();

  return (
    <div>
      <h2>구매할 수 있는 상품 현황</h2>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            const { name, price, quantity } = product;

            const buyProduct = () => {
              const resultMoney = (money || 0) - price;
              if (resultMoney > 0) {
                product.quantity--;
                updateProductMutate(product);
                updateMoneyMutate(resultMoney);
              }
            };

            return (
              <tr>
                <th>{name}</th>
                <td>{`${price}`}</td>
                <td>{`${quantity}`}</td>
                <td>
                  <button
                    onclick={buyProduct}
                    disabled={!quantity || (money || 0) < price}
                  >
                    구매하기
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BuyableCurrentProducts;
