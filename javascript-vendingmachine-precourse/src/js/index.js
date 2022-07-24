import App from "./app.js";
import {
  INITIAL_COIN_LIST,
  INITIAL_CURRENT_TAB,
  INITIAL_HOLDING_MONEY,
  INITIAL_INPUT_MONEY,
  INITIAL_PRODUCT_LIST,
} from "./constant/index.js";
import { $ } from "./utils/index.js";

new App(
  $("#app"),
  JSON.parse(localStorage.getItem("vending-machine-state")) || {
    currentTab: INITIAL_CURRENT_TAB,
    productList: INITIAL_PRODUCT_LIST,
    holdingMoney: INITIAL_HOLDING_MONEY,
    coinList: { ...INITIAL_COIN_LIST },
    inputMoney: INITIAL_INPUT_MONEY,
    payCoinList: { ...INITIAL_COIN_LIST },
  }
);
