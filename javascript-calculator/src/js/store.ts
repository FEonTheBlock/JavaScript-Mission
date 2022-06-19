import { Operator } from './main';
import render from './renders';

interface Store {
  acc: string | null;
  cur: string | null;
  total: string;
  operand: Operator | null;
}

let acc: Store['acc'] = null;
let cur: Store['cur'] = null;
let total: Store['total'] = '0';
let operand: Store['operand'] = null;

const store = {
  set total(totalValue: Store['total']) {
    total = totalValue;
    render(total);
  },

  get total() {
    return total;
  },

  set acc(value: Store['acc']) {
    acc = value;
  },

  get acc() {
    return acc;
  },

  set cur(value: Store['cur']) {
    cur = value;
  },

  get cur() {
    return cur;
  },

  set operand(operator: Store['operand']) {
    operand = operator;
  },

  get operand() {
    return operand;
  },

  set(calculatorValues: Partial<Store>) {
    const { acc, cur, total, operand } = calculatorValues;

    if (acc || acc === null) this.acc = acc;
    if (cur || cur === null) this.cur = cur;
    if (total) this.total = total;
    if (operand || operand === null) this.operand = operand;
  },
};

export default store;
