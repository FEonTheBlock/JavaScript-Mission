import { resetStateId } from './../store';
import { getRoot } from './../manageVDOM/root';
import { getNewVDOM } from '../manageVDOM/newVDOM';
import { getVDOM, setVDOM } from './../manageVDOM/VDOM';
import createDOM from './createDOM';
import setAttrs from './setAttrs';

const isChanged = (initVDOM: VDOM | string, newVDOM: VDOM | string) => {
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
    newVDOM: string | VDOM = '',
    initVDOM?: string | VDOM,
    idx = 0
  ) => {
    const $next = createDOM(newVDOM);
    const $current =
      typeof initVDOM !== 'string' ? initVDOM?.current : undefined;

    if (!initVDOM) {
      $parent.appendChild($next);
    } else if (!newVDOM) {
      $current && $parent.removeChild($current);
    } else if (isChanged(initVDOM, newVDOM)) {
      if ($current) {
        $current.replaceWith($next);
      } else if ($parent.childNodes[idx]) {
        $parent.childNodes[idx].replaceWith($next);
      }
    } else if (typeof initVDOM !== 'string' && typeof newVDOM !== 'string') {
      const length = Math.max(
        initVDOM.children.length,
        newVDOM.children.length
      );

      newVDOM.current = initVDOM.current;

      for (let i = 0; i < length; i++) {
        if ($parent) {
          updateElement(
            $current as HTMLElement,
            newVDOM.children[i],
            initVDOM.children[i],
            i
          );
        }
      }
    }

    if (typeof newVDOM !== 'string' && $parent) {
      $current && setAttrs(newVDOM.props, $current as HTMLElement);
    }
  };

  updateElement($parent, newVDOM, initVDOM);
  resetStateId();
  setVDOM(newVDOM);
};
export default updateDOM;
