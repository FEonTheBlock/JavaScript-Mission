import { $ } from '../utils/dom.js';
import ProductPurchaseModel from './ProductPurchaseModel.js';
import ProductPurchaseView from './ProductPurchaseView.js';
import Dialog from '../utils/dialog.js';

export default class ProductPurchaseController {
  model;
  view;

  constructor() {
    this.model = new ProductPurchaseModel();
    this.view = new ProductPurchaseView();
  }

  // 상품 구매 메뉴 렌더링
  renderProductPurchaseMenu() {
    this.model.updateData();
    this.view.render({
      inserted: this.model.inserted,
      productList: this.model.productList,
      coinsForChange: this.model.coinsForChange,
    });

    // 이벤트 핸들러 바인딩
    // 금액 투입
    $('#charge-input-form').addEventListener('insertCoin', ({ detail }) =>
      this.onInsertCoins(detail)
    );

    // 상품 구매
    $('#available-product-table').addEventListener('purchaseProduct', ({ detail }) =>
      this.onPurchaseProduct(detail)
    );

    // 잔돈 반환
    $('#coin-return-button').addEventListener('returnChange', () => this.onReturnChange());
  }

  // 금액 투입 이벤트 핸들러
  onInsertCoins(inserted) {
    this.model.setInsertedCoin(inserted);
    this.view.updateInsertCoins(this.model.inserted);
  }

  // 상품 구매 이벤트 핸들러
  onPurchaseProduct(prodId) {
    try {
      this.model.purchaseProduct(prodId);
      Dialog.show('상품이 정상적으로 구매되었습니다!');
    } catch (error) {
      Dialog.error(error);
      return;
    }

    this.view.updateInsertCoins(this.model.inserted);
    this.view.updateProductList(this.model.productList);
  }

  // 잔돈 반환 이벤트 핸들러
  onReturnChange() {
    try {
      this.model.returnChange();
    } catch (error) {
      Dialog.error(error);
      return;
    }

    this.view.updateInsertCoins(this.model.inserted);
    this.view.updateReturnChange(this.model.coinsForChange);
  }
}
