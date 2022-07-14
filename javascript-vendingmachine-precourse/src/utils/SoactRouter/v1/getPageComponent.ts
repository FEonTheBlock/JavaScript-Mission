import * as pages from '../../../pages';
import { convertSnakeToCamel } from '../../lib';
import useRouter from './useRouter';

const Pages: {
  [route: string]: Function;
} = { ...pages };

export const getPageComponent = () => {
  const router = useRouter();

  return Pages[convertSnakeToCamel(router.pathname)];
};

export default getPageComponent;
