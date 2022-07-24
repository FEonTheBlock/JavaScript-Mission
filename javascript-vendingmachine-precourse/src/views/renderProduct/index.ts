import { getRootElement } from '../../utils'
import renderProductItems from './renderProductItems'

const renderProduct = () => {
  getRootElement().innerHTML = `
    <header>
      <h1>자판기</h1>
    </header>
    <section>
      <h2>상품 관리</h2>
      <div class="button-wrapper">
        <button id="product-add-menu" type="button">상품 관리</button>
        <button id="vending-machine-manage-menu" type="button">
          잔돈 충전
        </button>
        <button id="product-purchase-menu" type="button">상품 구매</button>
      </div>
      <h3>상품 추가하기</h3>
      <form class="add-product">
        <fieldset>
          <input name="name" id="product-name-input" type="text" placeholder="상품명" />
          <input name="price" id="product-price-input" type="number" placeholder="가격" />
          <input
            name="quantity"
            id="product-quantity-input"
            type="number"
            placeholder="수량"
          />
          <button id="product-add-button" type="button">추가하기</button>
        </fieldset>
      </form>
      <h3>상품 현황</h3>
      <table>
        <thead>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </thead>
        <tbody>
          ${renderProductItems()}
        </tbody>
      </table>
    </section>`.trim()
}

export default renderProduct
