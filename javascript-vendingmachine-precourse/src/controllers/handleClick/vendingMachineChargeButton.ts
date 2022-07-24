import models from '../../models'
import { getFormData } from '../../utils'
import views from '../../views'

const handleVendingMachineButtonClick = () => {
  const formData = getFormData<{ amount: number }>()

  if (formData.amount < 100) {
    window.alert('invalid form input!')
    return
  }

  if (formData.amount - Math.floor(formData.amount / 10) * 10 !== 0) {
    window.alert('invalid form input!')
    return
  }

  models.chargeChange(formData.amount)
  views.renderCharge()
}

export default handleVendingMachineButtonClick
