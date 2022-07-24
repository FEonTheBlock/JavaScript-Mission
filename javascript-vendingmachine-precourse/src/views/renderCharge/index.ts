import models from '../../models'
import { getRootElement } from '../../utils'
import renderVendingMachineCoins from './renderVendingMachineCoins'

const renderCharge = () => {
  getRootElement().innerHTML = `
    <header>
      <h1>자판기</h1>
    </header>
    <section>
      <h2>잔돈 충전</h2>
      <div class="button-wrapper">
        <button id="product-add-menu" type="button">상품 관리</button>
        <button id="vending-machine-manage-menu" type="button">
          잔돈 충전
        </button>
        <button id="product-purchase-menu" type="button">상품 구매</button>
      </div>
      <h3>자판기 동전 충전하기</h3>
      <form class="charging-coin">
        <fieldset>
          <input name="amount" id="vending-machine-charge-input" type="number" />
          <button id="vending-machine-charge-button" type="button">
            충전하기
          </button>
        </fieldset>
      </form>
      <div>보유 금액: 
        <span id="vending-machine-charge-amount">${models.getTotalChange()}</span>
      </div>
      <h3>동전 보유 현황</h3>
      <table>
        <thead>
          <th>동전</th>
          <th>개수</th>
        </thead>
        <tbody>
          ${renderVendingMachineCoins()}         
        </tbody>
      </table>
    </section>`.trim()
}

export default renderCharge
