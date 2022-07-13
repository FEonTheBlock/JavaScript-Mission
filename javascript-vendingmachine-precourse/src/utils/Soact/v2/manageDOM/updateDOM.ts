import { getRoot } from './../manageVDOM/root';
import { getNewVDOM } from '../manageVDOM/newVDOM';
import { getVDOM, setVDOM } from './../manageVDOM/VDOM';
import setAttrs from './setAttrs';
import createDOM from './createDOM';

const isChanged = (initVDOM: VDOM | string, newVDOM: VDOM | string) => {
  console.log({
    initVDOM,
    newVDOM,
    isC:
      typeof initVDOM !== typeof newVDOM ||
      (typeof initVDOM === 'string' && initVDOM !== newVDOM) ||
      (typeof initVDOM !== 'string' &&
        typeof newVDOM !== 'string' &&
        initVDOM.el !== newVDOM.el),
  });
  return (
    typeof initVDOM !== typeof newVDOM ||
    (typeof initVDOM === 'string' && initVDOM !== newVDOM) ||
    (typeof initVDOM !== 'string' &&
      typeof newVDOM !== 'string' &&
      initVDOM.el !== newVDOM.el)
  );
};

const updateDOM = (
  $parent: HTMLElement = getRoot(),
  newVDOM: VDOM = getNewVDOM(),
  initVDOM: string | VDOM = getVDOM()
) => {
  const updateElement = (
    $parent: HTMLElement,
    newVDOM: string | VDOM,
    initVDOM?: string | VDOM,
    idx = 0
  ) => {
    if (!initVDOM) {
      console.log({ $parent, newVDOM });
      $parent.appendChild(createDOM(newVDOM));
    } else if (!newVDOM) {
      $parent.removeChild($parent.childNodes[idx]);
    } else if (isChanged(initVDOM, newVDOM)) {
      $parent.replaceChild(createDOM(newVDOM), $parent.childNodes[idx]);
    } else if (typeof initVDOM !== 'string' && typeof newVDOM !== 'string') {
      const initVDOMChildLength = initVDOM.children.length;
      const newVDOMChildLength = newVDOM.children.length;

      for (let i = 0; i < newVDOMChildLength || i < initVDOMChildLength; i++) {
        console.log({ $parent: $parent.childNodes[idx] });
        updateElement(
          $parent.childNodes[idx] as HTMLElement,
          newVDOM.children[i],
          initVDOM.children[i],
          i
        );
      }
    }
  };

  updateElement($parent, newVDOM, initVDOM);
  setVDOM(newVDOM);
};
export default updateDOM;
