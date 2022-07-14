import { getPageComponent, useRouter } from './utils/SoactRouter/v1';
import { createElement, render, useState } from './utils/Soact/v2';

export interface Product {
  name: string;
  price: number;
  quantity: number;
}

export interface Coins {
  10: number;
  50: number;
  100: number;
  500: number;
}

export interface DataProps {
  products: Product[];
  setProducts: Dispatcher<Product[]>;
  coins: Coins;
  setCoins: Dispatcher<Coins>;
}

export default render(() => {
  let Page = getPageComponent();

  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [coins, setCoins] = useState<Coins>({
    10: 0,
    50: 0,
    100: 0,
    500: 0,
  });

  if (!Page) {
    router.push('product-add-menu');
    Page = getPageComponent();
  }

  return createElement(Page, { products, setProducts, coins, setCoins });
}, document.querySelector('#app'));
