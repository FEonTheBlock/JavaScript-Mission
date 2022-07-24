import { coins } from '../constants'
import { Product, Store } from '../types'
import { distributeChargingChange, distributeReturnChange } from '../utils'

const store: Store = {
  products: {},
  change: { 10: 0, 50: 0, 100: 0, 500: 0 },
  inputAmount: 0,
}

export default {
  getProductNames() {
    return Object.keys(store.products)
  },

  getProductDetail(name: string): Product {
    return { ...store.products[name] }
  },

  getAllChangeCounts(): Store['change'] {
    return { ...store.change }
  },

  getIndividualChangeCounts(coin: keyof Store['change']) {
    return store.change[coin]
  },

  getTotalChange() {
    return coins.reduce((acc, coin) => acc + coin * store.change[coin], 0)
  },

  getInputAmount() {
    return store.inputAmount
  },

  getReturnChange(amount: number) {
    const change = distributeReturnChange({ ...store.change }, amount)

    coins.forEach((coin) => {
      store.change[coin] -= change[coin]
    })

    store.inputAmount = 0

    return change
  },

  addProduct(newProduct: Product) {
    const { name, price, quantity } = newProduct

    const product = store.products?.[name]

    store.products[name] = {
      name,
      price,
      quantity: product ? product.quantity + quantity : quantity,
    }
  },

  chargeChange(amount: number) {
    const change = distributeChargingChange(amount)

    coins.forEach((coin) => {
      store.change[coin] += change[coin]
    })
  },

  addInputAmount(amount: number) {
    store.inputAmount += amount
  },

  purchaseProduct(productName: string) {
    const product = store.products[productName]

    store.inputAmount -= product.price
    product.quantity -= 1
  },
}
