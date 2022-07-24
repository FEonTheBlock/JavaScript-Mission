import { renderVendingMachine } from './Navigation.js';

const $app = document.querySelector('#app');
const $h1 = document.createElement('h1');

$h1.innerText = 'Vending Machine';
$app.append($h1);

renderVendingMachine();
