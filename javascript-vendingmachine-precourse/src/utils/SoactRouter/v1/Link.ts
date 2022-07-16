import { resetStore } from './../../Soact/v2/store';
import { createElement } from '../../Soact/v2';
import useRouter from './useRouter';

interface LinkProps {
  id?: string;
  href: string;
}

const Link = ({ id, href, children }: PropsWithChildren<LinkProps>) => {
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
        resetStore();
      },
    },
    ...children
  );
};

export default Link;
