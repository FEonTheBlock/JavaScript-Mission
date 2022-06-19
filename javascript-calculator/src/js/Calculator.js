export default class Calculator {
  #numbers = [];
  #operators = [];

  constructor(number = 0) {
    this.#numbers = [number];
    this.#operators = [];
    this.isFinish = false;
    this.total = number;
    this.canAddNextNumber = false;
    this.formula = number + '';
  }

  setTotal(total) {
    this.total = total;
  }

  setOperator(operator) {
    if (this.#numbers.length > this.#operators.length) {
      this.#operators.push(operator);
    } else {
      this.#operators[this.#operators.length - 1] = operator;
    }
    this.canAddNextNumber = true;
  }

  getLastNum() {
    return this.#numbers[this.#numbers.length - 1];
  }

  // type check
  setLastNum(num) {
    this.#numbers[this.#numbers.length - 1] = num;
    this.canAddNextNumber = false;
  }

  addNextNum(num = 0) {
    this.#numbers[this.#numbers.length] = num;
    this.canAddNextNumber = false;
  }

  computedFormula() {
    const formula = this.#numbers.reduce((acc, cur, idx) => {
      return idx === 0 ? acc + cur : acc + this.#operators[idx - 1] + cur;
    }, '');

    this.formula = this.canAddNextNumber
      ? formula + this.#operators[this.#operators.length - 1]
      : formula;
  }

  isNumberTurn() {
    return this.#numbers.length === this.#operators.length;
  }

  getLastCalculation() {
    return [this.#numbers[this.#numbers.length - 1], this.#operators[this.#operators.length - 1]];
  }

  calculateTotal() {
    this.total = this.#numbers.reduce(
      (acc, cur, idx) =>
        idx === 0 ? acc : Calculator.calculateNumbers(this.#operators[idx - 1], acc, cur),
      this.#numbers[0]
    );
    this.isFinish = true;
    return this.total;
  }

  initialCalculator(number = 0) {
    this.#numbers = [number];
    this.total = 0;
    this.#operators = [];
    this.canAddNextNumber = false;
    this.isFinish = false;
  }

  static calculateNumbers(operator, num1, num2) {
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    return result;
  }
}
