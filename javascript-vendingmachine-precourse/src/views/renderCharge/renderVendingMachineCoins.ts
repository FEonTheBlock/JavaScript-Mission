import { coins } from '../../constants'
import models from '../../models'

const renderVendingMachineCoins = () =>
  coins
    .map((coin) =>
      `<tr>
          <td>${coin}</td>
          <td 
            id="vending-machine-coin-${coin}-quantity"
          >${models.getIndividualChangeCounts(coin)}개</td>
       </tr>`.trim()
    )
    .join('')

export default renderVendingMachineCoins
