import '../css/index.css';
import {
  handleDigitsClick,
  handleOperationsClick,
  handleModifierClick,
} from './main';

const $digits = document.querySelector('.digits');
const $modifier = document.querySelector('.modifier');
const $operations = document.querySelector('.operations');

if (!$digits || !$operations || !$modifier) {
  throw new Error('index.html 파일에 해당하는 태그가 없습니다.');
}

($digits as HTMLDivElement).onclick = handleDigitsClick;

($operations as HTMLDivElement).onclick = handleOperationsClick;

($modifier as HTMLButtonElement).onclick = handleModifierClick;
