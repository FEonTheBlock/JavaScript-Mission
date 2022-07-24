import models from '../../models'
import { Product } from '../../types'
import { getFormData } from '../../utils'
import views from '../../views'

const handleProductAddButton = () => {
  const formData = getFormData<Product>()

  const { name } = formData

  if (!name.trim()) {
    window.alert('invalid form input!')
    return
  }

  models.addProduct(formData)
  views.renderProduct()
}

export default handleProductAddButton
