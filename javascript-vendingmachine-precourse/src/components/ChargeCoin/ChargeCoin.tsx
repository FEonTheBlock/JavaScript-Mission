/** @jsx createElement */
import { createElement, useState } from '../../utils/Soact/v2';

import { useCoinsQuery, useChangeCoinsMutation } from '../../api/query/coins';

import { makeCoinMap } from '../../utils/lib';

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

  const handleInvalid = () => {
    alert('유효한 숫자를 입력하세요.');
  };

  return (
    <div>
      <h2>자판기 동전 충전하기</h2>
      <form onsubmit={handleSubmit}>
        <input
          id="vending-machine-charge-input"
          type="number"
          value={`${money || ''}`}
          oninput={changeMoney}
          step={10}
          min={0}
          oninvalid={handleInvalid}
        />
        <button id="vending-machine-charge-button" type="submit">
          충전하기
        </button>
      </form>
      <span id="vending-machine-charge-amount">
        보유 금액: {asset ? `${asset}원` : ''}
      </span>
    </div>
  );
}

export default ChargeCoin;
