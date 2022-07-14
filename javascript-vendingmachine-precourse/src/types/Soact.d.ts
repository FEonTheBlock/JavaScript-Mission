interface VDOM {
  el: keyof HTMLElementTagNameMap;
  props: DOMAttribute | InputDOMAttribute | null;
  children: Children;
  key?: number;
  current?: HTMLElement;
}

interface DOMAttribute {
  onclick?: ((this: Notification, ev: Event) => any) | null;
  className?: string | string[];
  id?: string;
}

interface InputDOMAttribute extends DOMAttribute {
  oninput?: ((this: Window, ev: Event) => any) | null;
  value?: string;
}

interface AnchorDOMAttribute extends DOMAttribute {
  href: string;
}

type SoactDomAttribute = DOMAttribute | InputDOMAttribute | AnchorDOMAttribute;

type SoactDomAttributeList = [
  string,
  SoactDomAttribute[keyof SoactDomAttribute]
][];

type Children = (string | VDOM | undefined)[];

interface DefaultProps {
  children: Children | [];
}
type PropsWithChildren<T> = {
  [p in keyof T]: T[p];
} & DefaultProps;

interface Dispatcher<T> {
  (nextState: T): void;
}
