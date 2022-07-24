import { getData, setData } from '../utils/storage.js';
import { ERRORS } from '../utils/constants.js';

export default class ProductPurchaseModel {
  inserted; // 투입 금액
  productList; // 상품 목록
  coinsForChange; // 잔돈 현황
  initialChangInfo = {
    total: 0,
    coins: {
      coin500: 0,
      coin100: 0,
      coin50: 0,
      coin10: 0,
    },
  };

  // getter
  get inserted() {
    return this.inserted;
  }

  get productList() {
    return this.productList;
  }

  get coinsForChange() {
    return this.coinsForChange;
  }

  // setter
  setInsertedCoin(inserted) {
    this.inserted += inserted;
    setData('inserted', this.inserted);
  }

  // 초기 데이터 업데이트
  constructor() {
    this.updateData();
  }

  updateData() {
    this.inserted = getData('inserted') ?? 0;
    this.productList = getData('productList') ?? [];
    this.coinsForChange = getData('coinsForChange') ?? {
      coin500: 0,
      coin100: 0,
      coin50: 0,
      coin10: 0,
    };
  }

  // 상품 구매
  purchaseProduct(prodId) {
    const target = this.productList.find(product => product.id === +prodId);
    if (this.inserted < target.price) throw new Error(ERRORS.PURCHASE.LACK_INSERTED);

    if (target.quantity > 0) {
      this.inserted -= target.price; // 투입 금액 업데이트
      target.quantity--;
    }

    setData('inserted', this.inserted);
    setData('productList', this.productList); // 상품 목록 업데이트
  }

  // 잔돈 반환
  returnChange() {
    // 금액을 투입하지 않고 잔돈을 반환하려고 할 때
    if (this.inserted === 0) throw new Error(ERRORS.PURCHASE.EMPTY_INSERTED);

    const { total, coins } = getData('changeInfo');
    // 현재 투입금액이 잔돈보다 많을 때
    if (this.inserted >= total) {
      this.coinsForChange = coins;
      setData('changeInfo', this.initialChangInfo);
      this.inserted -= total;
    } else {
      this.coinsForChange = this.convertChangeToCoins(this.inserted, this.coinsForChange);
      setData('changeInfo', {
        total: total - this.inserted,
        coins: {
          coin500: coins.coin500 - this.coinsForChange.coin500,
          coin100: coins.coin100 - this.coinsForChange.coin100,
          coin50: coins.coin50 - this.coinsForChange.coin50,
          coin10: coins.coin10 - this.coinsForChange.coin10,
        },
      });
      this.inserted = 0;
    }

    setData('inserted', this.inserted);
    setData('coinsForChange', this.coinsForChange);
  }

  convertChangeToCoins(changeInput, coins) {
    while (changeInput !== 0) {
      const convertedCoins = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
      // 남은 잔돈이 10원, 변환될 동전이 500원일 때는 교환 불가
      if (changeInput >= convertedCoins) {
        changeInput -= convertedCoins;
        coins[`coin${convertedCoins}`] += 1;
      }
    }
    return coins;
  }
}
