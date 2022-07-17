interface Product {
  name: string;
  price: number;
  quantity: number;
}

type Products = Product[];

interface CoinMap {
  500: number;
  100: number;
  50: number;
  10: number;
}
interface Coin {
  value: keyof CoinMap;
  quantity: number;
}

type Coins = Coin[];
