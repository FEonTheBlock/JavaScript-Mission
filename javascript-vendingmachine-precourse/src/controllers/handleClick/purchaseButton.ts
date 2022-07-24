import models from '../../models'
import views from '../../views'

const handlePurchaseButtonClick = (productName: string) => {
  const product = models.getProductDetail(productName)
  if (!product) return

  if (product.price > models.getInputAmount()) {
    window.alert('shortage input!')
    return
  }

  models.purchaseProduct(productName)
  views.renderPurchase()
}

export default handlePurchaseButtonClick
