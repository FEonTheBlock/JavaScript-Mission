import {
  handleDigitClick,
  handleOperationClick,
  handleModifierClick,
} from './controller'

const $digits = document.querySelector('.digits')
const $total = document.getElementById('total')
const $modifier = document.querySelector('.modifier')
const $operations = document.querySelector('.operations')

if (!$digits || !$operations || !$modifier || !$total) {
  throw new Error('index.html 파일에 해당하는 태그가 없습니다.')
}

;($digits as HTMLDivElement).onclick = handleDigitClick
;($operations as HTMLDivElement).onclick = handleOperationClick
;($modifier as HTMLButtonElement).onclick = handleModifierClick
