import '../css/index.css';

import Calculator from './Calculator.js';

document.addEventListener('DOMContentLoaded', () => {
  const $calculator = document.querySelector('.calculator');
  if ($calculator) {
    const calculator = new Calculator($calculator);
    calculator.init();
  }
});
