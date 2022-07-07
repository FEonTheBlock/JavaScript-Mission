interface DefaultProps {
  children?: string | null;
  onclick?: (e: Event) => any;
  className?: string;
  classList?: string[];
  [property: string]: any;
}

type PropsWithDefaultProps<T> = DefaultProps & {
  [p in keyof T]: T[p];
};

interface Component {
  <T>(props: T & DefaultProps): string;
}

interface SetState<T> {
  (nextState: T): void;
}

// 여기부터 수정본

interface VDOM {
  el: keyof HTMLElementTagNameMap;
  props: DOMAttribute | InputDOMAttribute | null;
  children: (string | VDOM)[];
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
