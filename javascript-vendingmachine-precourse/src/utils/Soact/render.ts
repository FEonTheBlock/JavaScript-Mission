import { sanitize } from 'dompurify';

import createElement from './createElement';

import { runHydrate } from './hydrate';
const render = (
  HTML: () => ReturnType<typeof createElement>,
  rootElement: HTMLElement | null
) => {
  if (!rootElement) {
    throw new Error('rootElement를 찾을 수 없습니다.');
  }

  rootElement.innerHTML = sanitize(HTML());
  runHydrate();

  return () => {
    rootElement.innerHTML = sanitize(HTML());
    runHydrate();
  };
};

export default render;
