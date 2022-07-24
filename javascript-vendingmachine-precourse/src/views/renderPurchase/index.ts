import models from '../../models'
import { getRootElement } from '../../utils/index'
import renderPurchaseItems from './renderPurchase'

const renderPurchase = () => {
  getRootElement().innerHTML = `
    <header>
      <h1>자판기</h1>
    </header>
    <section>
    <h2>상품 구매 및 잔돈 반환</h2>
      <div class="button-wrapper">
        <button id="product-add-menu" type="button">상품 관리</button>
        <button id="vending-machine-manage-menu" type="button">
          잔돈 충전
        </button>
        <button id="product-purchase-menu" type="button">상품 구매</button>
      </div>
      <h3>금액 투입</h3>
      <form class="input-money">
        <fieldset>
          <input name="inputAmount" id="charge-input" type="number" />
          <button id="charge-button" type="button">투입하기</button>
        </fieldset>
      </form>
      <div>투입한 금액: 
        <span id="charge-amount">${models.getInputAmount()}</span>
      </div>
      <h3>구매할 수 있는 상품 현황</h3>
      <table class="product-table">
        <thead>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
        </thead>
        <tbody>
          ${renderPurchaseItems()}
        </tbody>
      </table>
      <h3>잔돈</h3>
      <div>
        <button id="coin-return-button" type="button">반환하기</button>
      </div>
      <table class="change-table">
        <thead>
          <th>동전</th>
          <th>개수</th>
        </thead>
      </table>
    </section>`.trim()
}

export default renderPurchase
