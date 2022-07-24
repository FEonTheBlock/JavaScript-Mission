import { $ } from './utils/dom.js';
import ProductManageController from './ProductManage/ProductManageController.js';
import { setData } from './utils/storage.js';

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
  ProductManageController;

  constructor($target) {
    this.$target = $target;
    this.$target.innerHTML = this.template;

    this.productManageController = new ProductManageController();
    $('#vending-machine-menu').addEventListener('click', e => this.onClickMenu(e));
  }

  // 각 메뉴 클릭 시 탭 이동
  onClickMenu({ target }) {
    switch (target.id) {
      case 'product-add-menu':
        this.renderProductManageMenu();
        break;
    }
  }

  // 상품 관리 탭 렌더링
  renderProductManageMenu() {
    this.productManageController.renderProductAddMenu();
    setData('latestMenu', 'productAdd');
  }
}
