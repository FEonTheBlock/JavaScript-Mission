/** @jsx createElement */
import { createElement, useState } from '../../utils/Soact/v2';

import { useCoinsQuery, useChangeCoinsMutation } from '../../api/query/coins';
import { useMoneyQuery, useUpdateMoneyMutation } from '../../api/query/money';

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
    const initChangeCoinMap: CoinMap = { 500: 0, 100: 0, 50: 0, 10: 0 };

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

  return (
    <div>
      <h2>잔돈</h2>
      <button id="coin-return-button" onclick={handleChangeCoin}>
        반환하기
      </button>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map(({ value }) => (
            <tr>
              <th>{value}원</th>
              <td id={`coin-${value}-quantity`}>{changeCoinMap[value]}개</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GiveChangeCoin;
