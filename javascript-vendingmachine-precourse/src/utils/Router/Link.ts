import { createElement } from '../../utils/Soact';
import { useRouter } from '../../utils/Router';

interface LinkProps {
  href: string;
}

const Link = ({ href, children }: PropsWithDefaultProps<LinkProps>) => {
  const router = useRouter();
  const converteHref = href[0] !== '/' ? `/${href}` : href;

  return createElement(
    'a',
    {
      href: converteHref,
      onclick: (e) => {
        e.stopPropagation();
        e.preventDefault();

        router.push(converteHref);
      },
    },
    children
  );
};

export default Link;
