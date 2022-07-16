interface ExtendsProps {
  [prop: string]: unknown;
}

const createElement = (
  el: keyof HTMLElementTagNameMap | Function,
  props: SoactDomAttribute | ExtendsProps | null = null,
  ...children: Children
) => {
  const tmpChildren: Children = [];

  children.forEach((child) => {
    Array.isArray(child)
      ? child.forEach((c) => tmpChildren.push(c))
      : tmpChildren.push(child);
  });

  for (const child of children) {
  }
  if (typeof el === 'function') {
    const Component = el;
    return Component({ ...props, children: tmpChildren });
  } else {
    return { el, props, children: tmpChildren };
  }
};

export default createElement;
