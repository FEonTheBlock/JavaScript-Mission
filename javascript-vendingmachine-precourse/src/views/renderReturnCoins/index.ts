import { coins } from '../../constants'
import models from '../../models'
import { Change } from '../../types'

const renderReturnCoins = (returnedCoins: Change) => {
  const $tbody = document.createElement('tbody')

  $tbody.innerHTML = `     
  ${coins
    .map((coin) =>
      `<tr>
        <td>${coin}</td>
        <td id="coin-${coin}-quantity">${returnedCoins[coin]}개</td>
       </tr>`.trim()
    )
    .join('')}`.trim()

  const $table = document.querySelector('.change-table')
  const $chargeAmount = document.getElementById('charge-amount')
  if (!$table || !$chargeAmount) return

  $chargeAmount.textContent = String(models.getInputAmount())
  $table.append($tbody)
}

export default renderReturnCoins
