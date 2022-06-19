const $total = document.querySelector('#total');
const $modifiers = document.querySelector(".modifiers");
const $digits = document.querySelector(".digits");
const $operations = document.querySelector(".operations");

let operator = '';
let operand1 = 0;
let operand2 = 0;

const resetState = () => {
  operator = '';
  operand1 = 0;
  operand2 = 0;
}

const calculateResult = () => {
  let result = 0;

  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "X":
      result = operand1 * operand2;
      break;
    case "/":
      result = Math.floor(operand1 / operand2);
      break;
  }

  $total.textContent = result;
  resetState();
}

$digits.onclick = (e) => {
  const lastValue = operator === '' ? operand1 : operand2;
  const newValue = lastValue * 10 + +e.target.textContent;

  if (newValue.toString().length > 3) {
    alert('숫자는 한 번에 최대 3자리 수까지 입력 가능합니다.');
    return;
  }

  if (operator === '') {
    operand1 = newValue;
  } else {
    operand2 = newValue;
  }

  $total.textContent = newValue;
};

$modifiers.onclick = () => {
  $total.textContent = 0;
  resetState();
}

$operations.onclick = (e) => {
  if (e.target.textContent === '=') {
    calculateResult();
  } else {
    operator = e.target.textContent;
  }
}