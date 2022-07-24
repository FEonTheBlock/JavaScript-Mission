import Component from "../core/Component.js";
import {
  $,
  isMinimumPrice,
  isMultipleOfTen,
  isPositiveInteger,
} from "../utils/index.js";

export default class ProductManage extends Component {
  template() {
    const { productList } = this.props;

    return `
        <section class="product-manage">
          <h2>상품 추가하기</h2>
          <input id="product-name-input" type="text" placeholder="상품명" />
          <input id="product-price-input" type="number" placeholder="가격" />
          <input id="product-quantity-input" type="number" placeholder="수량" />
          <button id="product-add-button">추가하기</button>
          <h2>상품 현황</h2>
          <table border="1">
            <thead>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
            </thead>
            <tbody>
              ${productList
                .map(({ name, price, quantity }) => {
                  return `
                <tr class="product-manage-item">
                  <td class="product-manage-name">${name}</td>
                  <td class="product-manage-price">${price}</td>
                  <td class="product-manage-quantity">${quantity}</td>
                </tr>
                `;
                })
                .join("")}
            </tbody>
          </table>
        </section>
        `;
  }

  setEvent() {
    const { addProduct } = this.props;

    $("#product-add-button").addEventListener("click", () => {
      const $price = Number($("#product-price-input").value);
      const $quantity = Number($("#product-quantity-input").value);

      if (!isMinimumPrice($price) || !isMultipleOfTen($price)) {
        alert(
          "가격은 최소 100원부터 시작하며 10원으로 나누어 떨어져야 합니다."
        );
        return;
      }

      if (!isPositiveInteger($quantity)) {
        alert("제대로된 수량을 입력해주세요.");
        return;
      }

      addProduct($("#product-name-input").value.trim(), $price, $quantity);
    });
  }
}
