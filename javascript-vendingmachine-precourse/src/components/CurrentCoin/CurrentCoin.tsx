/** @jsx createElement */
import { createElement } from '../../utils/Soact/v2';
import { useCoinsQuery } from '../../api/query/coins';

function CurrentCoin() {
  const { data: coins } = useCoinsQuery();

  return (
    <div>
      <h2>동전 보유 현황</h2>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map(({ value, quantity }) => (
            <tr>
              <th>{`${value}원`}</th>
              <td
                id={`vending-machine-coin-${value}-quantity`}
              >{`${quantity}개`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentCoin;
