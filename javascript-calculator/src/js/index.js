import Calculator from './Calculator.js';

// type
const operators = {
  '/': '/',
  X: '*',
  '-': '-',
  '+': '+',
  '=': '=',
};

const calc = new Calculator();

const validateNumLength = num => num.toString().length < 3;

// DOM
const total = document.getElementById('total');
const formula = document.getElementById('formula');
const digits = document.querySelector('.digits');
const operations = document.querySelector('.operations');
const modifier = document.querySelector('.modifier');

// render
const render = () => {
  total.innerHTML = `${calc.total}`;

  calc.computedFormula();
  // 이런게 computed
  formula.innerHTML = calc.formula;
};

// handlers
const handleDigitsClick = ({ target: digit }) => {
  // 해당 DOM 요소인가
  const isDigit = digit.classList.contains('digit');
  const digitNum = parseInt(digit.innerText);

  if (!isDigit || Number.isNaN(digitNum)) return false;

  if (calc.isFinish) {
    calc.initialCalculator(digitNum);
  } else if (calc.canAddNextNumber) {
    calc.addNextNum(digitNum);
  } else {
    const actualNum = calc.getLastNum();
    const isValidateNum = validateNumLength(actualNum);
    if (isValidateNum) calc.setLastNum(parseInt(actualNum.toString() + digitNum));
  }

  render();
};

const handleOperationsClick = ({ target: operation }) => {
  const isOperation = operation.classList.contains('operation');
  if (!isOperation) return;

  if (calc.isFinish) {
    calc.initialCalculator(calc.total);
  }

  const operator = operators[operation.innerText];

  if (operator === operators['=']) {
    calc.calculateTotal();
  } else if (operator === operators.X || operator === operators['/']) {
    calc.initialCalculator(calc.calculateTotal());
    calc.setOperator(operator);
  } else {
    calc.setOperator(operator);
  }

  render();
};

const initialCalculator = () => {
  calc.initialCalculator();
  render();
};

window.addEventListener('load', render);
digits.addEventListener('click', handleDigitsClick);
operations.addEventListener('click', handleOperationsClick);
modifier.addEventListener('click', initialCalculator);

// - [x] 2개의 숫자에 대해 덧셈이 가능하다.
// - [x] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [x] 2개의 숫자에 대해 곱셈이 가능하다.
// - [x] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [x] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [x] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.
