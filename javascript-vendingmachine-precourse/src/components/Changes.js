import { pickRandomCoins } from '../utils/pickCoins.js';
import Component from './Component.js';

export default class Changes extends Component {
  setup() {}
  template() {
    const coins = Object.entries(this.$props.changes.coins);

    const ChangesInputs = `
      <h2>자판기 동전 충전하기</h2> 
      <input id="vending-machine-charge-input" type="number" />
      <button id="vending-machine-charge-button">충전하기</button>
      <p id="vending-machine-charge-amount">보유 금액: ${this.$props.changes.total}</p>
    `;

    const CoinTr = coins
      .map(
        ([coin, count]) => `
      <tr>
        <td>${coin}</td>
        <td id="vending-machine-coin-${coin}-quantity">${count}</td>
      </tr>
    `,
      )
      .join(' ');

    const CoinTable = `
      <h2>동전 보유 현황</h2> 
      <table>
        <th>동전</th>
        <th>개수</th>
        ${CoinTr}
      </table>
    `;

    return `
      ${ChangesInputs}
      ${CoinTable}
    `;
  }

  setEvent() {
    this.addEvent(
      'click',
      '#vending-machine-charge-button',
      this.handleChanges.bind(this),
    );
  }

  handleChanges() {
    const { addCoins } = this.$props;
    const newTotal = this.$target.querySelector(
      '#vending-machine-charge-input',
    )?.value;

    if (newTotal < 10) {
      window.alert('잔돈은 10원 이상이여야 합니다.');
      return;
    }

    const newCoins = pickRandomCoins(this.$props.changes.coins, newTotal);
    addCoins(newTotal, newCoins);
  }
}
