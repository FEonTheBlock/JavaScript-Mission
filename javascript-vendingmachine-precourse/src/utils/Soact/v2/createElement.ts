const createElement = (
  el: keyof HTMLElementTagNameMap | Component,
  props: SoactProps = null,
  ...children: Children
): VDOM | TextVDOM => {
  const vDOMChildren: VDOMChildren = children.flat().map((child) => {
    switch (typeof child) {
      case 'string':
      case 'number':
      case 'boolean':
      case 'undefined':
        const value =
          typeof child === 'string' || typeof child === 'number'
            ? `${child}`
            : '';
        return { value, current: undefined };
      default:
        return child;
    }
  });

  if (typeof el === 'function') {
    const Component = el;
    return Component({ ...props, children: vDOMChildren });
  } else {
    return { el, props, children: vDOMChildren, current: undefined };
  }
};

export default createElement;
