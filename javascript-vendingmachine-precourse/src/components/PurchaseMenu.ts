import { Store } from '@/types';

export const PurchaseMenu = (store: Store) => {
  const $purchaseMenu = document.createElement('div');
  $purchaseMenu.className = 'product-purchase-menu';

  const { product } = store;

  // const $rows = product.map(({ name, price, quantity }) => {
  //   const $row = document.createElement('tr');

  //   const $name = document.createElement('td');
  //   $name.className = 'product-manage-name';
  //   $name.textContent = name;

  //   const $price = document.createElement('td');
  //   $price.className = 'product-manage-price';
  //   $price.textContent = price + '';

  //   const $quantity = document.createElement('td');
  //   $quantity.className = 'product-manage-price';
  //   $quantity.textContent = quantity + '';

  //   $row.append($name, $price, $quantity);

  //   return $row;
  // });

  $purchaseMenu.innerHTML = `
    <form>
      <h2>상품 추가하기</h2>
      <input type="text" id="product-name-input" placeholder="상품명"/>
      <input type="number" id="product-price-input" placeholder="가격"/>
      <input type="number" id="product-quantity-input" placeholder="수량"/>
      <button id="product-add-button">추가하기</button>
    </form>
    <table class="products">
      <h2>상품 현황</h2>
      <thead>
        <tr>
          <th class="product-manage-name">상품명</th>
          <th class="product-manage-price">가격</th>
          <th class="product-manage-quantity">수량</th>
        </tr>
      </thead>
      <tbody>
        ${product.map(
          ({ name, price, quantity }) => `<tr>
        <td class="product-manage-name">${name}</td>
        <td class="product-manage-price">${price}</td>
        <td class="product-manage-quantity">${quantity}</td>
      </tr>`
        )}
      </tbody>
    </table>`;
  return $purchaseMenu;
};
