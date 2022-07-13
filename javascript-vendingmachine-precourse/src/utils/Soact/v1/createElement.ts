const createElement = (
  el: keyof HTMLElementTagNameMap,
  props: SoactDomAttribute | null = null,
  ...children: Children
) => {
  return { el, props, children };
};

export default createElement;
