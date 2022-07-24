import models from '../../models'
import views from '../../views'

const handleCoinReturnButtonClick = () => {
  if (models.getInputAmount() === 0) {
    window.alert('shortage input amount!')
    return
  }

  const returnedCoins = models.getReturnChange(models.getInputAmount())
  views.renderReturnCoins(returnedCoins)
}

export default handleCoinReturnButtonClick
