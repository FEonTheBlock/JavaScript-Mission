const createElement = (
  el: keyof HTMLElementTagNameMap,
  props: SoactDomAttribute | null = null,
  ...children: (string | VDOM)[]
) => {
  return { el, props, children };
};

export default createElement;
