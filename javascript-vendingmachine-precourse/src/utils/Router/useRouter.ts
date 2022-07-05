import RootComponent from '../../';

const useRouter = () => {
  const { pathname } = location;

  const push = (pathname: string) => {
    window.history.pushState({}, pathname, `${pathname}`);
    RootComponent();
  };
  window.onpopstate = () => {
    RootComponent();
  };

  return { pathname: pathname.replace(/^\//, ''), push };
};

export default useRouter;
