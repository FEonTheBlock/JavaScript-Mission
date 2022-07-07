import { addHydrate } from './hydrate';
import makeClassName from '../makeClassName';
import { SOACT_ID } from './soactId';
import { sanitize } from 'dompurify';

interface SoactElement {
  id: number;
  current?: HTMLElement;
  el: keyof HTMLElementTagNameMap | Component;
  props: DefaultProps | null;
}

interface VDOM {
  [soactId: number]: SoactElement;
}

export const VDOMS: {
  VDOM1: VDOM;
  VDOM2: VDOM;
} = {
  VDOM1: {},
  VDOM2: {},
};

export const setVDOM = (
  id: number,
  el: keyof HTMLElementTagNameMap | Component,
  props: DefaultProps | null = null,
  children: string | null = null
) => {
  const hydrate = () => {
    const $element = document.querySelector(`${el}[${SOACT_ID}="${id}"]`);

    console.log($element);

    if (!$element) {
      throw new Error(`해당 ${id}의 엘리먼트는 존재하지 않습니다.`);
    }

    VDOMS.VDOM1[id] = {
      id,
      el,
      props: { ...props, children },
      current: $element as HTMLElement,
    };

    for (const prop in props) {
      const tmpProp = prop as keyof HTMLElement;
      if (props && props[tmpProp]) {
        let valueOfProp = props[tmpProp];
        if (tmpProp === 'classList') {
          valueOfProp = $element['className'] = makeClassName(valueOfProp);
        } else {
          ($element as any)[tmpProp] = valueOfProp;
        }
      }
    }

    $element.removeAttribute(SOACT_ID);
  };

  addHydrate(hydrate);
};

export const updateVDOM = (
  id: number,
  el: keyof HTMLElementTagNameMap | Component,
  props: DefaultProps | null = null,
  children: string | null = null
) => {
  const hydrate = () => {
    const $element = VDOMS.VDOM1[id].current;

    if (!$element) {
      throw new Error(`vDOM1에 해당 ${id}의 엘리먼트는 존재하지 않습니다.`);
    }

    VDOMS.VDOM2[id] = {
      id,
      el,
      props: { ...props, children },
      current: $element as HTMLElement,
    };

    const VDOM1Props = VDOMS.VDOM1[id].props!;
    const VDOM2Props = VDOMS.VDOM2[id].props;
    for (const prop of Object.keys(VDOM1Props)) {
      const tmpProp = prop as keyof DefaultProps;
      if (!Object.is(VDOM1Props?.[tmpProp], VDOM2Props?.[tmpProp])) {
        if (tmpProp === 'children') {
          const diff1 = $element.innerHTML.replace(/(<([^>]+)>)/gi, '');
          const diff2 = VDOM2Props?.children?.replace(/(<([^>]+)>)/gi, '');
          if (diff1 !== diff2) {
            $element.innerHTML = VDOM2Props?.children || '';
          }
        }
      }
    }

    for (const prop in props) {
      const tmpProp = prop as keyof HTMLElement;
      if (props && props[tmpProp]) {
        let valueOfProp = props[tmpProp];
        if (tmpProp === 'classList') {
          valueOfProp = $element['className'] = makeClassName(valueOfProp);
        } else {
          ($element as any)[tmpProp] = valueOfProp;
        }
      }
    }
  };

  addHydrate(hydrate);
};

export const resetVDOM = () => {
  VDOMS.VDOM1 = {};
  VDOMS.VDOM2 = {};
};
