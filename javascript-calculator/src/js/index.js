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

const total = document.getElementById('total');
const formula = document.getElementById('formula');
const digits = document.querySelector('.digits');
const operations = document.querySelector('.operations');
const ac_button = document.querySelector('.modifier');

const render = () => {
  total.innerHTML = `${calc.total}`;
  calc.computedFormula();
  formula.innerHTML = calc.formula;
};

const handleDigitsClick = ({ target: digit }) => {
  const isDigit = digit.classList.contains('digit');
  const digitNum = parseInt(digit.innerText);

  if (!isDigit || Number.isNaN(digitNum)) return false;

  calc.shouldAddNumber() ? calc.addNextNum(digitNum) : calc.updateNumber(digitNum);

  render();
};

const handleOperationsClick = ({ target: operation }) => {
  const isOperation = operation.classList.contains('operation');
  if (!isOperation) return;

  const operator = operators[operation.innerText];
  calc.shouldGetResult() && calc.initCalculator(calc.calculateTotal());
  operator !== operators['='] && calc.setOperator(operator);

  render();
};

const initialCalculator = () => {
  calc.initCalculator();
  render();
};

window.addEventListener('load', render);
digits.addEventListener('click', handleDigitsClick);
operations.addEventListener('click', handleOperationsClick);
ac_button.addEventListener('click', initialCalculator);
