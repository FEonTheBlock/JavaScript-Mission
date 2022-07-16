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
          {coins?.map(({ value, quantity }) =>
            createElement(
              'tr',
              null,
              createElement('th', null, `${value}원`),
              createElement('td', null, `${quantity}개`)
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentCoin;
