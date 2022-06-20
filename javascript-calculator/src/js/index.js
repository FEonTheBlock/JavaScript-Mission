const $total = document.getElementById("total");
const $digits = document.querySelector(".digits");
const $operations = document.querySelector(".operations");

const options = {
  operandQ: [0, 0],
  isOperating: false,
  operationToDo: () => {},
  operandIndex: 0,
  result: 0,
};

const reset = (isAC = true) => {
  options.operandQ = [0, 0];
  options.isOperating = false;
  options.operandIndex = 0;
  options.operationToDo = () => {};
  if (isAC) {
    options.result = 0;
    $total.textContent = options.result;
  }
};

const operations = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

$digits.onclick = (e) => {
  if (!e.target.matches("button")) return;
  if (options.isOperating) options.operandIndex = 1;
  options.operandQ[options.operandIndex] =
    // options.operandQ[options.operandIndex] > 999
    //   ? options.operandQ[options.operandIndex]
    //   :
    options.operandQ[options.operandIndex] * 10 + Number(e.target.textContent);

  $total.textContent = options.operandQ[options.operandIndex];
};

$operations.onclick = (e) => {
  if (!e.target.matches("button")) return;
  if (e.target.dataset.operation === "equalTo") {
    options.result = Math.floor(options.operationToDo(...options.operandQ));
    $total.textContent = options.result;
    reset(false);
  } else {
    options.isOperating = true;
    options.operationToDo = operations[e.target.dataset.operation];
  }
};

document.querySelector(".modifier").onclick = reset;
