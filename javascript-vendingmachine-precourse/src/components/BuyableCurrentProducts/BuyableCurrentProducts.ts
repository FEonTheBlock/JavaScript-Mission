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

  return createElement(
    'div',
    null,
    createElement('h2', null, '구매할 수 있는 상품 현황'),
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
          createElement('th', null, '구매')
        )
      ),
      createElement(
        'tbody',
        null,
        ...(products || []).map((product) => {
          const { name, price, quantity } = product;

          const buyProduct = () => {
            const resultMoney = (money || 0) - price;
            if (resultMoney > 0) {
              product.quantity--;
              updateProductMutate(product);
              updateMoneyMutate(resultMoney);
            }
          };

          return createElement(
            'tr',
            null,
            createElement('th', null, name),
            createElement('td', null, `${price}`),
            createElement('td', null, `${quantity}`),
            createElement(
              'td',
              null,
              createElement(
                'button',
                {
                  onclick: buyProduct,
                  disabled: !quantity || (money || 0) < price,
                },
                '구매하기'
              )
            )
          );
        })
      )
    )
  );
}

export default BuyableCurrentProducts;
