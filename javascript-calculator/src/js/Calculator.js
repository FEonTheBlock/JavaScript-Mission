import Utils from './utils/utils.js';
import { ERROR } from './utils/handleError.js';

export default class Calculator {
  constructor() {
    this.firstNum = '';
    this.secondNum = '';
    this.operand = '';
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

  setOperand(operand) {
    this.operand = operand;
  }

  setResult(result) {
    this.result = result;
  }

  calculate() {
    if (!Utils.hasTwoNums(this.firstNum, this.secondNum)) {
      this.reset();
      return;
    }

    switch (this.operand) {
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
    document.querySelector('#total').textContent = this.firstNum + this.operand + this.secondNum;
  }

  // render calculated result
  renderResult() {
    document.querySelector('#total').textContent = this.result;
  }

  // reset view
  reset() {
    this.firstNum = '';
    this.secondNum = '';
    this.operand = '';
    this.result = '';
    document.querySelector('#total').textContent = 0;
  }
}
