const $calculator = document.querySelector('.calculator');
const $total = document.getElementById('total');

let result = 0;
let formula = '';
let tempNumber = '';
let tempOp = '';
let cntOp = 0;
let lastInput = '';

const hasClass = (target, className) => target.classList.contains(className);

const isOp = (input) =>
  input === '+' || input === '-' || input === 'X' || input === '/';

const reset = () => {
  result = 0;
  formula = '0';
  tempNumber = '';
  tempOp = '';
  cntOp = 0;
  lastInput = '';
};

const calculate = (numbers) => {
  switch (tempOp) {
    case '+':
      return numbers[0] + numbers[1];
    case '-':
      return numbers[0] - numbers[1];
    case 'X':
      return numbers[0] * numbers[1];
    case '/':
      return Math.floor(numbers[0] / numbers[1]);
    default:
      break;
  }
};

$calculator.onclick = ({ target }) => {
  if (hasClass(target, 'digit')) {
    if (tempNumber.length >= 3) {
      alert('최대 3자리 수까지 입력 가능');
      return;
    }

    const number = target.textContent;

    if (formula === '0') formula = '';
    if (tempNumber[0] === '0') {
      tempNumber = tempNumber.slice(1);
    }

    tempNumber += number;
    formula += number;
    lastInput = number;
  } else if (hasClass(target, 'operation')) {
    if (lastInput === '') {
      return;
    }

    if (target.textContent === '=') {
      const numbers = formula.split(/[^0-9]/g).map((number) => +number);

      if (numbers.length === 1) return;

      if (isOp(lastInput)) {
        alert('잘못된 수식입니다');
        return;
      }

      result = calculate(numbers);

      $total.textContent = result;

      formula = result + '';
      tempNumber = result + '';
      tempOp = '';
      cntOp = 0;
      lastInput = result + '';

      return;
    }

    if (cntOp >= 1 && !isOp(lastInput)) {
      alert('숫자 2개까지만 계산 가능');
      return;
    }

    if (isOp(lastInput)) {
      formula = formula.slice(0, -1);
    }

    tempOp = target.textContent;
    tempNumber = '';
    formula += tempOp;
    lastInput = tempOp;
    cntOp += 1;
  } else if (hasClass(target, 'modifier')) {
    reset();
  }

  $total.textContent = formula;
};
