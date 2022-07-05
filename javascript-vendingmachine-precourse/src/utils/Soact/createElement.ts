import { addHydrate } from './hydrate';

const SOACT_ID = 'data-soact-id';
let initId = 0;
const increaseId = () => initId++;

const makeClassName = (classList: (string | undefined)[]) => {
  return classList
    .map((className) => {
      if (className === undefined) {
        throw new Error('해당 클래스는 존재하지 않습니다.');
      }
      return className;
    })
    .join(' ');
};

const createElement = (
  el: keyof HTMLElementTagNameMap | Component,
  props: DefaultProps | null = null,
  children: string | null = null
) => {
  children = children || props?.children || '';

  if (typeof el === 'function') {
    const Component = el;
    return Component(props ? { ...props, children } : { children });
  } else {
    const soactId = increaseId();

    const hydrate = () => {
      const node = document.querySelector(
        `${el}[${SOACT_ID}="${soactId}"]`
      ) as HTMLElement;

      for (const property in node) {
        let tmpProperty = property as keyof HTMLElement;
        if (props && props[tmpProperty]) {
          let attribute = props[tmpProperty];
          if (tmpProperty === 'classList') {
            attribute = node['className'] = makeClassName(attribute);
          } else {
            (node as any)[tmpProperty] = attribute;
          }
        }
      }
      node.removeAttribute(`${SOACT_ID}`);
    };
    addHydrate(hydrate);

    return `<${el} ${SOACT_ID}="${soactId}">${children}</${el}>`;
  }
};

export default createElement;
