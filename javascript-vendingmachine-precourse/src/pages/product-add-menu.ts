import { DataProps } from './../index';
import { createElement, useState } from '../utils/Soact/v2';

import { VendingMachine } from '../layouts';

interface ProductAddMenuProps extends DataProps {}

function ProductAddMenu({
  products,
  setProducts,
}: PropsWithChildren<ProductAddMenuProps>) {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    quantity: 0,
  });

  const changeProductName = (e: InputEvent) => {
    setProduct({ ...product, name: (e.target as HTMLInputElement).value });
  };
  const changePrice = (e: InputEvent) => {
    setProduct({ ...product, price: +(e.target as HTMLInputElement).value });
  };
  const changeQuantity = (e: InputEvent) => {
    setProduct({ ...product, quantity: +(e.target as HTMLInputElement).value });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    setProducts([...products, product]);
    setProduct({ name: '', price: 0, quantity: 0 });
  };

  return createElement(
    VendingMachine,
    null,
    createElement('h2', null, '상품 추가하기'),
    createElement(
      'form',
      { onsubmit: handleSubmit },
      createElement('input', {
        type: 'text',
        placeholder: '상품명',
        value: product.name,
        oninput: changeProductName,
      }),
      createElement('input', {
        type: 'number',
        placeholder: '가격',
        value: `${product.price || ''}`,
        oninput: changePrice,
      }),
      createElement('input', {
        type: 'number',
        placeholder: '수량',
        value: `${product.quantity || ''}`,
        oninput: changeQuantity,
      }),
      createElement('button', { type: 'submit' }, '추가하기')
    ),
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
          createElement('th', null, '수량')
        )
      ),
      createElement(
        'tbody',
        null,
        ...products.map(({ name, price, quantity }) =>
          createElement(
            'tr',
            null,
            createElement('td', null, name),
            createElement('td', null, `${price}`),
            createElement('td', null, `${quantity}`)
          )
        )
      )
    )
  );
}

export default ProductAddMenu;
