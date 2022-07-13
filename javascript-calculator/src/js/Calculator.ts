interface OperatorMap {
  '+': 'plus';
  '-': 'minus';
  X: 'multiplication';
  '/': 'division';
}
type DigitName = 'firstDigit' | 'secondDigit';

export default class Calculator {
  static operatorMap: OperatorMap = {
    '+': 'plus',
    '-': 'minus',
    X: 'multiplication',
    '/': 'division',
  };

  private _curDigitName: DigitName = 'firstDigit';
  private _curOperator: OperatorMap[keyof OperatorMap] | null = null;
  private _total = 0;
  firstDigit: number;
  secondDigit: number;
  $calculator: HTMLElement;

  constructor($calculator: HTMLElement) {
    this.$calculator = $calculator;
    this.firstDigit = 0;
    this.secondDigit = 0;
  }

  init() {
    this.$calculator.onclick = (e) => {
      const { className, textContent } = e.target as HTMLElement;
      const $total = this.$calculator.querySelector('#total');

      if (!$total) return;

      switch (className) {
        case 'digit':
          const curDigit = this._curDigitName;
          this[curDigit] = +(this[curDigit] + (textContent || '')).slice(-3);
          $total.textContent = '' + this[curDigit];

          if (curDigit === 'firstDigit') {
            this._total = 0;
          }
          break;
        case 'modifier':
          this._curDigitName = 'firstDigit';
          this._curOperator = null;
          this._total = 0;
          this.firstDigit = 0;
          this.secondDigit = 0;
          $total.textContent = '' + 0;
          break;
        case 'operation':
          if (textContent === '=') {
            if (!this._curOperator) return;
            this[this._curOperator]();
            $total.textContent = '' + Math.floor(this._total);

            // 초기화
            this._curDigitName = 'firstDigit';
            this._curOperator = null;
            this.firstDigit = 0;
            this.secondDigit = 0;
          } else if (textContent) {
            const operationText = textContent as keyof OperatorMap;
            this._curOperator = Calculator.operatorMap[operationText];
            this._curDigitName = 'secondDigit';
          }
          break;
        default:
          break;
      }
    };
  }

  plus() {
    if (this._total || (!this._total && !this.firstDigit)) {
      this._total += this.secondDigit;
    } else if (this.firstDigit) {
      this._total = this.firstDigit + this.secondDigit;
    }
  }

  minus() {
    if (this._total || (!this._total && !this.firstDigit)) {
      this._total -= this.secondDigit;
    } else if (this.firstDigit) {
      this._total = this.firstDigit - this.secondDigit;
    }
  }

  multiplication() {
    if (this._total || (!this._total && !this.firstDigit)) {
      this._total *= this.secondDigit;
    } else if (this.firstDigit) {
      this._total = this.firstDigit * this.secondDigit;
    }
  }

  division() {
    if (this._total || (!this._total && !this.firstDigit)) {
      this._total /= this.secondDigit;
    } else if (this.firstDigit) {
      this._total = this.firstDigit / this.secondDigit;
    }
  }
}
