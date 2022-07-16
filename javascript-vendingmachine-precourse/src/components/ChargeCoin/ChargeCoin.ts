import { useCoinsQuery, useChangeCoinsMutation } from '../../api/query/coins';
import { makeCoinMap } from '../../utils/lib';
import { createElement, useState } from '../../utils/Soact/v2';

function ChargeCoin() {
  const { data: coins } = useCoinsQuery();
  const { mutate } = useChangeCoinsMutation();
  const [money, setMoney] = useState(0);
  const asset = coins?.reduce((acc, cur) => acc + cur.value * cur.quantity, 0);

  const changeMoney = (e: InputEvent) => {
    setMoney(+(e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!coins) {
      throw new Error('coins가 없습니다.');
    }

    const coinMap = makeCoinMap(coins, money);

    mutate(
      coins.map(({ value, quantity }) => ({
        value,
        quantity: quantity + coinMap[value],
      }))
    );
    setMoney(0);
  };

  return createElement(
    'div',
    null,
    createElement('h2', null, '자판기 동전 충전하기'),
    createElement(
      'form',
      { onsubmit: handleSubmit },
      createElement('input', {
        value: `${money || ''}`,
        oninput: changeMoney,
      }),
      createElement('button', { type: 'submit' }, '충전하기')
    ),
    createElement('span', null, `보유 금액: ${asset ? `${asset}원` : ''}`)
  );
}

export default ChargeCoin;
