import Calculator from './Calculator.js';

const ADD = 'ADD';
const MINUS = 'MINUS';
const MULTI = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

window.addEventListener('DOMContentLoaded', () => {
  const $total = document.querySelector('#total');
  const $digits = document.querySelector('.digits');
  const $opeations = document.querySelector('.operations');
  const $modifier = document.querySelector('.modifier');

  const calculator = new Calculator($total);

  $digits.addEventListener('click', (event) => {
    const inputValue = event.target.innerText;

    calculator.setOperand(inputValue);
  });

  $opeations.addEventListener('click', (event) => {
    const operator = event.target.innerText;

    switch (operator) {
      case '+':
        calculator.setOperator(ADD);
        break;
      case '-':
        calculator.setOperator(MINUS);
        break;
      case 'X':
        calculator.setOperator(MULTI);
        break;
      case '/':
        calculator.setOperator(DIVIDE);
        break;
      case '=':
        calculator.calc();
        calculator.clear();
        break;
    }
  });

  $modifier.addEventListener('click', () => {
    calculator.clear();
    calculator.render(0);
  });
});
