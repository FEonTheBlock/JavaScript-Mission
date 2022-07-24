import models from '../../models'
import { getFormData } from '../../utils'
import views from '../../views'

const handleChargeButtonClick = () => {
  const formData = getFormData<{ inputAmount: number }>()

  models.addInputAmount(formData.inputAmount)
  views.renderPurchase()
}

export default handleChargeButtonClick
