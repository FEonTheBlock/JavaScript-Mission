const $result = document.querySelector('.result');
const btn_numbers = document.querySelectorAll('.numbers > button');
const [$btn_ac, $btn_plus, $btn_minus, $btn_multi, $btn_div, $btn_equal] =
  document.querySelectorAll('.board > button');

let currunt_num = 0;

const calculator = (() => {
  let leftSide = 0;
  let rightSide = 0;
  let operator = null;
  return {
    setNumber(n) {
      if (operator) {
        rightSide = n;
      } else {
        leftSide = n;
      }
    },
    setOperator(selectedOperator) {
      operator = selectedOperator;
    },
    getResult() {
      switch (operator) {
        case 'plus':
          return leftSide + rightSide;
        case 'minus':
          return leftSide - rightSide;
        case 'multiply':
          return leftSide * rightSide;
        case 'divide':
          if(!rightSide) return alert('0으로 나눌 수 없습니다.');
          return Math.floor(leftSide / rightSide);
      }
    },
    clear() {
      [leftSide, rightSide, operator] = [0, 0, null];
    },
  };
})();

$btn_ac.onclick = () => {
  $result.innerHTML = 0;
  calculator.clear();
};

btn_numbers.forEach(($btn, num) => {
  $btn.onclick = () => {
    if (currunt_num > 99) return;
    currunt_num = currunt_num * 10 + num;
    $result.innerHTML = currunt_num;
  };
});

[$btn_plus, $btn_minus, $btn_multi, $btn_div].forEach(($btn, index) => {
  const operations = ['plus', 'minus', 'multiply', 'divide'];
  $btn.onclick = () => {
    calculator.setNumber(currunt_num);
    currunt_num = 0;
    calculator.setOperator(operations[index]);
  };
});

$btn_equal.onclick = () => {
  calculator.setNumber(currunt_num);
  $result.innerHTML = calculator.getResult();
  currunt_num = 0;
  calculator.setNumber(0);
  calculator.setOperator(null);
  calculator.setNumber(0);
};
