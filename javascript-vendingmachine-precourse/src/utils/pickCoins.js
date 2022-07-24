import { COINS } from './const.js';

export const pickRandomCoins = (coins, money) => {
  const newCoins = {
    ...coins,
  };
  let curMoney = money;
  let coinList = [...COINS];

  while (curMoney > 0) {
    const randomCoin = MissionUtils.Random.pickNumberInList(coinList);

    if (curMoney - randomCoin < 0) {
      continue;
    }

    newCoins[randomCoin] += 1;
    curMoney -= randomCoin;
  }

  return newCoins;
};

export const pickMinCoins = (coins, money) => {
  const newCoins = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  let curMoney = money;
  let coinList = [...COINS].filter(coin => coins[coin] !== 0);

  while (curMoney > 0) {
    const biggestCoin = coinList[0];

    if (!biggestCoin) break;
    if (curMoney - biggestCoin < 0) {
      coinList.shift();
      continue;
    }

    newCoins[biggestCoin] += 1;
    coins[biggestCoin] -= 1;
    if (coins[biggestCoin] === 0) coinList.shift();
    curMoney -= biggestCoin;
  }
  return [newCoins, curMoney];
};
