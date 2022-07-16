import { useChangeCoinsMutation, useCoinsQuery } from './../../api/query/coins';
import { createElement, useState } from '../../utils/Soact/v2';
import { useMoneyQuery, useUpdateMoneyMutation } from '../../api/query/money';
import { Coin } from '../..';

interface CoinMap {
  500: number;
  100: number;
  50: number;
  10: number;
}

function GiveChangeCoin() {
  const { data: money } = useMoneyQuery();
  const { mutate: updateMoneyMutate } = useUpdateMoneyMutation();
  const { data: coins } = useCoinsQuery();
  const { mutate: changeCoinsMutate } = useChangeCoinsMutation();

  const [changeCoinMap, setChangeCoinMap] = useState<CoinMap>({
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  });

  const makeChangeCoinMap = (money: number) => {
    if (!coins) {
      throw new Error('coins가 없습니다.');
    }
    const initChangeCoinMap = { 500: 0, 100: 0, 50: 0, 10: 0 };

    for (const coin of coins) {
      while (money > 0 && coin.quantity > 0) {
        if (money < coin.value) {
          break;
        }
        money -= coin.value;
        coin.quantity--;
        initChangeCoinMap[coin.value]++;
      }
    }

    changeCoinsMutate(coins);
    setChangeCoinMap(initChangeCoinMap);
    updateMoneyMutate(0);
  };

  const handleChangeCoin = () => {
    if (money) {
      makeChangeCoinMap(money);
    }
  };

  return createElement(
    'div',
    null,
    createElement('h2', null, '잔돈'),
    createElement('button', { onclick: handleChangeCoin }, '반환하기'),
    createElement(
      'table',
      null,
      createElement(
        'thead',
        null,
        createElement(
          'tr',
          null,
          createElement('th', null, '동전'),
          createElement('th', null, '개수')
        )
      ),
      createElement(
        'tbody',
        null,
        ...(coins || []).map(({ value }) =>
          createElement(
            'tr',
            null,
            createElement('th', null, `${value}원`),
            createElement('td', null, `${changeCoinMap[value]}개`)
          )
        )
      )
    )
  );
}

export default GiveChangeCoin;
