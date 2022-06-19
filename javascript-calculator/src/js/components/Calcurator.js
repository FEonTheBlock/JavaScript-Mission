import { calculate } from '../utils/calcurate.js';
import { Digits } from './Digits.js';
import { Modifier } from './Modifier.js';
import { Operation } from './Operation.js';
import { Title } from './Title.js';

export function Calcurator({ Parent }) {
  this.Calcurator = document.createElement('div');
  this.Calcurator.className = 'calculator';
  Parent.appendChild(this.Calcurator);

  /** 상태 */
  this.state = {
    numbers: [0],
    activeIndex: 0,
    operation: null,
  };

  /** 자식 컴포넌트들 */
  const $Title = new Title({
    Parent: this.Calcurator,
    initState: {
      ...this.state,
    },
  });

  const $Digits = new Digits({
    Parent: this.Calcurator,
    initState: {
      ...this.state,
    },
    onClick: e => {
      const { digit } = e.target.dataset;
      if (!digit) return;
      const operand = this.state.numbers[this.state.activeIndex];

      if (operand?.length === 3) {
        window.alert('3자리 이하의 숫자를 입력해주세요.');
        return;
      }

      const newOperand = !!operand ? `${operand}${digit}` : digit;

      let newNumbers = [...this.state.numbers];
      newNumbers.pop();
      newNumbers = [...newNumbers, newOperand];

      this.setState({
        ...this.state,
        numbers: newNumbers,
      });
    },
  });

  const $Modifier = new Modifier({
    Parent: this.Calcurator,
    initState: {
      ...this.state,
    },
    onClick: () => {
      this.setState({
        numbers: [0],
        operation: null,
        activeIndex: 0,
      });
    },
  });

  const $Operation = new Operation({
    Parent: this.Calcurator,
    initState: {
      ...this.state,
    },
    onClick: e => {
      const { operation } = e.target.dataset;
      if (!operation) return;
      console.log(this.state, operation);

      if (operation !== '=') {
        this.setState({
          ...this.state,
          numbers: [...this.state.numbers, null],
          activeIndex: this.state.activeIndex + 1,
          operation,
        });
        return;
      }

      const result = calculate(this.state.numbers, this.state.operation);
      this.setState({
        numbers: [result],
        activeIndex: 0,
        operation: null,
      });
      return;
    },
  });

  /** 상태 업데이트 */
  this.setState = newState => {
    this.state = newState;
    $Digits.setState(newState);
    $Title.setState(newState);
    $Modifier.setState(newState);
    $Operation.setState(newState);
  };

  /** 초기화 */
  const init = () => {
    this.setState({
      ...this.state,
    });
  };

  init();
}
