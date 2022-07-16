import { getPageComponent, useRouter } from './utils/SoactRouter/v1';
import { createElement, render, useState } from './utils/Soact/v2';

export interface Product {
  name: string;
  price: number;
  quantity: number;
}

export interface Coin {
  value: 10 | 50 | 100 | 500;
  quantity: number;
}

export interface DataProps {}

export default render(() => {
  let Page = getPageComponent();

  const router = useRouter();

  if (!Page) {
    router.push('product-add-menu');
    Page = getPageComponent();
  }

  return createElement(Page);
}, document.querySelector('#app'));
