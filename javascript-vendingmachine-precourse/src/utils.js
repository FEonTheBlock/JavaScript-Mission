export const createEl = ({ tagName, id, className, innerText }) => {
  const $el = document.createElement(tagName);

  if (id) $el.id = id;
  if (className) $el.classList.add(className);
  if (innerText) $el.innerText = innerText;

  return $el;
};

export const getValueFromLocalStorage = (key, initValue) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initValue;

export const validateProduct = (price, quantity) => {
  return price >= 100 && !(price % 10) && quantity >= 1;
};

export const validateCharge = chargeAmount => chargeAmount >= 10 && !(chargeAmount % 10);

export const validateChargeAmount = chargeAmountInput =>
  chargeAmountInput >= 10 && !(chargeAmountInput % 10);
