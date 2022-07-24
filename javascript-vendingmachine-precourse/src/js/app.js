import Component from "./core/Component.js";
import { $ } from "./utils/dom.js";
import {
  ChangeFill,
  NavButton,
  ProductManage,
  ProductPurchase,
} from "./components/index.js";

export default class App extends Component {
  init() {
    this.state = this.props;
  }

  componentDidMount() {
    new NavButton(this.domNode, {
      changeCurrentTab: this.changeCurrentTab.bind(this),
    });
    this.domNode.insertAdjacentHTML("beforeend", '<main class="main"><main>');

    const $main = $(".main");
    console.log(this.state);

    if (this.state.currentTab === "product-add-menu") {
      new ProductManage($main, {
        productList: this.state.productList,
        addProduct: this.addProduct.bind(this),
      });
    } else if (this.state.currentTab === "vending-machine-manage-menu") {
      new ChangeFill($main, {
        holdingMoney: this.state.holdingMoney,
        coinList: this.state.coinList,
        chargeChange: this.chargeChange.bind(this),
      });
    } else {
      new ProductPurchase($main, {
        inputMoney: this.state.inputMoney,
        productList: this.state.productList,
        coinList: this.state.coinList,
        payCoinList: this.state.payCoinList,
        holdingMoney: this.state.holdingMoney,
        changeInputMoney: this.changeInputMoney.bind(this),
        chargeChange: this.chargeChange.bind(this),
        purchaseProduct: this.purchaseProduct.bind(this),
        returnChange: this.returnChange.bind(this),
      });
    }
  }

  changeCurrentTab(newTab) {
    this.setState({
      ...this.state,
      currentTab: newTab,
    });
  }

  addProduct(name, price, quantity) {
    this.setState({
      ...this.state,
      productList: [...this.state.productList, { name, price, quantity }],
    });
  }

  chargeChange(amount, newCoinList) {
    this.setState({
      ...this.state,
      holdingMoney: amount,
      coinList: newCoinList,
    });
  }

  changeInputMoney(amount) {
    this.setState({
      ...this.state,
      inputMoney: amount,
    });
  }

  returnChange(newPayCoinList) {
    this.setState({
      ...this.state,
      payCoinList: newPayCoinList,
    });
  }

  purchaseProduct(newProductList, cost) {
    this.setState({
      ...this.state,
      productList: newProductList,
      inputMoney: this.state.inputMoney - cost,
    });
  }

  setEvent() {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("vending-machine-state", JSON.stringify(this.state));
    });
  }

  // 상태관리 할것들
  // 초기 어떤 화면인지 표시하는 화면(기본, 상품관리, 잔동충전, 상품구매)
  // 상품현황, 보유 금액, 상품 구매
}
