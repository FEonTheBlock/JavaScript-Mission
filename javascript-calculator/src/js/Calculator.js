class Calculator {
  #firstOperand;
  #secondOperand;
  #operator;
  #target;

  constructor(target) {
    this.#firstOperand = '';
    this.#secondOperand = '';
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
      operand = this.#firstOperand;
      operand += input;

      this.#firstOperand = String(+operand).slice(0, 3);
      this.render(this.#firstOperand);
      return;
    }

    operand = this.#secondOperand;
    operand += input;

    this.#secondOperand = String(+operand).slice(0, 3);
    this.render(this.#secondOperand);
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
    this.#firstOperand = '';
    this.#secondOperand = '';
    this.#operator = '';
  }

  add() {
    if (!this.#firstOperand || !this.#secondOperand) return;

    return Number(this.#firstOperand) + Number(this.#secondOperand);
  }

  minus() {
    if (!this.#firstOperand || !this.#secondOperand) return;

    return Number(this.#firstOperand) - Number(this.#secondOperand);
  }

  multiply() {
    if (!this.#firstOperand || !this.#secondOperand) return;

    return Number(this.#firstOperand) * Number(this.#secondOperand);
  }

  divide() {
    if (!this.#firstOperand || !this.#secondOperand) return;

    return Math.floor(+this.#firstOperand / +this.#secondOperand);
  }
}

export default Calculator;
