import Calculator from './Calculator.js';
import Utils from './utils/utils.js';
import { ERROR } from './utils/handleError.js';

const calculator = new Calculator();

document.querySelector('.digits').onclick = e => {
  if (calculator.result !== '') {
    calculator.reset();
  }
  if (calculator.operator === '') {
    calculator.setFirstNum(e.target.textContent);
    calculator.render();
  }
  if (calculator.operator !== '') {
    calculator.setSecondNum(e.target.textContent);
    calculator.render();
  }
};

document.querySelector('.operations').onclick = e => {
  // 계산 결과가 있는 상태에서 새롭게 오퍼레이터 입력하는 경우
  if (calculator.result !== '') {
    alert(ERROR.RESET_RESULT);
    calculator.reset();
    return;
  }

  // 이미 오퍼레이터를 입력했는데 또 다시 입력하는 경우
  if (calculator.operator !== '' && e.target.textContent !== '=') {
    alert(ERROR.RESET_RESULT);
    calculator.reset();
    return;
  }

  if (e.target.textContent === '=') {
    if (!Utils.hasTwoNums(calculator.firstNum, calculator.secondNum)) {
      alert(ERROR.HAS_NOT_TWO_NUMS);
      return;
    }
    calculator.calculate();
    calculator.renderResult();
  } else {
    calculator.setOperator(e.target.textContent);
    calculator.render();
  }
};

document.querySelector('.modifier').onclick = () => calculator.reset();
