/** @jsx createElement */
import { createElement, render } from './utils/Soact/v2';
import { getPageComponent, useRouter } from './utils/SoactRouter/v1';

export interface Product {
  name: string;
  price: number;
  quantity: number;
}

export interface Coin {
  value: 10 | 50 | 100 | 500;
  quantity: number;
}

export default render(() => {
  let Page = getPageComponent();

  const router = useRouter();

  if (!Page) {
    router.push('product-add-menu');
    Page = getPageComponent();
  }

  return <Page />;
}, document.querySelector('#app'));
