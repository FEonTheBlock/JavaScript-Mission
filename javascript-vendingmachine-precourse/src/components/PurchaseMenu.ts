import { handlePurchaseMenu } from '@/hooks';
import store from '@/store';

export const PurchaseMenu = (store: store) => {
  const { product } = store.store;
  const $purchaseMenu = document.createElement('div');
  $purchaseMenu.className = 'product-purchase-menu';

  const $purchaseMenuForm = document.createElement('form');
  $purchaseMenuForm.setAttribute('id', 'product-purchase-form');

  const $formButton = document.createElement('button');
  $formButton.setAttribute('id', 'product-add-button');
  $formButton.setAttribute('type', 'button');
  $formButton.innerHTML = '추가하기';

  $formButton.addEventListener('click', () => {
    const $form = document.getElementById(
      'product-purchase-form'
    ) as HTMLFormElement;
    handlePurchaseMenu(store, $form);
  });

  $purchaseMenuForm.innerHTML = `
    <h2>상품 추가하기</h2>
    <input type="text" id="product-name-input" placeholder="상품명" name="name" required />
    <input type="number" id="product-price-input" placeholder="가격" min="0" step="10" name="price" required />
    <input type="number" id="product-quantity-input" placeholder="수량" min="0" name="quantity" required />
  `;
  $purchaseMenuForm.append($formButton);

  const $purchaseMenuList = document.createElement('div');
  $purchaseMenuList.innerHTML = `<table class="products">
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

  $purchaseMenu.append($purchaseMenuForm, $purchaseMenuList);

  return $purchaseMenu;
};
