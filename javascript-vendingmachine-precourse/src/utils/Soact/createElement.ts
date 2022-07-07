import { VDOMS, setVDOM, updateVDOM } from './VirtualDOM';
import { getSoactId, increaseId, SOACT_ID } from './soactId';

const createElement = (
  el: keyof HTMLElementTagNameMap | Component,
  props: DefaultProps | null = null,
  children: string | null = null
) => {
  children = children || props?.children || '';

  const soactId = getSoactId();

  if (typeof el === 'function') {
    const Component = el;
    return Component(props ? { ...props, children } : { children });
  } else {
    if (VDOMS.VDOM1[soactId]) {
      updateVDOM(soactId, el, props, children);
    } else {
      setVDOM(soactId, el, props, children);
    }
    increaseId();
    return `<${el} ${SOACT_ID}="${soactId}">${children}</${el}>`;
  }
};

export default createElement;
