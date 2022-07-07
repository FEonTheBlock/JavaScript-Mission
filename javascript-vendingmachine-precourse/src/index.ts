import { render, createElement } from './utils/Soact';

export default render(() => {
  return createElement(
    'div',
    null,
    createElement('input', { value: 'hi' }),
    createElement(
      'ul',
      null,
      createElement(
        'li',
        { onclick: (e) => console.log('아이템 1') },
        createElement('a', { href: '#' }, '아이템1')
      ),
      createElement('li', null, '아이템2')
    ),
    '텍스트'
  );
}, document.querySelector('#app'));
