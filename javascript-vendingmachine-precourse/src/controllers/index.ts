import views from '../views'
import handleClick from './handleClick/index'

const handleElementClick = (e: MouseEvent) => {
  if (!e.target) return

  const $target = e.target as HTMLElement

  if ($target.id === 'product-add-menu') {
    views.renderProduct()
  }

  if ($target.id === 'vending-machine-manage-menu') {
    views.renderCharge()
  }

  if ($target.id === 'product-purchase-menu') {
    views.renderPurchase()
  }

  if ($target.id === 'product-add-button') {
    handleClick.productAddButton()
  }

  if ($target.id === 'vending-machine-charge-button') {
    handleClick.vendingMachineChargeButton()
  }

  if ($target.id === 'charge-button') {
    handleClick.chargeButton()
  }

  if ($target.matches('.purchase-button')) {
    const productName = $target.dataset.name
    if (!productName) return

    handleClick.purchaseButton(productName)
  }

  if ($target.id === 'coin-return-button') {
    handleClick.coinReturnButton()
  }
}

export default {
  initializeApp() {
    views.renderProduct()
    window.document.addEventListener('click', handleElementClick)
  },
}
