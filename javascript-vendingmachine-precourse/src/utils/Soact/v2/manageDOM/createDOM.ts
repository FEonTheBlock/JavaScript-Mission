import { isTextVDOM } from '../../../typeGuard';
import setAttrs from './setAttrs';

const createDOM = (vDOM?: VDOM | TextVDOM) => {
  if (isTextVDOM(vDOM)) {
    const $textNode = document.createTextNode(vDOM.value);
    const { current } = vDOM;

    if (
      typeof current?.data === 'string' &&
      Object.is(current?.data, $textNode.data)
    ) {
      return current;
    } else {
      vDOM.current = $textNode;
      return $textNode;
    }
  } else if (vDOM) {
    const { el, props, children } = vDOM;
    const $el = document.createElement(el);
    vDOM.current = $el;
    setAttrs(props, $el);
    children?.map(createDOM).forEach(($childEl) => {
      if ($childEl) {
        $el.appendChild($childEl);
      }
    });
    return $el;
  }
};

export default createDOM;
