const createElement = (
  el: keyof HTMLElementTagNameMap | Function,
  props: SoactDomAttribute | null = null,
  ...children: Children
) => {
  if (typeof el === 'function') {
    const Component = el;
    return Component({ ...props, children });
  } else {
    return { el, props, children };
  }
};

export default createElement;
