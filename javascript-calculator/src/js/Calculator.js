export default class Calculator {
  #numbers = [];
  #operators = [];

  constructor(number = 0) {
    this.#numbers = [number];
    this.#operators = [];
    this.total = number;
    this.formula = number + '';
    this.completeNumber = true;
  }

  // computed ===============================
  // vue 에서 상태 변화에 따라 캐싱된 계산값들을 기억할 수 있는 computed에 해당
  shouldGetResult() {
    return this.#numbers.length >= 2 || this.#operators[this.#operators.length - 1] === '=';
  }

  shouldAddNumber() {
    return !this.#numbers.length || this.#numbers.length === this.#operators.length;
  }

  computedFormula() {
    const formula = this.#numbers.reduce((acc, cur, idx) => {
      return acc + cur + (this.#operators[idx] ? this.#operators[idx] : '');
    }, '');

    this.formula = formula;
  }

  calculateTotal() {
    this.total =
      this.#numbers.length === 1
        ? this.#numbers[this.#numbers.length - 1]
        : this.#numbers.reduce(
            (acc, cur, idx) =>
              idx === 0 ? acc : Calculator.calculateNumbers(this.#operators[idx - 1], acc, cur),
            this.#numbers[0]
          );

    return this.total;
  }

  // method ===============================
  updateNumber(addedNumber, maxLength = 3) {
    if (this.completeNumber) {
      this.resetNumber(addedNumber);
      return;
    }

    const actualNum = this.#numbers[this.#numbers.length - 1];
    const isValidLength = actualNum.toString().length < maxLength;

    if (isValidLength)
      this.#numbers[this.#numbers.length - 1] = parseInt(actualNum.toString() + addedNumber);

    this.completeNumber = false;
  }

  resetNumber(addedNumber = 0) {
    this.#numbers = [addedNumber];
    this.completeNumber = false;
    this.total = 0;
  }

  setOperator(operator) {
    if (this.#numbers.length > this.#operators.length) {
      this.#operators.push(operator);
    } else {
      this.#operators[this.#operators.length - 1] = operator;
    }
  }

  addNextNum(num = 0) {
    this.#numbers[this.#numbers.length] = num;
    this.completeNumber = false;
  }

  initCalculator(number = 0) {
    this.#numbers = [number];
    this.total = number;
    this.#operators = [];
    this.formula = number + '';
    this.completeNumber = true;
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
