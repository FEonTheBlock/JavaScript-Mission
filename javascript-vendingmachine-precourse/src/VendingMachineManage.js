import { ERROR_MSG, TEMPLATES, COIN_INIT } from './constants.js';
import { getValueFromLocalStorage, validateCharge } from './utils.js';

let charges = getValueFromLocalStorage('charges', COIN_INIT);

const manageVendingMachineInit = () => {
  document.querySelector('#app section').innerHTML = TEMPLATES.MANAGE;
  document.querySelector('form').addEventListener('submit', handleCharge);

  renderTotalCharge();
  renderCharges();
};

const renderTotalCharge = () => {
  const totalCharge = charges.reduce(
    (charge, { coinValue, quantity }) => charge + coinValue * quantity,
    0
  );
  document.querySelector('#vending-machine-charge-amount').innerHTML = `${totalCharge}원`;
};

const renderCharges = () => {
  charges.forEach(({ coinValue, quantity }) => {
    document.querySelector(
      `#vending-machine-coin-${coinValue}-quantity`
    ).innerText = `${quantity}개`;
  });
};

const handleCharge = e => {
  e.preventDefault();
  const $chargeInput = document.querySelector('#vending-machine-charge-input');
  const chargeAmount = parseInt($chargeInput.value);

  if (chargeAmount < 100) {
    alert(ERROR_MSG.CHARGE_MIN_PRICE);
  } else if (chargeAmount % 10) {
    alert(ERROR_MSG.CHARGE_MIN_PRICE_UNIT);
  }

  if (validateCharge(chargeAmount)) {
    saveCharge(chargeAmount);
    renderTotalCharge();
    renderCharges();
    $chargeInput.value = '';
  }
};

const saveCharge = chargeAmount => {
  const coinValues = [500, 100, 50, 10];
  const randomCoinValue = MissionUtils.Random.pickNumberInList(coinValues);

  updateCharges(randomCoinValue, parseInt(chargeAmount / randomCoinValue));

  const remainChargeAmount =
    chargeAmount - randomCoinValue * parseInt(chargeAmount / randomCoinValue);

  updateCharges(10, remainChargeAmount / 10);
};

const updateCharges = (coinValue, quantity) => {
  charges.forEach(charge => {
    charge.quantity += charge.coinValue === coinValue ? quantity : 0;
  });
  localStorage.setItem('charges', JSON.stringify(charges));
};

export const manageVendingMachine = () => {
  manageVendingMachineInit();
};
