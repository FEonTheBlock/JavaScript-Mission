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
