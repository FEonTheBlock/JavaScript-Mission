import { INITIAL_COIN_LIST } from "../constant/index.js";

export const isPositiveInteger = (number) =>
  Number.isInteger(number) && number > 0;

export const isMinimumPrice = (number) => number >= 100;

export const isMultipleOfTen = (number) => number % 10 === 0;

export const generateCoinList = (restAmount) => {
  const list = { ...INITIAL_COIN_LIST };

  while (restAmount !== 0) {
    const randomNumber = MissionUtils.Random.pickNumberInList([
      10, 50, 100, 500,
    ]);
    if (restAmount < randomNumber) continue;

    restAmount -= randomNumber;
    list[randomNumber] += 1;
  }

  return list;
};

export const generatePayCoinList = (inputMoney, coinList) => {
  const list = { ...coinList };

  const payCoinList = { ...INITIAL_COIN_LIST };

  Object.entries(list)
    .reverse()
    .forEach(([key, val]) => {
      let coin = key;
      let count = val;
      // 코인이 이것보다 작거나 카운트가 0이 아니면
      // console.log(count);
      while (inputMoney >= coin && count > 0) {
        inputMoney -= coin;
        payCoinList[coin] += 1;
        count -= 1;
      }
    });

  return payCoinList;
};
