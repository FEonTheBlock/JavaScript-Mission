import { getPage } from '.';

const makeRedirectPage = (redirectPathname: string): Component => {
  const redirectPage = getPage(redirectPathname);

  if (redirectPage) {
    return (props) => {
      location.replace(`/${redirectPathname}`);
      return redirectPage(props);
    };
  } else {
    return () => '404 page not found';
  }
};

export default makeRedirectPage;
