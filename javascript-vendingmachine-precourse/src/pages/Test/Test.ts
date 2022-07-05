import { createElement, useState } from '../../utils/Soact';
import style from './Test.module.css';

const Test: Component = ({ children }) => {
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
      <div>${children}</div>`
  );
};

export default Test;
