import { resetStateId } from './../store';
import { getRoot } from './../manageVDOM/root';
import { getNewVDOM } from '../manageVDOM/newVDOM';
import { getVDOM, setVDOM } from './../manageVDOM/VDOM';
import createDOM from './createDOM';
import setAttrs from './setAttrs';
import { isTextVDOM } from '../../../typeGuard';

const isChanged = (
  initVDOM: VDOM | TextVDOM | undefined,
  newVDOM: VDOM | TextVDOM | undefined
) => {
  const isTextInitVDOM = isTextVDOM(initVDOM);
  const isTextNewVDOM = isTextVDOM(newVDOM);

  // 두 타입이 다르거나
  // 두 타입이 TextVDOM일 때 두 값이 다르거나
  // 두 타입이 VDOM일 때 두 VDOM의 el이 다르면 VDOM에 변화가 생긴 것
  return (
    isTextInitVDOM !== isTextNewVDOM ||
    (isTextInitVDOM &&
      isTextNewVDOM &&
      !Object.is(initVDOM.value, newVDOM.value)) ||
    (!isTextInitVDOM && !isTextNewVDOM && !Object.is(initVDOM?.el, newVDOM?.el))
  );
};

const updateElement = (
  $parent: HTMLElement | Text,
  newVDOM: TextVDOM | VDOM | undefined,
  initVDOM?: TextVDOM | VDOM | undefined
) => {
  const $current = initVDOM?.current;
  if (!initVDOM || (isTextVDOM(initVDOM) && !initVDOM.value)) {
    const $next = createDOM(newVDOM);
    if ($next) {
      $parent.appendChild($next);
    }
  } else if (!newVDOM || (isTextVDOM(newVDOM) && !newVDOM.value)) {
    if ($current) {
      $parent.removeChild($current);
    }
  } else if (isChanged(initVDOM, newVDOM)) {
    const $next = createDOM(newVDOM);
    if ($current && $next) {
      $current.replaceWith($next);
      newVDOM.current = $next;
    }
  } else if (!isTextVDOM(initVDOM) && !isTextVDOM(newVDOM)) {
    const length = Math.max(
      initVDOM.children?.length || 0,
      newVDOM.children?.length || 0
    );
    newVDOM.current = $current;

    for (let i = 0; i < length; i++) {
      if ($current) {
        updateElement($current, newVDOM.children?.[i], initVDOM.children?.[i]);
      }
    }
  } else {
    newVDOM.current = $current;
  }

  if (!isTextVDOM(newVDOM) && newVDOM) {
    setAttrs(newVDOM.props, $current);
  }
};

const updateDOM = (
  $parent: HTMLElement = getRoot(),
  newVDOM: VDOM = getNewVDOM(),
  initVDOM: VDOM = getVDOM()
) => {
  resetStateId();
  updateElement($parent, newVDOM, initVDOM);
  setVDOM(newVDOM);

  console.log(JSON.stringify(newVDOM));
};
export default updateDOM;
