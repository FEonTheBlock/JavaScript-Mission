import * as pages from '../../../pages';
import { convertKebabToPascal } from '../../lib';
import useRouter from './useRouter';

interface Routes {
  [route: string]: Component;
}

const routes: Routes = { ...pages };

export const getPageComponent = () => {
  const router = useRouter();
  const pathName = convertKebabToPascal(router.pathname);

  return routes[pathName];
};

export default getPageComponent;
