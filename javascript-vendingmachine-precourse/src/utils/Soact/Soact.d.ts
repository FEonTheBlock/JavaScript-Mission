interface DefaultProps {
  children?: string;
  onclick?: (e: Event) => any;
  className?: string;
  classList?: string[];
  [property: string]: any;
}

interface Component {
  (props: DefaultProps): string;
}
