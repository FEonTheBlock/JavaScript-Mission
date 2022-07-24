import Component from './Component.js';

export default class Admin extends Component {
  setup() {
    this.$state = {
      products: this.$props.products,
    };
  }
  template() {
    const ProductTr = this.$state.products
      .map(
        ({ name, cost, count }) => `
      <tr class="product-manage-item" >
        <td calss="product-manage-name">${name}</td>
        <td class="product-manage-price">${cost}</td>
        <td class="product-manage-quantity">${count}</td>
      </tr>
    `,
      )
      .join(' ');

    const ProductTable = `
      <h2>상품 현황</h2>
      <table>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        ${ProductTr}
      </table>
    `;

    const ProductInputs = `
        <input id="product-name-input" type="text" placeholder="상품명" />
        <input id="product-price-input" type="number" placeholder="가격" />
        <input id="product-quantity-input" type="number" placeholder="수량" />
        <button id="product-add-button">상품 추가</button>
    `;

    const ProductAdder = `
      <h2>상품 추가하기</h2>
      ${ProductInputs}
    `;

    return `
      ${ProductAdder}
      ${ProductTable}
    `;
  }
  setEvent() {
    this.addEvent(
      'click',
      '#product-add-button',
      this.handleAddProduct.bind(this),
    );
  }

  addminAlert($productName, $productCost, $productCount) {
    if (!$productName.value) {
      window.alert('상품명을 입력해주세요.');
      return false;
    }

    if (!$productCount.value) {
      window.alert('상품 수량은 0개 이상입니다.');
      return false;
    }

    if ($productCost.value < 100) {
      window.alert('상품 가격은 100원 이상입니다.');
      $productCost.value = null;
      return false;
    }

    if ($productCost.value % 10 !== 0) {
      window.alert('상품 가격은 1원 단위를 사용할 수 없습니다.');
      $productCost.value = null;
      return false;
    }

    return true;
  }

  handleAddProduct() {
    const { updateProduct } = this.$props;

    const $productName = this.$target.querySelector('#product-name-input');
    const $productCost = this.$target.querySelector('#product-price-input');
    const $productCount = this.$target.querySelector('#product-quantity-input');

    if (!this.addminAlert($productName, $productCost, $productCount)) return;

    updateProduct({
      name: $productName.value,
      cost: $productCost.value,
      count: $productCount.value,
    });
  }
}
