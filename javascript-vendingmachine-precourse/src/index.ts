import { render, createElement, useState } from './utils/Soact/v2';

const Test = ({ children }: PropsWithChildren<{}>) => {
  return createElement('div', null, `test - ${children}`);
};

export default render(() => {
  return createElement(
    'div',
    null,
    '최상단',
    createElement(Test, null, 'hi'),
    '최하단'
  );
}, document.querySelector('#app'));
