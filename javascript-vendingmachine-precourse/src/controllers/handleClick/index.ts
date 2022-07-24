import handleChargeButtonClick from './chargeButton'
import handleProductAddButton from './productAddButton'
import handleVendingMachineButtonClick from './vendingMachineChargeButton'
import handlePurchaseButtonClick from './purchaseButton'
import handleCoinReturnButtonClick from './coinReturnButton'

const handleClick = {
  productAddButton: handleProductAddButton,
  vendingMachineChargeButton: handleVendingMachineButtonClick,
  chargeButton: handleChargeButtonClick,
  purchaseButton: handlePurchaseButtonClick,
  coinReturnButton: handleCoinReturnButtonClick,
}

export default handleClick
