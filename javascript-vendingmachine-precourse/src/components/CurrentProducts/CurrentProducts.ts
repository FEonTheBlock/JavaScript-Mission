import {
  useDeleteProductMutation,
  useProductsQuery,
} from '../../api/query/products';
import { createElement } from '../../utils/Soact/v2';

function CurrentProducts() {
  const { data: products } = useProductsQuery();
  const { mutate: deleteProductMutate } = useDeleteProductMutation();

  return createElement(
    'div',
    null,
    createElement('h2', null, '상품 현황'),
    createElement(
      'table',
      null,
      createElement(
        'thead',
        null,
        createElement(
          'tr',
          null,
          createElement('th', null, '상품명'),
          createElement('th', null, '가격'),
          createElement('th', null, '수량'),
          createElement('th', null)
        )
      ),
      createElement(
        'tbody',
        null,
        ...(products || []).map(({ name, price, quantity }) => {
          const deleteProduct = () => {
            deleteProductMutate(name);
          };

          return createElement(
            'tr',
            null,
            createElement('td', null, name),
            createElement('td', null, `${price}`),
            createElement('td', null, `${quantity}`),
            createElement(
              'td',
              null,
              createElement('button', { onclick: deleteProduct }, '삭제')
            )
          );
        })
      )
    )
  );
}

export default CurrentProducts;
