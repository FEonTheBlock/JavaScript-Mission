const ERROR = 'Error';

export default class App {
  constructor({ $target }) {
    this.state = {
      firstOperand: '0',
      secondOperand: '',
      operator: '',
    };

    this.setDOM($target);
    this.render();
    this.setEventHandler();
  }

  setState(nextState) {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  }

  setDOM($target) {
    this.$total = $target.querySelector('#total');
    this.$digits = $target.querySelector('.digits');
    this.$modifiers = $target.querySelector('.modifiers');
    this.$operations = $target.querySelector('.operations');
  }

  render() {
    const { firstOperand, secondOperand, operator } = this.state;
    this.$total.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  }

  setEventHandler() {
    this.$digits.addEventListener('click', this.handleClickDigits.bind(this));
    this.$modifiers.addEventListener('click', this.handleClickModifiers.bind(this));
    this.$operations.addEventListener('click', this.handleClickOperations.bind(this));
  }

  handleClickDigits(e) {
    const { firstOperand, secondOperand, operator } = this.state;
    const isFirstOperand = operator === '';

    let currentOperand = isFirstOperand ? firstOperand : secondOperand;
    if (currentOperand === ERROR) {
      currentOperand = '';
    }
    if (currentOperand.length >= 3) {
      return;
    }

    currentOperand = Number(currentOperand + e.target.textContent) + '';
    const nextState = isFirstOperand
      ? { firstOperand: currentOperand }
      : { secondOperand: currentOperand };
    this.setState(nextState);
  }
  handleClickModifiers() {
    this.setState({
      firstOperand: '0',
      secondOperand: '',
      operator: '',
    });
  }
  handleClickOperations(e) {
    const operator = e.target.textContent;
    if (operator !== '=' && this.state.operator === '') {
      this.setState({ operator });
      return;
    }

    const { firstOperand, secondOperand, operator: prevOperator } = this.state;
    if (secondOperand === '') {
      return;
    }

    const computedNumber = this.calculate(firstOperand, secondOperand, prevOperator);
    this.setState({
      firstOperand: computedNumber.toString(),
      secondOperand: '',
      operator: '',
    });
  }

  calculate(firstOperand, secondOperand, operator) {
    let computedNumber = '';
    switch (operator) {
      case '/':
        computedNumber = Math.floor(+firstOperand / +secondOperand);
        computedNumber = Number.isNaN(computedNumber) ? ERROR : computedNumber;
        break;
      case 'X':
        computedNumber = +firstOperand * +secondOperand;
        break;
      case '-':
        computedNumber = +firstOperand - +secondOperand;
        break;
      case '+':
        computedNumber = +firstOperand + +secondOperand;
        break;
    }
    return computedNumber;
  }
}
