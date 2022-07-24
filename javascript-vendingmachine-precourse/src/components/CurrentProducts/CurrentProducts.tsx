/** @jsx createElement */
import { createElement } from '../../utils/Soact/v2';

import {
  useProductsQuery,
  useDeleteProductMutation,
} from '../../api/query/products';

function CurrentProducts() {
  const { data: products } = useProductsQuery();
  const { mutate: deleteProductMutate } = useDeleteProductMutation();

  return (
    <div>
      <h2>상품 현황</h2>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map(({ name, price, quantity }) => {
            const deleteProduct = () => {
              deleteProductMutate(name);
            };

            return (
              <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                  <button onclick={deleteProduct}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentProducts;
