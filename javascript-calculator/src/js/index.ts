import '../css/index.css';

import Calculator from './Calculator';

document.addEventListener('DOMContentLoaded', () => {
  const $calculator = document.querySelector('.calculator') as HTMLDivElement;
  if ($calculator) {
    const calculator = new Calculator($calculator);
    calculator.init();
  }
});
