/** @jsx createElement */
import { createElement, useState } from '../../utils/Soact/v2';
import {
  useProductsQuery,
  useAddProductMutation,
} from '../../api/query/products';

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

  return (
    <div>
      <h2>상품 추가하기</h2>
      <form onsubmit={handleSubmit}>
        <input
          type="text"
          placeholder="상품명"
          value={product.name}
          oninput={changeProductName}
        />
        <input
          type="number"
          placeholder="가격"
          value={`${product.price}`}
          oninput={changePrice}
        />
        <input
          type="number"
          placeholder="수량"
          value={`${product.quantity}`}
          oninput={changeQuantity}
        />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}

export default AddProduct;
