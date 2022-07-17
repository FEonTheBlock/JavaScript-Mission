type Children = (string | VDOM | undefined)[];

interface DefaultProps {
  children?: Children;
}

type PropsWithChildren<T> = {
  [p in keyof T]: T[p];
} & DefaultProps;
