import setAttrs from './setAttrs';

const createDOM = (VDOM: VDOM | string = '') => {
  if (typeof VDOM === 'string') {
    return document.createTextNode(VDOM);
  }
  const { el, props, children } = VDOM;
  const $el = document.createElement(el);
  VDOM.current = $el;
  setAttrs(props, $el);
  children?.map(createDOM).forEach($el.appendChild.bind($el));

  return $el;
};

export default createDOM;
