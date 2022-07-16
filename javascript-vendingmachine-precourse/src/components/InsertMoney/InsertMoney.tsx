/** @jsx createElement */
import { createElement, useState } from '../../utils/Soact/v2';
import { useMoneyQuery, useUpdateMoneyMutation } from '../../api/query/money';

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

  return (
    <div>
      <h2>금액 투입</h2>
      <form onsubmit={handleSubmit}>
        <input
          id="charge-input"
          type="number"
          step={10}
          min={100}
          value={`${currentMoney}`}
          oninput={changeCurrentMoney}
        />
        <button id="charge-button" type="submit">
          투입하기
        </button>
      </form>
      <span id="charge-amount">투입한 금액: {`${money}원`}</span>
    </div>
  );
}

export default InsertMoney;
