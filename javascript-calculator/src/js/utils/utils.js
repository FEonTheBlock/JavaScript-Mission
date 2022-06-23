import { LIMIT_LENGTH } from './handleError.js';

export default class Utils {
  static isProperNum(num) {
    return num.length >= LIMIT_LENGTH;
  }

  static hasTwoNums(num1, num2) {
    return !!num1 && !!num2;
  }
}
