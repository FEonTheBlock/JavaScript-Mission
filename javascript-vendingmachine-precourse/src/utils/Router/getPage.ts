import * as pages from '../../pages';

const isPagePathname = (pathname: string): pathname is keyof typeof pages => {
  return typeof pathname === 'string';
};

const converteSnakeToCamel = (string: string) =>
  string.replace(/([-][a-z])/g, (snake) =>
    snake.replace('-', '').toUpperCase()
  );

const getPage = (pathname: string): Component | false => {
  const routes = { ...pages };
  const camelPathname = converteSnakeToCamel(pathname);

  return isPagePathname(camelPathname) && routes[camelPathname];
};

export default getPage;
