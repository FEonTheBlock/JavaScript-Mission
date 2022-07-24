import '@/styles/index.css';
import { App } from './App';

const $app = document.getElementById('app');

if ($app) {
  $app.append(App());
}
