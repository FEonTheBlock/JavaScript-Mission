export const ManageMenu = (className = 'vending-machine-manage-menu') => {
  const $manageMenu = document.createElement('div');
  $manageMenu.className = className;
  $manageMenu.innerHTML = `
  <form>
  <h2>자판기 동전 충전하기</h2>
  <label>
    금액
    <input
      type="number"
      placeholder="충전할 금액"
      id="vending-machine-charge-input"
    />
  </label>
  <button id="vending-machine-charge-button">충전하기</button>
</form>

보유금액: <span id="vending-machine-charge-amount"></span>

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
      <td id="vending-machine-coin-500-quantity"></td>
    </tr>
    <tr>
      <th>100원</th>
      <td id="vending-machine-coin-100-quantity"></td>
    </tr>
    <tr>
      <th>50원</th>
      <td id="vending-machine-coin-50-quantity"></td>
    </tr>
    <tr>
      <th>10원</th>
      <td id="vending-machine-coin-10-quantity"></td>
    </tr>
  </tbody>
</table>`;
  return $manageMenu;
};
