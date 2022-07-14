import { updateDOM } from '../../Soact/v2/manageDOM';
import { resetStateId } from '../../Soact/v2/store';

const useRouter = () => {
  const { pathname } = location;

  const push = (pathname: string) => {
    window.history.pushState({}, pathname, `${pathname}`);
    resetStateId();
    updateDOM();
  };
  window.onpopstate = () => {
    resetStateId();
    updateDOM();
  };

  return { pathname: pathname.replace(/^\//, ''), push };
};

export default useRouter;
