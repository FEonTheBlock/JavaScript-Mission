import '@/styles/index.css';
import StoreClass from '@/store';
import { App } from './App';
import { Store } from './types';
import { INITIAL_VENDOR_STORE } from '@/constants';

const $app = document.getElementById('app');
if (!$app) throw new Error('no root element!');

const storage = window.localStorage;
const localStorageStore = storage.getItem('store');

const initialStore: Store = localStorageStore
  ? JSON.parse(localStorageStore)
  : INITIAL_VENDOR_STORE;

const store = new StoreClass(initialStore);
storage.setItem('store', JSON.stringify(store.store));
$app.append(App(store));

window.addEventListener('storage', (e) => {
  console.log('storage changed');
  console.log(e);
});
