import { Random } from '@woowacourse/mission-utils';

const makeCoinMap = (coins: Coins, money: number): CoinMap => {
  const coinMap = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };

  let coinValues = coins.map(({ value }) => value);
  while (money > 0) {
    const currentCoinValue = Random.pickNumberInList(coinValues);
    if (currentCoinValue > money) {
      coinValues = coinValues.filter((value) => money > value);
    } else {
      coinMap[currentCoinValue]++;
      money -= currentCoinValue;
    }
  }

  return coinMap;
};

export default makeCoinMap;
