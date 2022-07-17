/** @jsx createElement */
import { createElement, render } from './utils/Soact/v2';
import { getPageComponent, useRouter } from './utils/SoactRouter/v1';

export default render(() => {
  let Page = getPageComponent();

  const router = useRouter();

  if (!Page) {
    router.push('product-add-menu');
    Page = getPageComponent();
  }

  return <Page />;
}, document.querySelector('#app'));
