import store from '@/store';
import { getRandomCharge } from '@/hooks';

export const handleChargeError = (chargeAmount: number) => {
  if (chargeAmount < 100 || chargeAmount % 10 !== 0) {
    alert('100 이상의 10단위 수를 입력하세요');
    // throw new Error('100 이상의 10단위 수를 입력하세요');
    return;
  }
};

export const handleCharge = (store: store, el: HTMLInputElement) => {
  const chargeAmount = +el.value;
  handleChargeError(chargeAmount);
  store.setCharge = getRandomCharge(chargeAmount, store.store.charge);
};

export const handlePurchaseMenu = (store: store, form: HTMLFormElement) => {
  const formData = new FormData(form);
  const name = String(formData.get('name'));
  const price = Number(formData.get('price'));
  const quantity = Number(formData.get('quantity'));

  const product = {
    name,
    price,
    quantity,
  };

  handlePurchaseMenuError(name, price, quantity);

  if (name && price && quantity) {
    store.setProduct = [...store.store.product, product];
  }
};

export const handlePurchaseMenuError = (
  name: string | null,
  price: number | null,
  quantity: number | null
) => {
  if (!name || !price || !quantity) {
    alert('이름, 가격, 갯수를 모두 입력하시오.');
    // throw new Error('이름, 가격, 갯수를 모두 입력하시오.');
    return;
  }
  if (price % 10 !== 0 || price < 100) {
    console.log(typeof price);
    alert('가격은 10원 단위입니다.');
    // throw new Error('가격은 10원 단위입니다.');
    return;
  }
};

export const handleAddMenu = (store: store, input: HTMLInputElement) => {
  handleAddMenuError(+input.value);
  store.setInsertedCoin = store.store.insertedCoin + +input.value;
};

export const handleAddMenuError = (coin: number) => {
  if (coin % 10 !== 0 || coin <= 0) {
    alert('투입금액의 단위는 10원입니다.');
    throw new Error('투입금액의 단위는 10원입니다.');
  }
};

export const handlePurchase = (store: store, e: any) => {
  if (!e?.target?.classList.contains('purchase-button')) return;
  const $row = e.target.closest('.product-purchase-item');
  const nameToBuy = $row.querySelector('.product-purchase-name').dataset
    .productName;

  let coinToPay = 0;

  store.setProduct = store.store.product.map(({ name, price, quantity }) => {
    if (name !== nameToBuy) return { name, price, quantity };
    coinToPay = price;
    return { name, price, quantity: quantity - 1 };
  });

  store.setInsertedCoin = store.store.insertedCoin - coinToPay;
};
