import * as pages from '../../pages';

const isPagePathname = (pathname: string): pathname is keyof typeof pages => {
  return typeof pathname === 'string';
};

export default isPagePathname;
