class Calculator {
  #operand1;
  #operand2;
  #operator;
  #target;

  constructor(target) {
    this.#operand1 = '';
    this.#operand2 = '';
    this.#operator = '';
    this.#target = target;
    return 0;
  }

  render(value) {
    if (typeof Number(value) !== 'number') return;

    const formatValue = new Intl.NumberFormat().format(value);

    this.#target.innerText = formatValue;
  }

  calc() {
    let sum = 0;
    let isError = false;

    switch (this.#operator) {
      case 'ADD':
        sum = this.add();
        isError = !sum;
        break;

      case 'MINUS':
        sum = this.minus();
        isError = !sum;
        console.log({ sum, isError });
        break;

      case 'MULTIPLY':
        sum = this.multiply();
        isError = !sum;
        break;

      case 'DIVIDE':
        sum = this.divide();
        isError = !sum;
        break;

      default:
        this.clear();
        break;
    }

    if (isError) {
      this.clear();
      return;
    }

    this.render(sum);
  }

  setOperand(input) {
    let operand = '';

    if (!this.#operator) {
      operand = this.#operand1;
      operand += input;

      this.#operand1 = String(+operand).slice(0, 3);
      this.render(this.#operand1);
      return;
    }

    operand = this.#operand2;
    operand += input;

    this.#operand2 = String(+operand).slice(0, 3);
    this.render(this.#operand2);
  }

  setOperator(operator) {
    try {
      if (
        !(
          operator === 'ADD' ||
          operator === 'MINUS' ||
          operator === 'MULTIPLY' ||
          operator === 'DIVIDE'
        )
      ) {
        throw new Error(
          `${operator} 이름이 ADD, MINUS, MULTIPLY, DIVIDE 중에 하나가 아닙니다`
        );
      }

      this.#operator = operator;
    } catch (e) {
      console.log(e);
    }
  }

  clear() {
    this.#operand1 = '';
    this.#operand2 = '';
    this.#operator = '';
  }

  add() {
    if (!this.#operand1 || !this.#operand2) return;

    return Number(this.#operand1) + Number(this.#operand2);
  }

  minus() {
    if (!this.#operand1 || !this.#operand2) return;

    return Number(this.#operand1) - Number(this.#operand2);
  }

  multiply() {
    if (!this.#operand1 || !this.#operand2) return;

    return Number(this.#operand1) * Number(this.#operand2);
  }

  divide() {
    if (!this.#operand1 || !this.#operand2) return;

    return Math.floor(+this.#operand1 / +this.#operand2);
  }
}

export default Calculator;
