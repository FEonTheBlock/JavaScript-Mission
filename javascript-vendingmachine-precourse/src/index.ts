import { render, useState } from './utils/Soact';
import { useRouter, getPage, makeRedirectPage } from './utils/Router';

export default render(() => {
  const router = useRouter();
  const [data, setData] = useState<Data>({
    products: [{ product: '콜라', price: 1500, quantity: 20 }],
    coins: { 500: 0, 100: 0, 50: 0, 10: 0 },
  });

  const page = getPage(router.pathname);
  const redirectPage = makeRedirectPage('product-purchase-menu');

  if (page) {
    return page({ data, setData });
  } else {
    return redirectPage({ data, setData });
  }
}, document.querySelector('#app'));
