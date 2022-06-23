import Utils from './utils/utils.js';
import { ERROR } from './utils/handleError.js';

export default class Calculator {
  constructor() {
    this.firstNum = '';
    this.secondNum = '';
    this.operator = '';
    this.result = '';
  }

  setFirstNum(num) {
    if (Utils.isProperNum(this.firstNum)) {
      alert(ERROR.EXCEED_LIMIT_LENGTH);
      return;
    }
    this.firstNum += num;
  }

  setSecondNum(num) {
    if (Utils.isProperNum(this.secondNum)) {
      alert(ERROR.EXCEED_LIMIT_LENGTH);
      return;
    }
    this.secondNum += num;
  }

  setOperator(operator) {
    this.operator = operator;
  }

  setResult(result) {
    this.result = result;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = +this.firstNum + +this.secondNum;
        break;
      case '-':
        this.result = +this.firstNum - +this.secondNum;
        break;
      case 'X':
        this.result = +this.firstNum * +this.secondNum;
        break;
      case '/':
        this.result = Math.floor(+this.firstNum / +this.secondNum);
        break;
    }
  }

  // render expression
  render() {
    document.querySelector('#total').textContent = this.firstNum + this.operator + this.secondNum;
  }

  // render calculated result
  renderResult() {
    document.querySelector('#total').textContent = this.result;
  }

  // reset view
  reset() {
    this.firstNum = '';
    this.secondNum = '';
    this.operator = '';
    this.result = '';
    document.querySelector('#total').textContent = 0;
  }
}
