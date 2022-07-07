import { resetStateId } from './store';
import { sanitize } from 'dompurify';

import createElement from './createElement';
import { resetVDOM } from './VirtualDOM';
import { runHydrate } from './hydrate';
import { resetId } from './soactId';

const render = (
  renderHTML: () => ReturnType<typeof createElement>,
  rootElement: HTMLElement | null
) => {
  if (!rootElement) {
    throw new Error('rootElement를 찾을 수 없습니다.');
  }
  const HTML = sanitize(renderHTML());
  rootElement.innerHTML = HTML;
  runHydrate();

  return (rerender = true) => {
    resetId();
    resetStateId();
    if (rerender) {
      resetVDOM();
      const reRenderHTML = sanitize(renderHTML());
      rootElement.innerHTML = reRenderHTML;
    } else {
      renderHTML();
    }
    runHydrate();
  };
};

export default render;
