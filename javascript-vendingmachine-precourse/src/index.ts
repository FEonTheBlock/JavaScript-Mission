import { createElement, render } from './utils/Soact';
import { Test } from './pages';

export default render(
  () => createElement(Test, null, '테스트1'),
  document.querySelector('#app')
);
