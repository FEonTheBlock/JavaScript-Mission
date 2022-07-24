import { $ } from './utils/dom.js';
import ProductManageController from './ProductManage/ProductManageController.js';
import ChangeManageController from './ChangeManage/ChangeManageController.js';
import ProductPurchaseController from './ProductPurchase/ProductPurchaseController.js';

export default class App {
  template = `
    <nav id="vending-machine-menu">
      <button id="product-add-menu">상품 관리</button>
      <button id="vending-machine-manage-menu">잔돈 충전</button>
      <button id="product-purchase-menu">상품 구매</button>
    </nav>
    <span>👆메뉴 클릭 시, 해당 페이지로 이동됩니다.👆</span>
    <main id="current-menu"></main>
  `;

  $target; // app
  ProductManageController; // 상품 관리 controller
  ChangeManageController; // 잔돈 충전 controller
  ProductManageController; // 상품 구매 controller

  constructor($target) {
    this.$target = $target;
    this.$target.innerHTML = this.template;

    this.productManageController = new ProductManageController();
    this.ChangeManageController = new ChangeManageController();
    this.ProductPurchaseController = new ProductPurchaseController();
    $('#vending-machine-menu').addEventListener('click', e => this.onClickMenu(e));
    this.renderProductManageMenu(); //초기에 상품 관리 페이지로 로드되도록
  }

  // 각 메뉴 클릭 시 탭 이동
  onClickMenu({ target }) {
    switch (target.id) {
      case 'product-add-menu':
        this.renderProductManageMenu();
        break;
      case 'vending-machine-manage-menu':
        this.renderChangeManageMenu();
        break;
      case 'product-purchase-menu':
        this.renderProductPurchaseMenu();
        break;
    }
  }

  // 상품 관리 탭 렌더링
  renderProductManageMenu() {
    this.productManageController.renderProductAddMenu();
  }

  // 잔돈 충전 탭 렌더링
  renderChangeManageMenu() {
    this.ChangeManageController.renderChangeManageMenu();
  }

  // 상품 구매 탭 렌더링
  renderProductPurchaseMenu() {
    this.ProductPurchaseController.renderProductPurchaseMenu();
  }
}
