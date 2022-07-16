import { useCoinsQuery } from '../../api/query/coins';
import { createElement } from '../../utils/Soact/v2';

function CurrentCoin() {
  const { data: coins } = useCoinsQuery();

  return createElement(
    'div',
    null,
    createElement('h2', null, '동전 보유 현황'),
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

        ...(coins || []).map(({ value, quantity }) =>
          createElement(
            'tr',
            null,
            createElement('th', null, `${value}원`),
            createElement('td', null, `${quantity}개`)
          )
        )
      )
    )
  );
}

export default CurrentCoin;
