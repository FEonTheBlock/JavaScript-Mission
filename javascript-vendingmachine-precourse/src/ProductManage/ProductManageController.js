import { $ } from '../utils/dom.js';
import ProductManageModel from './ProductManageModel.js';
import ProductManageView from './ProductManageView.js';

// 상품 관리 Service
export default class ProductManageController {
  model;
  view;

  constructor() {
    this.model = new ProductManageModel();
    this.view = new ProductManageView();
  }

  // 상품 추가 메뉴
  renderProductAddMenu() {
    this.model.updateProdList();
    this.view.render(this.model.productList);
    // 상품 추가 이벤트 핸들러 바인딩
    $('#product-add-form').addEventListener('addNewProd', ({ detail }) =>
      this.onAddNewProduct(detail)
    );
  }

  // 상품 추가 이벤트 핸들러 (데이터(모델) 업데이트, 뷰 업데이트)
  onAddNewProduct(newProduct) {
    this.model.setProdList(newProduct);
    this.view.updateProdTable(this.model.productList);
  }
}
