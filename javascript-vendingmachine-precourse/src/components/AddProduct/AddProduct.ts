import {
  useProductsQuery,
  useAddProductMutation,
} from '../../api/query/products';
import { createElement, useState } from '../../utils/Soact/v2';

function AddProduct() {
  const { data: products } = useProductsQuery();
  const { mutate } = useAddProductMutation();
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

    if (products?.find(({ name }) => name === product.name)) {
      alert(`${product.name}는(은) 이미 존재하는 상품입니다.`);
    } else {
      mutate(product);
      setProduct({ name: '', price: 100, quantity: 0 });
    }
  };

  return createElement(
    'div',
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
        step: 10,
        min: 100,
        value: `${product.price}`,
        oninput: changePrice,
      }),
      createElement('input', {
        type: 'number',
        placeholder: '수량',
        value: `${product.quantity}`,
        oninput: changeQuantity,
      }),
      createElement('button', { type: 'submit' }, '추가하기')
    )
  );
}

export default AddProduct;
