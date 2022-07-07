import { createElement } from '../../utils/Soact';
import { useRouter } from '../../utils/Router';

interface LinkProps {
  id?: string;
  href: string;
}

const Link = ({ id, href, children }: PropsWithDefaultProps<LinkProps>) => {
  const router = useRouter();
  const converteHref = href[0] !== '/' ? `/${href}` : href;

  return createElement(
    'a',
    {
      id: id,
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
