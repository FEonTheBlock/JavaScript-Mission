import { $ } from '../utils/dom.js';
import Dialog from '../utils/dialog.js';
import { validateChange } from '../utils/validation.js';

export default class ChangeManageView {
  $vendingMachineChargeForm;
  template = `
    <section id="vending-machine-manage-section">
      <form id="vending-machine-charge-form">
        <fieldset>
          <legend>잔돈 충전</legend>
          <input type="number" id="vending-machine-charge-input" placeholder="충전할 금액"/>
          <button id="vending-machine-charge-button">충전하기</button>
        </fieldset>
        <span id="vending-machine-charge-amount"></span>
      </form>
      <section id="current-charge-section">
        <h2>현재 잔돈</h2>
        <table id="current-charge-table"></table>
      </section>
    </section>
  `;

  // 초기 렌더링  (잔돈 충전 메뉴 + 현재 잔돈)
  render(changeInfo) {
    $('#current-menu').innerHTML = this.template;
    this.updateChangeInfo(changeInfo);
    this.$vendingMachineChargeForm = $('#vending-machine-charge-form');
    this.$vendingMachineChargeForm.addEventListener('submit', e => this.onChangeInput(e));
  }

  updateChangeInfo(changeInfo) {
    const { total, coins } = changeInfo;
    $('#vending-machine-charge-amount').textContent = `현재 총액: ${total}원`;
    $('#current-charge-table').innerHTML = '';
    $('#current-charge-table').innerHTML = this.createChangeInfo(coins);
  }

  createChangeInfo(coins) {
    const { coin500, coin100, coin50, coin10 } = coins;

    return `
      <thead>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>500원</td>
          <td id="vending-machine-coin-500-quantity">${coin500}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id="vending-machine-coin-100-quantity">${coin100}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id="vending-machine-coin-50-quantity">${coin50}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id="vending-machine-coin-10-quantity">${coin10}개</td>
        </tr>
      </tbody>
    `;
  }

  onChangeInput(e) {
    e.preventDefault();
    const [_, changeInput] = e.target;

    try {
      validateChange(+changeInput.value);
      Dialog.show('잔돈이 성공적으로 충전되었습니다!');
    } catch (error) {
      Dialog.error(error);
      return;
    }

    // 잔돈 충전 이벤트 발생
    const newEvent = new CustomEvent('submitChange', {
      detail: +changeInput.value,
    });
    this.$vendingMachineChargeForm.dispatchEvent(newEvent);
  }
}
