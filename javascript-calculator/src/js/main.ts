import store from './store';
import { calculate, isOperation, isDigit } from './utils';

export const INITIAL_TOTAL = '0';
export type Operator = '+' | '-' | 'X' | '/' | '=';

const clearCalculator = () => {
  store.set({ acc: null, cur: null, total: INITIAL_TOTAL, operand: null });
};

const calculateValues = () => {
  if (!store.acc || !store.cur || !store.operand) return;

  const total = calculate(store.acc, store.cur, store.operand);
  const acc = null;
  const cur = null;
  const operand = null;
  store.set({ total, acc, cur, operand });
};

const operateValues = (operation: Operator) => {
  if (store.acc && store.cur) {
    throw Error('2개의 숫자만 입력하세요.');
  }

  if (!store.cur) return;

  const acc = store.cur;
  const cur = null;
  const operand = operation;
  const total = acc;

  store.set({ acc, cur, operand, total });
};

export const handleDigitsClick = (e: MouseEvent) => {
  if (store.cur?.length === 3) return;

  const digit = (e.target as HTMLButtonElement).textContent;
  if (!digit || !isDigit(digit)) return;

  const cur = store.cur ? store.cur + digit : digit;
  const total = cur ?? INITIAL_TOTAL;
  store.set({ cur, total });
};

export const handleOperationsClick = (e: MouseEvent) => {
  const operation = (e.target as HTMLButtonElement).textContent;
  if (!operation || !isOperation(operation)) return;

  operation === '=' ? calculateValues() : operateValues(operation);
};

export const handleModifierClick = () => {
  clearCalculator();
};
