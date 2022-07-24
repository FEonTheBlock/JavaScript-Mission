/** @jsx createElement */
import { createElement } from '../../utils/Soact/v2';

import { useMoneyQuery, useUpdateMoneyMutation } from '../../api/query/money';
import {
  useProductsQuery,
  useUpdateProductMutation,
} from '../../api/query/products';

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
                <th className="product-purchase-name" data-product-name={name}>
                  {name}
                </th>
                <td
                  className="product-purchase-price"
                  data-product-price={price}
                >
                  {price}
                </td>
                <td
                  className="product-purchase-quantity"
                  data-product-quantity={quantity}
                >
                  {quantity}
                </td>
                <td>
                  <button
                    className="purchase-button"
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
