import {
  handleDigitClick,
  handleOperationClick,
  handleModifierCLick,
} from './controller'

const $digits = document.querySelector('.digits')
const $total = document.getElementById('total')
const $modifier = document.querySelector('.modifier')
const $operations = document.querySelector('.operations')

;(() => {
  if (!$digits || !$operations || !$modifier || !$total) return
  ;($digits as HTMLDivElement).onclick = handleDigitClick
  ;($operations as HTMLDivElement).onclick = handleOperationClick
  ;($modifier as HTMLButtonElement).onclick = handleModifierCLick
})()
