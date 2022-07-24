import { Store } from '@/types';

export const AddMenu = (store: Store) => {
  const { product, charge } = store;

  const $addMenu = document.createElement('div');
  $addMenu.className = 'product-add-menu';
  $addMenu.innerHTML = `
  <h2>금액 투입</h2>
  <label>
    금액
    <input id="charge-input" type="number" placeholder="투입금액" />
  </label>
  <button id="charge-button">투입하기</button>

  투입한 금액: <span id="charge-amount"></span>

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
    ${product.map(
      ({ name, price, quantity }) => `<tr class="product-purchase-item">
    <td class="product-purchase-name" data-product-name="${name}">
      ${name}
    </td>
    <td class="product-purchase-price" data-product-price="${price}">
      ${price}
    </td>
    <td
      class="product-purchase-quantity"
      data-product-quantity="${quantity}"
    >
      ${quantity}
    </td>
    <td><button class="purchase-button">구매하기</button></td>
  </tr>`
    )}
    </tbody>
  </table>

  <h2>잔돈</h2>
  <button id="coin-return-button">반환하기</button>
  <table>
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>500원</th>
        <td id="coin-500-quantity">${charge[500]}</td>
      </tr>
      <tr>
        <th>100원</th>
        <td id="coin-100-quantity">${charge[100]}</td>
      </tr>
      <tr>
        <th>50원</th>
        <td id="coin-50-quantity">${charge[50]}</td>
      </tr>
      <tr>
        <th>10원</th>
        <td id="coin-10-quantity">${charge[10]}</td>
      </tr>
    </tbody>
  </table>`;
  return $addMenu;
};
