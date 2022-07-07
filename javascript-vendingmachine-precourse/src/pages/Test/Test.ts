import { createElement, useState } from '../../utils/Soact';

import { Link } from '../../utils/Router';

import style from './test.module.css';

const test = ({}: DefaultProps) => {
  const [number, setNumber] = useState(0);
  const handleClick = (e: Event) => {
    e.stopPropagation();
    setNumber(number + 1);
  };
  return createElement(
    'div',
    {
      classList: [style.hi, style.Container],
    },
    `
      <h1>test 페이지</h1>
      <h2>${number}</h2>
      ${createElement(
        'button',
        { onclick: handleClick, className: style.button },
        '숫자 증가'
      )}
      ${Link({ href: 'foo', children: '하이' })}
      `
  );
};

export default test;
