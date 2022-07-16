import * as pages from '../../../pages';
import { convertKebabToPascal } from '../../lib';
import useRouter from './useRouter';

const Pages: {
  [route: string]: Function;
} = { ...pages };

export const getPageComponent = () => {
  const router = useRouter();

  return Pages[convertKebabToPascal(router.pathname)];
};

export default getPageComponent;
