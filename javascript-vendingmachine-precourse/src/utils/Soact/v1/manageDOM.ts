import { getInitVDOM } from './virtualDOM';
import { sanitize } from 'dompurify';
import makeClassName from '../../lib/makeClassName';

export const setDOMAttribute = (
  $DOM: HTMLElement,
  attrs: SoactDomAttribute | SoactDomAttributeList | null
) => {
  if (!attrs) {
    return;
  }

  const attrList = Array.isArray(attrs) ? attrs : Object.entries(attrs);

  for (const [propName, propValue] of attrList) {
    const tmpPropName = propName as keyof DOMAttribute;
    if (tmpPropName === 'className' && Array.isArray(propValue)) {
      $DOM[tmpPropName] = makeClassName(propValue);
    } else {
      $DOM[tmpPropName] = propValue;
    }
  }
};

export const setChildren = (
  $parentElement: HTMLElement,
  children: Children
) => {
  for (let key = 0; key < children.length; key++) {
    const childVirtualDOM = children[key];
    if (typeof childVirtualDOM === 'string') {
      $parentElement.innerHTML = sanitize(childVirtualDOM);
    } else {
      childVirtualDOM.key = key;
      appendDOM(childVirtualDOM, $parentElement);
    }
  }
};

export const appendDOM = (
  VDOM: VDOM,
  $parentElement: HTMLElement | null = null
) => {
  const { el, props, children } = VDOM;
  // realDOM 생성
  let $realDOM: ReturnType<Document['createElement']>;
  if (!VDOM.current) {
    $realDOM = document.createElement(el);
    VDOM.current = $realDOM;
  } else {
    $realDOM = VDOM.current;
  }

  // DOMAttribute 설정
  if (props) {
    setDOMAttribute($realDOM, props);
  }

  // children 순회
  setChildren($realDOM, children);

  if ($parentElement) {
    $parentElement.appendChild($realDOM);
  }
};

export const setKeyInVDOM = (children: Children) => {
  for (let key = 0; key < children.length; key++) {
    const childVirtualDOM = children[key];
    if (typeof childVirtualDOM !== 'string') {
      childVirtualDOM.key = key;
      setKeyInVDOM(childVirtualDOM.children);
    }
  }
};

export const updateDOM = (VDOM: VDOM) => {
  // const renderDOM = (
  //   $parentElement: HTMLElement | null,
  //   children: Children
  // ) => {
  //   if (!children.length) {
  //   } else {
  //     for (const VDOM of children) {
  //       if (typeof VDOM === 'string') {
  //         if ($parentElement && $parentElement.innerHTML !== VDOM) {
  //           $parentElement.innerHTML = VDOM;
  //         }
  //       } else {
  //         let $realDOM: ReturnType<Document['createElement']>;
  //         if (VDOM.current) {
  //           $realDOM = VDOM.current;
  //         } else {
  //           $realDOM = document.createElement(VDOM.el);
  //           VDOM.current = $realDOM;
  //         }
  //         setDOMAttribute($realDOM, VDOM.props);
  //         if ($parentElement) {
  //           if (VDOM.el !== 'input') {
  //             // console.log({ $parentElement, $realDOM, VDOM });
  //             // $parentElement.appendChild($realDOM);
  //           }
  //         }
  //         renderDOM($realDOM, VDOM.children);
  //       }
  //     }
  //   }
  // };
  // renderDOM(null, [VDOM]);
};
