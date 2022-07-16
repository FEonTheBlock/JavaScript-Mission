import { useMoneyQuery, useUpdateMoneyMutation } from '../../api/query/money';
import { createElement, useState } from '../../utils/Soact/v2';

function InsertMoney() {
  const { data: money } = useMoneyQuery();
  const { mutate: updateMoneyMutate } = useUpdateMoneyMutation();

  const [currentMoney, setCurrentMoney] = useState(0);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    updateMoneyMutate((money || 0) + currentMoney);
    setCurrentMoney(0);
  };

  const changeCurrentMoney = (e: InputEvent) => {
    setCurrentMoney(+(e.target as HTMLInputElement).value);
  };

  return createElement(
    'div',
    null,
    createElement('h2', null, '금액 투입'),
    createElement(
      'form',
      { onsubmit: handleSubmit },
      createElement('input', {
        type: 'number',
        step: 10,
        min: 100,
        value: `${currentMoney}`,
        oninput: changeCurrentMoney,
      }),
      createElement('button', null, '투입하기')
    ),
    createElement('span', null, `투입한 금액: ${money}원`)
  );
}

export default InsertMoney;
