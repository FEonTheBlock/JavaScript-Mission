import { $ } from '../utils/dom.js';
import { validateProdInfo } from '../utils/validation.js';
import Dialog from '../utils/dialog.js';

// 상품 뷰 관리
export default class ProductManageView {
  $addProductForm;
  template = `
    <section id="product-add-section">
      <form id="product-add-form">
        <fieldset>
          <legend>상품 추가</legend>
          <input type="text" id="product-name-input" placeholder="상품명"/>
          <input type="number" id="product-price-input" placeholder="상품 가격"/>
          <input type="number" id="product-quantity-input" placeholder="상품 수량"/>
          <button type="submit" id="product-add-button">상품 추가</button>
        </fieldset>
      </form>
      <section id="current-product-section">
        <h2>상품 현황</h2>
        <table id="current-product-table"></table>
      </section>
    </section>
  `;

  // 초기 렌더링
  render(productList) {
    $('#current-menu').innerHTML = this.template;
    this.updateProdTable(productList);
    this.$addProductForm = $('#product-add-form');
    this.$addProductForm.addEventListener('submit', e => this.onSubmitNewProd(e));
  }

  // 상품 목록 렌더링
  updateProdTable(productList) {
    $('#current-product-table').innerHTML = '';
    $('#current-product-table').innerHTML = this.createProductList(productList);
  }

  createProductList(productList) {
    return `
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
      ${productList
        .map(
          prod => `
          <tr class="product__info">
            <td>${prod.name}</td>
            <td>${prod.price}</td>
            <td>${prod.quantity}</td>
          </tr>
        `
        )
        .join('')}
      </tbody>
    `;
  }

  // 상품 추가 버튼 클릭 이벤트 핸들러
  onSubmitNewProd(e) {
    e.preventDefault();
    const [_, prodNameInput, prodPriceInput, prodQuantityInput] = e.target;
    const prodName = prodNameInput.value;
    const prodPrice = +prodPriceInput.value;
    const prodQuantity = +prodQuantityInput.value;
    const newProd = { prodName, prodPrice, prodQuantity };

    try {
      validateProdInfo(newProd);
      Dialog.show('상품이 성공적으로 추가되었습니다!');
    } catch (error) {
      Dialog.error(error);
      return;
    }

    // 상품 추가 이벤트 발생
    const newEvent = new CustomEvent('addNewProd', {
      detail: newProd,
    });
    this.$addProductForm.dispatchEvent(newEvent);
  }
}
