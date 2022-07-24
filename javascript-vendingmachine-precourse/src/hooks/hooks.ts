import { Charge, Coin } from '@/types';
import { Random } from '@woowacourse/mission-utils';

export const getRandomCharge = (
  chargeAmount: number,
  charge: Charge
): Charge => {
  let chargeCoins: Coin[] = [10, 50, 100, 500];

  while (chargeAmount > 0) {
    const randomCoin: Coin = Random.pickNumberInList(chargeCoins);

    if (chargeAmount % randomCoin === chargeAmount)
      chargeCoins = chargeCoins.filter((coin) => coin !== randomCoin);
    else {
      charge[randomCoin] += 1;
      chargeAmount -= randomCoin;
    }
  }
  return charge;
};
