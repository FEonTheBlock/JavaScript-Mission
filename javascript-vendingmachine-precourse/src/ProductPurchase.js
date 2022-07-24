import { createEl, getValueFromLocalStorage, validateChargeAmount } from './utils.js';
import { ERROR_MSG, TEMPLATES, COIN_INIT } from './constants.js';

let chargeAmount = getValueFromLocalStorage('chargeAmount', 0);
let productsList = [];
let change = COIN_INIT;

const managePurchaseInit = () => {
  document.querySelector('#app section').innerHTML = TEMPLATES.PRODUCT_PURCHASE;

  renderChargeAmount();
  renderProductsList();
  renderChange();

  document.querySelector('form').addEventListener('submit', handleInsertCharge);
  document.querySelector('table').addEventListener('click', handlePurchase);
  document.querySelector('#coin-return-button').addEventListener('click', handleChangeReturn);
};

const renderChargeAmount = () => {
  document.querySelector('#charge-amount').innerText = chargeAmount;
};

const renderProductsList = () => {
  productsList = getValueFromLocalStorage('products', []);
  productsList.forEach(product => {
    renderProduct(product);
  });
};

const renderChange = () => {
  change.forEach(({ coinValue, quantity }) => {
    document.querySelector(`#coin-${coinValue}-quantity`).innerHTML = `${quantity}개`;
  });
};

const handleInsertCharge = e => {
  e.preventDefault();
  const $chargeInput = document.querySelector('#charge-input');
  const chargeAmount = parseInt($chargeInput.value);

  if (chargeAmount < 100) {
    alert(ERROR_MSG.PURCHASE_MIN_PRICE);
  } else if (chargeAmount % 10) {
    alert(ERROR_MSG.PURCHASE_MIN_PRICE_UNIT);
  }

  if (validateChargeAmount(chargeAmount)) {
    saveChargeAmount(chargeAmount);
    renderChargeAmount();
    $chargeInput.value = '';
  }
};

const handleChangeReturn = () => {
  const currentCharges = getValueFromLocalStorage('charges', []);
  currentCharges.forEach(charge => {
    const currentChargeAmount = chargeAmount;
    const coinCount = Math.min(parseInt(currentChargeAmount / charge.coinValue), charge.quantity);
    updateChargeAmount(charge.coinValue * coinCount);
    renderCoin(charge.coinValue, coinCount);
    updateCharges(currentCharges, charge.coinValue, coinCount);
  });
  renderChargeAmount();
};

const saveChargeAmount = chargeAmountInput => {
  chargeAmount += chargeAmountInput;
  localStorage.setItem('chargeAmount', JSON.stringify(chargeAmount));
  return;
};

const handlePurchase = e => {
  if (e.target.tagName !== 'BUTTON') return;
  const selectedProduct = e.target.closest('.product-purchase-item');
  const selectedProductName =
    selectedProduct.querySelector('.product-purchase-name').dataset.productName;
  const selectedProductPrice =
    selectedProduct.querySelector('.product-purchase-price').dataset.productPrice;
  purchase(selectedProductName, selectedProductPrice);
};

const purchase = (name, price) => {
  updateProductsList(name);
  updateChargeAmount(price);
  renderChargeAmount();
  document.querySelector('tbody').innerHTML = '';
  renderProductsList();
};

const updateProductsList = name => {
  productsList.forEach(product => {
    product.quantity -= product.name === name && product.quantity > 0 ? 1 : 0;
  });
  localStorage.setItem('products', JSON.stringify(productsList));
};

const updateChargeAmount = price => {
  chargeAmount -= price;
  localStorage.setItem('chargeAmount', JSON.stringify(chargeAmount));
};

const updateCharges = (parsedCharges, coinValue, quantity) => {
  parsedCharges.forEach(charge => {
    charge.quantity -= charge.coinValue === coinValue ? quantity : 0;
  });
  localStorage.setItem('charges', JSON.stringify(parsedCharges));
};

const renderCoin = (coinValue, quantity) => {
  document.querySelector(`#coin-${coinValue}-quantity`).innerText = `${quantity}개`;
};

const renderProduct = ({ name, price, quantity }) => {
  const $table = document.querySelector('tbody');
  const $newProduct = createEl({ tagName: 'tr', className: 'product-purchase-item' });

  const $newProduct_name = createEl({
    tagName: 'td',
    className: 'product-purchase-name',
    innerText: name,
  });
  const $newProduct_price = createEl({
    tagName: 'td',
    className: 'product-purchase-price',
    innerText: price,
  });
  const $newProduct_quantity = createEl({
    tagName: 'td',
    className: 'product-purchase-quantity',
    innerText: quantity,
  });
  const $newProduct_purchase = createEl({
    tagName: 'td',
    className: 'purchase-td',
  });
  const $newProduct_purchaseBtn = createEl({
    tagName: 'button',
    className: 'purchase-button',
    innerText: '구매하기',
  });

  $newProduct_name.dataset.productName = name;
  $newProduct_price.dataset.productPrice = price;
  $newProduct_quantity.dataset.productQuantity = quantity;

  $newProduct_purchase.append($newProduct_purchaseBtn);
  $newProduct.append(
    $newProduct_name,
    $newProduct_price,
    $newProduct_quantity,
    $newProduct_purchase
  );
  $table.append($newProduct);
};

export const managePurchase = () => {
  managePurchaseInit();
};
