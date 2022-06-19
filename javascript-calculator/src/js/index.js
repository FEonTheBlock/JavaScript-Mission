const total = document.getElementById('total');
const calculator = document.querySelector('.calculator');

let result = 0;
let first = '';
let last = '';
let tmp = '';
let operation = '';

const reset = () => {
  result = 0;
  first = '';
  last = '';
  operation = '';
  tmp = '';
  total.textContent = 0;
};

const calculate = (first, last) => {
  switch (operation) {
    case '+':
      return Number(first) + Number(last);
    case '-':
      return Number(first) - Number(last);
    case '/':
      return Math.floor(Number(first) / Number(last));
    case 'X':
      return Number(first) * Number(last);
    default:
      break;
  }
};

calculator.onclick = ({ target }) => {
  if (target.classList.contains('digit') && tmp.length > 3) {
    alert('숫자는 최대 3자리까지 입력 가능합니다.');
    return;
  }

  if (target.classList.contains('modifier')) {
    reset();
  }

  if (target.classList.contains('digit')) {
    tmp = tmp + target.textContent;
    if (operation === '') {
      first = tmp;
    } else {
      last = tmp;
    }
    total.textContent = tmp;
  }

  if (target.classList.contains('operation')) {
    if (target.textContent === '=' && operation === '') {
      return;
    }
    if (target.textContent === '=') {
      result = calculate(first, last);
      total.textContent = result;
      first = '' + result;
      operation = '';
      tmp = '';
    } else {
      operation = target.textContent;
      tmp = '';
    }
  }
};
