import store from '@/store';
import { handleAddMenu, handlePurchase } from '@/hooks';
import { COINS } from '@/constants';
import { Coin } from '@/types';

export const AddMenu = (store: store) => {
  const { product, charge } = store.store;

  const $addMenu = document.createElement('div');
  $addMenu.className = 'product-add-menu';

  const $addMenuInput = document.createElement('label');
  $addMenuInput.innerHTML = `
    금액
    <input id="charge-input" type="number" min="0" step="10" placeholder="투입금액" min="0"/>
  `;

  const $addMenuButton = document.createElement('button');
  $addMenuButton.setAttribute('id', 'charge-button');
  $addMenuButton.innerHTML = '투입하기';
  $addMenuButton.addEventListener('click', () => {
    const $input = document.getElementById('charge-input') as HTMLInputElement;

    handleAddMenu(store, $input);
  });

  const $addedPrice = document.createElement('div');
  $addedPrice.innerHTML = `
    투입한 금액: <span id="charge-amount">${store.store.insertedCoin}</span>'원'
  `;

  const $addTable = document.createElement('table');

  $addTable.innerHTML = `
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
    <td class="product-purchase-name" data-product-name='${name}'>${name}</td>
    <td class="product-purchase-price" data-product-price="${price}">${price}</td>
    <td
      class="product-purchase-quantity"
      data-product-quantity="${quantity}"
    >${quantity}</td>
    <td><button class="purchase-button" ${
      quantity === 0 ? 'disabled' : ''
    }>구매하기</button></td>
  </tr>`
    )}
    </tbody>
`;

  const $chargesTable = document.createElement('div');
  $chargesTable.innerHTML = `<h2>잔돈</h2>
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
            <td id="coin-500-quantity">${charge[500]}개</td>
          </tr>
          <tr>
            <th>100원</th>
            <td id="coin-100-quantity">${charge[100]}개</td>
          </tr>
          <tr>
            <th>50원</th>
            <td id="coin-50-quantity">${charge[50]}개</td>
          </tr>
          <tr>
            <th>10원</th>
            <td id="coin-10-quantity">${charge[10]}개</td>
          </tr>
        </tbody>
      </table>`;

  const $returnChargeButton = document.createElement('button');
  $returnChargeButton.setAttribute('id', 'coin-return-button');
  $returnChargeButton.innerHTML = '반환하기';
  $returnChargeButton.addEventListener('click', () => {
    const coins = [...COINS].sort((a, b) => b - a) as Coin[];
    let restCharge = store.store.insertedCoin;
    const returnedCharge = store.store.charge;

    coins.forEach((coin) => {
      let coinCount = store.store.charge[coin];
      while (coinCount > 0 && restCharge % coin !== restCharge) {
        coinCount -= 1;
        restCharge -= coin;
        returnedCharge[coin] -= 1;
      }
    });

    store.setCharge = returnedCharge;
    store.setInsertedCoin = restCharge;
  });
  $chargesTable.append($returnChargeButton);

  $addMenu.append(
    $addMenuInput,
    $addMenuButton,
    $addedPrice,
    $addTable,
    $chargesTable
  );

  $addTable.addEventListener('click', (e: any) => {
    handlePurchase(store, e);
  });

  return $addMenu;
};
