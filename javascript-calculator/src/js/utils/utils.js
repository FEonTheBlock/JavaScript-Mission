import { ERROR, LIMIT_LENGTH } from './handleError.js';

export default class Utils {
  static isProperNum(num) {
    return num.length >= LIMIT_LENGTH;
  }

  static hasTwoNums(num1, num2) {
    if (!num1 || !num2) {
      alert(ERROR.HAS_NOT_TWO_NUMS);
      return false;
    }
    return true;
  }
}
