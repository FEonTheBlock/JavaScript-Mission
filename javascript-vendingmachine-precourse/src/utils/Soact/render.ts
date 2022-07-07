import { sanitize } from 'dompurify';
import makeClassName from '../makeClassName';

const setDOMAttribute = ($DOM: HTMLElement, attrs: SoactDomAttribute) => {
  for (const [propName, propValue] of Object.entries(attrs)) {
    const tmpPropName = propName as keyof DOMAttribute;
    if (tmpPropName === 'className' && Array.isArray(propValue)) {
      $DOM[tmpPropName] = makeClassName(propValue);
    } else {
      $DOM[tmpPropName] = propValue;
    }
  }
};

const setChildren = ($DOM: HTMLElement, children: (string | VDOM)[]) => {
  for (const childVirtualDOM of children) {
    if (typeof childVirtualDOM === 'string') {
      $DOM.append(sanitize(childVirtualDOM));
    } else {
      appendDOM($DOM, childVirtualDOM);
    }
  }
};

const appendDOM = (
  $parentElement: HTMLElement | DocumentFragment,
  { el, props, children }: VDOM
) => {
  // realDOM 생성
  const $realDOM = document.createElement(el);

  // DOMAttribute 설정
  if (props) {
    setDOMAttribute($realDOM, props);
  }

  // children 순회
  setChildren($realDOM, children);

  $parentElement.appendChild($realDOM);
};

const render = (
  createvirtualDOM: () => VDOM,
  $rootElement: HTMLElement | null
) => {
  if (!$rootElement) {
    throw new Error('rootElement를 찾을 수 없습니다.');
  }

  const $virtualDOMHead = document.createDocumentFragment();
  const virtualDOM = createvirtualDOM();
  appendDOM($virtualDOMHead, virtualDOM);
  $rootElement.appendChild($virtualDOMHead);
};

export default render;
