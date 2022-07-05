import { render } from './utils/Soact';
import { useRouter, getPage, makeRedirectPage } from './utils/Router';

export default render(() => {
  const router = useRouter();
  const page = getPage(router.pathname);
  const redirectPage = makeRedirectPage('product-purchase-menu');

  if (page) {
    return page({});
  } else {
    return redirectPage({});
  }
}, document.querySelector('#app'));
