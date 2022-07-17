interface VDOM {
  el: keyof HTMLElementTagNameMap;
  props: DOMAttribute | InputDOMAttribute | null;
  children?: VDOMChildren;
  current?: HTMLElement | Text;
}
interface TextVDOM {
  value: string;
  current?: Text;
}
type VDOMChildren = (TextVDOM | VDOM | undefined)[];

interface DOMAttribute {
  onclick?: ((this: Notification, ev: Event) => any) | null;
  className?: string | string[];
  id?: string;
}

interface InputDOMAttribute extends DOMAttribute {
  oninput?: ((this: Window, ev: Event) => any) | null;
  value?: string;
  placeholder?: string;
}

interface AnchorDOMAttribute extends DOMAttribute {
  href: string;
}
interface UnknownAttribute {
  [prop: string]: unknown;
}

type SoactProps =
  | DOMAttribute
  | InputDOMAttribute
  | AnchorDOMAttribute
  | UnknownAttribute
  | null;
