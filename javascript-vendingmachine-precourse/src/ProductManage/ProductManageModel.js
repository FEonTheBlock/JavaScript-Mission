import { makeProductId } from '../utils/validation.js';
import { getData, setData } from '../utils/storage.js';

// 상품 데이터 관리
export default class ProductManageModel {
  productList;

  get productList() {
    return this.productList;
  }

  setProdList({ prodName, prodPrice, prodQuantity }) {
    const newProduct = {
      id: makeProductId(),
      name: prodName,
      price: prodPrice,
      quantity: prodQuantity,
    };
    this.productList = [...this.productList, newProduct];
    setData('productList', this.productList);
  }

  constructor() {
    this.updateProdList();
  }

  updateProdList() {
    this.productList = getData('productList') ?? [];
  }
}
