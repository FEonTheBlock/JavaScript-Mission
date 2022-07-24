/** @jsx createElement */
import { resetStore } from '../../Soact/v2/store';
import { createElement } from '../../Soact/v2';
import useRouter from './useRouter';

interface LinkProps {
  id?: string;
  href: string;
}

const Link = ({ id, href, children }: PropsWithChildren<LinkProps>) => {
  const router = useRouter();
  const converteHref = href[0] !== '/' ? `/${href}` : href;

  const movePage = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();

    router.push(converteHref);
    resetStore();
  };

  return (
    <a id={id} href={converteHref} onclick={movePage}>
      {children}
    </a>
  );
};

export default Link;
