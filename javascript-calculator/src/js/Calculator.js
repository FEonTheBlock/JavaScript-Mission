export default class Calculator {
  static #operatorMap = {
    '/': 'division',
    X: 'multiplication',
    '-': 'minus',
    '+': 'plus',
  };

  #curDigitName = 'firstDigit';
  #curOperator = '';
  #total = 0;

  constructor($calculator) {
    this.$calculator = $calculator;
    this.firstDigit = 0;
    this.secondDigit = 0;
  }

  init() {
    this.$calculator.onclick = (e) => {
      const { className, textContent } = e.target;
      const $total = this.$calculator.querySelector('#total');

      switch (className) {
        case 'digit':
          const curDigit = this.#curDigitName;
          this[curDigit] = +(this[curDigit] + textContent).slice(-3);
          $total.textContent = '' + this[curDigit];

          if (curDigit === 'firstDigit') {
            this.#total = 0;
          }
          break;
        case 'modifier':
          this.#curDigitName = 'firstDigit';
          this.#curOperator = '';
          this.#total = 0;
          this.firstDigit = 0;
          this.secondDigit = 0;
          $total.textContent = '' + 0;
          break;
        case 'operation':
          if (textContent === '=') {
            if (!this.#curOperator) return;
            this[this.#curOperator]();
            $total.textContent = '' + Math.floor(this.#total);

            // 초기화
            this.#curDigitName = 'firstDigit';
            this.#curOperator = '';
            this.firstDigit = 0;
            this.secondDigit = 0;
          } else {
            this.#curOperator = Calculator.#operatorMap[textContent];
            this.#curDigitName = 'secondDigit';
          }
          break;
        default:
          break;
      }
    };
  }

  plus() {
    if (this.#total || (!this.#total && !this.firstDigit)) {
      this.#total += this.secondDigit;
    } else if (this.firstDigit) {
      this.#total = this.firstDigit + this.secondDigit;
    }
  }

  minus() {
    if (this.#total || (!this.#total && !this.firstDigit)) {
      this.#total -= this.secondDigit;
    } else if (this.firstDigit) {
      this.#total = this.firstDigit - this.secondDigit;
    }
  }

  multiplication() {
    if (this.#total || (!this.#total && !this.firstDigit)) {
      this.#total *= this.secondDigit;
    } else if (this.firstDigit) {
      this.#total = this.firstDigit * this.secondDigit;
    }
  }

  division() {
    if (this.#total || (!this.#total && !this.firstDigit)) {
      this.#total /= this.secondDigit;
    } else if (this.firstDigit) {
      this.#total = this.firstDigit / this.secondDigit;
    }
  }
}
