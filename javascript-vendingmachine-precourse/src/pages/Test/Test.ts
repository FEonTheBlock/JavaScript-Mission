import { createElement } from '../../utils/Soact';

import style from './test.module.css';

const test = ({}: DefaultProps) => {
  return createElement(
    'div',
    {
      className: [style.hi, style.Container],
    },
    `
      <h1>test 페이지</h1>
      ${createElement('button', { className: style.button }, '숫자 증가')}
      `
  );
};

export default test;
