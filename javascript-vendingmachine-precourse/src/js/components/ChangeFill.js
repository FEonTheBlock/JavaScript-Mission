import Component from '../core/Component.js';
import { $, generateCoinList, isMultipleOfTen, isPositiveInteger } from '../utils/index.js';

export default class ChangeFill extends Component {
  template() {
    return `
        <section class="change-fill">
          <h2>자판기 동전 추가하기</h2>
          <input id="vending-machine-charge-input" type="number" />
          <button id="vending-machine-charge-button">충전하기</button>
          <p id="vending-machine-charge-amount">보유 금액: ${this.holdingMoney}원</p>
          <h2>동전 보유 현황</h2>
          <table border="1">
            <thead>
              <th>동전</th>
              <th>개수</th>
            </thead>
            <tbody>
              ${Object.entries(this.coinList)
                .map(([key, val]) => {
                  return `
                  <tr>
                    <td>${key}원</td>
                    <td id="vending-machine-coin-${key}-quantity">${val}개</td>
                  </tr>
                  `;
                })
                .reverse()
                .join('')}
            </tbody>
          </table>
        </section>
        `;
  }

  setEvent() {
    const { chargeChange } = this.props;

    $('#vending-machine-charge-button').addEventListener('click', () => {
      const amount = Number($('#vending-machine-charge-input').value);

      if (!isPositiveInteger(amount) || !isMultipleOfTen(amount)) {
        alert('충전 금액은 양수이면서 10의 배수이어야 합니다.');
        return;
      }

      const generatedCoinList = generateCoinList(amount);
      const newCoinList = { ...this.coinList };

      Object.entries(generatedCoinList).forEach(([key, val]) => {
        newCoinList[key] += val;
      });

      chargeChange(this.holdingMoney + amount, newCoinList);
    });
  }

  get holdingMoney() {
    return this.props.holdingMoney;
  }

  get coinList() {
    return this.props.coinList;
  }
}
