import { getItem } from '../utils/localStorage.js';
import { pickMinCoins } from '../utils/pickCoins.js';
import Component from './Component.js';

export default class Purchase extends Component {
  setup() {
    const newState = getItem('Purchase');
    this.$state = {
      totalInput: 0,
      ...newState,
      returnCoins: {
        500: null,
        100: null,
        50: null,
        10: null,
      },
    };
  }
  template() {
    const MoneyAdder = `
      <h2>금액 투입</h2>
      <input id="charge-input" type="number" />
      <button id="charge-button">투입하기</button>
      <p id="charge-amount">투입한 금액: ${this.$state.totalInput}</p>
    `;

    const ProductTr = this.$props.products
      .map(
        ({ name, cost, count }) => `
    <tr class="product-purchase-item">
      <td class="product-purchase-name" data-product-name="${name}">${name}</td>
      <td class="product-purchase-price" data-product-price="${cost}">${cost}</td>
      <td class="product-purchase-quantity" data-product-quantity="${count}">${count}</td>
      <td><button class="purchase-button">구매하기</button></td>
    </tr>
    `,
      )
      .join(' ');
    const ProductsTable = `
    <h2>구매할 수 있는 상품 현황</h2>
    <table>
      <th>상품명</th>
      <th>가격</th>
      <th>수랑</th>
      <th>구매</th>
      ${ProductTr}
    </table>
    `;

    const coins = Object.entries(this.$state.returnCoins);
    const CoinTr = coins
      .map(
        ([coin, count]) => `
      <tr>
        <td>${coin}</td>
        <td id="coin-${coin}-quantity">${
          count === null ? '' : `${count}개`
        }</td>
      </tr>
    `,
      )
      .join(' ');

    const CoinsTable = `
    <h2>잔돈</h2>
    <button id="coin-return-button">반환하기</button>
    <table>
      <th>동전</th>
      <th>개수</th>
      ${CoinTr}
    </table>
    `;
    return `
      ${MoneyAdder}
      ${ProductsTable}
      ${CoinsTable}
    `;
  }
  setEvent() {
    this.addEvent('click', '#charge-button', this.handleAddCharge.bind(this));
    this.addEvent('click', '.purchase-button', this.handlePurchase.bind(this));
    this.addEvent('click', '#coin-return-button', this.handleReturn.bind(this));
  }
  handleAddCharge() {
    const newTotalInput = this.$target.querySelector('#charge-input').value;
    this.setState({
      totalInput: this.$state.totalInput + Number(newTotalInput),
    });
  }

  handlePurchase(e) {
    const $productItem = e.target.closest('.product-purchase-item');
    const { productName } = $productItem.querySelector(
      '.product-purchase-name',
    ).dataset;
    const { productPrice } = $productItem.querySelector(
      '.product-purchase-price',
    ).dataset;
    const { productQuantity } = $productItem.querySelector(
      '.product-purchase-quantity',
    ).dataset;

    const { decreaseProduct } = this.$props;

    if (productPrice > this.$state.totalInput) {
      window.alert('금액이 부족합니다.');
      return;
    }

    decreaseProduct({
      name: productName,
      price: productPrice,
      quantity: productQuantity,
    });

    this.setState({
      ...this.$state,
      totalInput: this.$state.totalInput - Number(productPrice),
    });
  }
  handleReturn() {
    const [newReturnCoins, newTotalInput] = pickMinCoins(
      this.$props.changes.coins,
      this.$state.totalInput,
    );
    this.setState({
      returnCoins: newReturnCoins,
      totalInput: newTotalInput,
    });
  }
}
