import { $ } from '../utils/dom.js';
import Dialog from '../utils/dialog.js';
import { validateChange } from '../utils/validation.js';

export default class ProductPurchaseView {
  template = `
    <section id="product-purchase-section">
      <form id="charge-input-form">
        <fieldset>
          <legend>금액 투입</legend>
          <input id="charge-input" type="number" placeholder="투입할 금액"/>
          <button type="submit" id="charge-button">투입하기</button>
        </fieldset>
        <span id="charge-amount"></span>
      </form>
      <section id="available-product-section">
        <h2>구매할 수 있는 상품 현황</h2>
        <table id="available-product-table"></table>
      </section>
      <section id="change-section">
        <h2>잔돈</h2>
        <button id="coin-return-button">반환하기</button>
        <table id="coin-return-table"></table>
      </section>
    </section>
  `;

  // 초기 렌더링
  render({ inserted, productList, coinsForChange }) {
    $('#current-menu').innerHTML = this.template;
    this.updateInsertCoins(inserted); // 투입 금액
    this.updateProductList(productList); // 상품 리스트
    this.updateReturnChange(coinsForChange); // 잔돈 현황
    $('#charge-input-form').addEventListener('submit', e => this.onInsertCoin(e));
    $('#available-product-table').addEventListener('click', e => this.onClickPurchaseProduct(e));
    $('#coin-return-button').addEventListener('click', () => this.onClickReturnChange());
  }

  // 투입 금액 뷰 업데이트
  updateInsertCoins(inserted) {
    $('#charge-amount').textContent = `투입한 금액 : ${inserted}원`;
  }

  // 상품 목록 뷰 업데이트
  updateProductList(productList) {
    $('#available-product-table').innerHTML = '';
    $('#available-product-table').innerHTML = this.createProductList(productList);
  }

  // 잔돈 반환 뷰 업데이트
  updateReturnChange(coinsForChange) {
    $('#coin-return-table').innerHTML = '';
    $('#coin-return-table').innerHTML = this.createReturnChange(coinsForChange);
  }

  // 금액 투입 이벤트 emit
  onInsertCoin(e) {
    e.preventDefault();
    const [_, chargeInput] = e.target;
    try {
      validateChange(+chargeInput.value);
      Dialog.show('금액이 정상적으로 투입되었습니다!');
    } catch (error) {
      Dialog.error(error);
      return;
    }

    const newEvent = new CustomEvent('insertCoin', {
      detail: +chargeInput.value,
    });
    $('#charge-input-form').dispatchEvent(newEvent);
  }

  // 상품 구매 이벤트 emit
  onClickPurchaseProduct({ target }) {
    if (target.className === 'purchase-button') {
      const { productId } = target.closest('.product-purchase-item').dataset;
      const newEvent = new CustomEvent('purchaseProduct', {
        detail: productId,
      });
      $('#available-product-table').dispatchEvent(newEvent);
    }
  }

  // 잔돈 반환 이벤트 emit
  onClickReturnChange() {
    const newEvent = new CustomEvent('returnChange');
    $('#coin-return-button').dispatchEvent(newEvent);
  }

  // 템플릿 업데이트
  createProductList(productList) {
    return `
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
        </tr>
      </thead>
      <tbody>
          ${productList
            .map(
              prod => `
              <tr class="product-purchase-item" data-product-id=${prod.id}>
                <td class="product-purchase-name" data-product-name=${prod.name}>${prod.name}</td>
                <td class="product-purchase-price" data-product-price=${prod.price}>${
                prod.price
              }</td>
                <td class="product-purchase-quantity" data-product-quantity=${prod.quantity}>${
                prod.quantity
              }</td>
                <td>
                ${
                  prod.quantity === 0
                    ? `<button class="purchase-button" disabled>구매</button>`
                    : `<button class="purchase-button">구매</button>`
                }
                </td>
              </tr>
            `
            )
            .join('')}
      </tbody>
    `;
  }

  createReturnChange(coinsForChange) {
    const { coin500, coin100, coin50, coin10 } = coinsForChange;

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
          <td>${coin500}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td>${coin100}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td>${coin50}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td>${coin10}개</td>
        </tr>
      </tbody>
    `;
  }
}
