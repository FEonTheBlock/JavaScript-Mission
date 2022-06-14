import { $ } from './utils/dom';
import { INITIALIZE_STATE, INITIAL_CALCULATE_VALUE } from './constants';
import { State } from './types';

export default class Calculator {
  state;

  $total;

  constructor() {
    this.state = INITIALIZE_STATE;
    this.$total = $<HTMLHeadingElement>('#total');
    this.setEvent();
  }

  initializeCalculator() {
    this.setState(INITIALIZE_STATE);
    this.$total.textContent = INITIAL_CALCULATE_VALUE;
  }

  setOperand(operand: keyof State, value: string) {
    if (this.state[operand].length === 3) {
      alert('숫자는 한번에 최대 3자리 수까지 입력이 가능합니다. \n연산자를 눌러주세요.');
      return;
    }

    this.setState({
      ...this.state,
      [operand]: this.state[operand] === '0' ? value : this.state[operand] + value,
    });
  }

  handleDigitsClick(e: MouseEvent) {
    if (this.state.result !== '') this.initializeCalculator();

    this.setOperand(
      this.state.operator === '' ? 'operand1' : 'operand2',
      (e.target as HTMLButtonElement).textContent as string
    );
  }

  handleModifierClick() {
    this.initializeCalculator();
  }

  handleOperationClick(e: MouseEvent) {
    if (this.state.operand1 === '') {
      alert('피연산자 1개가 먼저 존재해야 합니다.');
      return;
    }

    const operator = (e.target as HTMLButtonElement).textContent as string;
    const isCalculatePossible = this.state.operand1 !== '' && this.state.operand2 !== '' && this.state.operator !== '';

    if (isCalculatePossible && operator === '=') {
      let result = '';
      switch (this.state.operator) {
        case '+':
          result = String(Number(this.state.operand1) + Number(this.state.operand2));
          break;
        case '-':
          result = String(Number(this.state.operand1) - Number(this.state.operand2));
          break;
        case 'X':
          result = String(Number(this.state.operand1) * Number(this.state.operand2));
          break;
        case '/':
          result = String(Math.floor(Number(this.state.operand1) / Number(this.state.operand2)));
          break;
        default:
          throw new Error('잘못된 연산자 입니다.');
      }

      this.setState({
        ...this.state,
        result,
      });
    } else if (!isCalculatePossible && operator === '=') {
      alert('= 연산은 피연산자 2개와 연산자 1개가 모두 있어야 합니다.');
    } else {
      this.setState({
        ...this.state,
        operator,
      });
    }
  }

  setState(newState: State) {
    this.state = newState;
    this.render();
  }

  render() {
    this.$total.textContent = this.state.result || this.state.operand1 + this.state.operator + this.state.operand2;
  }

  setEvent() {
    $<HTMLDivElement>('.digits').addEventListener('click', this.handleDigitsClick.bind(this));
    $<HTMLButtonElement>('.modifier').addEventListener('click', this.handleModifierClick.bind(this));
    $<HTMLDivElement>('.operations').addEventListener('click', this.handleOperationClick.bind(this));
  }
}
