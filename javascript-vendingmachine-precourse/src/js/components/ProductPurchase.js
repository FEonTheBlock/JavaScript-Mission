import { INITIAL_COIN_LIST } from '../constant/index.js';
import Component from '../core/Component.js';
import { $ } from '../utils/dom.js';
import { generatePayCoinList, isMultipleOfTen, isPositiveInteger } from '../utils/index.js';

export default class ProductPurchase extends Component {
  template() {
    return `
    <section class="product-purchase">
        <h2>금액 투입</h2>
        <input id="charge-input" type="number" />
        <button id="charge-button">투입하기</button>
        <p>투입한 금액: <span id="charge-amount">${this.inputMoney}</span>원</p>
        <h2>구매할 수 있는 상품 현황</h2>
        <table border="1">
            <thead>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
                <th>구매</th>  
            </thead>
            <tbody>
              ${this.productList
                .map(({ name, price, quantity }) => {
                  return `
                <tr class="product-purchase-item">
                    <td class="product-purchase-name" data-product-name=${name}>${name}</td>
                    <td class="product-purchase-price" data-product-price="${price}">${price}</td>
                    <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
                    <td><button class="purchase-button" ${
                      quantity === 0 ? 'disabled' : ''
                    }>구매하기</button></td>
                </tr>
                `;
                })
                .join('')}
            </tbody>
        </table>
        <h2>잔돈</h2>
        <button id="coin-return-button">반환하기</button>
        <table border="1">
        <thead>
          <th>동전</th>
          <th>개수</th>
        </thead>
        <tbody>
          ${Object.entries(this.payCoinList)
            .map(([key, val]) => {
              return `
              <tr>
                <td id="coin-${key}-quantity">${key}원</td>
                <td>${val}개</td>
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
    const {
      changeInputMoney,
      purchaseProduct,
      coinList,
      holdingMoney,
      chargeChange,
      returnChange,
    } = this.props;

    $('#charge-button').addEventListener('click', () => {
      const $inputMoney = Number($('#charge-input').value);

      if (!isPositiveInteger($inputMoney) || !isMultipleOfTen($inputMoney)) {
        alert('투입 금액은 양수이며 10원으로 나누어 떨어지는 금액만 가능합니다.');
        return;
      }

      changeInputMoney(this.inputMoney + $inputMoney);
    });

    $('table').addEventListener('click', ({ target }) => {
      if (target.className !== 'purchase-button') return;

      const $purchaseTargetFirstElement = target.closest('tr').firstElementChild;
      const productName = $purchaseTargetFirstElement.dataset.productName;
      const productPrice = Number(
        $purchaseTargetFirstElement.nextElementSibling.dataset.productPrice
      );

      if (this.inputMoney < productPrice) {
        alert('구매하기 위한 투입금액이 부족합니다.');
        return;
      }

      let cost = 0;

      const newProductList = this.productList.map(({ name, price, quantity }) => {
        if (name === productName) {
          cost = price;
          return { name, price, quantity: quantity - 1 };
        } else {
          return { name, price, quantity };
        }
      });

      purchaseProduct(newProductList, cost);
    });

    $('#coin-return-button').addEventListener('click', () => {
      if (this.inputMoney <= 0) {
        alert('반환할 투입금액이 없습니다.');
        return;
      }

      // 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환
      if (holdingMoney < this.inputMoney) {
        changeInputMoney(0);
        returnChange({ ...coinList });
        chargeChange(0, { ...INITIAL_COIN_LIST });
      }

      const payCoinList = generatePayCoinList(this.inputMoney, coinList);
      const newCoinList = { ...coinList };

      [10, 50, 100, 500].forEach(coin => {
        newCoinList[coin] -= payCoinList[coin];
      });

      changeInputMoney(0);
      returnChange(payCoinList);
      chargeChange(holdingMoney - this.inputMoney, newCoinList);
    });
  }

  get inputMoney() {
    return this.props.inputMoney;
  }

  get productList() {
    return this.props.productList;
  }

  get payCoinList() {
    return this.props.payCoinList;
  }
}
