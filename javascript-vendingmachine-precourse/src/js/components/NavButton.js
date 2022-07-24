import Component from "../core/Component.js";
import { $ } from "../utils/dom.js";

export default class NavButton extends Component {
  template() {
    return `
        <nav class="nav-button">
            <button id="product-add-menu">상품 관리</button>
            <button id="vending-machine-manage-menu">잔돈 충전</button>
            <button id="product-purchase-menu">상품 구매</button>
        </nav>
        `;
  }

  setEvent() {
    const { changeCurrentTab } = this.props;

    $(".nav-button").addEventListener("click", ({ target }) => {
      changeCurrentTab(target.id);
    });
  }
}
