import { Operator, INITIAL_TOTAL } from './main';

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export const calculate = (one: string, other: string, operand: Operator) => {
  const [num1, num2] = [+one, +other];

  switch (operand) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case 'X':
      return String(num1 * num2);
    case '/':
      return String(Math.floor(num1 / num2));
    default:
      return INITIAL_TOTAL;
  }
};

export const isOperation = (textContent: string): textContent is Operator => {
  return '+-X/='.includes(textContent);
};

export const isDigit = (textContent: string): textContent is Digit => {
  return '0123456789'.includes(textContent);
};
