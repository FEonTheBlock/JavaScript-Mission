import { Store } from '@/types';

export const ManageMenu = (store: Store) => {
  const { charge } = store;

  const $manageMenu = document.createElement('div');
  $manageMenu.className = 'vending-machine-manage-menu';

  const $manageCoinInput = document.createElement('div');
  const $manageCoinList = document.createElement('div');

  const $manageTitle = document.createElement('h2');
  $manageTitle.textContent = '자판기 동전 충전하기';

  const $manageLabel = document.createElement('label');
  const $manageInput = document.createElement('input');
  $manageInput.setAttribute('type', 'number');
  $manageInput.setAttribute('id', 'vending-machine-charge-input');
  $manageInput.setAttribute('placeholder', '충전할 금액');
  $manageLabel.append($manageInput);

  const $manageButton = document.createElement('button');
  $manageButton.textContent = '충전하기';
  $manageButton.setAttribute('id', 'vending-machine-charge-button');

  const $chargeAmountWrap = document.createElement('div');
  $chargeAmountWrap.textContent = '보유 금액: ';
  const $chargeAmount = document.createElement('span');
  $chargeAmount.setAttribute('id', 'vending-machine-charge-amount');
  $chargeAmount.textContent =
    Object.entries(charge).reduce(
      (acc, [coin, amount]) => acc + +coin * amount,
      0
    ) + '원';
  $chargeAmountWrap.append($chargeAmount);

  $manageCoinInput.append($manageTitle, $manageLabel, $chargeAmountWrap);

  $manageCoinList.innerHTML = `
<h2>동전 보유 현황</h2>
<table>
  <thead>
    <tr>
      <td>동전</td>
      <td>개수</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>500원</th>
      <td id="vending-machine-coin-500-quantity">${charge[500]}</td>
    </tr>
    <tr>
      <th>100원</th>
      <td id="vending-machine-coin-100-quantity">${charge[100]}</td>
    </tr>
    <tr>
      <th>50원</th>
      <td id="vending-machine-coin-50-quantity">${charge[50]}</td>
    </tr>
    <tr>
      <th>10원</th>
      <td id="vending-machine-coin-10-quantity">${charge[10]}</td>
    </tr>
  </tbody>
</table>`;

  $manageMenu.append($manageCoinInput, $manageCoinList);

  return $manageMenu;
};
