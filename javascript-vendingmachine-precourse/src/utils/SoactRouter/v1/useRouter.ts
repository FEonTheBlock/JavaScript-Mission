import { updateDOM } from '../../Soact/v2/manageDOM';
import { resetStore } from '../../Soact/v2/store';

const useRouter = () => {
  const { pathname } = location;

  const push = (pathname: string) => {
    window.history.pushState({}, pathname, `${pathname}`);
    resetStore();
    updateDOM();
  };
  window.onpopstate = () => {
    resetStore();
    updateDOM();
  };

  return { pathname: pathname.replace(/^\//, ''), push };
};

export default useRouter;
